// Chapter 1 — Number Relationships
export const ch01 = {
 "nb1": {
  "id": "nb1",
  "chapter": "ch1",
  "strategy": "Number Bonds",
  "emoji": "🚢",
  "blurb": "Two parts always fit together to make the whole — like two lifeboats holding all the passengers.",
  "worked": {
   "model": {
    "type": "bondweb",
    "whole": 12,
    "a": 7,
    "b": 5,
    "missing": null
   },
   "note": "12 passengers boarded two lifeboats: 7 in Lifeboat A, 5 in Lifeboat B. 7 and 5 are the number bonds of 12 — the whole splits into exactly those two parts."
  },
  "items": [
   {
    "model": {
     "type": "bondweb",
     "whole": 10,
     "a": 4,
     "b": 6,
     "missing": "b"
    },
    "solve": {
     "prompt": "The crew sealed 10 rivets across two hull compartments. 4 rivets are in the bow section — how many are in the stern section?",
     "accepted": [
      "6"
     ]
    }
   },
   {
    "model": {
     "type": "bondweb",
     "whole": 20,
     "a": 13,
     "b": 7,
     "missing": "b"
    },
    "solve": {
     "prompt": "BOSS ROUND: 20 crates of coal must load into two bunkers. 13 fit in the forward bunker — how many go in the aft bunker to load all 20?",
     "accepted": [
      "7"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: If you know the WHOLE and ONE PART, subtract to find the MISSING PART. whole − known part = missing part.",
   "check": {
    "prompt": "A ship has 15 portholes total. 9 are on the port side. Which finds the starboard count?",
    "options": [
     "15 + 9",
     "15 − 9",
     "9 − 15"
    ],
    "correctIndex": 1,
    "explain": "Whole − known part = missing part, so 15 − 9 = 6 portholes on the starboard side."
   }
  },
  "why": {
   "text": "Number bonds work because addition and subtraction are opposite moves — one always undoes the other. If 7 + 5 = 12, then 12 − 5 must bring you straight back to 7. Every bond is 3 numbers locked together like a rivet: pull one out, and the other two always show you the way back.",
   "demo": {
    "model": {
     "type": "bondweb",
     "whole": 9,
     "a": 4,
     "b": 5,
     "missing": null
    },
    "caption": "Test it: 4 + 5 = 9, so 9 − 4 = 5 and 9 − 5 = 4. The rivet holds from every direction."
   }
  }
 },
 "fn1": {
  "id": "fn1",
  "chapter": "ch1",
  "strategy": "Friendly Numbers",
  "emoji": "🍄",
  "blurb": "Round numbers are easier to work with in your head — like rounding your coin count to the nearest flagpole.",
  "worked": {
   "model": {
    "type": "choice",
    "number": 38,
    "options": [
     30,
     40,
     50
    ],
    "correctIndex": 1,
    "unit": "ten"
   },
   "note": "You collected 38 coins in World 1. The scoreboard rounds to the nearest flagpole — 38 is closer to the 40-flag than the 30-flag."
  },
  "items": [
   {
    "model": {
     "type": "choice",
     "number": 47,
     "options": [
      40,
      50,
      60
     ],
     "correctIndex": 1,
     "unit": "ten"
    },
    "solve": {
     "prompt": "47 coins collected — which flagpole (40 or 50) is your score closest to?",
     "accepted": [
      "50"
     ]
    }
   },
   {
    "model": {
     "type": "choice",
     "number": 213,
     "options": [
      100,
      200,
      300
     ],
     "correctIndex": 1,
     "unit": "hundred"
    },
    "solve": {
     "prompt": "BOSS ROUND: 213 coins after the castle battle. Round to the nearest 100 for the leaderboard.",
     "accepted": [
      "200"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Check the digit right after the place you're rounding. 5 or more → round UP. Less than 5 → round DOWN, stay put.",
   "check": {
    "prompt": "You have 65 coins, rounding to the nearest ten. The ones digit is 5. What do you do?",
    "options": [
     "Round down to 60",
     "Round up to 70",
     "Stay at 65"
    ],
    "correctIndex": 1,
    "explain": "5 or more always rounds UP — 65 rounds up to 70."
   }
  },
  "why": {
   "text": "A number line has two flagposts, and whichever one you're standing closer to is the fastest one to reach mentally. Rounding just measures which flagpost is nearer — you're not guessing, you're checking distances.",
   "demo": {
    "model": {
     "type": "choice",
     "number": 82,
     "options": [
      80,
      90
     ],
     "correctIndex": 0,
     "unit": "ten"
    },
    "caption": "Test it: 82 is only 2 away from 80, but 8 away from 90 — 80 wins easily."
   }
  }
 },
 "cm1": {
  "id": "cm1",
  "chapter": "ch1",
  "strategy": "Complement to 10, 100, 1000",
  "emoji": "🧪",
  "blurb": "What's missing to reach the next round target — like topping off a beaker to an exact volume.",
  "worked": {
   "model": {
    "type": "jumpline",
    "min": 0,
    "max": 10,
    "step": 1,
    "start": 7,
    "jumps": [
     {
      "delta": 3
     }
    ]
   },
   "note": "Your beaker holds 7 mL. The experiment needs exactly 10 mL. Add 3 mL more — 7 and 3 are complements of 10."
  },
  "items": [
   {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 100,
     "step": 10,
     "start": 30,
     "jumps": [
      {
       "delta": 70
      }
     ]
    },
    "solve": {
     "prompt": "The flask holds 30 mL of solution. The recipe calls for 100 mL total. How many more mL do you add?",
     "accepted": [
      "70"
     ]
    }
   },
   {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 1000,
     "step": 40,
     "start": 640,
     "jumps": [
      {
       "delta": 360
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: The coolant tank holds 640 L. Full capacity is 1000 L. How many more litres to top it off completely?",
     "accepted": [
      "360"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: To find what's missing to reach a round target, subtract: target − what you have = what's missing.",
   "check": {
    "prompt": "A tank has 450 L, full capacity is 1000 L. Which finds the missing amount?",
    "options": [
     "1000 − 450",
     "450 − 1000",
     "1000 + 450"
    ],
    "correctIndex": 0,
    "explain": "target − current amount = 1000 − 450 = 550 L still needed."
   }
  },
  "why": {
   "text": "Reaching a round number is just subtraction wearing a disguise. If 7 + 3 = 10, then 10 − 7 = 3 automatically — you're measuring the gap between where you are and the target line, and that gap is always the complement.",
   "demo": {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 30,
     "step": 6,
     "start": 24,
     "jumps": [
      {
       "delta": 6
      }
     ]
    },
    "caption": "Test it: 24 mL needs 6 more to reach the 30 mL mark — same gap, different beaker."
   }
  }
 },
 "nd1": {
  "id": "nd1",
  "chapter": "ch1",
  "strategy": "Near Doubles",
  "emoji": "🚢",
  "blurb": "Close to a double? Double the small one, then adjust — like twin boilers just one rivet apart.",
  "worked": {
   "model": {
    "type": "bondweb",
    "mode": "neardouble",
    "small": 6,
    "big": 7,
    "doubleVal": 12,
    "adjust": 1,
    "missing": null
   },
   "note": "Boiler Room A has 6 rivets, twin Boiler Room B has 7. Since 7 is close to double 6, double 6 (12) then add 1 more: 13 rivets total."
  },
  "items": [
   {
    "model": {
     "type": "bondweb",
     "mode": "neardouble",
     "small": 8,
     "big": 9,
     "doubleVal": 16,
     "adjust": 1,
     "missing": "sum"
    },
    "solve": {
     "prompt": "Two coal bunkers hold 8 and 9 tonnes. Use near doubles: what's the total?",
     "accepted": [
      "17"
     ]
    }
   },
   {
    "model": {
     "type": "bondweb",
     "mode": "neardouble",
     "small": 14,
     "big": 15,
     "doubleVal": 28,
     "adjust": 1,
     "missing": "sum"
    },
    "solve": {
     "prompt": "BOSS ROUND: Twin funnels vent 15 and 14 tonnes of steam. Use near doubles: what's the total?",
     "accepted": [
      "29"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: When two numbers are almost the same, double the SMALLER one, then add the extra bit that makes the bigger one bigger.",
   "check": {
    "prompt": "For 9 + 10, what's the near-doubles move?",
    "options": [
     "Double 9 (18), add 1 → 19",
     "Double 10 (20), add 1 → 21",
     "Double 9 (18), add 2 → 20"
    ],
    "correctIndex": 0,
    "explain": "Double the smaller number (9 → 18), then add the 1 extra that 10 carries: 18 + 1 = 19."
   }
  },
  "why": {
   "text": "Doubling is one of the easiest facts your brain already knows by heart. Since 7 is just 1 more than 6, adding 6 + 7 is exactly the same as 6 + 6 (instant recall) plus that extra 1. You're not learning a new fact — you're reusing one you already own.",
   "demo": {
    "model": {
     "type": "bondweb",
     "mode": "neardouble",
     "small": 11,
     "big": 12,
     "doubleVal": 22,
     "adjust": 1,
     "missing": null
    },
    "caption": "Test it: 11 + 12 = double 11 (22) + 1 = 23. Same trick, bigger rivets."
   }
  }
 },
 "cp1": {
  "id": "cp1",
  "chapter": "ch1",
  "strategy": "Compensation",
  "emoji": "🧪",
  "blurb": "Push one number up, pull the other down by the same amount — like pouring liquid between two beakers.",
  "worked": {
   "model": {
    "type": "compensate",
    "a": {
     "start": 47,
     "delta": 3
    },
    "b": {
     "start": 38,
     "delta": -3
    }
   },
   "note": "Beaker A has 47 mL, Beaker B has 38 mL. Pour 3 mL from B into A: now A = 50 (friendly!) and B = 35. Total stays 85 mL — nothing was lost, just moved."
  },
  "items": [
   {
    "model": {
     "type": "compensate",
     "a": {
      "start": 29,
      "delta": 1
     },
     "b": {
      "start": 56,
      "delta": -1
     }
    },
    "solve": {
     "prompt": "Beaker A has 29 mL, Beaker B has 56 mL. Use compensation: what's the total?",
     "accepted": [
      "85"
     ]
    }
   },
   {
    "model": {
     "type": "compensate",
     "a": {
      "start": 68,
      "delta": 2
     },
     "b": {
      "start": 24,
      "delta": -2
     }
    },
    "solve": {
     "prompt": "BOSS ROUND: Flask A has 68 mL, Flask B has 24 mL. Use compensation: what's the total?",
     "accepted": [
      "92"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Add an amount to one number, subtract the SAME amount from the other. The total never changes — you're just moving weight between two sides of a balance.",
   "check": {
    "prompt": "38 + 25. If you add 2 to 38 to make 40, what must you do to 25?",
    "options": [
     "Also add 2",
     "Subtract 2",
     "Leave it alone"
    ],
    "correctIndex": 1,
    "explain": "To keep the total the same, whatever you add to one side must come off the other: 40 + 23 = 63, same as 38 + 25."
   }
  },
  "why": {
   "text": "Addition is like a two-pan balance scale. Whatever weight you shift from one side to the other, the TOTAL on the scale stays exactly the same — you've just rearranged it into an easier shape to lift.",
   "demo": {
    "model": {
     "type": "compensate",
     "a": {
      "start": 19,
      "delta": 1
     },
     "b": {
      "start": 26,
      "delta": -1
     }
    },
    "caption": "Test it: 19 + 26 → 20 + 25 = 45. Same total, friendlier numbers."
   }
  }
 },
 "bn1": {
  "id": "bn1",
  "chapter": "ch1",
  "strategy": "Benchmark Numbers",
  "emoji": "🍄",
  "blurb": "Compare a number to a friendly landmark to judge its size — like checking which checkpoint flag you're nearest.",
  "worked": {
   "model": {
    "type": "choice",
    "number": 47,
    "options": [
     0,
     50,
     100
    ],
    "correctIndex": 1,
    "unit": "benchmark"
   },
   "note": "You're at coin-count 47. The checkpoints are 0, 50, and 100. 47 is way closer to the 50-checkpoint than either other flag."
  },
  "items": [
   {
    "model": {
     "type": "choice",
     "number": 63,
     "options": [
      50,
      100
     ],
     "correctIndex": 0,
     "unit": "benchmark"
    },
    "solve": {
     "prompt": "Coin count 63 — is it closer to the 50-flag or the 100-flag?",
     "accepted": [
      "50"
     ]
    }
   },
   {
    "model": {
     "type": "choice",
     "number": 0.42,
     "options": [
      0,
      0.5,
      1
     ],
     "correctIndex": 1,
     "unit": "benchmarkFrac"
    },
    "solve": {
     "prompt": "BOSS ROUND: Power meter reads 0.42 — is it closer to 0, 0.5, or 1?",
     "accepted": [
      "0.5",
      ".5"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Pick the benchmark that's the SHORTEST distance away — measure the gap to each landmark and pick the smallest gap.",
   "check": {
    "prompt": "78 coins — is it closer to the 50-flag or the 100-flag?",
    "options": [
     "50-flag (gap 28)",
     "100-flag (gap 22)"
    ],
    "correctIndex": 1,
    "explain": "78 to 100 is a gap of 22, but 78 to 50 is a gap of 28 — 100 is the shorter reach."
   }
  },
  "why": {
   "text": "Your brain is much faster comparing a number to a handful of landmarks than tracking its exact distance from zero. It's the same trick pilots use with checkpoints on a long flight — you don't need the exact mileage, just which checkpoint you're nearest to.",
   "demo": {
    "model": {
     "type": "choice",
     "number": 0.83,
     "options": [
      0.5,
      1
     ],
     "correctIndex": 1,
     "unit": "benchmarkFrac"
    },
    "caption": "Test it: 0.83 is only 0.17 from 1, but 0.33 from 0.5 — 1 wins easily."
   }
  }
 },
 "nw1": {
  "id": "nw1",
  "chapter": "ch1",
  "strategy": "Number Webs",
  "emoji": "🕸️",
  "blurb": "Every number has a whole web of partner pairs — like a ship's wiring diagram: one hub, many connections, all adding to the same total.",
  "worked": {
   "model": {
    "type": "numweb",
    "whole": 10,
    "pairs": [
     [
      1,
      9
     ],
     [
      2,
      8
     ],
     [
      3,
      7
     ],
     [
      4,
      6
     ],
     [
      5,
      5
     ]
    ]
   },
   "note": "The boiler room has 10 valves. Every line through the hub is a pair: 3 open + 7 closed, 4 + 6, 5 + 5. One hub, five partner pairs. Spot the pattern: one side goes up, the other comes down."
  },
  "items": [
   {
    "model": {
     "type": "numweb",
     "whole": 10,
     "pairs": [
      [
       2,
       8
      ],
      [
       3,
       null
      ],
      [
       6,
       null
      ],
      [
       9,
       1
      ]
     ]
    },
    "solve": {
     "prompt": "10 coins hide in a Mario pipe room. 6 are in the first pipe. How many are in the second pipe?",
     "accepted": [
      "4"
     ]
    }
   },
   {
    "model": {
     "type": "numweb",
     "whole": 20,
     "pairs": [
      [
       5,
       15
      ],
      [
       8,
       null
      ],
      [
       12,
       null
      ],
      [
       17,
       3
      ]
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: 20 mL of acid must be split between two flasks. Flask A gets 12 mL. How many mL go in Flask B?",
     "accepted": [
      "8"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Every pair on a number web adds up to the SAME hub number. Know the hub and one partner? partner = hub − the part you know.",
   "check": {
    "prompt": "A web has the hub 12. One end of a pair is 5. What is the other end?",
    "options": [
     "17",
     "7",
     "60"
    ],
    "correctIndex": 1,
    "explain": "Hub − known part: 12 − 5 = 7. Every pair on this web adds to 12."
   }
  },
  "why": {
   "text": "A web works because every line is a promise: both ends must add up to the hub. If the left end goes up by 1, the right end must go down by 1, or the total would change. Different pairs are just different ways to cut the same number.",
   "demo": {
    "model": {
     "type": "numweb",
     "whole": 8,
     "pairs": [
      [
       1,
       7
      ],
      [
       2,
       6
      ],
      [
       3,
       5
      ],
      [
       4,
       4
      ]
     ]
    },
    "caption": "Test it: left side 1 → 2 → 3 → 4, right side 7 → 6 → 5 → 4. Up 1, down 1 — the total stays 8."
   }
  }
 }
};
