// Chapter 5 — Estimation
export const ch05 = {
 "fe1": {
  "id": "fe1",
  "chapter": "ch5",
  "strategy": "Front-End Estimation",
  "emoji": "🚢",
  "blurb": "Use only the leading digits for a quick estimate — like a fast passenger headcount before the exact tally.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Keep just the leading digits:",
      "left": "4000",
      "op": "+",
      "right": "3000",
      "answer": "7000"
     }
    ]
   },
   "note": "Deck A has 4128 passengers, Deck B has 3872. Quick estimate: 4000 + 3000 ≈ 7000."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Keep just the leading digits:",
       "left": "5000",
       "op": "+",
       "right": "2000",
       "answer": "7000"
      }
     ]
    },
    "solve": {
     "prompt": "Estimate 5234 + 2711 passengers using front-end digits.",
     "accepted": [
      "7000"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Keep just the leading digits:",
       "left": "6000",
       "op": "+",
       "right": "1000",
       "answer": "7000"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Estimate 6489 + 1350 crates using front-end digits.",
     "accepted": [
      "7000"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Keep only the leading (biggest place-value) digit of each number, drop the rest, then combine those leading chunks for a fast ballpark estimate.",
   "check": {
    "prompt": "Estimate 3872 + 2145 using front-end digits — which is correct?",
    "options": [
     "3000 + 2000 = 5000",
     "3872 + 2145 exactly",
     "300 + 200 = 500"
    ],
    "correctIndex": 0,
    "explain": "Keep just the leading digits: 3000 + 2000 = 5000 is the front-end estimate."
   }
  },
  "why": {
   "text": "The leading digit carries almost all of a number's size — the smaller digits barely shift the total. Dropping them gives a fast, close-enough ballpark in seconds, which is exactly what an estimate is for: a quick sanity check, not a precise answer.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Keep just the leading digits:",
       "left": "7000",
       "op": "+",
       "right": "1000",
       "answer": "8000"
      }
     ]
    },
    "caption": "Test it: 7128 + 1872 ≈ 7000 + 1000 = 8000 — a fast, close ballpark."
   }
  }
 },
 "rd1": {
  "id": "rd1",
  "chapter": "ch5",
  "strategy": "Rounding",
  "emoji": "🍄",
  "blurb": "Round to the nearest friendly number — like rounding your score for the leaderboard.",
  "worked": {
   "model": {
    "type": "choice",
    "number": 67,
    "options": [
     60,
     70,
     80
    ],
    "correctIndex": 1,
    "unit": "ten"
   },
   "note": "67 coins rounds to 70 — the nearest ten."
  },
  "items": [
   {
    "model": {
     "type": "choice",
     "number": 342,
     "options": [
      300,
      400
     ],
     "correctIndex": 0,
     "unit": "hundred"
    },
    "solve": {
     "prompt": "Round 342 coins to the nearest hundred.",
     "accepted": [
      "300"
     ]
    }
   },
   {
    "model": {
     "type": "choice",
     "number": 815,
     "options": [
      800,
      900
     ],
     "correctIndex": 0,
     "unit": "hundred"
    },
    "solve": {
     "prompt": "BOSS ROUND: Round 815 coins to the nearest hundred.",
     "accepted": [
      "800"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Look at the digit right after the rounding place. 5 or more rounds UP, less than 5 rounds DOWN.",
   "check": {
    "prompt": "Round 67 to the nearest ten — the ones digit is 7.",
    "options": [
     "Round up to 70",
     "Round down to 60",
     "Stay at 67"
    ],
    "correctIndex": 0,
    "explain": "7 is 5 or more, so round UP: 70."
   }
  },
  "why": {
   "text": "A number line has landmarks on either side, and rounding just measures which landmark is closer. Checking the very next digit is a shortcut for measuring that distance without doing subtraction — 5 or more means you're already past the halfway point toward the next landmark.",
   "demo": {
    "model": {
     "type": "choice",
     "number": 458,
     "options": [
      400,
      500
     ],
     "correctIndex": 1,
     "unit": "hundred"
    },
    "caption": "Test it: 458 is closer to 500 than 400, since the tens digit (5) is already past halfway."
   }
  }
 },
 "cn1": {
  "id": "cn1",
  "chapter": "ch5",
  "strategy": "Compatible Numbers",
  "emoji": "🧪",
  "blurb": "Swap in nearby numbers that divide or combine easily — like rounding a solution volume to an easy divisor.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Use compatible numbers:",
      "left": "400",
      "op": "÷",
      "right": "20",
      "answer": "20"
     }
    ]
   },
   "note": "398 mL split into 19 mL doses ≈ 400 ÷ 20 = 20 doses."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Use compatible numbers:",
       "left": "24",
       "op": "÷",
       "right": "4",
       "answer": "6"
      }
     ]
    },
    "solve": {
     "prompt": "Estimate 23 mL split into 4 mL doses using compatible numbers.",
     "accepted": [
      "6"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Use compatible numbers:",
       "left": "56",
       "op": "÷",
       "right": "7",
       "answer": "8"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Estimate 58 mL split into 7 mL doses using compatible numbers.",
     "accepted": [
      "8"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Swap the tricky numbers for nearby ones that divide evenly, then estimate with those instead.",
   "check": {
    "prompt": "Estimate 398 ÷ 19 with compatible numbers — which pair works best?",
    "options": [
     "400 ÷ 20",
     "398 ÷ 19 exactly",
     "400 ÷ 19"
    ],
    "correctIndex": 0,
    "explain": "400 and 20 are both close to the originals and divide evenly: 400 ÷ 20 = 20."
   }
  },
  "why": {
   "text": "Division estimates need FRIENDLY pairs, not just close ones — a pair that divides evenly gives an instant, clean estimate instead of a messy remainder. Swapping to the nearest 'nice pair' keeps the estimate fast and accurate enough.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Use compatible numbers:",
       "left": "81",
       "op": "÷",
       "right": "9",
       "answer": "9"
      }
     ]
    },
    "caption": "Test it: 79 ÷ 9 ≈ 81 ÷ 9 = 9 — a friendly, evenly-dividing pair."
   }
  }
 },
 "rs1": {
  "id": "rs1",
  "chapter": "ch5",
  "strategy": "Reasonableness",
  "emoji": "🚢",
  "blurb": "Check if an answer makes sense before trusting it — a quality-control check on every calculation.",
  "worked": {
   "model": {
    "type": "judgechoice",
    "statement": "A ship holds 298 crates. After loading 51 more, someone says the total is 3490. Is that reasonable?",
    "options": [
     "Too low",
     "About right",
     "Too high"
    ],
    "correctIndex": 2
   },
   "note": "298 + 51 is close to 300 + 50 = 350 — 3490 is way too high."
  },
  "items": [
   {
    "model": {
     "type": "judgechoice",
     "statement": "A crate holds 42 tins. Someone claims 6 crates hold about 250 tins. Is that reasonable?",
     "options": [
      "Too low",
      "About right",
      "Too high"
     ],
     "correctIndex": 1
    },
    "solve": {
     "prompt": "Quickly estimate 6 crates of 42 tins (round 42 to 40).",
     "accepted": [
      "240",
      "250"
     ]
    }
   },
   {
    "model": {
     "type": "judgechoice",
     "statement": "A voyage covers 19 nautical miles per hour. Someone claims 4 hours covers about 40 miles. Is that reasonable?",
     "options": [
      "Too low",
      "About right",
      "Too high"
     ],
     "correctIndex": 0
    },
    "solve": {
     "prompt": "BOSS ROUND: Quickly estimate 4 hours at 19 nm/hour (round 19 to 20).",
     "accepted": [
      "80",
      "76"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Before trusting an answer, do a quick mental estimate — if the real answer is way off from your estimate, something went wrong.",
   "check": {
    "prompt": "You estimate 6 × 40 = 240, but your calculator shows 2400. What should you do?",
    "options": [
     "Trust the estimate and recheck the calculation",
     "Trust 2400 — calculators are always right",
     "Ignore both and guess"
    ],
    "correctIndex": 0,
    "explain": "A huge gap between 240 and 2400 signals an error, most likely a misplaced digit or decimal — recheck the calculation."
   }
  },
  "why": {
   "text": "Estimation acts as your reasonableness check because it catches errors that 'look right' on a calculator but are actually way off — like typing one extra zero. Comparing an exact answer to a quick ballpark estimate is the same instinct an engineer uses before trusting a measurement: does this number make sense for the situation?",
   "demo": {
    "model": {
     "type": "judgechoice",
     "statement": "A tank holds 52 L. Someone claims filling it 3 times gives about 1500 L.",
     "options": [
      "Too low",
      "About right",
      "Too high"
     ],
     "correctIndex": 2
    },
    "caption": "Test it: 52 × 3 ≈ 50 × 3 = 150, so 1500 is ten times too high — a red flag."
   }
  }
 }
};
