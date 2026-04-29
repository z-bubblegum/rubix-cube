// F2L Data - 41 First Two Layers cases, organized by category
const F2L_DATA = [
  {
    category: "Basic Inserts",
    cases: [
      {
        name: "F2L 1", algorithm: "R U' R'",
        setup_algorithm: "R U R'",
        recognition: "Edge is solved. Corner is in the U layer, white facing right.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 2", algorithm: "F' U F",
        setup_algorithm: "F' U' F",
        recognition: "Edge is solved. Corner is in the U layer, white facing front.",
        moves_breakdown: [
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      },
      {
        name: "F2L 3", algorithm: "F' U' F",
        setup_algorithm: "F' U F",
        recognition: "Edge is solved. Corner is in the U layer, white facing up.",
        moves_breakdown: [
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      },
      {
        name: "F2L 4", algorithm: "R U R'",
        setup_algorithm: "R U' R'",
        recognition: "Edge is solved. Corner is in the U layer, white facing up, positioned back-right.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      }
    ]
  },
  {
    category: "Corner In Slot",
    cases: [
      {
        name: "F2L 5", algorithm: "R U R' U2 R U' R'",
        setup_algorithm: "R U R' U2' R U' R'",
        recognition: "Corner is solved. Edge is in the U layer, correctly oriented.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U2", finger_trick: "Right index then middle double flick" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 6", algorithm: "F' L' U' L U2' F",
        setup_algorithm: "F' U2 L' U L F",
        recognition: "Corner is solved. Edge is in the U layer, incorrectly oriented.",
        moves_breakdown: [
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "U2'", finger_trick: "Left index then middle double flick" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      }
    ]
  },
  {
    category: "Pieces In Slot",
    cases: [
      {
        name: "F2L 12", algorithm: "R U' R' U R U' R' U2 R U' R'",
        setup_algorithm: "R U R' U2' R U R' U' R U R'",
        recognition: "Both pieces in slot, flipped/twisted.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U2", finger_trick: "Right index then middle double flick" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 13", algorithm: "F' L' U L U' L' U2 L F",
        setup_algorithm: "F' L' U2' L U L' U' L F",
        recognition: "Both pieces in slot, edge flipped.",
        moves_breakdown: [
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U2", finger_trick: "Right index then middle double flick" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      },
      {
        name: "F2L 14", algorithm: "R U' R' U R U R'",
        setup_algorithm: "R U' R' U' R U R'",
        recognition: "Both pieces in slot, corner twisted.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      }
    ]
  },
  {
    category: "Edge In Slot",
    cases: [
      {
        name: "F2L 15", algorithm: "S' R U R' S R U2' R'",
        setup_algorithm: "R U2 R' S' R U' R' S",
        recognition: "Corner solved, edge stuck in wrong slot.",
        moves_breakdown: [
          { move: "S'", finger_trick: "Left index pull slice upwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "S", finger_trick: "Right index push slice downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Left double flick" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 16", algorithm: "R U' R' U2 F' U' F",
        setup_algorithm: "F' U F U2' R U R'",
        recognition: "Edge stuck in slot, corner in U layer.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U2", finger_trick: "Right double flick" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      },
      {
        name: "F2L 17", algorithm: "R U2' R' U' R U R'",
        setup_algorithm: "R U' R' U R U2 R'",
        recognition: "Edge stuck in slot, corner in U layer.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Left double flick" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 18", algorithm: "R' F R F' R U' R' U R U' R'",
        setup_algorithm: "R U R' U' R U R' F R' F' R",
        recognition: "Edge stuck in slot, corner in U layer.",
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      }
    ]
  },
  {
    category: "Connected Pairs",
    cases: [
      {
        name: "F2L 9", algorithm: "R2' U' f R' f' R2",
        setup_algorithm: "R2' f R f' U R2",
        recognition: "Both in U layer. White faces right, matching colors on top. Touching.",
        moves_breakdown: [
          { move: "R2'", finger_trick: "Double wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "f", finger_trick: "Wide front pull downwards" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "f'", finger_trick: "Wide front push upwards" },
          { move: "R2", finger_trick: "Double wrist turn upwards" }
        ]
      },
      {
        name: "F2L 21", algorithm: "R U R' U R U' R'",
        setup_algorithm: "R U R' U' R U' R'",
        recognition: "Both in U layer, same colors on top.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 22", algorithm: "F' L' U2 L F",
        setup_algorithm: "F' L' U2' L F",
        recognition: "Both in U layer, same colors on top.",
        moves_breakdown: [
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U2", finger_trick: "Right double flick" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      },
      {
        name: "F2L 27", algorithm: "R U' R' U R U' R'",
        setup_algorithm: "R U R' U' R U R'",
        recognition: "Both in U layer, same colors on top.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 28", algorithm: "F' L' U2 L U' F",
        setup_algorithm: "F' U L' U2' L F",
        recognition: "Both in U layer, same colors on top.",
        moves_breakdown: [
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U2", finger_trick: "Right double flick" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F", finger_trick: "Right index pull downwards" }
        ]
      },
      {
        name: "F2L 30", algorithm: "R U R' U' R U R'",
        setup_algorithm: "R U' R' U R U' R'",
        recognition: "Both in U layer, same colors on top.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 35", algorithm: "R U' R' U' F' U' F",
        setup_algorithm: "F' U F U R U R'",
        recognition: "Both in U layer, same colors on top.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      },
      {
        name: "F2L 36", algorithm: "F' U' F U' R U R'",
        setup_algorithm: "R U' R' U F' U F",
        recognition: "Both in U layer, same colors on top.",
        moves_breakdown: [
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F", finger_trick: "Right index pull downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 37", algorithm: "R' F R F' R U' R' U R U' R' U2 R U' R'",
        setup_algorithm: "R U R' U2' R U R' U' R U R' F R' F' R",
        recognition: "Both in U layer, same colors on top. (Long sequence).",
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist down" },
          { move: "F", finger_trick: "Right index pull down" },
          { move: "R", finger_trick: "Wrist up" },
          { move: "F'", finger_trick: "Right thumb push up" },
          { move: "R", finger_trick: "Wrist up" },
          { move: "U'", finger_trick: "Left index pull" },
          { move: "R'", finger_trick: "Wrist down" },
          { move: "U", finger_trick: "Right index push" },
          { move: "R", finger_trick: "Wrist up" },
          { move: "U'", finger_trick: "Left index pull" },
          { move: "R'", finger_trick: "Wrist down" },
          { move: "U2", finger_trick: "Right double flick" },
          { move: "R", finger_trick: "Wrist up" },
          { move: "U'", finger_trick: "Left index pull" },
          { move: "R'", finger_trick: "Wrist down" }
        ]
      },
      {
        name: "F2L 38", algorithm: "R U' R' U' R U R' U2 R U' R'",
        setup_algorithm: "R U R' U2' R U' R' U R U R'",
        recognition: "Both in U layer, same colors on top.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U2", finger_trick: "Right double flick" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 39", algorithm: "R U' R' U R U' R' U R U' R'",
        setup_algorithm: "R U R' U' R U R' U' R U R'",
        recognition: "Both in U layer, same colors on top.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      }
    ]
  },
  {
    category: "Disconnected Pairs",
    cases: [
      {
        name: "F2L 7", algorithm: "R U2' R' U2 R U' R'",
        setup_algorithm: "R U R' U2' R U2 R'",
        recognition: "Both in U layer. White faces right, opposite colors on top.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Left index then middle double flick" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U2", finger_trick: "Right index then middle double flick" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 8", algorithm: "F' U2' L' U L U' F",
        setup_algorithm: "F' U L' U' L U2 F",
        recognition: "Both in U layer. White faces front, opposite colors on top.",
        moves_breakdown: [
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U2'", finger_trick: "Left index then middle double flick" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      },
      {
        name: "F2L 10", algorithm: "R U' R' U' R U R'",
        setup_algorithm: "R U' R' U R U R'",
        recognition: "Both in U layer. White faces up, edge matches front center.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 11", algorithm: "F' U L' U2 L U2' F",
        setup_algorithm: "F' U2 L' U2' L U' F",
        recognition: "Both in U layer. White faces up, edge matches right center.",
        moves_breakdown: [
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U2", finger_trick: "Right index then middle double flick" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "U2'", finger_trick: "Left index then middle double flick" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      },
      {
        name: "F2L 19", algorithm: "R U2' R' U R U' R'",
        setup_algorithm: "R U R' U' R U2 R'",
        recognition: "Both in U layer, opposite colors on top.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U2'", finger_trick: "Left double flick" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 20", algorithm: "R U' R2' F R F' R U' R'",
        setup_algorithm: "R U R' F R' F' R2 U R'",
        recognition: "Both in U layer, white faces up.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R2'", finger_trick: "Double wrist turn downwards" },
          { move: "F", finger_trick: "Right index pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 23", algorithm: "R U' R' U' R U' R' U R U' R'",
        setup_algorithm: "R U R' U' R U R' U R U R'",
        recognition: "Both in U layer, opposite colors on top.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 24", algorithm: "F U R U' R' F' R U' R'",
        setup_algorithm: "R U R' F R U R' U' F'",
        recognition: "Both in U layer, opposite colors on top.",
        moves_breakdown: [
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 25", algorithm: "R' F R F' R U R'",
        setup_algorithm: "R U' R' F R' F' R",
        recognition: "Both in U layer, opposite colors on top.",
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 26", algorithm: "R U' R' F R' F' R",
        setup_algorithm: "R' F R F' R U R'",
        recognition: "Both in U layer, opposite colors on top.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index pull downwards" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R", finger_trick: "Wrist turn upwards" }
        ]
      },
      {
        name: "F2L 29", algorithm: "R' F R F' R' F R F'",
        setup_algorithm: "F R' F' R F R' F' R",
        recognition: "Both in U layer, opposite colors on top.",
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" }
        ]
      },
      {
        name: "F2L 31", algorithm: "R' F R F' R U' R'",
        setup_algorithm: "R U R' F R' F' R",
        recognition: "Both in U layer, opposite colors on top.",
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F", finger_trick: "Right index pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 32", algorithm: "F' U L' U' L U' F",
        setup_algorithm: "F' U L' U L U' F",
        recognition: "Both in U layer, opposite colors on top.",
        moves_breakdown: [
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      },
      {
        name: "F2L 33", algorithm: "R U' R' U2 R U' R'",
        setup_algorithm: "R U R' U2' R U R'",
        recognition: "Both in U layer, white faces up.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "U2", finger_trick: "Right double flick" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 34", algorithm: "R' D' R U R' D R",
        setup_algorithm: "R' D' R U' R' D R",
        recognition: "Both in U layer, white faces up.",
        moves_breakdown: [
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "D'", finger_trick: "Right ring finger pull from front" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "D", finger_trick: "Right ring finger push from back" },
          { move: "R", finger_trick: "Wrist turn upwards" }
        ]
      },
      {
        name: "F2L 40", algorithm: "F' L' U2 L F R U R'",
        setup_algorithm: "R U' R' F' L' U2' L F",
        recognition: "Both in U layer, opposite colors on top.",
        moves_breakdown: [
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U2", finger_trick: "Right double flick" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" },
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U", finger_trick: "Right index finger push" },
          { move: "R'", finger_trick: "Wrist turn downwards" }
        ]
      },
      {
        name: "F2L 41", algorithm: "R U' R' F' L' U2 L F",
        setup_algorithm: "F' L' U2' L F R U R'",
        recognition: "Both in U layer, opposite colors on top.",
        moves_breakdown: [
          { move: "R", finger_trick: "Wrist turn upwards" },
          { move: "U'", finger_trick: "Left index finger pull" },
          { move: "R'", finger_trick: "Wrist turn downwards" },
          { move: "F'", finger_trick: "Right thumb push upwards" },
          { move: "L'", finger_trick: "Left wrist turn downwards" },
          { move: "U2", finger_trick: "Right double flick" },
          { move: "L", finger_trick: "Left wrist turn upwards" },
          { move: "F", finger_trick: "Right index finger pull downwards" }
        ]
      }
    ]
  }
];
