// OLL Data - 57 Orientation of Last Layer cases
const OLL_DATA = [
  {
    category: "Dot Shapes",
    cases: [
      {
        name: "OLL 1", algorithm: "R U2' R2' F R F' U2' R' F R F'",
        setup_algorithm: "F R' F' R U2 F R' F' R2 U2 R'",
        recognition: { pattern: "Dot case. No edges are oriented. All four corner yellow stickers face outward in opposite directions (headlights on front and back).", holding_orientation: "Hold so the yellow corner headlights are facing towards you and away from you." },
        diagram: { top_face: [[0,0,0],[0,1,0],[0,0,0]], top_edge: [1,1,1], right_edge: [0,1,0], bottom_edge: [1,1,1], left_edge: [0,1,0] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards (Start in home grip)" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R2'", finger_trick: "Double wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face to finish" }
        ]
      },
      {
        name: "OLL 2", algorithm: "f U R U' R' S' U R U' R' F'",
        setup_algorithm: "F R U R' U' S R U R' U' f'",
        recognition: { pattern: "Dot case. Yellow stickers on the corners face outward in a 'Z' pattern. Side yellow edges are adjacent.", holding_orientation: "Hold so the front face has a yellow edge and the right face has a yellow edge." },
        diagram: { top_face: [[0,0,0],[0,1,0],[0,0,0]], top_edge: [1,1,0], right_edge: [0,1,1], bottom_edge: [1,1,0], left_edge: [0,1,1] },
        moves_breakdown: [
          { move: "f", finger_trick: "Pull the wide front two layers downwards with the right index finger" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "S'", finger_trick: "Pull the middle S-slice upwards with the left index finger" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" }
        ]
      },
      {
        name: "OLL 3", algorithm: "R' F R F' U' S R' U' R U R S'",
        setup_algorithm: "S R' U' R' U R S' U F R' F' R",
        recognition: { pattern: "Dot case. Two yellow corners point forward, two point sideways.", holding_orientation: "Hold so the yellow corner headlights are facing towards you on the front face." },
        diagram: { top_face: [[0,0,0],[0,1,0],[0,0,0]], top_edge: [0,1,0], right_edge: [0,1,1], bottom_edge: [1,1,1], left_edge: [1,1,0] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards (Start in home grip)" },
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "S", finger_trick: "Push the middle S-slice downwards with the right index finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Right index finger drag/pull from the back" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "S'", finger_trick: "Push the S-slice back upwards with the right thumb" }
        ]
      },
      {
        name: "OLL 4", algorithm: "f U R U' R' S' R' F' R U R U' R'",
        setup_algorithm: "R U R' U' R' F R S R U R' U' f'",
        recognition: { pattern: "Dot case. Mirror of OLL 3. Headlights face away from you, side corners point outward.", holding_orientation: "Hold so the yellow corner headlights are facing away from you on the back face." },
        diagram: { top_face: [[0,0,0],[0,1,0],[0,0,0]], top_edge: [1,1,1], right_edge: [1,1,0], bottom_edge: [0,1,0], left_edge: [0,1,1] },
        moves_breakdown: [
          { move: "f", finger_trick: "Pull the wide front two layers downwards with the right index finger" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "S'", finger_trick: "Pull the middle S-slice upwards with the left index finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "OLL 17", algorithm: "F R' F' R U S' R U' R' S",
        setup_algorithm: "S' R U R' S U' R' F R F'",
        recognition: { pattern: "Dot case. 'Slash' or diagonal shape of yellow. No edges are oriented.", holding_orientation: "Hold the diagonal yellow line going from the front-right to the back-left." },
        diagram: { top_face: [[1,0,0],[0,1,0],[0,0,1]], top_edge: [0,1,1], right_edge: [1,1,0], bottom_edge: [1,1,0], left_edge: [0,1,1] },
        moves_breakdown: [
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "S'", finger_trick: "Pull the middle S-slice upwards with the left index finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "S", finger_trick: "Push the middle S-slice downwards with the right index finger" }
        ]
      },
      {
        name: "OLL 18", algorithm: "F S' R U' R' S R U2' R' U' F'",
        setup_algorithm: "F U R U2 R' S' R U R' S F'",
        recognition: { pattern: "Dot case. 'Slash' or diagonal shape of yellow (mirror of OLL 17).", holding_orientation: "Hold the diagonal yellow line going from the front-left to the back-right." },
        diagram: { top_face: [[0,0,1],[0,1,0],[1,0,0]], top_edge: [1,1,0], right_edge: [0,1,1], bottom_edge: [0,1,1], left_edge: [1,1,0] },
        moves_breakdown: [
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "S'", finger_trick: "Pull the middle S-slice upwards with the left index finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "S", finger_trick: "Push the S-slice downwards with the right index finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F'", finger_trick: "Right thumb push upwards to finish" }
        ]
      },
      {
        name: "OLL 20", algorithm: "S R' U' R U R U R U' R' S'",
        setup_algorithm: "S R U R' U' R' U' R' U R S'",
        recognition: { pattern: "Dot case. 'X' or Checkered shape. No edges are oriented.", holding_orientation: "Hold the cube in any orientation; the pattern is completely symmetrical." },
        diagram: { top_face: [[1,0,1],[0,1,0],[1,0,1]], top_edge: [0,1,0], right_edge: [0,1,0], bottom_edge: [0,1,0], left_edge: [0,1,0] },
        moves_breakdown: [
          { move: "S", finger_trick: "Push the middle S-slice downwards with the right index finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "S'", finger_trick: "Push the S-slice back upwards with the right thumb" }
        ]
      }
    ]
  },
  {
    category: "Square Shapes",
    cases: [
      {
        name: "OLL 5", algorithm: "R' F2 r U r' F R",
        setup_algorithm: "R' F' r U' r' F2 R",
        recognition: { pattern: "Square shape (2x2 block of yellow). One front-facing yellow corner, one left-facing yellow edge.", holding_orientation: "Hold the 2x2 yellow square on the back-right." },
        diagram: { top_face: [[0,0,0],[0,1,1],[0,1,1]], top_edge: [0,1,0], right_edge: [0,0,0], bottom_edge: [1,0,0], left_edge: [1,1,1] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards (Start in home grip)" },
          { move: "F2", finger_trick: "Double flick downwards on the front face using right index then middle finger" },
          { move: "r", finger_trick: "Wide wrist turn upwards catching the middle layer" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "r'", finger_trick: "Wide wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards to finish" }
        ]
      },
      {
        name: "OLL 6", algorithm: "r U2' R' U' R U' r'",
        setup_algorithm: "r U R' U R U2' r'",
        recognition: { pattern: "Square shape (2x2 block of yellow). Yellow square is on the back-left. One right-facing yellow corner, one front-facing yellow edge.", holding_orientation: "Hold the 2x2 yellow square on the back-left." },
        diagram: { top_face: [[1,1,0],[1,1,0],[0,0,0]], top_edge: [0,0,0], right_edge: [0,0,1], bottom_edge: [1,1,0], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "r", finger_trick: "Wide wrist turn upwards catching the middle layer" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r'", finger_trick: "Wide wrist turn downwards to finish" }
        ]
      }
    ]
  },
  {
    category: "Lightning Bolts",
    cases: [
      {
        name: "OLL 7", algorithm: "r U R' U R U2' r'",
        setup_algorithm: "r U2 R' U' R U' r'",
        recognition: { pattern: "Small lightning bolt shape. The bulk of the shape goes from the front-right to the back-left.", holding_orientation: "Hold so the yellow edges are on the back and left." },
        diagram: { top_face: [[1,1,0],[1,1,0],[0,0,1]], top_edge: [0,0,1], right_edge: [0,1,0], bottom_edge: [1,1,0], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "r", finger_trick: "Wide wrist turn upwards catching the middle layer" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "r'", finger_trick: "Wide wrist turn downwards to finish" }
        ]
      },
      {
        name: "OLL 8", algorithm: "R' F' r U' r' F2 R",
        setup_algorithm: "R' F2 r U r' F R",
        recognition: { pattern: "'P' shape or awkward shape. A 2x2 block missing a corner, with two yellow corners sticking out on the back.", holding_orientation: "Hold with the solid yellow edges on the right and front." },
        diagram: { top_face: [[1,0,1],[0,1,1],[0,1,0]], top_edge: [0,1,0], right_edge: [0,0,1], bottom_edge: [1,0,0], left_edge: [0,1,0] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards (Start in home grip)" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "r", finger_trick: "Wide wrist turn upwards catching the middle layer" },
          { move: "U'", finger_trick: "Right index finger pull" },
          { move: "r'", finger_trick: "Wide wrist turn downwards" },
          { move: "F2", finger_trick: "Double flick downwards on the front face using right index then middle finger" },
          { move: "R", finger_trick: "Wrist turn upwards to finish" }
        ]
      },
      {
        name: "OLL 39", algorithm: "f' r U r' U' r' F r S",
        setup_algorithm: "S' r' F' r U r U' r' f",
        recognition: { pattern: "Big Lightning Bolt shape.", holding_orientation: "Hold the wide part of the lightning bolt on the right side." },
        diagram: { top_face: [[1,1,0],[0,1,1],[0,1,1]], top_edge: [0,0,1], right_edge: [0,0,0], bottom_edge: [1,0,0], left_edge: [1,1,1] },
        moves_breakdown: [
          { move: "f'", finger_trick: "Push the wide front two layers upwards with the right thumb" },
          { move: "r", finger_trick: "Wide wrist turn upwards catching the middle layer" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "r'", finger_trick: "Wide wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r'", finger_trick: "Wide wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "r", finger_trick: "Wide wrist turn upwards" },
          { move: "S", finger_trick: "Push the middle S-slice downwards with the right index finger" }
        ]
      },
      {
        name: "OLL 40", algorithm: "R' F R U R' U' F' U R",
        setup_algorithm: "R' U' F U R U' R' F' R",
        recognition: { pattern: "Big Lightning Bolt shape (mirror of OLL 39).", holding_orientation: "Hold the wide part of the lightning bolt on the front face." },
        diagram: { top_face: [[0,1,1],[1,1,0],[1,1,0]], top_edge: [1,0,0], right_edge: [1,1,1], bottom_edge: [0,0,1], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards to finish" }
        ]
      }
    ]
  },
  {
    category: "Kite / Fish Shapes",
    cases: [
      {
        name: "OLL 9", algorithm: "R U2' R' U' S' R U' R' S",
        setup_algorithm: "S' R U R' S U R U2' R'",
        recognition: { pattern: "Kite or Fish shape pointing towards the bottom left.", holding_orientation: "Hold with the unoriented yellow corners on the back-right and front-left." },
        diagram: { top_face: [[1,0,0],[1,1,0],[0,1,1]], top_edge: [0,1,0], right_edge: [1,1,0], bottom_edge: [1,0,0], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "S'", finger_trick: "Pull the middle S-slice upwards with the left index finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "S", finger_trick: "Push the middle S-slice downwards with the right index finger" }
        ]
      },
      {
        name: "OLL 10", algorithm: "F U F' R' F R U' R' F' R",
        setup_algorithm: "R' F R U R' F' R F U' F'",
        recognition: { pattern: "Kite or Fish shape pointing towards the bottom right (mirror of OLL 9).", holding_orientation: "Hold with the unoriented yellow corners on the back-left and front-right." },
        diagram: { top_face: [[0,0,1],[0,1,1],[1,1,0]], top_edge: [0,1,0], right_edge: [0,0,0], bottom_edge: [0,0,1], left_edge: [1,1,0] },
        moves_breakdown: [
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R", finger_trick: "Wrist turn upwards to finish" }
        ]
      }
    ]
  },
  {
    category: "I Shapes",
    cases: [
      {
        name: "OLL 11", algorithm: "S R U R' U R U2' R' U2 S'",
        setup_algorithm: "S U2' R U2 R' U' R U' R' S'",
        recognition: { pattern: "'I' shape down the middle, with two yellow corners opposite each other.", holding_orientation: "Hold so the 'I' line is running front-to-back, with yellow corners on the front-right and back-left." },
        diagram: { top_face: [[1,1,0],[0,1,0],[0,1,1]], top_edge: [0,0,1], right_edge: [0,1,0], bottom_edge: [1,0,0], left_edge: [0,1,0] },
        moves_breakdown: [
          { move: "S", finger_trick: "Push the middle S-slice downwards with the right index finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U2", finger_trick: "Double flick using right index finger then middle finger" },
          { move: "S'", finger_trick: "Push the S-slice back upwards with the right thumb" }
        ]
      },
      {
        name: "OLL 12", algorithm: "S' L' U' L U' L' U2 L U2 S",
        setup_algorithm: "S' U2' L' U2' L U L' U L S",
        recognition: { pattern: "'I' shape down the middle, with two yellow corners opposite each other (mirror of OLL 11).", holding_orientation: "Hold so the 'I' line is running front-to-back, with yellow corners on the front-left and back-right." },
        diagram: { top_face: [[0,1,1],[0,1,0],[1,1,0]], top_edge: [1,0,0], right_edge: [0,1,0], bottom_edge: [0,0,1], left_edge: [0,1,0] },
        moves_breakdown: [
          { move: "S'", finger_trick: "Pull the middle S-slice upwards with the left index finger" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U2", finger_trick: "Double flick using right index finger then middle finger" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "U2", finger_trick: "Double flick using right index finger then middle finger" },
          { move: "S", finger_trick: "Push the S-slice downwards with the right index finger" }
        ]
      }
    ]
  },
  {
    category: "Awkward Shapes",
    cases: [
      {
        name: "OLL 13", algorithm: "F U R U2' R' U' R U R' F'",
        setup_algorithm: "F R U' R' U R U2 R' U' F'",
        recognition: { pattern: "Awkward 'L' + corners shape. Contains a 2x2 block in the back-left corner.", holding_orientation: "Hold the 2x2 block in the back-left." },
        diagram: { top_face: [[1,1,0],[1,1,0],[0,0,1]], top_edge: [0,0,0], right_edge: [0,1,1], bottom_edge: [1,1,0], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" }
        ]
      },
      {
        name: "OLL 14", algorithm: "R' F R U R' F' R F U' F'",
        setup_algorithm: "F U F' R' F R U' R' F' R",
        recognition: { pattern: "Awkward 'L' + corners shape (mirror of OLL 13). Contains a 2x2 block in the back-right corner.", holding_orientation: "Hold the 2x2 block in the back-right." },
        diagram: { top_face: [[0,1,1],[0,1,1],[1,0,0]], top_edge: [0,0,0], right_edge: [0,0,0], bottom_edge: [0,1,1], left_edge: [1,1,0] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F'", finger_trick: "Right thumb push upwards to finish" }
        ]
      },
      {
        name: "OLL 15", algorithm: "R' F' R r' F' r U R' F R",
        setup_algorithm: "R' F' R U' r' F r R' F R",
        recognition: { pattern: "Awkward 'Mickey Mouse' shape. A blocky center with two front-facing yellow corners sticking out.", holding_orientation: "Hold so the unoriented edges are on the front and left." },
        diagram: { top_face: [[0,1,0],[0,1,1],[1,0,1]], top_edge: [0,0,1], right_edge: [0,0,0], bottom_edge: [0,1,0], left_edge: [1,1,0] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards (Start in home grip)" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "r'", finger_trick: "Wide wrist turn downwards catching the middle layer" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "r", finger_trick: "Wide wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards to finish" }
        ]
      },
      {
        name: "OLL 16", algorithm: "r U M U R' U' r U' r'",
        setup_algorithm: "r U r' U R U' M' U' r'",
        recognition: { pattern: "Awkward 'Mickey Mouse' shape (mirror of OLL 15). A blocky center with two back-facing yellow corners sticking out.", holding_orientation: "Hold so the unoriented corners are on the front-right and back-right." },
        diagram: { top_face: [[0,1,0],[1,1,0],[1,0,1]], top_edge: [1,0,1], right_edge: [0,0,1], bottom_edge: [0,1,0], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "r", finger_trick: "Wide wrist turn upwards catching the middle layer" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "M", finger_trick: "Push the middle M-slice downwards with the left index finger" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r", finger_trick: "Wide wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r'", finger_trick: "Wide wrist turn downwards to finish" }
        ]
      },
      {
        name: "OLL 29", algorithm: "S' R U R' U' R' F R F' U S",
        setup_algorithm: "S' U' F R' F' R U R U' R' S",
        recognition: { pattern: "Awkward shape. A square block of 4 yellow stickers with a tail. Contains no headlights.", holding_orientation: "Hold the 2x2 block on the front-right." },
        diagram: { top_face: [[1,1,0],[0,1,1],[0,1,1]], top_edge: [0,0,1], right_edge: [1,0,0], bottom_edge: [0,0,0], left_edge: [0,1,1] },
        moves_breakdown: [
          { move: "S'", finger_trick: "Pull the middle S-slice upwards with the left index finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "S", finger_trick: "Push the S-slice downwards with the right index finger" }
        ]
      },
      {
        name: "OLL 30", algorithm: "S' R' U' R f R' U R U' F'",
        setup_algorithm: "F U R' U' R f' R' U R S",
        recognition: { pattern: "Awkward shape (mirror of OLL 29).", holding_orientation: "Hold the 2x2 block on the back-right." },
        diagram: { top_face: [[0,1,1],[0,1,1],[1,1,0]], top_edge: [1,0,0], right_edge: [0,0,1], bottom_edge: [0,0,1], left_edge: [1,1,0] },
        moves_breakdown: [
          { move: "S'", finger_trick: "Pull the middle S-slice upwards with the left index finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "f", finger_trick: "Pull the wide front two layers downwards" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" }
        ]
      },
      {
        name: "OLL 37", algorithm: "F R' F' R U R U' R'",
        setup_algorithm: "R U R' U' R' F R F'",
        recognition: { pattern: "Awkward shape. A 2x2 block with a single yellow edge sticking out.", holding_orientation: "Hold the 2x2 block in the back-left, with the extra yellow edge on the front face." },
        diagram: { top_face: [[1,1,0],[1,1,0],[0,1,0]], top_edge: [0,0,1], right_edge: [1,1,1], bottom_edge: [1,0,1], left_edge: [0,0,1] },
        moves_breakdown: [
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards to finish" }
        ]
      },
      {
        name: "OLL 38", algorithm: "R U R' U R U' R' U' R' F R F'",
        setup_algorithm: "F R' F' R U R U' R' U' R U' R'",
        recognition: { pattern: "Awkward shape (mirror of OLL 37). A 2x2 block with a single yellow edge sticking out.", holding_orientation: "Hold the 2x2 block in the back-right, with the extra yellow edge on the front face." },
        diagram: { top_face: [[0,1,1],[0,1,1],[0,1,0]], top_edge: [1,0,0], right_edge: [0,0,1], bottom_edge: [1,0,1], left_edge: [1,1,1] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards to finish" }
        ]
      },
      {
        name: "OLL 41", algorithm: "R U R' U R U2' R' F R U R' U' F'",
        setup_algorithm: "F U R U' R' F' R U2 R' U' R U' R'",
        recognition: { pattern: "Awkward shape. Looks like a 2x2 block connected to an edge.", holding_orientation: "Hold the 2x2 block on the front-left, with the single edge pointing right." },
        diagram: { top_face: [[0,1,0],[1,1,1],[1,1,0]], top_edge: [1,0,1], right_edge: [0,0,1], bottom_edge: [0,0,0], left_edge: [1,0,0] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F'", finger_trick: "Right thumb push upwards to finish" }
        ]
      },
      {
        name: "OLL 42", algorithm: "F S' R U R' U' F' U S",
        setup_algorithm: "S' U' F U R U' R' S F'",
        recognition: { pattern: "Awkward shape (mirror of OLL 41).", holding_orientation: "Hold the 2x2 block on the front-right, with the single edge pointing left." },
        diagram: { top_face: [[0,1,0],[1,1,1],[0,1,1]], top_edge: [1,0,1], right_edge: [0,0,1], bottom_edge: [0,0,0], left_edge: [1,0,1] },
        moves_breakdown: [
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "S'", finger_trick: "Pull the middle S-slice upwards with the left index finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "S", finger_trick: "Push the S-slice downwards with the right index finger" }
        ]
      },
      {
        name: "OLL 49", algorithm: "R B' R2' F R2 B R2' F' R",
        setup_algorithm: "R' F R2 B' R2' F' R2 B R'",
        recognition: { pattern: "Awkward shape. Small L shape with one corner oriented.", holding_orientation: "Hold the yellow block on the right side." },
        diagram: { top_face: [[0,0,1],[0,1,1],[0,1,1]], top_edge: [1,1,0], right_edge: [0,0,0], bottom_edge: [1,0,0], left_edge: [1,1,1] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "B'", finger_trick: "Right ring finger pull upwards from the back" },
          { move: "R2'", finger_trick: "Double wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R2", finger_trick: "Double wrist turn upwards" },
          { move: "B", finger_trick: "Right ring finger push downwards from the back" },
          { move: "R2'", finger_trick: "Double wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R", finger_trick: "Wrist turn upwards to finish" }
        ]
      },
      {
        name: "OLL 50", algorithm: "R' F R2 B' R2' F' R2 B R'",
        setup_algorithm: "R B' R2' F R2 B R2' F' R",
        recognition: { pattern: "Awkward shape (mirror of OLL 49).", holding_orientation: "Hold the yellow block on the left side." },
        diagram: { top_face: [[1,0,0],[1,1,0],[1,1,0]], top_edge: [0,1,1], right_edge: [1,1,1], bottom_edge: [0,0,1], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R2", finger_trick: "Double wrist turn upwards" },
          { move: "B'", finger_trick: "Right ring finger pull upwards from the back" },
          { move: "R2'", finger_trick: "Double wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R2", finger_trick: "Double wrist turn upwards" },
          { move: "B", finger_trick: "Right ring finger push downwards from the back" },
          { move: "R'", finger_trick: "Wrist turn downwards to finish" }
        ]
      }
    ]
  },
  {
    category: "P Shapes",
    cases: [
      {
        name: "OLL 19", algorithm: "S' R U R' S U' R' F R F'",
        setup_algorithm: "F R' F' R U S' R U' R' S",
        recognition: { pattern: "'P' shape. A 2x2 block with a tail. The two unoriented corners have yellow facing the same direction (headlights).", holding_orientation: "Hold the 2x2 block on the back-right, with the headlights facing you." },
        diagram: { top_face: [[1,1,0],[1,1,0],[0,0,0]], top_edge: [0,0,1], right_edge: [0,0,0], bottom_edge: [1,0,1], left_edge: [1,0,0] },
        moves_breakdown: [
          { move: "S'", finger_trick: "Pull the middle S-slice upwards with the left index finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "S", finger_trick: "Push the middle S-slice downwards with the right index finger" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards to finish" }
        ]
      },
      {
        name: "OLL 31", algorithm: "R' U' F U R U' R' F' R",
        setup_algorithm: "R' F R U R' U' F' U R",
        recognition: { pattern: "P shape. A 2x2 block with a tail. Unoriented corners face outward in opposite directions.", holding_orientation: "Hold the 2x2 block on the back-left." },
        diagram: { top_face: [[1,1,0],[1,1,0],[0,0,0]], top_edge: [0,0,1], right_edge: [0,1,0], bottom_edge: [0,0,1], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R", finger_trick: "Wrist turn upwards to finish" }
        ]
      },
      {
        name: "OLL 32", algorithm: "S R U R' U' R' F R f'",
        setup_algorithm: "f R' F' R U R U' R' S'",
        recognition: { pattern: "P shape (mirror of OLL 31). Unoriented corners face outward.", holding_orientation: "Hold the 2x2 block on the back-right." },
        diagram: { top_face: [[0,1,1],[0,1,1],[0,0,0]], top_edge: [1,0,0], right_edge: [0,0,0], bottom_edge: [1,0,0], left_edge: [0,1,0] },
        moves_breakdown: [
          { move: "S", finger_trick: "Push the middle S-slice downwards with the right index finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "f'", finger_trick: "Wide front move upwards with the right thumb" }
        ]
      },
      {
        name: "OLL 43", algorithm: "R' U' F' U F R",
        setup_algorithm: "R' F' U' F U R",
        recognition: { pattern: "P shape. Small 2x2 block with a tail. Unoriented corners face in the same direction.", holding_orientation: "Hold the 2x2 block in the front-left, with the unoriented corners facing the back." },
        diagram: { top_face: [[0,1,0],[1,1,0],[1,1,0]], top_edge: [1,0,1], right_edge: [0,1,1], bottom_edge: [0,0,0], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" }
        ]
      },
      {
        name: "OLL 44", algorithm: "F U R U' R' F'",
        setup_algorithm: "F R U R' U' F'",
        recognition: { pattern: "P shape (mirror of OLL 43). Small 2x2 block with a tail.", holding_orientation: "Hold the 2x2 block in the front-right, with the unoriented corners facing the back." },
        diagram: { top_face: [[0,1,0],[0,1,1],[0,1,1]], top_edge: [1,0,1], right_edge: [0,0,0], bottom_edge: [0,0,0], left_edge: [1,1,0] },
        moves_breakdown: [
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards to finish" }
        ]
      }
    ]
  },
  {
    category: "Cross Shapes (All Edges Oriented)",
    cases: [
      {
        name: "OLL 21", algorithm: "R U R' U R U' R' U R U2' R'",
        setup_algorithm: "R U2 R' U' R U R' U' R U' R'",
        recognition: { pattern: "Cross shape. No corners are oriented. Yellow stickers face outward in opposite directions (headlights on both sides).", holding_orientation: "Hold so the headlights are on the front and back faces." },
        diagram: { top_face: [[0,1,0],[1,1,1],[0,1,0]], top_edge: [1,0,1], right_edge: [0,0,0], bottom_edge: [1,0,1], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "OLL 22", algorithm: "R U2' R2' U' R2 U' R2' U2' R",
        setup_algorithm: "R' U2 R2 U R2' U R2 U2' R'",
        recognition: { pattern: "Cross shape (Pi or Wheel). No corners oriented. Headlights on one side, side-facing yellow stickers on the other.", holding_orientation: "Hold the headlights on the left face." },
        diagram: { top_face: [[0,1,0],[1,1,1],[0,1,0]], top_edge: [0,0,1], right_edge: [0,0,0], bottom_edge: [0,0,1], left_edge: [1,0,1] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R2'", finger_trick: "Double wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R2", finger_trick: "Double wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R2'", finger_trick: "Double wrist turn downwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R", finger_trick: "Wrist turn upwards" }
        ]
      },
      {
        name: "OLL 23", algorithm: "R2 D R' U2 R D' R' U2 R'",
        setup_algorithm: "R U2 R D R' U2 R D' R2'",
        recognition: { pattern: "Cross shape. No corners oriented. Headlights on one side, opposite-facing stickers on the other.", holding_orientation: "Hold the headlights on the front face." },
        diagram: { top_face: [[0,1,0],[1,1,1],[0,1,0]], top_edge: [0,0,0], right_edge: [1,0,0], bottom_edge: [1,0,1], left_edge: [0,0,1] },
        moves_breakdown: [
          { move: "R2", finger_trick: "Double wrist turn upwards" },
          { move: "D", finger_trick: "Left ring finger push from the back" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U2", finger_trick: "Double flick using right index finger then middle finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "D'", finger_trick: "Left ring finger pull from the front" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U2", finger_trick: "Double flick using right index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "OLL 24", algorithm: "R' F' r U R U' r' F",
        setup_algorithm: "F' r U R' U' r' F R",
        recognition: { pattern: "'T' shape (Chameleon). A 1x3 bar with a center edge pointing outwards. Two unoriented corners have headlights.", holding_orientation: "Hold the T-shape so the headlights are on the left face." },
        diagram: { top_face: [[0,1,0],[1,1,1],[0,1,0]], top_edge: [0,0,0], right_edge: [0,0,0], bottom_edge: [0,0,0], left_edge: [1,0,1] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "r", finger_trick: "Wide wrist turn upwards catching the middle layer" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r'", finger_trick: "Wide wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      },
      {
        name: "OLL 25", algorithm: "F R' F' r U R U' r'",
        setup_algorithm: "r U R' U' r' F R F'",
        recognition: { pattern: "'T' shape (Bowtie). A 1x3 bar with a center edge pointing outwards. Two unoriented corners point out to the sides.", holding_orientation: "Hold the T-shape so the unoriented corners point out towards the front." },
        diagram: { top_face: [[0,1,0],[1,1,1],[0,1,0]], top_edge: [0,0,0], right_edge: [0,0,0], bottom_edge: [1,0,1], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "r", finger_trick: "Wide wrist turn upwards catching the middle layer" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r'", finger_trick: "Wide wrist turn downwards" }
        ]
      }
    ]
  },
  {
    category: "Sune Shapes",
    cases: [
      {
        name: "OLL 26", algorithm: "R U2' R' U' R U' R'",
        setup_algorithm: "R U R' U R U2' R'",
        recognition: { pattern: "Antisune. Yellow cross is solved with only ONE yellow corner facing up. The side yellow stickers form a counter-clockwise pattern.", holding_orientation: "Hold the solved yellow corner on the front-left." },
        diagram: { top_face: [[0,1,0],[1,1,1],[1,1,0]], top_edge: [0,0,1], right_edge: [0,0,1], bottom_edge: [0,0,1], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards (Start in home grip)" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards to finish" }
        ]
      },
      {
        name: "OLL 27", algorithm: "R U R' U R U2' R'",
        setup_algorithm: "R U2' R' U' R U' R'",
        recognition: { pattern: "Sune. Yellow cross is solved with only ONE yellow corner facing up. The side yellow stickers form a clockwise pattern.", holding_orientation: "Hold the solved yellow corner on the front-left." },
        diagram: { top_face: [[0,1,0],[1,1,1],[1,1,0]], top_edge: [1,0,0], right_edge: [0,0,0], bottom_edge: [1,0,0], left_edge: [1,0,0] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards to finish" }
        ]
      }
    ]
  },
  {
    category: "All Corners Oriented",
    cases: [
      {
        name: "OLL 28", algorithm: "R' F R S R' F' R S'",
        setup_algorithm: "S R' F R S' R' F' R",
        recognition: { pattern: "Stealth / Arrow shape. ALL four corners are oriented yellow. Two adjacent edges are oriented, pointing like an arrow.", holding_orientation: "Hold the yellow arrow pointing towards the back-right." },
        diagram: { top_face: [[1,1,1],[0,1,1],[1,0,1]], top_edge: [0,0,0], right_edge: [0,0,0], bottom_edge: [0,1,0], left_edge: [0,1,0] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "S", finger_trick: "Push the middle S-slice downwards with the right index finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "S'", finger_trick: "Push the S-slice back upwards with the left index finger" }
        ]
      }
    ]
  },
  {
    category: "T & C Shapes",
    cases: [
      {
        name: "OLL 33", algorithm: "R U R' U' R' F R F'",
        setup_algorithm: "F R' F' R U R U' R'",
        recognition: { pattern: "T shape. Two unoriented corners pointing forward (headlights).", holding_orientation: "Hold so the yellow headlights face towards you." },
        diagram: { top_face: [[0,1,0],[1,1,1],[0,1,0]], top_edge: [0,0,0], right_edge: [0,0,0], bottom_edge: [1,0,1], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" }
        ]
      },
      {
        name: "OLL 34", algorithm: "f R f' U' r' U' R U M'",
        setup_algorithm: "M U' R' U r U f R' f'",
        recognition: { pattern: "C shape (or U shape). Unoriented corners face outward in opposite directions.", holding_orientation: "Hold the opening of the 'C' facing the right side." },
        diagram: { top_face: [[1,1,0],[1,1,0],[1,1,0]], top_edge: [0,0,1], right_edge: [0,1,0], bottom_edge: [0,0,1], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "f", finger_trick: "Pull the wide front two layers downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "f'", finger_trick: "Push the wide front two layers upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r'", finger_trick: "Wide wrist turn downwards catching the middle layer" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "M'", finger_trick: "Single push upwards from the bottom using right middle finger" }
        ]
      }
    ]
  },
  {
    category: "Fish Shapes",
    cases: [
      {
        name: "OLL 35", algorithm: "R U2' R2' F R F' R U2' R'",
        setup_algorithm: "R U2 R' F R' F' R2 U2 R'",
        recognition: { pattern: "Fish shape (a 2x2 block with a 1x2 block attached). Unoriented corners face in opposite directions.", holding_orientation: "Hold the fish tail pointing towards the back-right." },
        diagram: { top_face: [[1,1,0],[1,1,1],[0,1,0]], top_edge: [0,0,1], right_edge: [0,0,0], bottom_edge: [1,0,0], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R2'", finger_trick: "Double wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards to finish" }
        ]
      }
    ]
  },
  {
    category: "W Shapes",
    cases: [
      {
        name: "OLL 36", algorithm: "r' F' r U' r' F r U R U' r' F",
        setup_algorithm: "F' r U R' U' r' F' r U r' F r",
        recognition: { pattern: "W shape. Yellow stickers form a zigzag 'W' across the top face.", holding_orientation: "Hold the cube so the 'W' starts at the front-left and ends at the back-right." },
        diagram: { top_face: [[0,1,1],[0,1,1],[1,0,0]], top_edge: [1,0,0], right_edge: [0,0,1], bottom_edge: [0,1,1], left_edge: [1,1,0] },
        moves_breakdown: [
          { move: "r'", finger_trick: "Wide wrist turn downwards catching the middle layer" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "r", finger_trick: "Wide wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r'", finger_trick: "Wide wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "r", finger_trick: "Wide wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r'", finger_trick: "Wide wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards to finish" }
        ]
      }
    ]
  },
  {
    category: "T Shapes",
    cases: [
      {
        name: "OLL 45", algorithm: "F R U R' U' F'",
        setup_algorithm: "F U R U' R' F'",
        recognition: { pattern: "T shape. The vertical stem of the T points left/right instead of front/back.", holding_orientation: "Hold the vertical line of the T running down the center, with the extra yellow block on the left face." },
        diagram: { top_face: [[1,1,0],[0,1,0],[1,1,0]], top_edge: [0,0,1], right_edge: [1,1,1], bottom_edge: [1,0,0], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face to finish" }
        ]
      }
    ]
  },
  {
    category: "C Shapes",
    cases: [
      {
        name: "OLL 46", algorithm: "R' U' R' F R F' U R",
        setup_algorithm: "R' U' F R' F' R U R",
        recognition: { pattern: "C shape. A 3x2 block of yellow missing the middle-right edge.", holding_orientation: "Hold the opening of the 'C' facing the right side." },
        diagram: { top_face: [[1,1,0],[1,1,0],[1,1,0]], top_edge: [0,0,1], right_edge: [0,1,0], bottom_edge: [0,0,1], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards to finish" }
        ]
      }
    ]
  },
  {
    category: "Small L Shapes",
    cases: [
      {
        name: "OLL 47", algorithm: "F' L' U' L U L' U' L F",
        setup_algorithm: "F' L' U L U' L' U L F",
        recognition: { pattern: "Small L shape. No corners are oriented.", holding_orientation: "Hold the small L shape so the yellow edges are on the top and left." },
        diagram: { top_face: [[0,1,0],[1,1,0],[0,0,0]], top_edge: [1,0,1], right_edge: [1,1,1], bottom_edge: [1,1,1], left_edge: [1,0,1] },
        moves_breakdown: [
          { move: "F'", finger_trick: "Left index finger pull upwards on the front face" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U'", finger_trick: "Right index finger push" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "U", finger_trick: "Left index finger push" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U'", finger_trick: "Right index finger push" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "F", finger_trick: "Left thumb push downwards to finish" }
        ]
      },
      {
        name: "OLL 48", algorithm: "F R U R' U' R U R' U' F'",
        setup_algorithm: "F R U R' U' R U R' U' F'",
        recognition: { pattern: "Small L shape (mirror of OLL 47). No corners are oriented.", holding_orientation: "Hold the small L shape so the yellow edges are on the top and right." },
        diagram: { top_face: [[0,1,0],[0,1,1],[0,0,0]], top_edge: [1,0,1], right_edge: [1,0,1], bottom_edge: [1,1,1], left_edge: [1,1,1] },
        moves_breakdown: [
          { move: "F", finger_trick: "Right index finger pull downwards on the front face" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F'", finger_trick: "Right thumb push upwards to finish" }
        ]
      }
    ]
  },
  {
    category: "Line Shapes",
    cases: [
      {
        name: "OLL 51", algorithm: "f R U R' U' R U R' U' f'",
        setup_algorithm: "f R U R' U' R U R' U' f'",
        recognition: { pattern: "Line shape. Horizontal yellow line in the center. No corners are oriented.", holding_orientation: "Hold the line horizontally across the top face." },
        diagram: { top_face: [[0,0,0],[1,1,1],[0,0,0]], top_edge: [1,1,1], right_edge: [1,0,1], bottom_edge: [1,1,1], left_edge: [1,0,1] },
        moves_breakdown: [
          { move: "f", finger_trick: "Pull the wide front two layers downwards with the right index finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "f'", finger_trick: "Push the wide front two layers upwards with the right thumb" }
        ]
      },
      {
        name: "OLL 52", algorithm: "R' F' U' F U' R U R' U R",
        setup_algorithm: "R' U' R U' R' U F' U F R",
        recognition: { pattern: "Line shape. Horizontal yellow line in the center. Two corners are oriented.", holding_orientation: "Hold the line vertically, with the unoriented corners on the left." },
        diagram: { top_face: [[0,1,1],[0,1,1],[0,1,1]], top_edge: [1,0,0], right_edge: [0,0,0], bottom_edge: [1,0,0], left_edge: [0,1,0] },
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards on the front face" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards to finish" }
        ]
      }
    ]
  },
  {
    category: "Arrow Shapes",
    cases: [
      {
        name: "OLL 53", algorithm: "r' U2' R U R' U' R U R' U r",
        setup_algorithm: "r' U' R U' R' U R U' R' U2' r",
        recognition: { pattern: "Arrow shape. A 2x2 block connected to an edge and corner.", holding_orientation: "Hold the arrow pointing towards the back-right." },
        diagram: { top_face: [[0,1,1],[0,1,1],[1,1,0]], top_edge: [1,0,0], right_edge: [0,0,1], bottom_edge: [0,0,1], left_edge: [0,1,0] },
        moves_breakdown: [
          { move: "r'", finger_trick: "Wide wrist turn downwards catching the middle layer" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "r", finger_trick: "Wide wrist turn upwards to finish" }
        ]
      },
      {
        name: "OLL 54", algorithm: "r U2' R' U' R U R' U' R U' r'",
        setup_algorithm: "r U R' U R U' R' U R U2' r'",
        recognition: { pattern: "Arrow shape (mirror of OLL 53).", holding_orientation: "Hold the arrow pointing towards the back-left." },
        diagram: { top_face: [[1,1,0],[1,1,0],[0,1,1]], top_edge: [0,0,1], right_edge: [0,1,0], bottom_edge: [1,0,0], left_edge: [1,0,0] },
        moves_breakdown: [
          { move: "r", finger_trick: "Wide wrist turn upwards catching the middle layer" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r'", finger_trick: "Wide wrist turn downwards to finish" }
        ]
      }
    ]
  },
  {
    category: "Big L Shapes",
    cases: [
      {
        name: "OLL 55", algorithm: "R U2' R2' U' R U' R' U2' F R F'",
        setup_algorithm: "F R' F' U2 R U R' U R2 U2' R'",
        recognition: { pattern: "Big L shape. A 3x2 block of yellow missing the top-left corner.", holding_orientation: "Hold the bulk of the yellow shape in the front-right." },
        diagram: { top_face: [[0,1,1],[1,1,1],[0,1,1]], top_edge: [1,0,0], right_edge: [0,0,0], bottom_edge: [1,0,0], left_edge: [0,0,1] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "R2'", finger_trick: "Double wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U2'", finger_trick: "Double flick using left index finger then middle finger" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards to finish" }
        ]
      },
      {
        name: "OLL 56", algorithm: "r' U' r U' R' U R U' R' U R r' U r",
        setup_algorithm: "r' U' r R' U' R U R' U' R U r' U r",
        recognition: { pattern: "Big L shape (mirror of OLL 55).", holding_orientation: "Hold the bulk of the yellow shape in the front-left." },
        diagram: { top_face: [[1,1,0],[1,1,1],[1,1,0]], top_edge: [0,0,1], right_edge: [1,0,0], bottom_edge: [0,0,1], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "r'", finger_trick: "Wide wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r", finger_trick: "Wide wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "r'", finger_trick: "Wide wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "r", finger_trick: "Wide wrist turn upwards to finish" }
        ]
      }
    ]
  },
  {
    category: "H Shapes",
    cases: [
      {
        name: "OLL 57", algorithm: "R U R' U' M' U R U' r'",
        setup_algorithm: "r U R' U' M U R U' R'",
        recognition: { pattern: "H shape. All 4 edges are oriented yellow, but no corners are oriented.", holding_orientation: "Hold so the headlights (unoriented corners) are facing the left and right sides." },
        diagram: { top_face: [[0,1,0],[1,1,1],[0,1,0]], top_edge: [1,0,1], right_edge: [0,0,0], bottom_edge: [1,0,1], left_edge: [0,0,0] },
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "M'", finger_trick: "Single push upwards from the bottom using right middle finger" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "r'", finger_trick: "Wide wrist turn downwards to finish" }
        ]
      }
    ]
  }
];
