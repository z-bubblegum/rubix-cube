#!/usr/bin/env python3
"""Compute correct 2D top-down diagram data for all 21 PLL cases using pycuber."""
import pycuber as pc
import json

# Color to face-name mapping for the diagram
COLOR_MAP = {
    'green': 'Front',
    'blue': 'Back',
    'orange': 'Left',
    'red': 'Right',
    'yellow': 'Yellow',
    'white': 'White',
}

def get_color(square):
    """Extract color name from a pycuber Square object"""
    s = str(square).strip('[]')
    color_chars = {'y': 'yellow', 'w': 'white', 'g': 'green', 'b': 'blue', 'r': 'red', 'o': 'orange'}
    return color_chars.get(s, s)

def get_diagram(cube):
    """
    Extract the top-down diagram data from a cube state.

    The diagram shows the top row of each side face (the stickers visible
    when looking down at the U layer).

    Each side has 3 stickers: [corner, edge, corner]

    Standard orientation (no x2):
    - top_edge: Back face top row [B[0,0], B[0,1], B[0,2]] (left to right from behind)
    - right_edge: Right face top row [R[0,0], R[0,1], R[0,2]] (left to right from right side)
    - bottom_edge: Front face top row [F[0,0], F[0,1], F[0,2]] (left to right from front)
    - left_edge: Left face top row [L[0,0], L[0,1], L[0,2]] (left to right from left side)

    But from the top-down view perspective:
    - Back face top row: viewed from top, appears as the far edge
    - Front face top row: viewed from top, appears as the near edge
    - Left face top row goes from back to front (top to bottom in diagram)
    - Right face top row goes from back to front (top to bottom in diagram)
    """
    f_face = cube.get_face('F')
    b_face = cube.get_face('B')
    l_face = cube.get_face('L')
    r_face = cube.get_face('R')

    # Top row of each face (row 0)
    f_top = [get_color(f_face[0][i]) for i in range(3)]
    b_top = [get_color(b_face[0][i]) for i in range(3)]
    l_top = [get_color(l_face[0][i]) for i in range(3)]
    r_top = [get_color(r_face[0][i]) for i in range(3)]

    # Map colors to face names
    f_names = [COLOR_MAP[c] for c in f_top]
    b_names = [COLOR_MAP[c] for c in b_top]
    l_names = [COLOR_MAP[c] for c in l_top]
    r_names = [COLOR_MAP[c] for c in r_top]

    # Standard diagram data (no x2 transformation):
    # top_edge = back face top row
    # bottom_edge = front face top row
    # left_edge = left face top row
    # right_edge = right face top row
    return {
        "top_edge": b_names,
        "right_edge": r_names,
        "bottom_edge": f_names,
        "left_edge": l_names,
    }

