#!/usr/bin/env python3
"""Compute correct 2D top-down diagram data for all 57 OLL cases using pycuber."""
import pycuber as pc
import json

def get_color(square):
    s = str(square).strip('[]')
    color_chars = {'y': 'yellow', 'w': 'white', 'g': 'green', 'b': 'blue', 'r': 'red', 'o': 'orange'}
    return color_chars.get(s, s)

def get_oll_diagram(cube):
    u_face = cube.get_face('U')
    f_face = cube.get_face('F')
    b_face = cube.get_face('B')
    l_face = cube.get_face('L')
    r_face = cube.get_face('R')

    top_face = []
    for row in range(3):
        top_row = []
        for col in range(3):
            color = get_color(u_face[row][col])
            top_row.append(1 if color == 'yellow' else 0)
        top_face.append(top_row)

    def is_yellow(face, row, col):
        return 1 if get_color(face[row][col]) == 'yellow' else 0

    # Back face top row → top_edge (reversed for top-down view)
    top_edge = [
        is_yellow(b_face, 0, 2),  # BLU corner
        is_yellow(b_face, 0, 1),  # BU edge
        is_yellow(b_face, 0, 0),  # BRU corner
    ]

    # Front face top row → bottom_edge
    bottom_edge = [
        is_yellow(f_face, 0, 0),  # FLU corner
        is_yellow(f_face, 0, 1),  # FU edge
        is_yellow(f_face, 0, 2),  # FRU corner
    ]

    # Left face top row → left_edge (back to front from top view)
    left_edge = [
        is_yellow(l_face, 0, 0),  # BLU corner
        is_yellow(l_face, 0, 1),  # LU edge
        is_yellow(l_face, 0, 2),  # FLU corner
    ]

    # Right face top row → right_edge (back to front from top view)
    right_edge = [
        is_yellow(r_face, 0, 2),  # BRU corner
        is_yellow(r_face, 0, 1),  # RU edge
        is_yellow(r_face, 0, 0),  # FRU corner
    ]

    return {
        "top_face": top_face,
        "top_edge": top_edge,
        "right_edge": right_edge,
        "bottom_edge": bottom_edge,
        "left_edge": left_edge,
    }

def validate_oll_diagram(name, diagram):
    errors = []
    top = diagram["top_face"]
    te = diagram["top_edge"]
    re_ = diagram["right_edge"]
    be = diagram["bottom_edge"]
    le = diagram["left_edge"]

    if top[1][1] != 1:
        errors.append(f"{name}: Center is not yellow!")

    edges = [
        (top[0][1], te[1], "back edge"),
        (top[1][0], le[1], "left edge"),
        (top[1][2], re_[1], "right edge"),
        (top[2][1], be[1], "front edge"),
    ]
    for u_val, side_val, desc in edges:
        if u_val == 1 and side_val == 1:
            errors.append(f"{name}: {desc} has yellow on both top AND side")
        if u_val == 0 and side_val == 0:
            errors.append(f"{name}: {desc} has yellow on neither top nor side")

    corners = [
        ([top[0][0], te[0], le[0]], "BLU corner"),
        ([top[0][2], te[2], re_[0]], "BRU corner"),
        ([top[2][0], be[0], le[2]], "FLU corner"),
        ([top[2][2], be[2], re_[2]], "FRU corner"),
    ]
    for vals, desc in corners:
        yellow_count = sum(vals)
        if yellow_count != 1:
            errors.append(f"{name}: {desc} has {yellow_count} yellow stickers (should be 1)")

    return errors


