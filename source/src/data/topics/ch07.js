// Chapter 7 — Decimal Sense
export const ch07 = {
 "dpv1": {
  "id": "dpv1",
  "chapter": "ch7",
  "strategy": "Place Value",
  "emoji": "🧪",
  "blurb": "Each digit after the decimal point has its own place — like reading a precise lab scale.",
  "worked": {
   "model": {
    "type": "judgechoice",
    "statement": "A lab scale reads 3.72 g. What place is the digit 7 in?",
    "options": [
     "Ones",
     "Tenths",
     "Hundredths"
    ],
    "correctIndex": 1
   },
   "note": "7 is right after the decimal point — that's the tenths place."
  },
  "items": [
   {
    "model": {
     "type": "judgechoice",
     "statement": "A scale reads 5.68 g. What place is the digit 8 in?",
     "options": [
      "Ones",
      "Tenths",
      "Hundredths"
     ],
     "correctIndex": 2
    },
    "solve": {
     "prompt": "What is the value of the 8 in 5.68 g?",
     "accepted": [
      "0.08",
      ".08"
     ]
    }
   },
   {
    "model": {
     "type": "judgechoice",
     "statement": "A beaker holds 12.4 mL. What place is the digit 4 in?",
     "options": [
      "Ones",
      "Tenths",
      "Hundredths"
     ],
     "correctIndex": 1
    },
    "solve": {
     "prompt": "BOSS ROUND: What is the value of the 4 in 12.4 mL?",
     "accepted": [
      "0.4",
      ".4"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Each place after the decimal point is 10× smaller than the one before it — tenths, then hundredths, then thousandths.",
   "check": {
    "prompt": "In 4.56, what place is the 6 in?",
    "options": [
     "Tenths",
     "Hundredths",
     "Ones"
    ],
    "correctIndex": 1,
    "explain": "The second digit after the decimal point is the hundredths place."
   }
  },
  "why": {
   "text": "Decimal places keep shrinking by a factor of 10 for the same reason whole-number places grow by a factor of 10 — the whole place-value system is built on repeated ×10 steps, just running in the opposite direction past the decimal point. Once you know tenths are 10× smaller than ones, hundredths are just 10× smaller again.",
   "demo": {
    "model": {
     "type": "judgechoice",
     "statement": "In the number 7.29, what place is the digit 9 in?",
     "options": [
      "Ones",
      "Tenths",
      "Hundredths"
     ],
     "correctIndex": 2
    },
    "caption": "Test it: 9 is the second digit after the point — hundredths."
   }
  }
 },
 "dnl1": {
  "id": "dnl1",
  "chapter": "ch7",
  "strategy": "Decimal Number Line",
  "emoji": "🍄",
  "blurb": "Counting tenths and hundredths on a line makes decimals concrete — like reading a power gauge.",
  "worked": {
   "model": {
    "type": "jumpline",
    "decScale": 10,
    "min": 0,
    "max": 10,
    "step": 1,
    "start": 0,
    "jumps": [
     {
      "delta": 7
     }
    ]
   },
   "note": "The power gauge fills to 7 tenths from empty: that lands on 0.7."
  },
  "items": [
   {
    "model": {
     "type": "jumpline",
     "decScale": 10,
     "min": 0,
     "max": 10,
     "step": 1,
     "start": 0,
     "jumps": [
      {
       "delta": 4
      }
     ]
    },
    "solve": {
     "prompt": "What decimal did the gauge land on?",
     "accepted": [
      "0.4",
      ".4"
     ]
    }
   },
   {
    "model": {
     "type": "jumpline",
     "decScale": 100,
     "min": 0,
     "max": 100,
     "step": 25,
     "start": 0,
     "jumps": [
      {
       "delta": 25
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: What decimal did the gauge land on?",
     "accepted": [
      "0.25",
      ".25"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Count the tenths (or hundredths) marks from 0 to find exactly where a decimal sits on the line.",
   "check": {
    "prompt": "A gauge line has marks at 0.1 intervals. Landing on the 6th mark means what decimal?",
    "options": [
     "0.6",
     "6.0",
     "0.06"
    ],
    "correctIndex": 0,
    "explain": "6 marks of 0.1 each = 0.6."
   }
  },
  "why": {
   "text": "A decimal number line works exactly like a whole-number line, just with smaller steps — instead of counting by 1s, you're counting by 0.1s or 0.01s. Landing on a mark is still just counting how many equal steps you've taken from zero.",
   "demo": {
    "model": {
     "type": "jumpline",
     "decScale": 10,
     "min": 0,
     "max": 10,
     "step": 1,
     "start": 0,
     "jumps": [
      {
       "delta": 3
      }
     ]
    },
    "caption": "Test it: 3 tenths from 0 lands on 0.3."
   }
  }
 },
 "dcp1": {
  "id": "dcp1",
  "chapter": "ch7",
  "strategy": "Comparing Decimals",
  "emoji": "🚢",
  "blurb": "Line up the place values to see which decimal is bigger — like comparing two fuel gauge readings.",
  "worked": {
   "model": {
    "type": "judgechoice",
    "statement": "Which fuel gauge reads more: 0.45 or 0.6?",
    "options": [
     "0.45",
     "0.6"
    ],
    "correctIndex": 1
   },
   "note": "0.6 = 0.60, which is more than 0.45."
  },
  "items": [
   {
    "model": {
     "type": "judgechoice",
     "statement": "Which hull-thickness reading is bigger: 0.7 or 0.68?",
     "options": [
      "0.7",
      "0.68"
     ],
     "correctIndex": 0
    },
    "solve": {
     "prompt": "Type the bigger decimal.",
     "accepted": [
      "0.7",
      ".7"
     ]
    }
   },
   {
    "model": {
     "type": "judgechoice",
     "statement": "Which depth reading is bigger: 1.2 or 1.09?",
     "options": [
      "1.2",
      "1.09"
     ],
     "correctIndex": 0
    },
    "solve": {
     "prompt": "BOSS ROUND: Type the bigger decimal.",
     "accepted": [
      "1.2"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Line up the decimal points, fill in missing places with zeros, then compare digit by digit from the left.",
   "check": {
    "prompt": "Compare 0.5 and 0.45 — which is bigger?",
    "options": [
     "0.5, since 0.5 = 0.50 and 50 > 45",
     "0.45, since 45 > 5",
     "They're equal"
    ],
    "correctIndex": 0,
    "explain": "Fill 0.5 as 0.50, then compare: 50 hundredths beats 45 hundredths."
   }
  },
  "why": {
   "text": "Comparing decimals goes wrong when people compare digit-COUNT instead of place-value — 0.45 LOOKS bigger than 0.5 because it has more digits, but it isn't. Filling in the missing zero (0.50) lines up the same place values so you're comparing fairly: tenths to tenths, hundredths to hundredths.",
   "demo": {
    "model": {
     "type": "judgechoice",
     "statement": "Which is bigger: 0.8 or 0.75?",
     "options": [
      "0.8",
      "0.75"
     ],
     "correctIndex": 0
    },
    "caption": "Test it: 0.8 = 0.80, and 80 hundredths beats 75 hundredths."
   }
  }
 },
 "dp101": {
  "id": "dp101",
  "chapter": "ch7",
  "strategy": "Multiplying by Powers of 10",
  "emoji": "🧪",
  "decimalHint": true,
  "blurb": "×10 shifts every digit one place to the left — like scaling up a recipe for a bigger batch.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "×10 shifts every digit one place left:",
      "left": "3.4",
      "op": "×",
      "right": "10",
      "answer": "34"
     }
    ]
   },
   "note": "3.4 mL scaled ×10 for a bigger batch = 34 mL."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "×10 shifts every digit one place left:",
       "left": "2.7",
       "op": "×",
       "right": "10",
       "answer": "27"
      }
     ]
    },
    "solve": {
     "prompt": "Scale 2.7 mL by ×10. What do you get?",
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
       "label": "×100 shifts every digit two places left:",
       "left": "0.5",
       "op": "×",
       "right": "100",
       "answer": "50"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Scale 0.5 mL by ×100. What do you get?",
     "accepted": [
      "50"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: ×10 shifts every digit one place to the LEFT (bigger). ×100 shifts two places left. The decimal point looks like it 'moves' right, but really the digits are moving left.",
   "check": {
    "prompt": "What happens to 0.6 when you multiply by 10?",
    "options": [
     "Every digit shifts one place left: 6",
     "Add a zero: 0.60",
     "Nothing changes"
    ],
    "correctIndex": 0,
    "explain": "×10 shifts every digit one place left: 0.6 becomes 6."
   }
  },
  "why": {
   "text": "Multiplying by 10 makes every digit worth 10× more, and the only way a digit's VALUE can become 10× bigger without changing which digit it is, is for it to shift one whole place to the left — from hundredths to tenths, tenths to ones, and so on. The decimal point just marks where 'ones' is; the digits are what actually move.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "×10 shifts every digit one place left:",
       "left": "1.2",
       "op": "×",
       "right": "10",
       "answer": "12"
      }
     ]
    },
    "caption": "Test it: 1.2 × 10 = 12 — every digit shifts one place left."
   }
  }
 }
};
