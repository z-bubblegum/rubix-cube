#!/usr/bin/env python3
"""Fix OLL 36 and OLL 47 with correct standard algorithms."""
import pycuber as pc
import json

def get_color(square):
    s = str(square).strip('[]')
    color_chars = {'y': 'yellow', 'w': 'white', 'g': 'green', 'b': 'blue', 'r': 'red', 'o': 'orange'}
    return color_chars.get(s, s)

def is_yellow(face, row, col):
    return 1 if get_color(face[row][col]) == 'yellow' else 0

def get_oll_diagram(cube):
    u_face = cube.get_face('U')
    f_face = cube.get_face('F')
    b_face = cube.get_face('B')
    l_face = cube.get_face('L')
    r_face = cube.get_face('R')

    top_face = [[1 if get_color(u_face[r][c]) == 'yellow' else 0 for c in range(3)] for r in range(3)]

    top_edge = [is_yellow(b_face, 0, 2), is_yellow(b_face, 0, 1), is_yellow(b_face, 0, 0)]
    bottom_edge = [is_yellow(f_face, 0, 0), is_yellow(f_face, 0, 1), is_yellow(f_face, 0, 2)]
    left_edge = [is_yellow(l_face, 0, 0), is_yellow(l_face, 0, 1), is_yellow(l_face, 0, 2)]
    right_edge = [is_yellow(r_face, 0, 2), is_yellow(r_face, 0, 1), is_yellow(r_face, 0, 0)]

    return {"top_face": top_face, "top_edge": top_edge, "right_edge": right_edge, "bottom_edge": bottom_edge, "left_edge": left_edge}

def validate(name, d):
    top, te, re_, be, le = d["top_face"], d["top_edge"], d["right_edge"], d["bottom_edge"], d["left_edge"]
    errors = []
    if top[1][1] != 1: errors.append(f"Center not yellow")
    for u,s,desc in [(top[0][1],te[1],"back"),(top[1][0],le[1],"left"),(top[1][2],re_[1],"right"),(top[2][1],be[1],"front")]:
        if u+s != 1: errors.append(f"{desc} edge: {u}+{s}")
    for vals,desc in [([top[0][0],te[0],le[0]],"BLU"),([top[0][2],te[2],re_[0]],"BRU"),([top[2][0],be[0],le[2]],"FLU"),([top[2][2],be[2],re_[2]],"FRU")]:
        if sum(vals)!=1: errors.append(f"{desc}: sum={sum(vals)}")
    return errors

# Try multiple known algorithms for OLL 36 and OLL 47
cases = {
    "OLL 36": [
        "L' U' L U' L' U L U L F' L' F",  # standard
        "R' U' R U' R' U R U R F' R' F",  # mirror of standard
    ],
    "OLL 47": [
        "F' L' U' L U L' U' L U F",  # standard (with the missing U)
        "R' U' R' F R F' U R",  # alternate
    ],
}

for name, algs in cases.items():
    print(f"\n{name}:")
    for alg in algs:
        cube = pc.Cube()
        try:
            formula = pc.Formula(alg)
            inv = formula.reverse()
            cube(inv)
            d = get_oll_diagram(cube)
            errs = validate(name, d)
            if errs:
                print(f"  FAIL ({alg}): {errs}")
            else:
                print(f"  OK ({alg}):")
                print(f"    diagram: {json.dumps(d)}")
                # Also compute the setup (inverse)
                print(f"    setup_alg: \"{str(inv)}\"")

                # Verify: inverse + alg = solved
                verify = pc.Cube()
                verify(inv)
                verify(formula)
                u = verify.get_face('U')
                all_yellow = all(get_color(u[r][c]) == 'yellow' for r in range(3) for c in range(3))
                print(f"    verify (setup+alg=solved U): {all_yellow}")
        except Exception as e:
            print(f"  ERROR ({alg}): {e}")
