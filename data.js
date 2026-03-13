// PLL Data - All 21 Permutation of the Last Layer cases
// Using var to ensure global scope accessibility from ES modules
var PLL_DATA = [
  {
    "category": "Edges Only",
    "cases": [
      {
        "name": "Ua Perm",
        "algorithm": "M2' U M U2' M' U M2'",
        "setup_algorithm": "M2' U' M U2' M' U' M2'",
        "diagram": { "top_edge": ["Front", "Left", "Front"], "right_edge": ["Right", "Front", "Right"], "bottom_edge": ["Back", "Back", "Back"], "left_edge": ["Left", "Right", "Left"] },
        "recognition": {
          "pattern": "Solved 1x3 bar in the back. The edge on the right is NOT opposite to its corners. The edge on the left IS opposite to its corners.",
          "holding_orientation": "Hold with the solved 1x3 bar in the back."
        },
        "moves_breakdown": [
          { "move": "M2'", "finger_trick": "Double flick downwards from the back using left ring finger then middle finger" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "M", "finger_trick": "Single pull downwards from the back using left or right ring finger" },
          { "move": "U2'", "finger_trick": "Double flick using left index finger then middle finger" },
          { "move": "M'", "finger_trick": "Single push upwards from the bottom using right middle finger" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "M2'", "finger_trick": "Double flick downwards from the back using left ring finger then middle finger" }
        ]
      },
      {
        "name": "Ub Perm",
        "algorithm": "M2' U' M U2' M' U' M2'",
        "setup_algorithm": "M2' U M U2' M' U M2'",
        "diagram": { "top_edge": ["Back", "Left", "Back"], "right_edge": ["Left", "Right", "Left"], "bottom_edge": ["Front", "Front", "Front"], "left_edge": ["Right", "Back", "Right"] },
        "recognition": {
          "pattern": "Solved 1x3 bar in the back. The edge on the right IS opposite to its corners. The edge on the left is NOT opposite.",
          "holding_orientation": "Hold with the solved 1x3 bar in the back."
        },
        "moves_breakdown": [
          { "move": "M2'", "finger_trick": "Double flick downwards from the back using left ring finger then middle finger" },
          { "move": "U'", "finger_trick": "Left index finger single flick" },
          { "move": "M", "finger_trick": "Single pull downwards from the back using right ring finger" },
          { "move": "U2'", "finger_trick": "Double flick using right index finger then middle finger" },
          { "move": "M'", "finger_trick": "Single push upwards from the bottom using right middle finger" },
          { "move": "U'", "finger_trick": "Left index finger single flick" },
          { "move": "M2'", "finger_trick": "Double flick downwards from the back using left ring finger then middle finger" }
        ]
      },
      {
        "name": "H Perm",
        "algorithm": "M2' U' M2' U2' M2' U' M2'",
        "setup_algorithm": "M2' U M2' U2' M2' U M2'",
        "diagram": { "top_edge": ["Back", "Front", "Back"], "right_edge": ["Left", "Right", "Left"], "bottom_edge": ["Front", "Back", "Front"], "left_edge": ["Right", "Left", "Right"] },
        "recognition": {
          "pattern": "All edges are opposite in color to their adjacent corners.",
          "holding_orientation": "Can be executed from any angle."
        },
        "moves_breakdown": [
          { "move": "M2'", "finger_trick": "Double flick downwards from the back using left ring finger then middle finger" },
          { "move": "U'", "finger_trick": "Left index finger single flick" },
          { "move": "M2'", "finger_trick": "Double flick downwards from the back using left ring finger then middle finger" },
          { "move": "U2'", "finger_trick": "Double flick using right index finger then right middle finger" },
          { "move": "M2'", "finger_trick": "Double flick downwards from the back using left ring finger then middle finger" },
          { "move": "U'", "finger_trick": "Left index finger single flick" },
          { "move": "M2'", "finger_trick": "Double flick downwards from the back using left ring finger then middle finger" }
        ]
      },
      {
        "name": "Z Perm",
        "algorithm": "M2' U2' M U' M2' U' M2' U' M",
        "setup_algorithm": "M' U M2 U M2 U M' U2 M2",
        "diagram": { "top_edge": ["Right", "Front", "Right"], "right_edge": ["Back", "Left", "Back"], "bottom_edge": ["Left", "Back", "Left"], "left_edge": ["Front", "Right", "Front"] },
        "recognition": {
          "pattern": "Checkerboard pattern on both sides of the cube. Adjacent edges need to swap with each other.",
          "holding_orientation": "Hold the cube so that the front edge needs to swap with the right edge, and the left edge needs to swap with the back edge."
        },
        "moves_breakdown": [
          { "move": "M2'", "finger_trick": "Double flick downwards from the back using left ring finger then middle finger" },
          { "move": "U2'", "finger_trick": "Double flick using right index finger then right middle finger" },
          { "move": "M", "finger_trick": "Single pull downwards from the back using right ring finger" },
          { "move": "U'", "finger_trick": "Left index finger single flick" },
          { "move": "M2'", "finger_trick": "Double flick downwards from the back using left ring finger then middle finger" },
          { "move": "U'", "finger_trick": "Left index finger single flick" },
          { "move": "M2'", "finger_trick": "Double flick downwards from the back using left ring finger then middle finger" },
          { "move": "U'", "finger_trick": "Left index finger single flick" },
          { "move": "M", "finger_trick": "Single pull downwards from the back using right ring finger" }
        ]
      }
    ]
  },
  {
    "category": "Corners Only",
    "cases": [
      {
        "name": "Aa Perm",
        "algorithm": "x R' U R' D2 R U' R' D2 R2 x'",
        "setup_algorithm": "x R2 D2 R U R' D2 R U' R x'",
        "diagram": { "top_edge": ["Left", "Back", "Left"], "right_edge": ["Right", "Left", "Front"], "bottom_edge": ["Front", "Front", "Back"], "left_edge": ["Back", "Right", "Right"] },
        "recognition": {
          "pattern": "2x2 solved block on the front-left. Headlights in the back.",
          "holding_orientation": "Hold with the 2x2 block on the front-left and headlights facing away from you."
        },
        "moves_breakdown": [
          { "move": "x", "finger_trick": "Rotate entire cube away from you (regrip left hand)" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "D2", "finger_trick": "Double flick on the bottom using right ring finger then pinky" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "D2", "finger_trick": "Double flick on the bottom using right ring finger then pinky" },
          { "move": "R2", "finger_trick": "Double wrist turn upwards" },
          { "move": "x'", "finger_trick": "Rotate entire cube towards you to finish" }
        ]
      },
      {
        "name": "Ab Perm",
        "algorithm": "x R2' D2 R U R' D2 R U' R x'",
        "setup_algorithm": "x R' U R' D2 R U' R' D2 R2 x'",
        "diagram": { "top_edge": ["Right", "Back", "Front"], "right_edge": ["Back", "Left", "Back"], "bottom_edge": ["Front", "Front", "Left"], "left_edge": ["Left", "Right", "Right"] },
        "recognition": {
          "pattern": "2x2 solved block on the front-right. Headlights on the right side.",
          "holding_orientation": "Hold with the 2x2 block on the front-right."
        },
        "moves_breakdown": [
          { "move": "x", "finger_trick": "Rotate entire cube away from you (regrip left hand)" },
          { "move": "R2'", "finger_trick": "Double wrist turn downwards" },
          { "move": "D2", "finger_trick": "Double flick on the bottom using right ring finger then pinky" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "D2", "finger_trick": "Double flick on the bottom using right ring finger then pinky" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "x'", "finger_trick": "Rotate entire cube towards you to finish" }
        ]
      },
      {
        "name": "E Perm",
        "algorithm": "x' R U' R' D R U R' D' R U R' D R U' R' D' x",
        "setup_algorithm": "x' D R U R' D' R U' R' D R U' R' D' R U R' x",
        "diagram": { "top_edge": ["Left", "Back", "Right"], "right_edge": ["Back", "Left", "Front"], "bottom_edge": ["Right", "Front", "Left"], "left_edge": ["Front", "Right", "Back"] },
        "recognition": {
          "pattern": "No bars or headlights anywhere. Corners need to swap diagonally.",
          "holding_orientation": "Ensure the corner colors facing you on the right side match the edge color on the right face."
        },
        "moves_breakdown": [
          { "move": "x'", "finger_trick": "Rotate entire cube towards you" },
          { "move": "R", "finger_trick": "Wrist turn upwards (Keep left ring finger ready for D moves)" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "D", "finger_trick": "Left ring finger push from the back" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "D'", "finger_trick": "Left ring finger pull from the front" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "D", "finger_trick": "Left ring finger push from the back" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "D'", "finger_trick": "Left ring finger pull from the front" },
          { "move": "x", "finger_trick": "Rotate entire cube away from you to finish" }
        ]
      }
    ]
  },
  {
    "category": "Adjacent Swap",
    "cases": [
      {
        "name": "T Perm",
        "algorithm": "R U R' U' R' F R2 U' R' U' R U R' F'",
        "setup_algorithm": "F R U' R' U R U R2 F' R U R U' R'",
        "diagram": { "top_edge": ["Left", "Back", "Back"], "right_edge": ["Back", "Right", "Front"], "bottom_edge": ["Front", "Front", "Left"], "left_edge": ["Right", "Left", "Right"] },
        "recognition": {
          "pattern": "Headlights on the left side. Two 1x2 blocks on the front and back.",
          "holding_orientation": "Hold with the headlights on the left."
        },
        "moves_breakdown": [
          { "move": "R", "finger_trick": "Wrist turn upwards (Start with a pinch grip on the front face)" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "F", "finger_trick": "Right index finger pull downwards on the front face" },
          { "move": "R2", "finger_trick": "Double wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "F'", "finger_trick": "Right thumb push upwards on the front face" }
        ]
      },
      {
        "name": "F Perm",
        "algorithm": "R' F R f' R' F R2 U R' U' R' F' R2 U R' S",
        "setup_algorithm": "S' R U' R2 F R U R U' R2 F' R f R' F' R",
        "diagram": { "top_edge": ["Left", "Front", "Back"], "right_edge": ["Back", "Left", "Front"], "bottom_edge": ["Front", "Back", "Left"], "left_edge": ["Right", "Right", "Right"] },
        "recognition": {
          "pattern": "One solid 1x3 bar on one side. The rest of the pieces do not match.",
          "holding_orientation": "Hold with the solved 1x3 bar on the left side."
        },
        "moves_breakdown": [
          { "move": "R'", "finger_trick": "Wrist turn downwards (Start in home grip)" },
          { "move": "F", "finger_trick": "Right index finger pull downwards" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "f'", "finger_trick": "Wide front move upwards using right thumb" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "F", "finger_trick": "Right index finger pull downwards" },
          { "move": "R2", "finger_trick": "Double wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "F'", "finger_trick": "Right thumb push upwards" },
          { "move": "R2", "finger_trick": "Double wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "S", "finger_trick": "Push the S-slice downwards with the right index finger" }
        ]
      },
      {
        "name": "Jb Perm",
        "algorithm": "R U R' F' R U R' U' R' F R2 U' R'",
        "setup_algorithm": "R U R2 F' R U R U' R' F R U' R'",
        "diagram": { "top_edge": ["Front", "Left", "Left"], "right_edge": ["Left", "Right", "Right"], "bottom_edge": ["Right", "Front", "Front"], "left_edge": ["Back", "Back", "Back"] },
        "recognition": {
          "pattern": "A large 'J' shaped solved block on the back and right sides.",
          "holding_orientation": "Hold with the solid 1x3 bar on the left and the other bar on the front."
        },
        "moves_breakdown": [
          { "move": "R", "finger_trick": "Wrist turn upwards (Start in pinch grip)" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "F'", "finger_trick": "Right thumb push upwards on the front face" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "F", "finger_trick": "Right index finger pull downwards" },
          { "move": "R2", "finger_trick": "Double wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" }
        ]
      },
      {
        "name": "Ja Perm",
        "algorithm": "x R2' F R F' R U2' r' U r U2' x'",
        "setup_algorithm": "x U2 r' U' r U2 R' F R' F' R2 x'",
        "diagram": { "top_edge": ["Left", "Left", "Back"], "right_edge": ["Back", "Back", "Front"], "bottom_edge": ["Front", "Front", "Left"], "left_edge": ["Right", "Right", "Right"] },
        "recognition": {
          "pattern": "A large 'J' shaped solved block on the back and left sides. Solid bar on the left.",
          "holding_orientation": "Hold with the solid 1x3 bar on the left, headlights facing you."
        },
        "moves_breakdown": [
          { "move": "x", "finger_trick": "Rotate cube away (regrip left hand)" },
          { "move": "R2'", "finger_trick": "Double wrist turn downwards" },
          { "move": "F", "finger_trick": "Right index finger pull downwards" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "F'", "finger_trick": "Right thumb push upwards" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U2'", "finger_trick": "Left index and middle double flick" },
          { "move": "r'", "finger_trick": "Wide wrist turn downwards" },
          { "move": "U", "finger_trick": "Left index finger push" },
          { "move": "r", "finger_trick": "Wide wrist turn upwards" },
          { "move": "U2'", "finger_trick": "Left index and middle double flick" },
          { "move": "x'", "finger_trick": "Rotate cube back towards you" }
        ]
      },
      {
        "name": "Ra Perm",
        "algorithm": "R U' R' U' R U R D R' U' R D' R' U2 R'",
        "setup_algorithm": "R U2 R D R' U R D' R' U' R' U R U R'",
        "diagram": { "top_edge": ["Front", "Back", "Left"], "right_edge": ["Left", "Front", "Right"], "bottom_edge": ["Right", "Right", "Front"], "left_edge": ["Back", "Left", "Back"] },
        "recognition": {
          "pattern": "Headlights on the left. A 1x2 bar on the right side. No bar in the back.",
          "holding_orientation": "Hold with headlights on the left and the 1x2 bar on the front-right."
        },
        "moves_breakdown": [
          { "move": "R", "finger_trick": "Wrist turn upwards (Start in home grip)" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R", "finger_trick": "Wrist turn upwards (Regrip during this move)" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "D", "finger_trick": "Right ring finger push from the back" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "D'", "finger_trick": "Right ring finger pull from the front" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U2", "finger_trick": "Right index and middle double flick" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" }
        ]
      },
      {
        "name": "Rb Perm",
        "algorithm": "R' U2 R' D' R U' R' D R U R U' R' U' R",
        "setup_algorithm": "R' U R U' R' D' R U R' D R U2 R",
        "diagram": { "top_edge": ["Back", "Left", "Front"], "right_edge": ["Front", "Right", "Left"], "bottom_edge": ["Right", "Front", "Right"], "left_edge": ["Left", "Back", "Back"] },
        "recognition": {
          "pattern": "Headlights on the left. A 1x2 bar on the left side, but no bar in the back. Mirror of Ra.",
          "holding_orientation": "Hold with the headlights facing you and the 1x2 bar on the right side."
        },
        "moves_breakdown": [
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U2", "finger_trick": "Right index and middle double flick" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "D'", "finger_trick": "Right ring finger pull from the front" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "D", "finger_trick": "Right ring finger push from the back" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R", "finger_trick": "Wrist turn upwards" }
        ]
      }
    ]
  },
  {
    "category": "Diagonal Swap",
    "cases": [
      {
        "name": "Y Perm",
        "algorithm": "F R U' R' U' R U R' F' R U R' U' R' F R F'",
        "setup_algorithm": "F R' F' R U R U' R' F R U' R' U R U R' F'",
        "diagram": { "top_edge": ["Back", "Right", "Front"], "right_edge": ["Right", "Left", "Left"], "bottom_edge": ["Front", "Front", "Back"], "left_edge": ["Left", "Back", "Right"] },
        "recognition": {
          "pattern": "No headlights. Two 1x2 blocks that form a 'V' or 'Y' shape.",
          "holding_orientation": "Hold with the 'V' shape blocks on the front-left and back-right."
        },
        "moves_breakdown": [
          { "move": "F", "finger_trick": "Right index finger pull down" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "F'", "finger_trick": "Right thumb push upwards" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "F", "finger_trick": "Right index finger pull downwards" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "F'", "finger_trick": "Right thumb push upwards" }
        ]
      },
      {
        "name": "Na Perm",
        "algorithm": "F' R U R' U' R' F R2 F U' R' U' R U F' R'",
        "setup_algorithm": "R F U' R' U R U F' R2 F' R U R U' R' F",
        "diagram": { "top_edge": ["Front", "Back", "Back"], "right_edge": ["Left", "Right", "Right"], "bottom_edge": ["Back", "Front", "Front"], "left_edge": ["Right", "Left", "Left"] },
        "recognition": {
          "pattern": "Contains two 1x2 bars opposite each other.",
          "holding_orientation": "Hold with the 1x2 bars on the left and right sides."
        },
        "moves_breakdown": [
          { "move": "F'", "finger_trick": "Right thumb push upwards" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "F", "finger_trick": "Right index finger pull downwards" },
          { "move": "R2", "finger_trick": "Double wrist turn upwards" },
          { "move": "F", "finger_trick": "Right ring finger push upwards from the bottom" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "F'", "finger_trick": "Right thumb push upwards" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" }
        ]
      },
      {
        "name": "Nb Perm",
        "algorithm": "r' D' F r U' r' F' D r2 U r' U' r' F r F'",
        "setup_algorithm": "F r' F' r U r U' r2 D' F r U r' F' D r",
        "diagram": { "top_edge": ["Back", "Back", "Front"], "right_edge": ["Right", "Right", "Left"], "bottom_edge": ["Front", "Front", "Back"], "left_edge": ["Left", "Left", "Right"] },
        "recognition": {
          "pattern": "Contains two 1x2 bars opposite each other. Mirrored from Na.",
          "holding_orientation": "Hold with the 1x2 bars on the front-right and back-left."
        },
        "moves_breakdown": [
          { "move": "r'", "finger_trick": "Wide wrist turn downwards" },
          { "move": "D'", "finger_trick": "Right ring finger push from the front" },
          { "move": "F", "finger_trick": "Left index finger pull downwards" },
          { "move": "r", "finger_trick": "Wide wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "r'", "finger_trick": "Wide wrist turn downwards" },
          { "move": "F'", "finger_trick": "Right thumb push upwards" },
          { "move": "D", "finger_trick": "Left ring finger pull from the front" },
          { "move": "r2", "finger_trick": "Double wide wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "r'", "finger_trick": "Wide wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "r'", "finger_trick": "Wide wrist turn downwards" },
          { "move": "F", "finger_trick": "Right index finger pull downwards" },
          { "move": "r", "finger_trick": "Wide wrist turn upwards" },
          { "move": "F'", "finger_trick": "Right thumb push upwards" }
        ]
      },
      {
        "name": "V Perm",
        "algorithm": "R' U R' d' R' F' R2 U' R' U R' F R F",
        "setup_algorithm": "F' R' F' R U R U R2' F R d R U' R",
        "diagram": { "top_edge": ["Back", "Left", "Front"], "right_edge": ["Right", "Back", "Left"], "bottom_edge": ["Front", "Front", "Back"], "left_edge": ["Left", "Right", "Right"] },
        "recognition": {
          "pattern": "A 2x2 block solved on the front-right. Corners are opposite the block.",
          "holding_orientation": "Hold with the 2x2 block on the front-right."
        },
        "moves_breakdown": [
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U", "finger_trick": "Left index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "d'", "finger_trick": "Push the lower two layers with the left index finger" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "F'", "finger_trick": "Right thumb push upwards" },
          { "move": "R2", "finger_trick": "Double wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "F", "finger_trick": "Right index finger pull downwards" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "F", "finger_trick": "Right index finger pull downwards" }
        ]
      }
    ]
  },
  {
    "category": "G-Perms",
    "cases": [
      {
        "name": "Ga Perm",
        "algorithm": "R2 U R' U R' U' R U' R2 D U' R' U R D'",
        "setup_algorithm": "D R' U' R U D' R2 U R' U R U' R U' R2",
        "diagram": { "top_edge": ["Left", "Front", "Back"], "right_edge": ["Back", "Right", "Front"], "bottom_edge": ["Front", "Left", "Left"], "left_edge": ["Right", "Back", "Right"] },
        "recognition": {
          "pattern": "Headlights on the left. A 1x2 bar on the front-right side.",
          "holding_orientation": "Hold with headlights on the left and the 1x2 bar on the front face."
        },
        "moves_breakdown": [
          { "move": "R2", "finger_trick": "Rolling motion towards you" },
          { "move": "U", "finger_trick": "Left index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U", "finger_trick": "Left index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R2", "finger_trick": "Rolling motion towards you" },
          { "move": "D", "finger_trick": "Left ring finger push from back" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U", "finger_trick": "Left index finger push" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "D'", "finger_trick": "Left ring finger pull from front" }
        ]
      },
      {
        "name": "Gb Perm",
        "algorithm": "R' d' F R2 u R' U R U' R u' R2'",
        "setup_algorithm": "R2 u R' U R' U' R u' R2' F' d R",
        "diagram": { "top_edge": ["Left", "Right", "Back"], "right_edge": ["Back", "Front", "Front"], "bottom_edge": ["Front", "Back", "Left"], "left_edge": ["Right", "Left", "Right"] },
        "recognition": {
          "pattern": "Headlights on the left. A 1x2 bar on the back-right side.",
          "holding_orientation": "Hold with headlights on the left and the 1x2 bar on the back face."
        },
        "moves_breakdown": [
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "d'", "finger_trick": "Push the lower two layers with the left index finger" },
          { "move": "F", "finger_trick": "Right index finger pull downwards" },
          { "move": "R2", "finger_trick": "Double wrist turn upwards" },
          { "move": "u", "finger_trick": "Push the wide u-slice with the left index finger" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "u'", "finger_trick": "Push the wide u-slice with the right index finger" },
          { "move": "R2'", "finger_trick": "Double wrist turn downwards" }
        ]
      },
      {
        "name": "Gc Perm",
        "algorithm": "R2' u' R U' R U R' u R2 f R' f'",
        "setup_algorithm": "f R f' R2' u' R U' R' U R' u R2",
        "diagram": { "top_edge": ["Left", "Left", "Back"], "right_edge": ["Back", "Right", "Front"], "bottom_edge": ["Front", "Back", "Left"], "left_edge": ["Right", "Front", "Right"] },
        "recognition": {
          "pattern": "Headlights on the left. A 1x2 bar on the front-left side.",
          "holding_orientation": "Hold with headlights on the left and the 1x2 bar on the left face."
        },
        "moves_breakdown": [
          { "move": "R2'", "finger_trick": "Double wrist turn downwards" },
          { "move": "u'", "finger_trick": "Push the wide u-slice with the right index finger" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Left index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "u", "finger_trick": "Push the wide u-slice with the left index finger" },
          { "move": "R2", "finger_trick": "Double wrist turn upwards" },
          { "move": "f", "finger_trick": "Right index finger pull downwards" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "f'", "finger_trick": "Right thumb push upwards" }
        ]
      },
      {
        "name": "Gd Perm",
        "algorithm": "R U R' U' D R2 U' R U' R' U R' U R2 D'",
        "setup_algorithm": "D R2 U' R U' R U R' U R2 D' U R U' R'",
        "diagram": { "top_edge": ["Left", "Front", "Back"], "right_edge": ["Back", "Back", "Front"], "bottom_edge": ["Front", "Right", "Left"], "left_edge": ["Right", "Left", "Right"] },
        "recognition": {
          "pattern": "Headlights on the left. A 1x2 bar on the back-left side.",
          "holding_orientation": "Hold with headlights on the left and the 1x2 bar on the back face."
        },
        "moves_breakdown": [
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U", "finger_trick": "Right index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "D", "finger_trick": "Right ring finger push from back" },
          { "move": "R2", "finger_trick": "Double wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R", "finger_trick": "Wrist turn upwards" },
          { "move": "U'", "finger_trick": "Right index finger pull" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U", "finger_trick": "Left index finger push" },
          { "move": "R'", "finger_trick": "Wrist turn downwards" },
          { "move": "U", "finger_trick": "Left index finger push" },
          { "move": "R2", "finger_trick": "Double wrist turn upwards" },
          { "move": "D'", "finger_trick": "Right ring finger pull from front" }
        ]
      }
    ]
  }
];
