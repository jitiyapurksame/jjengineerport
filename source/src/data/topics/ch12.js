// Chapter 12 — Visual Strategies Capstone
export const ch12 = {
 "bm1": {
  "id": "bm1",
  "chapter": "ch12",
  "strategy": "Bar Model: Part-Whole",
  "emoji": "🚢",
  "blurb": "Draw the whole as one bar split into parts — a number bond you can see.",
  "worked": {
   "model": {
    "type": "bondweb",
    "whole": 85,
    "a": 37,
    "b": 48,
    "missing": null
   },
   "note": "The ship carries 85 passengers total. 37 are in First Class. The bar model shows the rest (Economy) is 85 − 37 = 48."
  },
  "items": [
   {
    "model": {
     "type": "bondweb",
     "whole": 120,
     "a": 45,
     "b": 75,
     "missing": "b"
    },
    "solve": {
     "prompt": "120 crates total, 45 are coal. How many are cargo (the rest)?",
     "accepted": [
      "75"
     ]
    }
   },
   {
    "model": {
     "type": "bondweb",
     "whole": 96,
     "a": 58,
     "b": 38,
     "missing": "b"
    },
    "solve": {
     "prompt": "BOSS ROUND: 96 coins total collected, 58 from blocks. How many from enemies (the rest)?",
     "accepted": [
      "38"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Draw the WHOLE as one bar split into parts — if you know the whole and one part, the other part is whole minus that part, exactly like a number bond.",
   "check": {
    "prompt": "A bar model shows a whole of 60, split into a known part of 25 and an unknown part. What's the unknown?",
    "options": [
     "60−25=35",
     "60+25=85",
     "25−60=−35"
    ],
    "correctIndex": 0,
    "explain": "whole − known part = unknown part: 60 − 25 = 35."
   }
  },
  "why": {
   "text": "A bar model is just a number bond drawn as a picture — the visual makes the whole-minus-part relationship impossible to miss, because you can literally see the missing chunk of the bar. Every part-whole word problem, no matter how it's worded, reduces to this exact same picture.",
   "demo": {
    "model": {
     "type": "bondweb",
     "whole": 54,
     "a": 29,
     "b": 25,
     "missing": null
    },
    "caption": "Test it: whole 54 splits into 29 and 25 — draw it as one bar, two parts."
   }
  }
 },
 "bm2": {
  "id": "bm2",
  "chapter": "ch12",
  "strategy": "Bar Model: Comparison",
  "emoji": "🚢",
  "blurb": "Two bars side by side — the gap between them is the difference, found by counting up.",
  "worked": {
   "model": {
    "type": "jumpline",
    "min": 0,
    "max": 55,
    "step": 1,
    "start": 28,
    "jumps": [
     {
      "delta": 2
     },
     {
      "delta": 15
     },
     {
      "delta": 5
     }
    ]
   },
   "note": "Cargo Hold A holds 28 tonnes, Coal Bunker B holds 50 tonnes. Count up from 28 to 50 to find the gap: 22 tonnes more."
  },
  "items": [
   {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 65,
     "step": 1,
     "start": 34,
     "jumps": [
      {
       "delta": 6
      },
      {
       "delta": 20
      }
     ]
    },
    "solve": {
     "prompt": "Deck A carries 34 passengers, Deck B carries 60. How many more does Deck B carry?",
     "accepted": [
      "26"
     ]
    }
   },
   {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 55,
     "step": 1,
     "start": 19,
     "jumps": [
      {
       "delta": 1
      },
      {
       "delta": 30
      },
      {
       "delta": 2
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Flask A holds 19 mL, Flask B holds 52 mL. How many more mL does Flask B hold?",
     "accepted": [
      "33"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Draw two bars side by side — the difference between them is the length of the leftover piece on the longer bar, found by counting up from the shorter to the longer.",
   "check": {
    "prompt": "Bar A is 40, Bar B is 65. What's the difference?",
    "options": [
     "Count up from 40 to 65 = 25",
     "65+40=105",
     "65×40"
    ],
    "correctIndex": 0,
    "explain": "The difference is the gap between the two bars: 65 − 40 = 25."
   }
  },
  "why": {
   "text": "A comparison bar model makes subtraction visible — instead of computing an abstract 65−40, you can literally see the leftover chunk that makes Bar B longer than Bar A. It's the exact same counting-up strategy from Chapter 2's Difference Strategy, just drawn as two bars instead of a number line.",
   "demo": {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 40,
     "step": 1,
     "start": 17,
     "jumps": [
      {
       "delta": 3
      },
      {
       "delta": 15
      }
     ]
    },
    "caption": "Test it: from 17 to 35 is a gap of 18 — the leftover chunk on the longer bar."
   }
  }
 },
 "bm3": {
  "id": "bm3",
  "chapter": "ch12",
  "strategy": "Bar Model: Multi-Step",
  "emoji": "🚢",
  "blurb": "Solve one bar at a time — find the missing part first, then apply the second operation to it.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Find the unknown part first:",
      "left": "90",
      "op": "−",
      "right": "34",
      "answer": "56"
     },
     {
      "label": "Then find half of it:",
      "left": "56",
      "op": "÷",
      "right": "2",
      "answer": "28"
     }
    ]
   },
   "note": "90 total crew and passengers, 34 are crew. The rest (56) splits evenly between two lifeboats: 28 each."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find the unknown part first:",
       "left": "70",
       "op": "−",
       "right": "22",
       "answer": "48"
      },
      {
       "label": "Then find half of it:",
       "left": "48",
       "op": "÷",
       "right": "2",
       "answer": "24"
      }
     ]
    },
    "solve": {
     "prompt": "70 total, 22 are officers. The rest splits evenly between 2 shifts. How many per shift?",
     "accepted": [
      "24"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find the unknown part first:",
       "left": "100",
       "op": "−",
       "right": "34",
       "answer": "66"
      },
      {
       "label": "Then split into 3 equal pipes:",
       "left": "66",
       "op": "÷",
       "right": "3",
       "answer": "22"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: 100 total coins, 34 in blocks. The rest splits evenly among 3 pipes. How many per pipe?",
     "accepted": [
      "22"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Solve multi-step bar models one bar at a time — find the missing PART first with subtraction, then apply the second operation (splitting, scaling) to that result.",
   "check": {
    "prompt": "80 total, 20 are reserved. The rest splits evenly into 4 groups. What's the first step?",
    "options": [
     "80−20=60 to find the remaining part",
     "80÷4=20 first",
     "20×4=80 first"
    ],
    "correctIndex": 0,
    "explain": "Always find the missing bar-part first (80−20=60), then apply the second step to that result."
   }
  },
  "why": {
   "text": "Multi-step bar models work by chaining together strategies you already know, one bar at a time — first a part-whole bar (subtraction), then a sharing or scaling bar on whatever's left. Nothing here is new math; it's stacking two familiar moves in the right order, like connecting two finished blueprint sections into one build.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find the unknown part first:",
       "left": "60",
       "op": "−",
       "right": "18",
       "answer": "42"
      },
      {
       "label": "Then find half of it:",
       "left": "42",
       "op": "÷",
       "right": "2",
       "answer": "21"
      }
     ]
    },
    "caption": "Test it: 60 total, 18 known, rest is 42 — split in half for 21 each."
   }
  }
 },
 "capstone1": {
  "id": "capstone1",
  "chapter": "ch12",
  "strategy": "Final Capstone Challenge",
  "emoji": "🚢",
  "blurb": "Stack every strategy in the book — percent, subtraction, and ratio — one familiar move at a time.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Find 25% (machinery):",
      "left": "200",
      "op": "÷",
      "right": "4",
      "answer": "50"
     },
     {
      "label": "Find the rest:",
      "left": "200",
      "op": "−",
      "right": "50",
      "answer": "150"
     },
     {
      "label": "Find one ratio part (÷5):",
      "left": "150",
      "op": "÷",
      "right": "5",
      "answer": "30"
     },
     {
      "label": "Scale Deck A's 3 parts:",
      "left": "30",
      "op": "×",
      "right": "3",
      "answer": "90"
     }
    ]
   },
   "note": "The ship's manifest lists 200 crates. 25% are machinery (50). The rest (150) splits 3:2 between Deck A and Deck B — 5 total parts, 30 each. Deck A's 3 parts = 90 crates."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find 10% (machinery):",
       "left": "240",
       "op": "÷",
       "right": "10",
       "answer": "24"
      },
      {
       "label": "Find the rest:",
       "left": "240",
       "op": "−",
       "right": "24",
       "answer": "216"
      },
      {
       "label": "Find one ratio part (÷3):",
       "left": "216",
       "op": "÷",
       "right": "3",
       "answer": "72"
      },
      {
       "label": "Scale Deck A's 2 parts:",
       "left": "72",
       "op": "×",
       "right": "2",
       "answer": "144"
      }
     ]
    },
    "solve": {
     "prompt": "240 crates total. 10% are machinery. The rest splits 2:1 between Deck A and Deck B. How many crates on Deck A?",
     "accepted": [
      "144"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find 20% (water):",
       "left": "500",
       "op": "÷",
       "right": "5",
       "answer": "100"
      },
      {
       "label": "Find the rest:",
       "left": "500",
       "op": "−",
       "right": "100",
       "answer": "400"
      },
      {
       "label": "Find one ratio part (÷4):",
       "left": "400",
       "op": "÷",
       "right": "4",
       "answer": "100"
      },
      {
       "label": "Scale the main solution's 3 parts:",
       "left": "100",
       "op": "×",
       "right": "3",
       "answer": "300"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: 500 mL of mixture. 20% is water. The rest splits 3:1 between the main solution and a catalyst. How many mL is the main solution?",
     "accepted": [
      "300"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Big multi-strategy problems are just several familiar moves stacked in order — find each piece step by step (percent, then subtraction, then ratio), and never try to solve it all in one jump.",
   "check": {
    "prompt": "100 total, 20% removed, the rest split 1:1. What's the very first move?",
    "options": [
     "Find 20% of 100 = 20",
     "Split 100 into two halves first",
     "Subtract 1 from 1"
    ],
    "correctIndex": 0,
    "explain": "Always work through the steps in the order given: find the percent first, then handle what's left."
   }
  },
  "why": {
   "text": "Every strategy in this book — number bonds, percent shortcuts, ratio scaling, bar models — is really the same handful of moves: split a whole, scale a part, or compare two amounts. A big word problem just means using more than one of those moves back-to-back, in the right order. That's not a new kind of math — it's the same toolkit, just used more than once on the same job, exactly like an engineer combining blueprints, chemistry, and load calculations on a single build.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find 25% removed:",
       "left": "160",
       "op": "÷",
       "right": "4",
       "answer": "40"
      },
      {
       "label": "Find the rest:",
       "left": "160",
       "op": "−",
       "right": "40",
       "answer": "120"
      },
      {
       "label": "Find one ratio part (÷4):",
       "left": "120",
       "op": "÷",
       "right": "4",
       "answer": "30"
      },
      {
       "label": "Scale the 3-part side:",
       "left": "30",
       "op": "×",
       "right": "3",
       "answer": "90"
      }
     ]
    },
    "caption": "Test it: 160 total, 25% removed (40), rest is 120, split 3:1 → the 3-part side is 90. Four familiar moves, one big problem."
   }
  }
 }
};