# All 21 PLL cases
PLL_CASES = [
    ("Ua Perm", "R U R' U R' U' R2 U' R' U R' U R", "R' U' R U' R U R2 U R U' R U' R'"),
    ("Ub Perm", "R' U R' U' R' U' R' U R U R2", "R2 U' R' U' R U R U R U' R"),
    ("H Perm", "M2 U' M2 U2 M2 U' M2", "M2 U M2 U2 M2 U M2"),
    ("Z Perm", "M' U' M2 U' M2 U' M' U2 M2", "M2 U2 M U M2 U M2 U M"),
    ("Aa Perm", "x R' U R' D2 R U' R' D2 R2 x'", "x R2 D2 R U R' D2 R U' R x'"),
    ("Ab Perm", "x R2 D2 R U R' D2 R U' R x'", "x R' U R' D2 R U' R' D2 R2 x'"),
    ("E Perm", "x' R U' R' D R U R' D' R U R' D R U' R' D' x", "x' D R U R' D' R U' R' D R U' R' D' R U R' x"),
    ("T Perm", "R U R' U' R' F R2 U' R' U' R U R' F'", "F R U' R' U R U R2 F' R U R U' R'"),
    ("F Perm", "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R", "R' U' R U' R' U R U R2 F' R U R U' R' F U R"),
    ("Jb Perm", "R U R' F' R U R' U' R' F R2 U' R'", "R U R2 F' R U R U' R' F R U' R'"),
    ("Ja Perm", "x R2 F R F' R U2 r' U r U2 x'", "x U2 r' U' r U2 R' F R' F' R2 x'"),
    ("Ra Perm", "R U' R' U' R U R D R' U' R D' R' U2 R'", "R U2 R D R' U R D' R' U' R' U R U R'"),
    ("Rb Perm", "R' U2 R U2 R' F R U R' U' R' F' R2", "R2 F R U R U' R' F' R U2 R' U2 R"),
    ("Y Perm", "F R U' R' U' R U R' F' R U R' U' R' F R F'", "F R' F' R U R U' R' F R U' R' U R U R' F'"),
    ("Na Perm", "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'", "R U R' U2 R U R2 F' R U R U' R' F R U' R' U' R U' R'"),
    ("Nb Perm", "R' U R U' R' F' U' F R U R' F R' F' R U' R", "R' U R' F R F' R U' R' F' U F R U R' U' R"),
    ("V Perm", "R' U R' U' R D' R' D R' U D' R2 U' R2 D R2", "R2 D' R2 U R2 D U' R D' R D R' U R U' R"),
    ("Ga Perm", "R2 U R' U R' U' R U' R2 D U' R' U R D'", "D R' U' R U D' R2 U R' U R U' R U' R2"),
    ("Gb Perm", "D R' U' R U D' R2 U R' U R U' R U' R2", "R2 U R' U R' U' R U' R2 D U' R' U R D'"),
    ("Gc Perm", "D R2 U' R U' R U R' U R2 D' U R U' R'", "R U R' U' D R2 U' R U' R' U R' U R2 D'"),
    ("Gd Perm", "R U R' U' D R2 U' R U' R' U R' U R2 D'", "D R2 U' R U' R U R' U R2 D' U R U' R'"),
]

print("Computing diagram data for all 21 PLL cases...\n")

all_diagrams = {}
errors = []

for name, alg, setup in PLL_CASES:
    # Apply setup (inverse) to solved cube
    cube = pc.Cube()
    try:
        formula = pc.Formula(setup)
        cube(formula)
    except Exception as e:
        errors.append(f"{name}: Error applying setup: {e}")
        continue

    # Verify U face is all yellow (valid PLL state)
    u_face = cube.get_face('U')
    u_colors = [get_color(u_face[r][c]) for r in range(3) for c in range(3)]
    if not all(c == 'yellow' for c in u_colors):
        errors.append(f"{name}: U face not all yellow! {u_colors}")
        # Still compute diagram for debugging

    # Verify: setup + algorithm = solved
    verify = pc.Cube()
    verify(pc.Formula(setup))
    verify(pc.Formula(alg))
    v_solved = all(
        get_color(verify.get_face(f)[r][c]) == {'U':'yellow','D':'white','F':'green','B':'blue','L':'orange','R':'red'}[f]
        for f in 'UDFLRB' for r in range(3) for c in range(3)
    )
    if not v_solved:
        errors.append(f"{name}: Algorithm doesn't solve setup!")

    # Get diagram data
    diagram = get_diagram(cube)
    all_diagrams[name] = diagram

    # Check for Yellow/White in diagram (shouldn't be there for valid PLL)
    for edge_name, values in diagram.items():
        for v in values:
            if v in ('Yellow', 'White'):
                errors.append(f"{name}: Found {v} in {edge_name}: {values}")
                break

    print(f'  "{name}": {json.dumps(diagram)}')

print()
if errors:
    print(f"ERRORS ({len(errors)}):")
    for e in errors:
        print(f"  {e}")
else:
    print(f"All {len(all_diagrams)} cases verified - no errors!")

# Output the data ready for copy-paste into data.js
print("\n\n// ── Copy-paste ready data for data.js ──")
for name, diagram in all_diagrams.items():
    print(f'// {name}')
    print(f'"diagram": {json.dumps(diagram)},')
