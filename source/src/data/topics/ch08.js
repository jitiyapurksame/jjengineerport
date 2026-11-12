// Chapter 8 — Percent Sense
export const ch08 = {
 "pc10": {
  "id": "pc10",
  "chapter": "ch8",
  "strategy": "Finding 10%",
  "emoji": "🍄",
  "decimalHint": true,
  "blurb": "Slide the decimal point one place left — like a toll booth taking a slice of your coin stash.",
  "worked": {
   "model": {
    "type": "chain",
    "percentGrid": {
     "percent": 10,
     "why": "100% split into 10 equal strips. Each strip is 10% — that's why ÷10 works."
    },
    "steps": [
     {
      "label": "÷10 for 10%:",
      "left": "240",
      "op": "÷",
      "right": "10",
      "answer": "24"
     }
    ]
   },
   "note": "You have 240 coins. The toll booth takes 10%: 24 coins."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 10,
      "why": "100% split into 10 equal strips. Each strip is 10% — that's why ÷10 works."
     },
     "steps": [
      {
       "label": "÷10 for 10%:",
       "left": "350",
       "op": "÷",
       "right": "10",
       "answer": "35"
      }
     ]
    },
    "solve": {
     "prompt": "The toll booth takes 10% of your 350 coins. How many is that?",
     "accepted": [
      "35"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 10,
      "why": "100% split into 10 equal strips. Each strip is 10% — that's why ÷10 works."
     },
     "steps": [
      {
       "label": "÷10 for 10%:",
       "left": "86",
       "op": "÷",
       "right": "10",
       "answer": "8.6"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: The toll booth takes 10% of your 86 coins. How many is that?",
     "accepted": [
      "8.6"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: To find 10% of any number, just divide by 10 — slide the decimal point one place left.",
   "check": {
    "prompt": "What is 10% of 450?",
    "options": [
     "45",
     "4.5",
     "450"
    ],
    "correctIndex": 0,
    "explain": "Divide by 10: 450 ÷ 10 = 45."
   }
  },
  "why": {
   "text": "100% is the WHOLE amount split into 10 equal strips — each strip is exactly 10%. Dividing by 10 finds the size of just one strip, which is why the ÷10 shortcut works every single time, no matter what the starting number is.",
   "demo": {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 10,
      "why": "100% split into 10 equal strips."
     },
     "steps": [
      {
       "label": "÷10 for 10%:",
       "left": "180",
       "op": "÷",
       "right": "10",
       "answer": "18"
      }
     ]
    },
    "caption": "Test it: 10% of 180 = 18 — one of ten equal strips."
   }
  }
 },
 "pc51": {
  "id": "pc51",
  "chapter": "ch8",
  "strategy": "Finding 5% & 1%",
  "emoji": "🧪",
  "decimalHint": true,
  "blurb": "5% is half of 10%. 1% is a hundredth — like diluting a solution by small, precise amounts.",
  "worked": {
   "model": {
    "type": "chain",
    "percentGrid": {
     "percent": 5,
     "why": "5% is half of a 10% strip — find 10% first, then halve it."
    },
    "steps": [
     {
      "label": "Find 10% first:",
      "left": "240",
      "op": "÷",
      "right": "10",
      "answer": "24"
     },
     {
      "label": "Halve it for 5%:",
      "left": "24",
      "op": "÷",
      "right": "2",
      "answer": "12"
     }
    ]
   },
   "note": "A 240 mL solution needs 5% diluted out: half of 10% (24) is 12 mL."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 5,
      "why": "5% is half of a 10% strip — find 10% first, then halve it."
     },
     "steps": [
      {
       "label": "Find 10% first:",
       "left": "60",
       "op": "÷",
       "right": "10",
       "answer": "6"
      },
      {
       "label": "Halve it for 5%:",
       "left": "6",
       "op": "÷",
       "right": "2",
       "answer": "3"
      }
     ]
    },
    "solve": {
     "prompt": "5% of a 60 mL solution?",
     "accepted": [
      "3"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 1,
      "why": "100% split into 100 tiny squares. Each square is 1% — that's why ÷100 works."
     },
     "steps": [
      {
       "label": "÷100 for 1%:",
       "left": "500",
       "op": "÷",
       "right": "100",
       "answer": "5"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: 1% of a 500 mL solution?",
     "accepted": [
      "5"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: 5% is HALF of 10% — find 10% first, then divide that in half. 1% is a hundredth — divide by 100.",
   "check": {
    "prompt": "To find 5% of 80, what's the first step?",
    "options": [
     "Find 10% of 80 (=8), then halve it (=4)",
     "Multiply 80 by 5",
     "Divide 80 by 5 directly"
    ],
    "correctIndex": 0,
    "explain": "5% is half of 10%: find 10% (8), then halve it (4)."
   }
  },
  "why": {
   "text": "5% sits exactly halfway between 0% and 10%, so it must be exactly half the size of a 10% strip. And since 100% is split into 100 tiny equal squares, each square is worth exactly 1% — dividing by 100 measures one tiny square directly.",
   "demo": {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 5,
      "why": "5% is half of 10%."
     },
     "steps": [
      {
       "label": "Find 10% first:",
       "left": "120",
       "op": "÷",
       "right": "10",
       "answer": "12"
      },
      {
       "label": "Halve it for 5%:",
       "left": "12",
       "op": "÷",
       "right": "2",
       "answer": "6"
      }
     ]
    },
    "caption": "Test it: 5% of 120 = half of 12 = 6."
   }
  }
 },
 "pc257": {
  "id": "pc257",
  "chapter": "ch8",
  "strategy": "25%, 50%, 75%",
  "emoji": "🚢",
  "blurb": "Quarter, half, three-quarters — all built from friendly fractions, like evacuating a deck in stages.",
  "worked": {
   "model": {
    "type": "chain",
    "percentGrid": {
     "percent": 50,
     "why": "100% split into 2 equal halves. Each half is 50% — that's why ÷2 works."
    },
    "steps": [
     {
      "label": "Half for 50%:",
      "left": "240",
      "op": "÷",
      "right": "2",
      "answer": "120"
     }
    ]
   },
   "note": "240 passengers on deck — 50% evacuated first is just half: 120."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 25,
      "why": "100% split into 4 equal quarters. Each quarter is 25% — that's why ÷4 works."
     },
     "steps": [
      {
       "label": "Quarter for 25%:",
       "left": "80",
       "op": "÷",
       "right": "4",
       "answer": "20"
      }
     ]
    },
    "solve": {
     "prompt": "25% of 80 crates loaded?",
     "accepted": [
      "20"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 75,
      "why": "75% is 3 of the 4 quarters — find one quarter, then ×3."
     },
     "steps": [
      {
       "label": "Quarter first:",
       "left": "40",
       "op": "÷",
       "right": "4",
       "answer": "10"
      },
      {
       "label": "×3 for three quarters:",
       "left": "10",
       "op": "×",
       "right": "3",
       "answer": "30"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: 75% of 40 tonnes of coal?",
     "accepted": [
      "30"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: 50% is half, 25% is a quarter, 75% is three quarters — all built from the same friendly fraction splits.",
   "check": {
    "prompt": "What is 75% of 40?",
    "options": [
     "Find 1/4 (10), then ×3 = 30",
     "Find 1/2 (20), then +5",
     "Divide 40 by 75"
    ],
    "correctIndex": 0,
    "explain": "75% = 3 quarters: find one quarter (10), then ×3 = 30."
   }
  },
  "why": {
   "text": "25%, 50%, and 75% are just the fractions 1/4, 1/2, and 3/4 wearing percent labels. Splitting the whole into quarters gives you a building block (25%) that stacks up to make every one of these landmark percentages — 2 quarters make 50%, 3 quarters make 75%.",
   "demo": {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 25,
      "why": "100% split into 4 equal quarters."
     },
     "steps": [
      {
       "label": "Quarter for 25%:",
       "left": "60",
       "op": "÷",
       "right": "4",
       "answer": "15"
      }
     ]
    },
    "caption": "Test it: 25% of 60 = one quarter = 15."
   }
  }
 },
 "pcmix": {
  "id": "pcmix",
  "chapter": "ch8",
  "strategy": "Percent Shortcuts in Action",
  "emoji": "🍄",
  "decimalHint": true,
  "blurb": "Combine 10% and 5% chunks to reach any percent fast — like stacking bonus blocks to boost your score.",
  "worked": {
   "model": {
    "type": "chain",
    "percentGrid": {
     "percent": 15,
     "why": "15% = 10% + 5%, two friendly chunks added together."
    },
    "steps": [
     {
      "label": "Find 10%:",
      "left": "80",
      "op": "÷",
      "right": "10",
      "answer": "8"
     },
     {
      "label": "Find 5% (half of 10%):",
      "left": "8",
      "op": "÷",
      "right": "2",
      "answer": "4"
     },
     {
      "label": "Add them for 15%:",
      "left": "8",
      "op": "+",
      "right": "4",
      "answer": "12"
     }
    ]
   },
   "note": "A bonus block gives 15% extra on 80 coins: 10% + 5% = 8 + 4 = 12 bonus coins."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 20,
      "why": "20% is double 10% — find 10%, then ×2."
     },
     "steps": [
      {
       "label": "Find 10%:",
       "left": "65",
       "op": "÷",
       "right": "10",
       "answer": "6.5"
      },
      {
       "label": "Double it for 20%:",
       "left": "6.5",
       "op": "×",
       "right": "2",
       "answer": "13"
      }
     ]
    },
    "solve": {
     "prompt": "A bonus block gives 20% extra on 65 coins. How many bonus coins?",
     "accepted": [
      "13"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 30,
      "why": "30% is 10% taken three times — find 10%, then ×3."
     },
     "steps": [
      {
       "label": "Find 10%:",
       "left": "90",
       "op": "÷",
       "right": "10",
       "answer": "9"
      },
      {
       "label": "×3 for 30%:",
       "left": "9",
       "op": "×",
       "right": "3",
       "answer": "27"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: A bonus block gives 30% extra on 90 coins. How many bonus coins?",
     "accepted": [
      "27"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Break any percent into friendly 10%, 5%, and 1% chunks, find each chunk, then add them together.",
   "check": {
    "prompt": "To find 15% of a number, which chunks do you add?",
    "options": [
     "10% + 5%",
     "10% + 1%",
     "5% + 5%"
    ],
    "correctIndex": 0,
    "explain": "15% = 10% + 5%, two friendly chunks added together."
   }
  },
  "why": {
   "text": "Percentages add up just like whole numbers do — 15% really is 10% plus 5% of the same amount, because percent is just a way of measuring parts of a whole, and parts can always be combined. Breaking a tricky percent into friendly chunks you already know how to find is the same 'chip away at it' idea as partial quotients.",
   "demo": {
    "model": {
     "type": "chain",
     "percentGrid": {
      "percent": 15,
      "why": "15% = 10% + 5%."
     },
     "steps": [
      {
       "label": "Find 10%:",
       "left": "100",
       "op": "÷",
       "right": "10",
       "answer": "10"
      },
      {
       "label": "Find 5% (half of 10%):",
       "left": "10",
       "op": "÷",
       "right": "2",
       "answer": "5"
      },
      {
       "label": "Add them for 15%:",
       "left": "10",
       "op": "+",
       "right": "5",
       "answer": "15"
      }
     ]
    },
    "caption": "Test it: 15% of 100 = 10 + 5 = 15, split into friendly chunks."
   }
  }
 }
};