OLL_CASES = [
    ("OLL 1", "R U2' R2' F R F' U2' R' F R F'"),
    ("OLL 2", "f U R U' R' S' U R U' R' F'"),
    ("OLL 3", "R' F R F' U' S R' U' R U R S'"),
    ("OLL 4", "f U R U' R' S' R' F' R U R U' R'"),
    ("OLL 5", "R' F2 r U r' F R"),
    ("OLL 6", "r U2' R' U' R U' r'"),
    ("OLL 7", "r U R' U R U2' r'"),
    ("OLL 8", "R' F' r U' r' F2 R"),
    ("OLL 9", "R U2' R' U' S' R U' R' S"),
    ("OLL 10", "F U F' R' F R U' R' F' R"),
    ("OLL 11", "S R U R' U R U2' R' U2 S'"),
    ("OLL 12", "S' L' U' L U' L' U2 L U2 S"),
    ("OLL 13", "F U R U2' R' U' R U R' F'"),
    ("OLL 14", "R' F R U R' F' R F U' F'"),
    ("OLL 15", "R' F' R r' F' r U R' F R"),
    ("OLL 16", "r U M U R' U' r U' r'"),
    ("OLL 17", "F R' F' R U S' R U' R' S"),
    ("OLL 18", "F S' R U' R' S R U2' R' U' F'"),
    ("OLL 19", "S' R U R' S U' R' F R F'"),
    ("OLL 20", "S R' U' R U R U R U' R' S'"),
    ("OLL 21", "R U R' U R U' R' U R U2' R'"),
    ("OLL 22", "R U2' R2' U' R2 U' R2' U2' R"),
    ("OLL 23", "R2 D R' U2 R D' R' U2 R'"),
    ("OLL 24", "R' F' r U R U' r' F"),
    ("OLL 25", "F R' F' r U R U' r'"),
    ("OLL 26", "R U2' R' U' R U' R'"),
    ("OLL 27", "R U R' U R U2' R'"),
    ("OLL 28", "R' F R S R' F' R S'"),
    ("OLL 29", "S' R U R' U' R' F R F' U S"),
    ("OLL 30", "S' R' U' R f R' U R U' F'"),
    ("OLL 31", "R' U' F U R U' R' F' R"),
    ("OLL 32", "S R U R' U' R' F R f'"),
    ("OLL 33", "R U R' U' R' F R F'"),
    ("OLL 34", "f R f' U' r' U' R U M'"),
    ("OLL 35", "R U2' R2' F R F' R U2' R'"),
    ("OLL 36", "r' F' r U' r' F r U R U' r' F"),
    ("OLL 37", "F R' F' R U R U' R'"),
    ("OLL 38", "R U R' U R U' R' U' R' F R F'"),
    ("OLL 39", "f' r U r' U' r' F r S"),
    ("OLL 40", "R' F R U R' U' F' U R"),
    ("OLL 41", "R U R' U R U2' R' F R U R' U' F'"),
    ("OLL 42", "F S' R U R' U' F' U S"),
    ("OLL 43", "R' U' F' U F R"),
    ("OLL 44", "F U R U' R' F'"),
    ("OLL 45", "F R U R' U' F'"),
    ("OLL 46", "R' U' R' F R F' U R"),
    ("OLL 47", "F' L' U' L U L' U' L F"),
    ("OLL 48", "F R U R' U' R U R' U' F'"),
    ("OLL 49", "R B' R2' F R2 B R2' F' R"),
    ("OLL 50", "R' F R2 B' R2' F' R2 B R'"),
    ("OLL 51", "f R U R' U' R U R' U' f'"),
    ("OLL 52", "R' F' U' F U' R U R' U R"),
    ("OLL 53", "r' U2' R U R' U' R U R' U r"),
    ("OLL 54", "r U2' R' U' R U R' U' R U' r'"),
    ("OLL 55", "R U2' R2' U' R U' R' U2' F R F'"),
    ("OLL 56", "r' U' r U' R' U R U' R' U R r' U r"),
    ("OLL 57", "R U R' U' M' U R U' r'"),
]


print("Computing OLL diagram data using algorithm inverse...\n")

all_diagrams = {}
all_errors = []

for name, alg in OLL_CASES:
    cube = pc.Cube()
    try:
        # Apply the INVERSE of the algorithm to get the OLL state
        formula = pc.Formula(alg)
        inv_formula = formula.reverse()
        cube(inv_formula)
    except Exception as e:
        all_errors.append(f"{name}: Error: {e}")
        continue

    diagram = get_oll_diagram(cube)
    errors = validate_oll_diagram(name, diagram)
    if errors:
        all_errors.extend(errors)

    all_diagrams[name] = diagram

print()
if all_errors:
    print(f"ERRORS ({len(all_errors)}):")
    for e in all_errors:
        print(f"  {e}")
else:
    print(f"All {len(all_diagrams)} cases validated - no errors!")

# Output as JS-ready format
print("\n\n// ── Diagram data for oll-data.js ──")
for name, d in all_diagrams.items():
    print(f'  // {name}')
    print(f'  {{ top_face: {json.dumps(d["top_face"])}, top_edge: {json.dumps(d["top_edge"])}, right_edge: {json.dumps(d["right_edge"])}, bottom_edge: {json.dumps(d["bottom_edge"])}, left_edge: {json.dumps(d["left_edge"])} }},')
