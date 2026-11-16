// Chapter 6 — Fraction Sense
export const ch06 = {
 "fb1": {
  "id": "fb1",
  "chapter": "ch6",
  "strategy": "Benchmark Fractions",
  "emoji": "🧪",
  "blurb": "Compare a fraction to landmarks like 0, 1/2, and 1 — like checking a fill line against key marks on a flask.",
  "worked": {
   "model": {
    "type": "choice",
    "number": 0.875,
    "numberLabel": "7/8",
    "options": [
     0,
     0.5,
     1
    ],
    "optionLabels": [
     "0",
     "1/2",
     "1"
    ],
    "correctIndex": 2,
    "unit": "benchmarkFrac"
   },
   "note": "A test tube filled to 7/8 is very close to completely full — much closer to 1 than to 1/2 or 0."
  },
  "items": [
   {
    "model": {
     "type": "choice",
     "number": 0.125,
     "numberLabel": "1/8",
     "options": [
      0,
      0.5,
      1
     ],
     "optionLabels": [
      "0",
      "1/2",
      "1"
     ],
     "correctIndex": 0
    },
    "solve": {
     "prompt": "A flask is filled to 1/8 — is that closest to 0, 1/2, or 1?",
     "accepted": [
      "0"
     ]
    }
   },
   {
    "model": {
     "type": "choice",
     "number": 0.625,
     "numberLabel": "5/8",
     "options": [
      0,
      0.5,
      1
     ],
     "optionLabels": [
      "0",
      "1/2",
      "1"
     ],
     "correctIndex": 1
    },
    "solve": {
     "prompt": "BOSS ROUND: A beaker is filled to 5/8 — is that closest to 0, 1/2, or 1?",
     "accepted": [
      "1/2",
      "0.5",
      ".5"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Compare the fraction's decimal value to the three landmarks 0, 1/2, and 1 — pick whichever landmark is the shortest distance away.",
   "check": {
    "prompt": "3/8 — which landmark is it closest to?",
    "options": [
     "0",
     "1/2",
     "1"
    ],
    "correctIndex": 1,
    "explain": "3/8 = 0.375, which is only 0.125 from 1/2 but 0.375 from 0 — 1/2 is closer."
   }
  },
  "why": {
   "text": "A fraction's size can be measured just like a whole number's — check its distance to the three main landmarks (empty, half full, completely full) and pick the nearest one. This works because fractions are points on the very same number line whole numbers live on, just squeezed between 0 and 1.",
   "demo": {
    "model": {
     "type": "choice",
     "number": 0.3,
     "numberLabel": "3/10",
     "options": [
      0,
      0.5,
      1
     ],
     "optionLabels": [
      "0",
      "1/2",
      "1"
     ],
     "correctIndex": 0
    },
    "caption": "Test it: 3/10 = 0.3, much closer to 0 than to 1/2."
   }
  },
  "warmup": {
   "model": {
    "type": "choice",
    "number": 0.9,
    "numberLabel": "9/10",
    "options": [
     0,
     0.5,
     1
    ],
    "optionLabels": [
     "0",
     "1/2",
     "1"
    ],
    "correctIndex": 2
   },
   "solve": {
    "prompt": "A flask is filled to 9/10. Is that closest to 0, 1/2, or 1?",
    "accepted": [
     "1"
    ]
   }
  }
 },
 "fnl1": {
  "id": "fnl1",
  "chapter": "ch6",
  "strategy": "Number Line",
  "emoji": "🚢",
  "blurb": "Place a fraction at the correct spot by counting equal parts — like marking sections along a hull blueprint.",
  "worked": {
   "model": {
    "type": "jumpline",
    "fracDen": 8,
    "min": 0,
    "max": 8,
    "step": 1,
    "start": 0,
    "jumps": [
     {
      "delta": 5
     }
    ]
   },
   "note": "The engineer marks 5 equal sections along an 8-section hull blueprint: that lands on 5/8."
  },
  "items": [
   {
    "model": {
     "type": "jumpline",
     "fracDen": 6,
     "min": 0,
     "max": 6,
     "step": 1,
     "start": 0,
     "jumps": [
      {
       "delta": 4
      }
     ]
    },
    "solve": {
     "prompt": "Mark 4 equal sections along a 6-section deck plan. What fraction is that?",
     "accepted": [
      "4/6",
      "2/3"
     ]
    }
   },
   {
    "model": {
     "type": "jumpline",
     "fracDen": 4,
     "min": 0,
     "max": 4,
     "step": 1,
     "start": 0,
     "jumps": [
      {
       "delta": 3
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Mark 3 equal sections along a 4-section funnel. What fraction is that?",
     "accepted": [
      "3/4"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Count how many equal parts the whole is split into (the denominator), then count how many parts you've moved (the numerator) — that's your position, numerator/denominator.",
   "check": {
    "prompt": "A number line is split into 5 equal parts, and you land on the 3rd mark. What fraction is that?",
    "options": [
     "3/5",
     "5/3",
     "3/3"
    ],
    "correctIndex": 0,
    "explain": "parts moved / total parts = 3/5."
   }
  },
  "why": {
   "text": "A fraction on a number line is a precise address — the denominator tells you how many equal steps fit in the whole, and the numerator tells you how many of those steps you've taken. It works because every equal part is exactly the same size, so counting them is as reliable as counting whole numbers.",
   "demo": {
    "model": {
     "type": "jumpline",
     "fracDen": 5,
     "min": 0,
     "max": 5,
     "step": 1,
     "start": 0,
     "jumps": [
      {
       "delta": 2
      }
     ]
    },
    "caption": "Test it: 2 steps out of 5 equal parts = 2/5."
   }
  },
  "warmup": {
   "model": {
    "type": "jumpline",
    "fracDen": 4,
    "min": 0,
    "max": 4,
    "step": 1,
    "start": 0,
    "jumps": [
     {
      "delta": 3
     }
    ]
   },
   "solve": {
    "prompt": "Mark 3 equal sections along a 4-section deck plan. What fraction is that?",
    "accepted": [
     "3/4"
    ]
   }
  }
 },
 "feq1": {
  "id": "feq1",
  "chapter": "ch6",
  "strategy": "Equivalent Fractions",
  "emoji": "🍄",
  "blurb": "Different-looking fractions can shade the exact same amount — like a half-full level bar split into more, smaller blocks.",
  "worked": {
   "model": {
    "type": "fracequiv",
    "a": 1,
    "b": 2,
    "d": 4
   },
   "note": "A level bar shaded 1/2 looks the same as one shaded 2/4 — they're equivalent."
  },
  "items": [
   {
    "model": {
     "type": "fracequiv",
     "a": 2,
     "b": 3,
     "d": 6
    },
    "solve": {
     "prompt": "2/3 = ?/6. What's the missing numerator?",
     "accepted": [
      "4"
     ]
    }
   },
   {
    "model": {
     "type": "fracequiv",
     "a": 3,
     "b": 4,
     "d": 8
    },
    "solve": {
     "prompt": "BOSS ROUND: 3/4 = ?/8. What's the missing numerator?",
     "accepted": [
      "6"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Multiply (or divide) BOTH the numerator and denominator by the same number — the fraction's value never changes.",
   "check": {
    "prompt": "1/3 = ?/9. What do you multiply the numerator by?",
    "options": [
     "×3, so 3/9",
     "×9, so 9/9",
     "+3, so 4/9"
    ],
    "correctIndex": 0,
    "explain": "9 ÷ 3 = 3, so multiply both top and bottom by 3: 1/3 = 3/9."
   }
  },
  "why": {
   "text": "Multiplying the top and bottom by the same number is really just multiplying by a disguised form of 1 (like 2/2 or 3/3), and multiplying by 1 never changes a value. You're re-cutting the same amount into smaller pieces — more pieces, same total shaded.",
   "demo": {
    "model": {
     "type": "fracequiv",
     "a": 1,
     "b": 4,
     "d": 8
    },
    "caption": "Test it: 1/4 and 2/8 shade the exact same amount — just cut into more pieces."
   }
  },
  "warmup": {
   "model": {
    "type": "fracequiv",
    "a": 1,
    "b": 2,
    "d": 4
   },
   "solve": {
    "prompt": "Mario's power bar: 1/2 = ?/4. What's the missing numerator?",
    "accepted": [
     "2"
    ]
   }
  }
 },
 "fcp1": {
  "id": "fcp1",
  "chapter": "ch6",
  "strategy": "Comparing Fractions",
  "emoji": "🚢",
  "blurb": "Use the bar pictures to see which fraction covers more — like comparing how full two fuel tanks are.",
  "worked": {
   "model": {
    "type": "fraccompare",
    "a": {
     "num": 1,
     "den": 3
    },
    "b": {
     "num": 1,
     "den": 2
    },
    "correct": "b"
   },
   "note": "Tank B is filled to 1/2, Tank A to 1/3. 1/2 covers more of the bar, so Tank B has more fuel."
  },
  "items": [
   {
    "model": {
     "type": "fraccompare",
     "a": {
      "num": 3,
      "den": 4
     },
     "b": {
      "num": 5,
      "den": 8
     },
     "correct": "a"
    },
    "solve": {
     "prompt": "Which fuel tank has more: 3/4 full or 5/8 full?",
     "accepted": [
      "3/4"
     ]
    }
   },
   {
    "model": {
     "type": "fraccompare",
     "a": {
      "num": 2,
      "den": 3
     },
     "b": {
      "num": 3,
      "den": 5
     },
     "correct": "a"
    },
    "solve": {
     "prompt": "BOSS ROUND: Which fuel tank has more: 2/3 full or 3/5 full?",
     "accepted": [
      "2/3"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: To compare fractions, picture them as bars of the same length — whichever bar is shaded MORE is the bigger fraction.",
   "check": {
    "prompt": "Which is bigger: 2/5 or 3/5?",
    "options": [
     "3/5, because more parts are shaded out of the same 5",
     "2/5, because 2 is a smaller number",
     "They're equal"
    ],
    "correctIndex": 0,
    "explain": "Same denominator means same-size parts, so more shaded parts (3 vs 2) means the bigger fraction."
   }
  },
  "why": {
   "text": "A fraction always describes a piece of the SAME whole. Lining up two bars of identical length and shading each fraction lets you see directly which one covers more — no calculation needed, just a visual comparison.",
   "demo": {
    "model": {
     "type": "fraccompare",
     "a": {
      "num": 1,
      "den": 2
     },
     "b": {
      "num": 2,
      "den": 5
     },
     "correct": "a"
    },
    "caption": "Test it: 1/2 covers more of the bar than 2/5 — you can see it directly."
   }
  },
  "warmup": {
   "model": {
    "type": "fraccompare",
    "a": {
     "num": 1,
     "den": 2
    },
    "b": {
     "num": 1,
     "den": 4
    },
    "correct": "a"
   },
   "solve": {
    "prompt": "Which fuel tank has more: 1/2 full or 1/4 full?",
    "accepted": [
     "1/2"
    ]
   }
  }
 },
 "fpc1": {
  "id": "fpc1",
  "chapter": "ch6",
  "strategy": "Percent Connections",
  "emoji": "🧪",
  "decimalHint": true,
  "blurb": "Every fraction has a percent twin — like reading a solution's strength as a concentration percent.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Divide to get a decimal:",
      "left": "1",
      "op": "÷",
      "right": "4",
      "answer": "0.25"
     },
     {
      "label": "Multiply by 100 for percent:",
      "left": "0.25",
      "op": "×",
      "right": "100",
      "answer": "25"
     }
    ]
   },
   "note": "A solution that's 1/4 concentrated = 0.25 = 25%."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Divide to get a decimal:",
       "left": "3",
       "op": "÷",
       "right": "4",
       "answer": "0.75"
      },
      {
       "label": "Multiply by 100 for percent:",
       "left": "0.75",
       "op": "×",
       "right": "100",
       "answer": "75"
      }
     ]
    },
    "solve": {
     "prompt": "What percent concentration is 3/4?",
     "accepted": [
      "75",
      "75%"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Divide to get a decimal:",
       "left": "1",
       "op": "÷",
       "right": "5",
       "answer": "0.2"
      },
      {
       "label": "Multiply by 100 for percent:",
       "left": "0.2",
       "op": "×",
       "right": "100",
       "answer": "20"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: What percent concentration is 1/5?",
     "accepted": [
      "20",
      "20%"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Divide the numerator by the denominator to get a decimal, then multiply by 100 to get the percent.",
   "check": {
    "prompt": "Turn 2/5 into a percent — what's the first step?",
    "options": [
     "2 ÷ 5 = 0.4",
     "5 ÷ 2 = 2.5",
     "2 × 5 = 10"
    ],
    "correctIndex": 0,
    "explain": "Divide numerator by denominator first: 2 ÷ 5 = 0.4, then × 100 = 40%."
   }
  },
  "why": {
   "text": "A percent is just a fraction with a denominator of 100 in disguise. Dividing gives you the decimal 'address' of the fraction on the 0-to-1 line, and multiplying by 100 relabels that same address using hundredths instead — same amount, different units, like reading a ruler in cm instead of mm.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Divide to get a decimal:",
       "left": "3",
       "op": "÷",
       "right": "5",
       "answer": "0.6"
      },
      {
       "label": "Multiply by 100 for percent:",
       "left": "0.6",
       "op": "×",
       "right": "100",
       "answer": "60"
      }
     ]
    },
    "caption": "Test it: 3/5 → 0.6 → 60%."
   }
  },
  "warmup": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Divide to get a decimal:",
      "left": "1",
      "op": "÷",
      "right": "2",
      "answer": "0.5"
     },
     {
      "label": "Multiply by 100 for percent:",
      "left": "0.5",
      "op": "×",
      "right": "100",
      "answer": "50"
     }
    ]
   },
   "solve": {
    "prompt": "What percent concentration is 1/2?",
    "accepted": [
     "50",
     "50%"
    ]
   }
  }
 }
};
