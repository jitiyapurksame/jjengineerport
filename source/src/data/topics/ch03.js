// Chapter 3 — Multiplication Thinking
export const ch03 = {
 "ar1": {
  "id": "ar1",
  "chapter": "ch3",
  "strategy": "Arrays",
  "emoji": "🚢",
  "blurb": "Rows and columns show multiplication as a picture — like portholes lined up down the hull.",
  "worked": {
   "model": {
    "type": "array",
    "rows": 4,
    "cols": 6,
    "missing": "product"
   },
   "note": "4 rows of 6 portholes down the hull make an array of 24 — that's 4 × 6."
  },
  "items": [
   {
    "model": {
     "type": "array",
     "rows": 5,
     "cols": 4,
     "missing": "product"
    },
    "solve": {
     "prompt": "5 rows of 4 rivets — what's the total?",
     "accepted": [
      "20"
     ]
    }
   },
   {
    "model": {
     "type": "array",
     "rows": 3,
     "cols": 7,
     "missing": "product"
    },
    "solve": {
     "prompt": "BOSS ROUND: 3 rows of 7 deck lights — what's the total?",
     "accepted": [
      "21"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: An array's ROWS × COLUMNS gives the total — no counting one by one needed.",
   "check": {
    "prompt": "An array has 6 rows and 4 columns. Which finds the total?",
    "options": [
     "6 + 4",
     "6 × 4",
     "6 ÷ 4"
    ],
    "correctIndex": 1,
    "explain": "Rows × columns = total: 6 × 4 = 24."
   }
  },
  "why": {
   "text": "Multiplication IS repeated equal rows — an array just makes that visible. Instead of counting every single porthole one at a time, you count how many are in one row, then how many rows there are, and multiply. Same total, found much faster.",
   "demo": {
    "model": {
     "type": "array",
     "rows": 5,
     "cols": 3,
     "missing": null
    },
    "caption": "Test it: 5 rows of 3 = 15, counted in one multiplication instead of fifteen taps."
   }
  },
  "warmup": {
   "model": {
    "type": "array",
    "rows": 3,
    "cols": 4,
    "missing": "product"
   },
   "solve": {
    "prompt": "3 rows of 4 Mario bricks — what is the total?",
    "accepted": [
     "12"
    ]
   }
  }
 },
 "am1": {
  "id": "am1",
  "chapter": "ch3",
  "strategy": "Area Model",
  "emoji": "🧪",
  "blurb": "Split a number apart, multiply each piece, then add — like dosing a test tube in two easy pours.",
  "worked": {
   "model": {
    "type": "chain",
    "areaParts": [
     80,
     12
    ],
    "steps": [
     {
      "label": "Multiply the tens:",
      "left": "20",
      "op": "×",
      "right": "4",
      "answer": "80"
     },
     {
      "label": "Multiply the ones:",
      "left": "3",
      "op": "×",
      "right": "4",
      "answer": "12"
     },
     {
      "label": "Add the parts:",
      "left": "80",
      "op": "+",
      "right": "12",
      "answer": "92"
     }
    ]
   },
   "note": "23 mL goes into each of 4 test tubes. Split 23 into 20 + 3: (20 × 4) + (3 × 4) = 80 + 12 = 92 mL total."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "areaParts": [
      90,
      12
     ],
     "steps": [
      {
       "label": "Multiply the tens:",
       "left": "30",
       "op": "×",
       "right": "3",
       "answer": "90"
      },
      {
       "label": "Multiply the ones:",
       "left": "4",
       "op": "×",
       "right": "3",
       "answer": "12"
      },
      {
       "label": "Add the parts:",
       "left": "90",
       "op": "+",
       "right": "12",
       "answer": "102"
      }
     ]
    },
    "solve": {
     "prompt": "Use the area model: 34 mL in each of 3 tubes?",
     "accepted": [
      "102"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "areaParts": [
      100,
      30
     ],
     "steps": [
      {
       "label": "Multiply the tens:",
       "left": "20",
       "op": "×",
       "right": "5",
       "answer": "100"
      },
      {
       "label": "Multiply the ones:",
       "left": "6",
       "op": "×",
       "right": "5",
       "answer": "30"
      },
      {
       "label": "Add the parts:",
       "left": "100",
       "op": "+",
       "right": "30",
       "answer": "130"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Use the area model: 26 mL in each of 5 tubes?",
     "accepted": [
      "130"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Split one factor into tens and ones, multiply each part separately, then add the two results together.",
   "check": {
    "prompt": "23 × 4 using the area model — which is the correct split?",
    "options": [
     "(20×4) + (3×4)",
     "(2×4) + (3×4)",
     "(20+4) × 3"
    ],
    "correctIndex": 0,
    "explain": "Split 23 into 20 + 3, multiply each part by 4, then add: 80 + 12 = 92."
   }
  },
  "why": {
   "text": "Multiplication spreads evenly across addition — if a number is split into two parts, multiplying the whole thing is the same as multiplying each part separately and adding the results. It's like painting a wall in two sections: paint each section fully, and you've painted the whole wall.",
   "demo": {
    "model": {
     "type": "chain",
     "areaParts": [
      60,
      12
     ],
     "steps": [
      {
       "label": "Multiply the tens:",
       "left": "20",
       "op": "×",
       "right": "3",
       "answer": "60"
      },
      {
       "label": "Multiply the ones:",
       "left": "4",
       "op": "×",
       "right": "3",
       "answer": "12"
      },
      {
       "label": "Add the parts:",
       "left": "60",
       "op": "+",
       "right": "12",
       "answer": "72"
      }
     ]
    },
    "caption": "Test it: 24 × 3 = (20×3) + (4×3) = 60 + 12 = 72."
   }
  },
  "warmup": {
   "model": {
    "type": "chain",
    "areaParts": [
     60,
     6
    ],
    "steps": [
     {
      "label": "Multiply the tens:",
      "left": "20",
      "op": "×",
      "right": "3",
      "answer": "60"
     },
     {
      "label": "Multiply the ones:",
      "left": "2",
      "op": "×",
      "right": "3",
      "answer": "6"
     },
     {
      "label": "Add the parts:",
      "left": "60",
      "op": "+",
      "right": "6",
      "answer": "66"
     }
    ]
   },
   "solve": {
    "prompt": "Use the area model: 22 mL in each of 3 tubes?",
    "accepted": [
     "66"
    ]
   }
  }
 },
 "nlm1": {
  "id": "nlm1",
  "chapter": "ch3",
  "strategy": "Number Line",
  "emoji": "🍄",
  "blurb": "Skip-count equal jumps to multiply — like collecting coins in identical hops.",
  "worked": {
   "model": {
    "type": "jumpline",
    "min": 0,
    "max": 24,
    "step": 6,
    "start": 0,
    "jumps": [
     {
      "delta": 6
     },
     {
      "delta": 6
     },
     {
      "delta": 6
     },
     {
      "delta": 6
     }
    ]
   },
   "note": "Four jumps of 6 coins: 6, 12, 18, 24. So 4 × 6 = 24."
  },
  "items": [
   {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 15,
     "step": 5,
     "start": 0,
     "jumps": [
      {
       "delta": 5
      },
      {
       "delta": 5
      },
      {
       "delta": 5
      }
     ]
    },
    "solve": {
     "prompt": "Skip-count: 3 jumps of 5 coins?",
     "accepted": [
      "15"
     ]
    }
   },
   {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 20,
     "step": 4,
     "start": 0,
     "jumps": [
      {
       "delta": 4
      },
      {
       "delta": 4
      },
      {
       "delta": 4
      },
      {
       "delta": 4
      },
      {
       "delta": 4
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Skip-count: 5 jumps of 4 coins?",
     "accepted": [
      "20"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Skip-count in equal jumps — the number of jumps times the jump size gives the total.",
   "check": {
    "prompt": "Skip-counting 5, 10, 15, 20 — what multiplication does this show?",
    "options": [
     "4 × 5",
     "5 × 5",
     "4 + 5"
    ],
    "correctIndex": 0,
    "explain": "4 jumps of 5 = 4 × 5 = 20."
   }
  },
  "why": {
   "text": "Multiplication is really just fast, equal-sized skip-counting. Instead of adding the same number over and over, one jump at a time, you count how big each jump is and how many jumps you took, and multiply straight to the answer.",
   "demo": {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 16,
     "step": 4,
     "start": 0,
     "jumps": [
      {
       "delta": 4
      },
      {
       "delta": 4
      },
      {
       "delta": 4
      },
      {
       "delta": 4
      }
     ]
    },
    "caption": "Test it: 4 jumps of 4 = 16, same as 4 × 4."
   }
  },
  "warmup": {
   "model": {
    "type": "jumpline",
    "min": 0,
    "max": 10,
    "step": 2,
    "start": 0,
    "jumps": [
     {
      "delta": 2
     },
     {
      "delta": 2
     },
     {
      "delta": 2
     }
    ]
   },
   "solve": {
    "prompt": "Skip-count: 3 jumps of 2 coins?",
    "accepted": [
     "6"
    ]
   }
  }
 },
 "gr1": {
  "id": "gr1",
  "chapter": "ch3",
  "strategy": "Groups",
  "emoji": "🚢",
  "blurb": "Equal groups added together make a multiplication fact — like passengers loaded evenly into lifeboats.",
  "worked": {
   "model": {
    "type": "groups",
    "groups": 4,
    "each": 5
   },
   "note": "4 lifeboats with 5 passengers each is the same as 4 × 5 = 20."
  },
  "items": [
   {
    "model": {
     "type": "groups",
     "groups": 6,
     "each": 3
    },
    "solve": {
     "prompt": "6 lifeboats with 3 passengers each — how many total?",
     "accepted": [
      "18"
     ]
    }
   },
   {
    "model": {
     "type": "groups",
     "groups": 8,
     "each": 7
    },
    "solve": {
     "prompt": "BOSS ROUND: 8 lifeboats with 7 passengers each — how many total?",
     "accepted": [
      "56"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Equal groups added together = groups × amount-in-each-group.",
   "check": {
    "prompt": "6 lifeboats with 3 passengers each — which multiplication finds the total?",
    "options": [
     "6 × 3",
     "6 + 3",
     "3 ÷ 6"
    ],
    "correctIndex": 0,
    "explain": "groups × each = 6 × 3 = 18."
   }
  },
  "why": {
   "text": "Adding the same group over and over gets slow once there are lots of groups. Multiplication is a shortcut for exactly that repeated addition — count how many groups, count how many in each, and multiply once instead of adding six separate times.",
   "demo": {
    "model": {
     "type": "groups",
     "groups": 5,
     "each": 4
    },
    "caption": "Test it: 5 groups of 4 = 20, one multiplication instead of five additions."
   }
  },
  "warmup": {
   "model": {
    "type": "groups",
    "groups": 4,
    "each": 3
   },
   "solve": {
    "prompt": "4 warp pipes with 3 coins in each — how many coins in total?",
    "accepted": [
     "12"
    ]
   }
  }
 },
 "sc1": {
  "id": "sc1",
  "chapter": "ch3",
  "strategy": "Scaling",
  "emoji": "🧪",
  "blurb": "Make a quantity bigger by a scale factor — like scaling up a recipe for more test tubes.",
  "worked": {
   "model": {
    "type": "scale",
    "original": 5,
    "factor": 3,
    "scaled": 15
   },
   "note": "A 5 mL recipe scaled ×3 becomes 15 mL."
  },
  "items": [
   {
    "model": {
     "type": "scale",
     "original": 8,
     "factor": 2,
     "scaled": 16
    },
    "solve": {
     "prompt": "Scale 8 mL by ×2. What do you get?",
     "accepted": [
      "16"
     ]
    }
   },
   {
    "model": {
     "type": "scale",
     "original": 6,
     "factor": 4,
     "scaled": 24
    },
    "solve": {
     "prompt": "BOSS ROUND: Scale 6 mL by ×4. What do you get?",
     "accepted": [
      "24"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: To scale a quantity, multiply the original by the scale factor.",
   "check": {
    "prompt": "Scale 7 mL by ×3 — which operation finds the answer?",
    "options": [
     "7 × 3",
     "7 + 3",
     "7 ÷ 3"
    ],
    "correctIndex": 0,
    "explain": "original × factor = scaled amount: 7 × 3 = 21."
   }
  },
  "why": {
   "text": "Scaling stretches a quantity by a set multiple, evenly across the whole thing — every part gets the same number of copies. That's exactly what multiplication measures: a scale factor of 3 means the amount now appears 3 times over.",
   "demo": {
    "model": {
     "type": "scale",
     "original": 4,
     "factor": 5,
     "scaled": 20
    },
    "caption": "Test it: 4 mL scaled ×5 = 20 mL."
   }
  },
  "warmup": {
   "model": {
    "type": "scale",
    "original": 4,
    "factor": 2,
    "scaled": 8
   },
   "solve": {
    "prompt": "Scale 4 mL by ×2. What do you get?",
    "accepted": [
     "8"
    ]
   }
  }
 },
 "rt1": {
  "id": "rt1",
  "chapter": "ch3",
  "strategy": "Ratio Thinking",
  "emoji": "🚢",
  "blurb": "Compare two amounts that grow together at a steady rate — like crates and the ropes that always match them.",
  "worked": {
   "model": {
    "type": "chain",
    "ratioVisual": {
     "topVals": [
      4,
      12
     ],
     "bottomVals": [
      3,
      9
     ],
     "topLabel": "Crates",
     "bottomLabel": "Ropes"
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
      "label": "Scale the ropes:",
      "left": "3",
      "op": "×",
      "right": "3",
      "answer": "9"
     }
    ]
   },
   "note": "4 crates need 3 ropes. 12 crates is 3× as many, so ropes scale ×3 too: 3 × 3 = 9."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "ratioVisual": {
      "topVals": [
       2,
       6
      ],
      "bottomVals": [
       5,
       15
      ],
      "missingIndex": 1,
      "side": "bottom",
      "topLabel": "Anchors",
      "bottomLabel": "Lifebuoys"
     },
     "steps": [
      {
       "label": "Find the scale factor:",
       "left": "6",
       "op": "÷",
       "right": "2",
       "answer": "3"
      },
      {
       "label": "Scale the lifebuoys:",
       "left": "5",
       "op": "×",
       "right": "3",
       "answer": "15"
      }
     ]
    },
    "solve": {
     "prompt": "2 anchors need 5 lifebuoys. With 6 anchors, how many lifebuoys?",
     "accepted": [
      "15"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "ratioVisual": {
      "topVals": [
       2,
       12
      ],
      "bottomVals": [
       3,
       18
      ],
      "missingIndex": 1,
      "side": "bottom",
      "topLabel": "Masts",
      "bottomLabel": "Flags"
     },
     "steps": [
      {
       "label": "Find the scale factor:",
       "left": "12",
       "op": "÷",
       "right": "2",
       "answer": "6"
      },
      {
       "label": "Scale the flags:",
       "left": "3",
       "op": "×",
       "right": "6",
       "answer": "18"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: 2 masts need 3 flags. With 12 masts, how many flags?",
     "accepted": [
      "18"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Find how many times bigger one side grew, then scale the other side by that exact same factor.",
   "check": {
    "prompt": "4 crates need 3 ropes. If crates grow to 12 (×3), how do ropes scale?",
    "options": [
     "×3 too, so 9 ropes",
     "+3, so 6 ropes",
     "Stays at 3 ropes"
    ],
    "correctIndex": 0,
    "explain": "Both sides of a ratio scale by the same factor: ropes × 3 = 9."
   }
  },
  "why": {
   "text": "A ratio is a fixed partnership — whatever multiple one side grows by, the other side must grow by exactly the same multiple to stay balanced. It's like a recipe where doubling the flour means doubling the sugar too, or the whole thing falls apart.",
   "demo": {
    "model": {
     "type": "chain",
     "ratioVisual": {
      "topVals": [
       3,
       9
      ],
      "bottomVals": [
       2,
       6
      ],
      "topLabel": "Anchors",
      "bottomLabel": "Chains"
     },
     "steps": [
      {
       "label": "Find the scale factor:",
       "left": "9",
       "op": "÷",
       "right": "3",
       "answer": "3"
      },
      {
       "label": "Scale the chains:",
       "left": "2",
       "op": "×",
       "right": "3",
       "answer": "6"
      }
     ]
    },
    "caption": "Test it: 3 anchors need 2 chains. 9 anchors (×3) need 6 chains (×3)."
   }
  },
  "warmup": {
   "model": {
    "type": "chain",
    "ratioVisual": {
     "topVals": [
      1,
      3
     ],
     "bottomVals": [
      4,
      12
     ],
     "missingIndex": 1,
     "side": "bottom",
     "topLabel": "Anchors",
     "bottomLabel": "Lifebuoys"
    },
    "steps": [
     {
      "label": "Find the scale factor:",
      "left": "3",
      "op": "÷",
      "right": "1",
      "answer": "3"
     },
     {
      "label": "Scale the lifebuoys:",
      "left": "4",
      "op": "×",
      "right": "3",
      "answer": "12"
     }
    ]
   },
   "solve": {
    "prompt": "1 anchor needs 4 lifebuoys. With 3 anchors, how many lifebuoys?",
    "accepted": [
     "12"
    ]
   }
  }
 }
};
