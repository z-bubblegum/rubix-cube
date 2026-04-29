#!/usr/bin/env python3
"""Update oll-data.js with correct diagram data computed from algorithms."""
import pycuber as pc
import json
import re

def get_color(square):
    s = str(square).strip('[]')
    color_chars = {'y': 'yellow', 'w': 'white', 'g': 'green', 'b': 'blue', 'r': 'red', 'o': 'orange'}
    return color_chars.get(s, s)

def is_yellow(face, row, col):
    return 1 if get_color(face[row][col]) == 'yellow' else 0

def get_oll_diagram(cube):
    u = cube.get_face('U')
    f = cube.get_face('F')
    b = cube.get_face('B')
    l = cube.get_face('L')
    r = cube.get_face('R')
    top_face = [[1 if get_color(u[row][col]) == 'yellow' else 0 for col in range(3)] for row in range(3)]
    top_edge = [is_yellow(b,0,2), is_yellow(b,0,1), is_yellow(b,0,0)]
    bottom_edge = [is_yellow(f,0,0), is_yellow(f,0,1), is_yellow(f,0,2)]
    left_edge = [is_yellow(l,0,0), is_yellow(l,0,1), is_yellow(l,0,2)]
    right_edge = [is_yellow(r,0,2), is_yellow(r,0,1), is_yellow(r,0,0)]
    return {"top_face": top_face, "top_edge": top_edge, "right_edge": right_edge, "bottom_edge": bottom_edge, "left_edge": left_edge}

# Algorithm overrides for broken cases
ALG_OVERRIDES = {
    "OLL 36": "L' U' L U' L' U L U L F' L' F",
    "OLL 47": "F' L' U' L U L' U' L U F",
}

# Compute correct setup algorithms for overrides
SETUP_OVERRIDES = {}
for name, alg in ALG_OVERRIDES.items():
    f = pc.Formula(alg)
    SETUP_OVERRIDES[name] = str(f.reverse())

# Read existing file
with open("oll-data.js", "r") as fh:
    content = fh.read()

# Extract all algorithm strings from the file to compute diagrams
# Pattern: name: "OLL X", algorithm: "..."
case_pattern = re.compile(r'name:\s*"(OLL \d+)",\s*algorithm:\s*"([^"]*)"')
cases = case_pattern.findall(content)

print(f"Found {len(cases)} cases in oll-data.js")

# Compute diagrams for all cases
diagrams = {}
for name, alg in cases:
    # Use override algorithm if available
    actual_alg = ALG_OVERRIDES.get(name, alg)
    cube = pc.Cube()
    try:
        formula = pc.Formula(actual_alg)
        inv = formula.reverse()
        cube(inv)
        d = get_oll_diagram(cube)
        # Validate
        top = d["top_face"]
        if top[1][1] != 1:
            print(f"  WARNING: {name} center not yellow!")
            continue
        diagrams[name] = d
    except Exception as e:
        print(f"  ERROR: {name}: {e}")

print(f"Computed {len(diagrams)} valid diagrams")

# Now replace diagrams in the file content
# Each diagram looks like: diagram: { top_face: [[...]], top_edge: [...], ... }
# We need to replace just the diagram object

def format_diagram(d):
    """Format diagram as JS object literal."""
    tf = json.dumps(d["top_face"])
    te = json.dumps(d["top_edge"])
    re_ = json.dumps(d["right_edge"])
    be = json.dumps(d["bottom_edge"])
    le = json.dumps(d["left_edge"])
    return f"{{ top_face: {tf}, top_edge: {te}, right_edge: {re_}, bottom_edge: {be}, left_edge: {le} }}"

# Replace diagrams case by case
for name, d in diagrams.items():
    # Find the case block and replace its diagram
    # The diagram line follows the case name
    diag_str = format_diagram(d)

    # Pattern to find diagram in context of this case name
    # Look for: name: "OLL X", ... diagram: { ... },
    # We need to be careful to match the right diagram for each case
    # Strategy: find `name: "OLL X"` then find the next `diagram:` and replace its value

    # Find position of this case name
    name_pattern = f'name: "{name}"'
    name_pos = content.find(name_pattern)
    if name_pos == -1:
        print(f"  Could not find {name} in file!")
        continue

    # Find the diagram: { ... } after this position
    diagram_start = content.find("diagram:", name_pos)
    if diagram_start == -1:
        print(f"  Could not find diagram for {name}!")
        continue

    # Find the opening brace
    brace_start = content.find("{", diagram_start)
    if brace_start == -1:
        continue

    # Find the matching closing brace (handle nested arrays)
    depth = 0
    brace_end = brace_start
    for i in range(brace_start, len(content)):
        if content[i] == '{':
            depth += 1
        elif content[i] == '}':
            depth -= 1
            if depth == 0:
                brace_end = i
                break

    # Replace the diagram object
    old_diagram = content[brace_start:brace_end+1]
    content = content[:brace_start] + diag_str + content[brace_end+1:]

# Also fix algorithm and setup_algorithm for overridden cases
for name, alg in ALG_OVERRIDES.items():
    setup = SETUP_OVERRIDES[name]

    # Find the case
    name_pattern = f'name: "{name}"'
    name_pos = content.find(name_pattern)
    if name_pos == -1:
        continue

    # Find and replace algorithm
    alg_start = content.find('algorithm:', name_pos)
    if alg_start != -1:
        # Find the quoted string
        quote_start = content.find('"', alg_start)
        quote_end = content.find('"', quote_start + 1)
        old_alg = content[quote_start+1:quote_end]
        content = content[:quote_start+1] + alg + content[quote_end:]

    # Recalculate positions after modification
    name_pos = content.find(name_pattern)

    # Find and replace setup_algorithm
    setup_start = content.find('setup_algorithm:', name_pos)
    if setup_start != -1:
        quote_start = content.find('"', setup_start)
        quote_end = content.find('"', quote_start + 1)
        old_setup = content[quote_start+1:quote_end]
        content = content[:quote_start+1] + setup + content[quote_end:]

# Write updated file
with open("oll-data.js", "w") as fh:
    fh.write(content)

print("\noll-data.js updated successfully!")

# Verify by re-reading
with open("oll-data.js", "r") as fh:
    new_content = fh.read()

# Count diagram replacements
old_count = new_content.count("diagram:")
print(f"File contains {old_count} diagram entries")

# Check OLL 36 and 47 algorithms
for name in ALG_OVERRIDES:
    pattern = f'name: "{name}"'
    pos = new_content.find(pattern)
    alg_pos = new_content.find('algorithm:', pos)
    q1 = new_content.find('"', alg_pos)
    q2 = new_content.find('"', q1+1)
    print(f"  {name} algorithm: {new_content[q1+1:q2]}")
