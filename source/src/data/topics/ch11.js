// Chapter 11 — Algebraic Thinking
export const ch11 = {
 "uk1": {
  "id": "uk1",
  "chapter": "ch11",
  "strategy": "Unknowns as Boxes",
  "emoji": "🚢",
  "blurb": "A box (or letter) standing in for a missing number — solved exactly like a number bond.",
  "worked": {
   "model": {
    "type": "bondweb",
    "whole": 15,
    "a": 9,
    "b": 6,
    "missing": null
   },
   "note": "A crate weighs □ kg plus 9 kg of ballast, totaling 15 kg. The box (unknown) is 15 − 9 = 6 kg."
  },
  "items": [
   {
    "model": {
     "type": "bondweb",
     "whole": 22,
     "a": 14,
     "b": 8,
     "missing": "b"
    },
    "solve": {
     "prompt": "Solve for the box: □ + 14 = 22",
     "accepted": [
      "8"
     ]
    }
   },
   {
    "model": {
     "type": "bondweb",
     "whole": 40,
     "a": 17,
     "b": 23,
     "missing": "b"
    },
    "solve": {
     "prompt": "BOSS ROUND: A flask holds □ mL plus 17 mL of solvent, totaling 40 mL. Solve for the box.",
     "accepted": [
      "23"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: An unknown box in an addition equation is found the exact same way as a missing number bond: whole − known part = the box.",
   "check": {
    "prompt": "Solve □ + 12 = 30. What's the move?",
    "options": [
     "30 − 12 = 18",
     "30 + 12 = 42",
     "12 − 30 = −18"
    ],
    "correctIndex": 0,
    "explain": "whole − known part = box: 30 − 12 = 18."
   }
  },
  "why": {
   "text": "A box (or a letter like x) is just a placeholder for a missing number bond — algebra doesn't introduce a new rule here, it just gives the missing part a name you can write down and solve for. Every 'solve for x' addition problem you'll ever see starts from this exact same number-bond idea.",
   "demo": {
    "model": {
     "type": "bondweb",
     "whole": 18,
     "a": 7,
     "b": 11,
     "missing": null
    },
    "caption": "Test it: □ + 7 = 18 → □ = 11, same move as any number bond."
   }
  }
 },
 "bal1": {
  "id": "bal1",
  "chapter": "ch11",
  "strategy": "Balance & Equality",
  "emoji": "🚢",
  "blurb": "The = sign means both sides weigh the same — like a balance scale that must stay level.",
  "worked": {
   "model": {
    "type": "judgechoice",
    "statement": "A balance scale shows 8+5 on one side. Which keeps it balanced on the other side?",
    "options": [
     "9+4",
     "10+2",
     "13+1"
    ],
    "correctIndex": 0,
    "visual": {
     "kind": "scale",
     "left": [
      8,
      5
     ],
     "right": [
      null
     ],
     "tilt": "level"
    }
   },
   "note": "8 + 5 = 13. 9 + 4 also equals 13, so it balances the scale."
  },
  "items": [
   {
    "model": {
     "type": "judgechoice",
     "statement": "Balance scale: 6+9 on one side. Which balances it?",
     "options": [
      "7+8",
      "10+5",
      "6+8"
     ],
     "correctIndex": 0,
     "visual": {
      "kind": "scale",
      "left": [
       6,
       9
      ],
      "right": [
       null
      ],
      "tilt": "level"
     }
    },
    "solve": {
     "prompt": "What number does 6+9 equal (that both sides must match)?",
     "accepted": [
      "15"
     ]
    }
   },
   {
    "model": {
     "type": "judgechoice",
     "statement": "BOSS ROUND: Coin scale shows 12+7 on one side. Which balances it?",
     "options": [
      "10+9",
      "15+5",
      "11+7"
     ],
     "correctIndex": 0,
     "visual": {
      "kind": "scale",
      "left": [
       12,
       7
      ],
      "right": [
       null
      ],
      "tilt": "level"
     }
    },
    "solve": {
     "prompt": "BOSS ROUND: What number does 12+7 equal?",
     "accepted": [
      "19"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: The = sign means BOTH sides must have the exact same total value — whatever you do to balance one side, the other side must match exactly.",
   "check": {
    "prompt": "Does 9+6 = 8+7?",
    "options": [
     "Yes, both equal 15",
     "No, 9+6 is bigger",
     "No, 8+7 is bigger"
    ],
    "correctIndex": 0,
    "explain": "9+6=15 and 8+7=15 — both sides match, so the equation balances."
   }
  },
  "why": {
   "text": "Equality is a balance scale, not an arrow pointing to an answer — both sides must weigh the same. This matters because in algebra you'll do the exact same operation to BOTH sides of an equation to solve it, and that only works if you treat = as 'these two things are equal', not 'compute the left side'.",
   "demo": {
    "model": {
     "type": "judgechoice",
     "statement": "Does 14 = 6+8?",
     "options": [
      "Yes",
      "No"
     ],
     "correctIndex": 0,
     "visual": {
      "kind": "scale",
      "left": [
       14
      ],
      "right": [
       6,
       8
      ],
      "tilt": "level"
     }
    },
    "caption": "Test it: 6+8=14, so the scale balances both ways, no matter which side you write first."
   }
  }
 },
 "var1": {
  "id": "var1",
  "chapter": "ch11",
  "strategy": "Variable Expressions",
  "emoji": "🚢",
  "blurb": "Substitute a number for the letter, then follow the order of operations — the letter is just a labeled blank.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Multiply:",
      "left": "3",
      "op": "×",
      "right": "4",
      "answer": "12"
     },
     {
      "label": "Add:",
      "left": "12",
      "op": "+",
      "right": "2",
      "answer": "14"
     }
    ]
   },
   "note": "The expression 3×n + 2, evaluated at n=4: 3×4=12, then +2=14."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Multiply:",
       "left": "5",
       "op": "×",
       "right": "6",
       "answer": "30"
      },
      {
       "label": "Subtract:",
       "left": "30",
       "op": "−",
       "right": "3",
       "answer": "27"
      }
     ]
    },
    "solve": {
     "prompt": "Evaluate 5×n − 3 when n=6.",
     "accepted": [
      "27"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Multiply:",
       "left": "2",
       "op": "×",
       "right": "9",
       "answer": "18"
      },
      {
       "label": "Add:",
       "left": "18",
       "op": "+",
       "right": "7",
       "answer": "25"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Evaluate 2×n + 7 when n=9.",
     "accepted": [
      "25"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: To evaluate an expression, substitute the given number in place of the letter, then follow the order of operations exactly.",
   "check": {
    "prompt": "Evaluate 4×n + 1 when n=5.",
    "options": [
     "4×5+1 = 21",
     "4+5×1 = 9",
     "4×5×1 = 20"
    ],
    "correctIndex": 0,
    "explain": "Substitute n=5: 4×5=20, then +1=21."
   }
  },
  "why": {
   "text": "A variable is just a labeled blank waiting for a number — 'evaluating' an expression means plugging that number in and computing exactly as written, same order every time. The letter n doesn't do anything special mathematically; it's a placeholder, the same way □ was in earlier chapters, just with a more grown-up name.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Multiply:",
       "left": "3",
       "op": "×",
       "right": "5",
       "answer": "15"
      },
      {
       "label": "Add:",
       "left": "15",
       "op": "+",
       "right": "4",
       "answer": "19"
      }
     ]
    },
    "caption": "Test it: 3×n+4 at n=5 → 15+4=19."
   }
  }
 },
 "ineq1": {
  "id": "ineq1",
  "chapter": "ch11",
  "strategy": "Comparing Expressions",
  "emoji": "🚢",
  "blurb": "Substitute the same number into both expressions, then compare the results directly.",
  "worked": {
   "model": {
    "type": "judgechoice",
    "statement": "At n=4, compare 2×n+1 and 3×n−2. Which is bigger?",
    "options": [
     "Left side",
     "Right side",
     "Equal"
    ],
    "correctIndex": 1,
    "visual": {
     "kind": "boxbars",
     "n": 4,
     "rows": [
      {
       "label": "Left: 2×n+1",
       "k": 2,
       "extra": 1
      },
      {
       "label": "Right: 3×n−2",
       "k": 3,
       "extra": -2
      }
     ]
    }
   },
   "note": "2×4+1=9 and 3×4−2=10. Since 10 > 9, the right side is bigger."
  },
  "items": [
   {
    "model": {
     "type": "judgechoice",
     "statement": "At n=3, compare 5×n and 3×n+8. Which is bigger?",
     "options": [
      "Left side",
      "Right side",
      "Equal"
     ],
     "correctIndex": 1,
     "visual": {
      "kind": "boxbars",
      "n": 3,
      "rows": [
       {
        "label": "Left: 5×n",
        "k": 5,
        "extra": 0
       },
       {
        "label": "Right: 3×n+8",
        "k": 3,
        "extra": 8
       }
      ]
     }
    },
    "solve": {
     "prompt": "What is 3×n+8 at n=3?",
     "accepted": [
      "17"
     ]
    }
   },
   {
    "model": {
     "type": "judgechoice",
     "statement": "BOSS ROUND: At n=6, compare 4×n−5 and 2×n+10. Which is bigger?",
     "options": [
      "Left side",
      "Right side",
      "Equal"
     ],
     "correctIndex": 1,
     "visual": {
      "kind": "boxbars",
      "n": 6,
      "rows": [
       {
        "label": "Left: 4×n−5",
        "k": 4,
        "extra": -5
       },
       {
        "label": "Right: 2×n+10",
        "k": 2,
        "extra": 10
       }
      ]
     }
    },
    "solve": {
     "prompt": "BOSS ROUND: What is 2×n+10 at n=6?",
     "accepted": [
      "22"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: To compare two expressions, substitute the same number into both, compute each side, then compare the results directly.",
   "check": {
    "prompt": "At n=5, compare 2×n and n+8. Which is bigger?",
    "options": [
     "2×n=10, n+8=13, so right is bigger",
     "2×n is always bigger",
     "They're always equal"
    ],
    "correctIndex": 0,
    "explain": "Substitute n=5 into both: 2×5=10 and 5+8=13 — 13 is bigger."
   }
  },
  "why": {
   "text": "Comparing expressions isn't a new skill — it's evaluating both sides (same as Variable Expressions) and then comparing two whole numbers, a skill from way back in Chapter 1's benchmark work. Algebra keeps building on the exact same number sense, just with expressions standing in for numbers until you plug a value in.",
   "demo": {
    "model": {
     "type": "judgechoice",
     "statement": "At n=2, compare 6×n and 4×n+5. Which is bigger?",
     "options": [
      "Left side",
      "Right side",
      "Equal"
     ],
     "correctIndex": 1,
     "visual": {
      "kind": "boxbars",
      "n": 2,
      "rows": [
       {
        "label": "Left: 6×n",
        "k": 6,
        "extra": 0
       },
       {
        "label": "Right: 4×n+5",
        "k": 4,
        "extra": 5
       }
      ]
     }
    },
    "caption": "Test it: at n=2, 6n=12 and 4n+5=13 — the right side edges ahead."
   }
  }
 },
 "alg1": {
  "id": "alg1",
  "chapter": "ch11",
  "strategy": "Translating Word Problems",
  "emoji": "🚢",
  "blurb": "Every phrase hides a matching operation — turn the sentence into an equation you already know how to solve.",
  "worked": {
   "model": {
    "type": "judgechoice",
    "statement": "A crate holds some bolts, plus 5 more were added, making 20 total. Which equation matches?",
    "options": [
     "b+5=20",
     "b−5=20",
     "5×b=20"
    ],
    "correctIndex": 0,
    "visual": {
     "kind": "bar",
     "whole": 20,
     "label": "20 total",
     "segs": [
      {
       "v": 15,
       "text": "?",
       "name": "b bolts"
      },
      {
       "v": 5,
       "text": "5",
       "name": "added"
      }
     ]
    }
   },
   "note": "'Some bolts plus 5 more equals 20' translates directly to b + 5 = 20."
  },
  "items": [
   {
    "model": {
     "type": "judgechoice",
     "statement": "A tank had some fuel, 30 L was pumped out, leaving 45 L. Which equation matches?",
     "options": [
      "f−30=45",
      "f+30=45",
      "30−f=45"
     ],
     "correctIndex": 0,
     "visual": {
      "kind": "bar",
      "whole": 75,
      "label": "f = ?",
      "segs": [
       {
        "v": 45,
        "text": "45",
        "name": "left in tank"
       },
       {
        "v": 30,
        "text": "30",
        "name": "pumped out"
       }
      ]
     }
    },
    "solve": {
     "prompt": "Solve for f: how much fuel was there originally?",
     "accepted": [
      "75"
     ]
    }
   },
   {
    "model": {
     "type": "judgechoice",
     "statement": "BOSS ROUND: A beaker had some solution s, and 3 times that amount was poured in as a second batch, totaling 40 mL combined. Which equation matches?",
     "options": [
      "s+3×s=40",
      "s×3=40",
      "s−3=40"
     ],
     "correctIndex": 0,
     "visual": {
      "kind": "bar",
      "whole": 40,
      "label": "40 mL",
      "segs": [
       {
        "v": 10,
        "text": "s",
        "name": "1st batch"
       },
       {
        "v": 30,
        "text": "s",
        "name": "3 × s (2nd batch)",
        "parts": 3
       }
      ]
     }
    },
    "solve": {
     "prompt": "BOSS ROUND: Solve for s: what was the original amount?",
     "accepted": [
      "10"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Turn each phrase into its matching operation — 'plus/more/total' → +, 'minus/less/taken away' → −, 'times/groups of' → ×, then write the unknown as a letter or box.",
   "check": {
    "prompt": "'A number decreased by 7 equals 15' — which equation matches?",
    "options": [
     "n−7=15",
     "7−n=15",
     "n+7=15"
    ],
    "correctIndex": 0,
    "explain": "'Decreased by' means subtract: the original number minus 7 equals 15."
   }
  },
  "why": {
   "text": "Word problems are just equations wearing sentences — every phrase has a matching operation hiding inside it. Learning to spot those phrase-to-symbol matches means you can turn ANY word problem into something you already know how to solve, instead of guessing at the answer.",
   "demo": {
    "model": {
     "type": "judgechoice",
     "statement": "'12 more than a number equals 30' — which equation matches?",
     "options": [
      "n+12=30",
      "12−n=30",
      "n−12=30"
     ],
     "correctIndex": 0,
     "visual": {
      "kind": "bar",
      "whole": 30,
      "label": "30",
      "segs": [
       {
        "v": 18,
        "text": "?",
        "name": "n"
       },
       {
        "v": 12,
        "text": "12",
        "name": "12 more"
       }
      ]
     }
    },
    "caption": "Test it: 'more than' means add — n+12=30, so n=18."
   }
  }
 }
};
