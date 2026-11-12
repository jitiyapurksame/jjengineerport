// Chapter 9 — Ratio Sense
export const ch09 = {
 "rsc1": {
  "id": "rsc1",
  "chapter": "ch9",
  "strategy": "Scaling",
  "emoji": "🧪",
  "blurb": "Scale a recipe up by finding the scale factor first — like scaling a chemical mixture for more samples.",
  "worked": {
   "model": {
    "type": "chain",
    "ratioVisual": {
     "topVals": [
      4,
      12
     ],
     "bottomVals": [
      2,
      6
     ],
     "topLabel": "Samples",
     "bottomLabel": "mL Reagent"
    },
    "steps": [
     {
      "label": "Find the scale factor:",
      "left": "12",
      "op": "÷",
      "right": "4",
      "answer": "3"
     },
     {
      "label": "Scale the reagent:",
      "left": "2",
      "op": "×",
      "right": "3",
      "answer": "6"
     }
    ]
   },
   "note": "12 samples is 3× as many as 4, so reagent scales ×3 too: 6 mL."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "ratioVisual": {
      "topVals": [
       3,
       6
      ],
      "bottomVals": [
       9,
       18
      ],
      "missingIndex": 1,
      "side": "bottom",
      "topLabel": "Samples",
      "bottomLabel": "Drops of Indicator"
     },
     "steps": [
      {
       "label": "Find the scale factor:",
       "left": "6",
       "op": "÷",
       "right": "3",
       "answer": "2"
      },
      {
       "label": "Scale the indicator:",
       "left": "9",
       "op": "×",
       "right": "2",
       "answer": "18"
      }
     ]
    },
    "solve": {
     "prompt": "3 samples need 9 drops of indicator. How many drops for 6 samples?",
     "accepted": [
      "18"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "ratioVisual": {
      "topVals": [
       5,
       15
      ],
      "bottomVals": [
       3,
       9
      ],
      "missingIndex": 1,
      "side": "bottom",
      "topLabel": "Samples",
      "bottomLabel": "mL Catalyst"
     },
     "steps": [
      {
       "label": "Find the scale factor:",
       "left": "15",
       "op": "÷",
       "right": "5",
       "answer": "3"
      },
      {
       "label": "Scale the catalyst:",
       "left": "3",
       "op": "×",
       "right": "3",
       "answer": "9"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: 5 samples need 3 mL catalyst. How many mL for 15 samples?",
     "accepted": [
      "9"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Find how many times bigger the new amount is (the scale factor), then multiply every ingredient by that same factor.",
   "check": {
    "prompt": "A recipe for 4 people needs 2 mL reagent. Scaling to 12 people (×3), how much reagent?",
    "options": [
     "2 × 3 = 6 mL",
     "2 + 3 = 5 mL",
     "2 ÷ 3 mL"
    ],
    "correctIndex": 0,
    "explain": "Scale factor 3 (12÷4), so reagent also ×3: 2 × 3 = 6 mL."
   }
  },
  "why": {
   "text": "A recipe is a fixed ratio between ingredients and people — every ingredient must scale by the exact same factor, or the mixture comes out wrong. Finding the scale factor once and applying it to every part keeps the whole recipe balanced, just bigger.",
   "demo": {
    "model": {
     "type": "chain",
     "ratioVisual": {
      "topVals": [
       6,
       18
      ],
      "bottomVals": [
       4,
       12
      ],
      "topLabel": "Samples",
      "bottomLabel": "mL Solvent"
     },
     "steps": [
      {
       "label": "Find the scale factor:",
       "left": "18",
       "op": "÷",
       "right": "6",
       "answer": "3"
      },
      {
       "label": "Scale the solvent:",
       "left": "4",
       "op": "×",
       "right": "3",
       "answer": "12"
      }
     ]
    },
    "caption": "Test it: 6 samples need 4 mL. Scale to 18 samples (×3): 12 mL."
   }
  }
 },
 "rur1": {
  "id": "rur1",
  "chapter": "ch9",
  "strategy": "Unit Rate",
  "emoji": "🚢",
  "blurb": "Divide to find the value of just one — like the cost of a single lifebelt or the ship's speed.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Divide total by count:",
      "left": "12",
      "op": "÷",
      "right": "4",
      "answer": "3"
     }
    ]
   },
   "note": "$12 buys 4 lifebelts, so each lifebelt costs $12 ÷ 4 = $3."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Divide total by count:",
       "left": "20",
       "op": "÷",
       "right": "5",
       "answer": "4"
      }
     ]
    },
    "solve": {
     "prompt": "$20 buys 5 lifebelts. What's the cost per lifebelt?",
     "accepted": [
      "4"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Divide distance by time:",
       "left": "60",
       "op": "÷",
       "right": "4",
       "answer": "15"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: A ship covers 60 nm in 4 hours. What speed is that (nm per hour)?",
     "accepted": [
      "15"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Divide the total by the count to find the value of just ONE — that's the unit rate.",
   "check": {
    "prompt": "$20 buys 5 lifebelts. What's the cost per lifebelt?",
    "options": [
     "20 ÷ 5 = $4",
     "20 × 5 = $100",
     "20 − 5 = $15"
    ],
    "correctIndex": 0,
    "explain": "total ÷ count = unit rate: 20 ÷ 5 = $4 each."
   }
  },
  "why": {
   "text": "A unit rate answers 'how much for just ONE?' — dividing the total evenly across the count spreads the cost (or distance, or anything) back down to a single unit. It's the same move as sharing, just applied to money or speed instead of objects.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Divide total by count:",
       "left": "18",
       "op": "÷",
       "right": "6",
       "answer": "3"
      }
     ]
    },
    "caption": "Test it: $18 for 6 lifebuoys = $3 each — the unit rate."
   }
  }
 },
 "rdl1": {
  "id": "rdl1",
  "chapter": "ch9",
  "strategy": "Double Number Line",
  "emoji": "🚢",
  "blurb": "Two matching lines show how paired quantities grow together — like hours and nautical miles on a voyage.",
  "worked": {
   "model": {
    "type": "doubleline",
    "topVals": [
     0,
     1,
     2,
     3,
     4
    ],
    "bottomVals": [
     0,
     5,
     10,
     15,
     20
    ],
    "missingIndex": 3,
    "side": "bottom",
    "missingValue": 15,
    "topLabel": "Hours",
    "bottomLabel": "Nautical miles"
   },
   "note": "Every hour adds 5 nm. In 3 hours, that's 15 nm."
  },
  "items": [
   {
    "model": {
     "type": "doubleline",
     "topVals": [
      0,
      1,
      2,
      3
     ],
     "bottomVals": [
      0,
      3,
      6,
      "?"
     ],
     "missingIndex": 3,
     "side": "bottom",
     "missingValue": 9,
     "topLabel": "Crates",
     "bottomLabel": "Rivets"
    },
    "solve": {
     "prompt": "What number completes the bottom row?",
     "accepted": [
      "9"
     ]
    }
   },
   {
    "model": {
     "type": "doubleline",
     "topVals": [
      0,
      "?",
      4,
      6
     ],
     "bottomVals": [
      0,
      7,
      14,
      21
     ],
     "missingIndex": 1,
     "side": "top",
     "missingValue": 2,
     "topLabel": "Hours",
     "bottomLabel": "Nautical miles"
    },
    "solve": {
     "prompt": "BOSS ROUND: What number completes the top row?",
     "accepted": [
      "2"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Whatever step the top row takes, the bottom row takes the matching scaled step — the two lines always move together.",
   "check": {
    "prompt": "Top row goes 0, 1, 2, 3 (hours). Bottom row goes 0, 5, 10, ? (nautical miles). What's missing?",
    "options": [
     "15, since each hour adds 5 nm",
     "10, same as hour 2",
     "20, since 4 hours would give 20"
    ],
    "correctIndex": 0,
    "explain": "Each hour adds 5 nm, so hour 3 gives 15 nm."
   }
  },
  "why": {
   "text": "A double number line works because both rows are locked to the SAME ratio — every step on top corresponds to a matching, scaled step on the bottom. Once you know the ratio between one matching pair, you can find any other pair by scaling both rows by the same amount.",
   "demo": {
    "model": {
     "type": "doubleline",
     "topVals": [
      0,
      1,
      2,
      3
     ],
     "bottomVals": [
      0,
      4,
      8,
      12
     ],
     "missingIndex": 3,
     "side": "bottom",
     "missingValue": 12,
     "topLabel": "Crates",
     "bottomLabel": "Rivets"
    },
    "caption": "Test it: 3 crates need 12 rivets, since each crate takes 4 — top and bottom scale together."
   }
  }
 },
 "rtb1": {
  "id": "rtb1",
  "chapter": "ch9",
  "strategy": "Tables",
  "emoji": "🍄",
  "blurb": "A ratio table lists paired amounts that scale together — like players and coins collected.",
  "worked": {
   "model": {
    "type": "ratiotable",
    "headers": [
     "Players",
     "Coins Collected"
    ],
    "rows": [
     [
      "3",
      "9"
     ],
     [
      "6",
      "?"
     ]
    ],
    "steps": [
     {
      "label": "Find the scale factor:",
      "left": "6",
      "op": "÷",
      "right": "3",
      "answer": "2"
     },
     {
      "label": "Scale the coins:",
      "left": "9",
      "op": "×",
      "right": "2",
      "answer": "18"
     }
    ]
   },
   "note": "6 players is double 3, so coins double too: 18."
  },
  "items": [
   {
    "model": {
     "type": "ratiotable",
     "headers": [
      "Levels Cleared",
      "Power-Ups Found"
     ],
     "rows": [
      [
       "4",
       "20"
      ],
      [
       "8",
       "?"
      ]
     ],
     "steps": [
      {
       "label": "Find the scale factor:",
       "left": "8",
       "op": "÷",
       "right": "4",
       "answer": "2"
      },
      {
       "label": "Scale the power-ups:",
       "left": "20",
       "op": "×",
       "right": "2",
       "answer": "40"
      }
     ]
    },
    "solve": {
     "prompt": "4 levels cleared nets 20 power-ups. How many power-ups after 8 levels?",
     "accepted": [
      "40"
     ]
    }
   },
   {
    "model": {
     "type": "ratiotable",
     "headers": [
      "Hours Played",
      "Coins Earned"
     ],
     "rows": [
      [
       "2",
       "14"
      ],
      [
       "5",
       "?"
      ]
     ],
     "steps": [
      {
       "label": "Find the scale factor:",
       "left": "5",
       "op": "÷",
       "right": "2",
       "answer": "2.5"
      },
      {
       "label": "Scale the coins:",
       "left": "14",
       "op": "×",
       "right": "2.5",
       "answer": "35"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: 2 hours played earns 14 coins. How many coins after 5 hours?",
     "accepted": [
      "35"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: In a ratio table, find how the top row scaled to get to the new row, then scale the bottom row by that exact same amount.",
   "check": {
    "prompt": "Table: 3 players → 9 coins. 6 players → ? coins. What's the move?",
    "options": [
     "6 ÷ 3 = 2, then 9 × 2 = 18",
     "6 + 3 = 9 coins",
     "9 ÷ 3 = 3 coins"
    ],
    "correctIndex": 0,
    "explain": "Scale factor 2 (6÷3), so coins also ×2: 9 × 2 = 18."
   }
  },
  "why": {
   "text": "A ratio table is just several rows of the same fixed ratio, listed side by side. Since every row must keep the SAME relationship between the two columns, finding how one column scaled tells you exactly how much to scale the other column too — no matter which row you're filling in.",
   "demo": {
    "model": {
     "type": "ratiotable",
     "headers": [
      "Players",
      "Coins Collected"
     ],
     "rows": [
      [
       "4",
       "12"
      ],
      [
       "8",
       "?"
      ]
     ],
     "steps": [
      {
       "label": "Find the scale factor:",
       "left": "8",
       "op": "÷",
       "right": "4",
       "answer": "2"
      },
      {
       "label": "Scale the coins:",
       "left": "12",
       "op": "×",
       "right": "2",
       "answer": "24"
      }
     ]
    },
    "caption": "Test it: 4 players collect 12 coins. 8 players (×2) collect 24."
   }
  }
 }
};
