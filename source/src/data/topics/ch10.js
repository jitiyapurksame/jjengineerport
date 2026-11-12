// Chapter 10 — Patterns
export const ch10 = {
 "rp1": {
  "id": "rp1",
  "chapter": "ch10",
  "strategy": "Repeating Patterns",
  "emoji": "🚢",
  "blurb": "Find the smallest repeating chunk to predict what comes next — like a repeating hull marker sequence.",
  "worked": {
   "model": {
    "type": "judgechoice",
    "statement": "The engineer paints hull markers in a repeating pattern: 🔴🔵🔴🔵🔴, ? What comes next?",
    "options": [
     "🔴",
     "🔵",
     "⚪"
    ],
    "correctIndex": 1,
    "visual": {
     "kind": "strip",
     "cells": [
      "🔴",
      "🔵",
      "🔴",
      "🔵",
      "🔴"
     ],
     "unit": 2
    }
   },
   "note": "The pattern repeats every 2 markers: red, blue, red, blue... After red comes blue."
  },
  "items": [
   {
    "model": {
     "type": "judgechoice",
     "statement": "Rivet caps are painted in a pattern: ⚙️⚙️🔧⚙️⚙️🔧⚙️⚙️, ? What comes next?",
     "options": [
      "⚙️",
      "🔧",
      "⭐"
     ],
     "correctIndex": 1,
     "visual": {
      "kind": "strip",
      "cells": [
       "⚙️",
       "⚙️",
       "🔧",
       "⚙️",
       "⚙️",
       "🔧",
       "⚙️",
       "⚙️"
      ],
      "unit": 3
     }
    },
    "solve": {
     "prompt": "The pattern repeats every 3 caps. What comes next?",
     "accepted": [
      "🔧",
      "wrench"
     ]
    }
   },
   {
    "model": {
     "type": "judgechoice",
     "statement": "BOSS ROUND: Warp-block colors repeat: 🟨🟩🟩🟨🟩🟩🟨, ? What comes next?",
     "options": [
      "🟨",
      "🟩"
     ],
     "correctIndex": 1,
     "visual": {
      "kind": "strip",
      "cells": [
       "🟨",
       "🟩",
       "🟩",
       "🟨",
       "🟩",
       "🟩",
       "🟨"
      ],
      "unit": 3
     }
    },
    "solve": {
     "prompt": "BOSS ROUND: The pattern repeats every 3 blocks. What comes next?",
     "accepted": [
      "🟩",
      "green"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Find the smallest repeating chunk (the 'unit'), then count how far into the next unit you are to predict what comes next.",
   "check": {
    "prompt": "A pattern repeats every 2 symbols: ⭐🔺⭐🔺⭐🔺⭐, ? What comes next?",
    "options": [
     "🔺",
     "⭐",
     "A new symbol"
    ],
    "correctIndex": 0,
    "explain": "The unit ⭐🔺 has length 2. After 7 terms you're mid-unit, so the next term completes it: 🔺."
   }
  },
  "why": {
   "text": "Repeating patterns work because the SAME short sequence loops forever — once you know the loop's length and where you are within it, you can predict any position without listing every single term. It's the same idea as a scheduled shift rotation: know the cycle, know your place in it, and you know what's next.",
   "demo": {
    "model": {
     "type": "judgechoice",
     "statement": "A repeating pattern: 🟦🟦🟨🟦🟦🟨🟦🟦, ? What comes next?",
     "options": [
      "🟦",
      "🟨"
     ],
     "correctIndex": 1,
     "visual": {
      "kind": "strip",
      "cells": [
       "🟦",
       "🟦",
       "🟨",
       "🟦",
       "🟦",
       "🟨",
       "🟦",
       "🟦"
      ],
      "unit": 3
     }
    },
    "caption": "Test it: the unit 🟦🟦🟨 repeats — after two 🟦's, a 🟨 always follows."
   }
  }
 },
 "grw1": {
  "id": "grw1",
  "chapter": "ch10",
  "strategy": "Growing Patterns",
  "emoji": "🚢",
  "blurb": "Find the constant amount added each time — like a ship adding the same number of new portholes per deck.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Find the common difference:",
      "left": "7",
      "op": "−",
      "right": "3",
      "answer": "4"
     },
     {
      "label": "Add the difference to the last term:",
      "left": "15",
      "op": "+",
      "right": "4",
      "answer": "19"
     }
    ]
   },
   "note": "The ship adds 4 new portholes to each deck level: 3, 7, 11, 15, ... The next deck has 15 + 4 = 19."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find the common difference:",
       "left": "9",
       "op": "−",
       "right": "5",
       "answer": "4"
      },
      {
       "label": "Add the difference to the last term:",
       "left": "17",
       "op": "+",
       "right": "4",
       "answer": "21"
      }
     ]
    },
    "solve": {
     "prompt": "Rivet counts grow by the same amount each row: 5, 9, 13, 17, ? What's next?",
     "accepted": [
      "21"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find the common difference:",
       "left": "11",
       "op": "−",
       "right": "6",
       "answer": "5"
      },
      {
       "label": "Add the difference to the last term:",
       "left": "21",
       "op": "+",
       "right": "5",
       "answer": "26"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: A titration adds solution in a steady pattern: 6, 11, 16, 21, ? mL. What's next?",
     "accepted": [
      "26"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Find the constant amount added between terms (the common difference), then add it once more to the last term to find what's next.",
   "check": {
    "prompt": "2, 6, 10, 14, ? — what's the common difference and next term?",
    "options": [
     "+4, so next is 18",
     "+2, so next is 16",
     "×2, so next is 28"
    ],
    "correctIndex": 0,
    "explain": "Each term adds 4: 14 + 4 = 18."
   }
  },
  "why": {
   "text": "A growing pattern works because the SAME amount gets added every single step — that constant difference is the engine driving the whole sequence. Once you've measured it once (by subtracting two neighboring terms), you can keep applying it forever, just like a steady production rate on an assembly line.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find the common difference:",
       "left": "9",
       "op": "−",
       "right": "5",
       "answer": "4"
      },
      {
       "label": "Add the difference to the last term:",
       "left": "21",
       "op": "+",
       "right": "4",
       "answer": "25"
      }
     ]
    },
    "caption": "Test it: 5, 9, 13, 17, 21 grows by 4 each time — next is 25."
   }
  }
 },
 "iom1": {
  "id": "iom1",
  "chapter": "ch10",
  "strategy": "Input-Output Machines",
  "emoji": "🚢",
  "blurb": "Apply the same rule to every input, in order — like the engine room's fixed processing rule.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Multiply by the rule:",
      "left": "5",
      "op": "×",
      "right": "2",
      "answer": "10"
     },
     {
      "label": "Then add:",
      "left": "10",
      "op": "+",
      "right": "1",
      "answer": "11"
     }
    ]
   },
   "note": "The engine room's rule is 'input ×2, then +1'. Feed in 5: 5×2=10, 10+1=11 comes out."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Multiply by the rule:",
       "left": "4",
       "op": "×",
       "right": "3",
       "answer": "12"
      },
      {
       "label": "Then add:",
       "left": "12",
       "op": "+",
       "right": "2",
       "answer": "14"
      }
     ]
    },
    "solve": {
     "prompt": "The rule is ×3, then +2. What comes out if you feed in 4?",
     "accepted": [
      "14"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Multiply by the rule:",
       "left": "7",
       "op": "×",
       "right": "2",
       "answer": "14"
      },
      {
       "label": "Then subtract:",
       "left": "14",
       "op": "−",
       "right": "3",
       "answer": "11"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: The rule is ×2, then −3. What comes out if you feed in 7 coins?",
     "accepted": [
      "11"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Apply the SAME rule, in the SAME order, to every input that goes into the machine — the rule never changes, only the number does.",
   "check": {
    "prompt": "The rule is ×4, then −1. What comes out for input 3?",
    "options": [
     "3×4=12, then 12−1=11",
     "3−1=2, then ×4=8",
     "3×4−1 in any order works"
    ],
    "correctIndex": 0,
    "explain": "Apply the rule in order: ×4 first (12), then −1 (11)."
   }
  },
  "why": {
   "text": "A function machine works because it's a fixed procedure, not a fixed answer — the SAME steps run every time, just on different starting numbers. Order matters because ×4 then −1 gives a different result than −1 then ×4, exactly like tightening a bolt before or after painting it changes the outcome.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Multiply by the rule:",
       "left": "6",
       "op": "×",
       "right": "2",
       "answer": "12"
      },
      {
       "label": "Then add:",
       "left": "12",
       "op": "+",
       "right": "3",
       "answer": "15"
      }
     ]
    },
    "caption": "Test it: rule ×2 then +3, input 6 → 15. Same rule, different input, no surprises."
   }
  }
 },
 "tnr1": {
  "id": "tnr1",
  "chapter": "ch10",
  "strategy": "Term Rule",
  "emoji": "🚢",
  "blurb": "Jump straight to any term without listing them all — like calculating a hull section far down the blueprint.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Find how many steps to add:",
      "left": "5",
      "op": "−",
      "right": "1",
      "answer": "4"
     },
     {
      "label": "Multiply steps by the common difference:",
      "left": "4",
      "op": "×",
      "right": "3",
      "answer": "12"
     },
     {
      "label": "Add to the first term:",
      "left": "12",
      "op": "+",
      "right": "2",
      "answer": "14"
     }
    ]
   },
   "note": "A hull section pattern starts at 2 and grows by 3 each time. The 5th section: (5−1) steps × 3 = 12, plus the first term 2 = 14."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find how many steps to add:",
       "left": "6",
       "op": "−",
       "right": "1",
       "answer": "5"
      },
      {
       "label": "Multiply steps by the common difference:",
       "left": "5",
       "op": "×",
       "right": "5",
       "answer": "25"
      },
      {
       "label": "Add to the first term:",
       "left": "25",
       "op": "+",
       "right": "4",
       "answer": "29"
      }
     ]
    },
    "solve": {
     "prompt": "A pattern starts at 4 and grows by 5 each time. What is the 6th term?",
     "accepted": [
      "29"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find how many steps to add:",
       "left": "5",
       "op": "−",
       "right": "1",
       "answer": "4"
      },
      {
       "label": "Multiply steps by the common difference:",
       "left": "4",
       "op": "×",
       "right": "7",
       "answer": "28"
      },
      {
       "label": "Add to the first term:",
       "left": "28",
       "op": "+",
       "right": "3",
       "answer": "31"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: A concentration pattern starts at 3 and grows by 7 each measurement. What is the 5th measurement?",
     "accepted": [
      "31"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: To jump straight to any term, count how many STEPS from the first term (position − 1), multiply by the common difference, then add the first term.",
   "check": {
    "prompt": "Find the 4th term of a pattern starting at 5, growing by 6 each time.",
    "options": [
     "(4−1)×6+5 = 23",
     "4×6+5 = 29",
     "4×5+6 = 26"
    ],
    "correctIndex": 0,
    "explain": "Steps = 4−1 = 3, times the difference 6 = 18, plus the first term 5 = 23."
   }
  },
  "why": {
   "text": "Jumping to any term without listing every single one works because a growing pattern is really just repeated addition — the SAME as multiplication! Instead of adding the difference over and over by hand, you multiply the difference by how many times you'd have added it, then add that onto the starting point in one move.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Find how many steps to add:",
       "left": "6",
       "op": "−",
       "right": "1",
       "answer": "5"
      },
      {
       "label": "Multiply steps by the common difference:",
       "left": "5",
       "op": "×",
       "right": "4",
       "answer": "20"
      },
      {
       "label": "Add to the first term:",
       "left": "20",
       "op": "+",
       "right": "2",
       "answer": "22"
      }
     ]
    },
    "caption": "Test it: start 2, grow by 4 → the 6th term is 22, found in one multiplication instead of five additions."
   }
  }
 },
 "spp1": {
  "id": "spp1",
  "chapter": "ch10",
  "strategy": "Spatial Patterns",
  "emoji": "🚢",
  "blurb": "A growing square pattern's size follows stage × stage — like a growing lattice of support beams.",
  "worked": {
   "model": {
    "type": "array",
    "rows": 3,
    "cols": 3,
    "missing": "product"
   },
   "note": "Blueprint stage 3 of the hull lattice is a 3×3 grid of support beams: 9 beams total."
  },
  "items": [
   {
    "model": {
     "type": "array",
     "rows": 4,
     "cols": 4,
     "missing": "product"
    },
    "solve": {
     "prompt": "Blueprint stage 4 is a 4×4 grid of support beams. How many total?",
     "accepted": [
      "16"
     ]
    }
   },
   {
    "model": {
     "type": "array",
     "rows": 5,
     "cols": 5,
     "missing": "product"
    },
    "solve": {
     "prompt": "BOSS ROUND: Level 5's block grid is 5×5. How many blocks total?",
     "accepted": [
      "25"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: A growing square pattern at stage N has N × N total pieces — the stage number multiplied by itself.",
   "check": {
    "prompt": "Stage 6 of a growing square pattern — how many pieces?",
    "options": [
     "6 × 6 = 36",
     "6 + 6 = 12",
     "6 × 2 = 12"
    ],
    "correctIndex": 0,
    "explain": "A square stage N always has N × N pieces: 6 × 6 = 36."
   }
  },
  "why": {
   "text": "A growing square pattern works because each stage adds a full new row AND a full new column to keep the shape square — and rows × columns is exactly what multiplication measures. This isn't random growth, it's the same array idea from Chapter 3, just relabeled by 'stage number' instead of a fixed count.",
   "demo": {
    "model": {
     "type": "array",
     "rows": 7,
     "cols": 7,
     "missing": null
    },
    "caption": "Test it: stage 7 is a 7×7 grid = 49 pieces — same square-growth rule."
   }
  }
 }
};
