// Chapter 2 — Mental Computation
export const ch02 = {
 "lr1": {
  "id": "lr1",
  "chapter": "ch2",
  "strategy": "Left-to-Right Addition",
  "emoji": "🚢",
  "blurb": "Add the biggest place first, then work your way down — like inspecting the biggest compartments first.",
  "worked": {
   "model": {
    "type": "columnsum",
    "numberA": 234,
    "numberB": 152,
    "columns": [
     {
      "place": "hundreds",
      "a": 200,
      "b": 100,
      "sum": 300
     },
     {
      "place": "tens",
      "a": 30,
      "b": 50,
      "sum": 80
     },
     {
      "place": "ones",
      "a": 4,
      "b": 2,
      "sum": 6
     }
    ],
    "total": 386
   },
   "note": "Deck A carries 234 passengers, Deck B carries 152. Add hundreds first (300), then tens (80), then ones (6): 300 + 80 + 6 = 386."
  },
  "items": [
   {
    "model": {
     "type": "columnsum",
     "numberA": 345,
     "numberB": 123,
     "columns": [
      {
       "place": "hundreds",
       "a": 300,
       "b": 100,
       "sum": 400
      },
      {
       "place": "tens",
       "a": 40,
       "b": 20,
       "sum": 60
      },
      {
       "place": "ones",
       "a": 5,
       "b": 3,
       "sum": 8
      }
     ],
     "total": 468
    },
    "solve": {
     "prompt": "Cargo Hold A has 345 crates, Cargo Hold B has 123. Add left to right: what's the total?",
     "accepted": [
      "468"
     ]
    }
   },
   {
    "model": {
     "type": "columnsum",
     "numberA": 456,
     "numberB": 231,
     "columns": [
      {
       "place": "hundreds",
       "a": 400,
       "b": 200,
       "sum": 600
      },
      {
       "place": "tens",
       "a": 50,
       "b": 30,
       "sum": 80
      },
      {
       "place": "ones",
       "a": 6,
       "b": 1,
       "sum": 7
      }
     ],
     "total": 687
    },
    "solve": {
     "prompt": "BOSS ROUND: Coal Bunker A holds 456 tonnes, Bunker B holds 231. Add left to right: what's the total?",
     "accepted": [
      "687"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Add the BIGGEST place value first (hundreds, then tens, then ones), then combine the partial sums.",
   "check": {
    "prompt": "Adding 341 + 256 — which place do you add first?",
    "options": [
     "Ones",
     "Tens",
     "Hundreds"
    ],
    "correctIndex": 2,
    "explain": "Left-to-right means biggest place value first — hundreds, then tens, then ones."
   }
  },
  "why": {
   "text": "Place-value blocks never overlap — hundreds only ever combine with hundreds, tens with tens. You can total each block separately, in any order, then just add the partial totals together. It's like inspecting each watertight compartment on its own before adding up the ship's full headcount.",
   "demo": {
    "model": {
     "type": "columnsum",
     "numberA": 214,
     "numberB": 163,
     "columns": [
      {
       "place": "hundreds",
       "a": 200,
       "b": 100,
       "sum": 300
      },
      {
       "place": "tens",
       "a": 10,
       "b": 60,
       "sum": 70
      },
      {
       "place": "ones",
       "a": 4,
       "b": 3,
       "sum": 7
      }
     ],
     "total": 377
    },
    "caption": "Test it: 300 + 70 + 7 = 377 — same trick, different decks."
   }
  },
  "warmup": {
   "model": {
    "type": "columnsum",
    "numberA": 32,
    "numberB": 41,
    "columns": [
     {
      "place": "tens",
      "a": 30,
      "b": 40,
      "sum": 70
     },
     {
      "place": "ones",
      "a": 2,
      "b": 1,
      "sum": 3
     }
    ],
    "total": 73
   },
   "solve": {
    "prompt": "Boiler A burned 32 kg of coal, Boiler B burned 41 kg. Add left to right: what is the total?",
    "accepted": [
     "73"
    ]
   }
  }
 },
 "cs1": {
  "id": "cs1",
  "chapter": "ch2",
  "strategy": "Compensation (Subtracting)",
  "emoji": "🧪",
  "blurb": "Subtract a friendlier number, then fix the answer — like draining a flask and correcting the last drop.",
  "worked": {
   "model": {
    "type": "compensate",
    "op": "-",
    "a": {
     "start": 62,
     "delta": -20,
     "label": "subtract 20"
    },
    "fix": {
     "delta": 1
    }
   },
   "note": "You need to drain 19 mL from a 62 mL flask. Draining 20 mL is easier (62 − 20 = 42), but that's 1 mL too much — add 1 back: 42 + 1 = 43."
  },
  "items": [
   {
    "model": {
     "type": "compensate",
     "op": "-",
     "a": {
      "start": 83,
      "delta": -30,
      "label": "subtract 30"
     },
     "fix": {
      "delta": 1
     }
    },
    "solve": {
     "prompt": "Drain 29 mL from an 83 mL flask using compensation: what's left?",
     "accepted": [
      "54"
     ]
    }
   },
   {
    "model": {
     "type": "compensate",
     "op": "-",
     "a": {
      "start": 145,
      "delta": -60,
      "label": "subtract 60"
     },
     "fix": {
      "delta": 2
     }
    },
    "solve": {
     "prompt": "BOSS ROUND: Drain 58 L from a 145 L tank using compensation: what's left?",
     "accepted": [
      "87"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Subtract a friendlier, ROUNDER number first, then fix the answer by adding back the extra you took off.",
   "check": {
    "prompt": "62 − 19. If you subtract 20 instead of 19, what must you do to fix the answer?",
    "options": [
     "Add 1 back",
     "Subtract 1 more",
     "Leave it alone"
    ],
    "correctIndex": 0,
    "explain": "You subtracted 1 mL too many (20 instead of 19), so add 1 back onto the result: 43."
   }
  },
  "why": {
   "text": "Taking away too much just means you need to give a little back. If you drain 20 mL but only meant to drain 19 mL, the flask has exactly 1 mL less than it should — so adding 1 back restores the precise amount.",
   "demo": {
    "model": {
     "type": "compensate",
     "op": "-",
     "a": {
      "start": 74,
      "delta": -30,
      "label": "subtract 30"
     },
     "fix": {
      "delta": 1
     }
    },
    "caption": "Test it: 74 − 30 = 44, but we only needed 74 − 29, so add 1 back: 45."
   }
  },
  "warmup": {
   "model": {
    "type": "compensate",
    "op": "-",
    "a": {
     "start": 45,
     "delta": -20,
     "label": "subtract 20"
    },
    "fix": {
     "delta": 1
    }
   },
   "solve": {
    "prompt": "A flask holds 45 mL. Drain 19 mL using compensation: what is left?",
    "accepted": [
     "26"
    ]
   }
  }
 },
 "pt1": {
  "id": "pt1",
  "chapter": "ch2",
  "strategy": "Partitioning",
  "emoji": "🍄",
  "blurb": "Break both numbers into tens and ones, then combine — like sorting coins by size before counting.",
  "worked": {
   "model": {
    "type": "columnsum",
    "numberA": 47,
    "numberB": 38,
    "columns": [
     {
      "place": "tens",
      "a": 40,
      "b": 30,
      "sum": 70
     },
     {
      "place": "ones",
      "a": 7,
      "b": 8,
      "sum": 15
     }
    ],
    "total": 85
   },
   "note": "You collect 47 coins in one level, 38 in another. Split each into tens and ones: (40 + 30) + (7 + 8) = 70 + 15 = 85."
  },
  "items": [
   {
    "model": {
     "type": "columnsum",
     "numberA": 56,
     "numberB": 27,
     "columns": [
      {
       "place": "tens",
       "a": 50,
       "b": 20,
       "sum": 70
      },
      {
       "place": "ones",
       "a": 6,
       "b": 7,
       "sum": 13
      }
     ],
     "total": 83
    },
    "solve": {
     "prompt": "Partition and add: 56 coins plus 27 coins?",
     "accepted": [
      "83"
     ]
    }
   },
   {
    "model": {
     "type": "columnsum",
     "numberA": 89,
     "numberB": 46,
     "columns": [
      {
       "place": "tens",
       "a": 80,
       "b": 40,
       "sum": 120
      },
      {
       "place": "ones",
       "a": 9,
       "b": 6,
       "sum": 15
      }
     ],
     "total": 135
    },
    "solve": {
     "prompt": "BOSS ROUND: Partition and add: 89 coins plus 46 coins?",
     "accepted": [
      "135"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Break both numbers into tens and ones, add the tens together, add the ones together, then combine the two totals.",
   "check": {
    "prompt": "47 + 38 partitioned — which is the correct split-and-combine?",
    "options": [
     "(40+30) + (7+8)",
     "(4+3) + (70+80)",
     "(47+30) + (8)"
    ],
    "correctIndex": 0,
    "explain": "Split each number into tens and ones, add same-sized parts, then combine: 70 + 15 = 85."
   }
  },
  "why": {
   "text": "Addition doesn't care what order you group numbers in — you can add tens with tens and ones with ones separately, then combine the two totals at the end. Same total, just built in an easier order, like sorting coins by size before you count them.",
   "demo": {
    "model": {
     "type": "columnsum",
     "numberA": 64,
     "numberB": 28,
     "columns": [
      {
       "place": "tens",
       "a": 60,
       "b": 20,
       "sum": 80
      },
      {
       "place": "ones",
       "a": 4,
       "b": 8,
       "sum": 12
      }
     ],
     "total": 92
    },
    "caption": "Test it: 80 + 12 = 92 — same trick, different coin pile."
   }
  },
  "warmup": {
   "model": {
    "type": "columnsum",
    "numberA": 34,
    "numberB": 25,
    "columns": [
     {
      "place": "tens",
      "a": 30,
      "b": 20,
      "sum": 50
     },
     {
      "place": "ones",
      "a": 4,
      "b": 5,
      "sum": 9
     }
    ],
    "total": 59
   },
   "solve": {
    "prompt": "Partition and add: 34 coins plus 25 coins?",
    "accepted": [
     "59"
    ]
   }
  }
 },
 "bt1": {
  "id": "bt1",
  "chapter": "ch2",
  "strategy": "Bridging Through 10",
  "emoji": "🚢",
  "blurb": "Jump to the next ten first, then take the rest of the hop — like loading crates up to a full deck, then the overflow.",
  "worked": {
   "model": {
    "type": "jumpline",
    "min": 0,
    "max": 20,
    "step": 1,
    "start": 8,
    "jumps": [
     {
      "delta": 2
     },
     {
      "delta": 3
     }
    ]
   },
   "note": "Dock has 8 crates loaded, 5 more arrive. Bridge to 10 first (8 + 2 = 10), then load the rest (10 + 3 = 13). So 8 + 5 = 13."
  },
  "items": [
   {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 20,
     "step": 1,
     "start": 9,
     "jumps": [
      {
       "delta": 1
      },
      {
       "delta": 5
      }
     ]
    },
    "solve": {
     "prompt": "Bridge through 10: 9 crates plus 6 more?",
     "accepted": [
      "15"
     ]
    }
   },
   {
    "model": {
     "type": "jumpline",
     "min": 40,
     "max": 60,
     "step": 1,
     "start": 47,
     "jumps": [
      {
       "delta": 3
      },
      {
       "delta": 5
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Bridge through the next ten: 47 crates plus 8 more?",
     "accepted": [
      "55"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Jump to the next friendly ten first, then take the rest of the hop from there.",
   "check": {
    "prompt": "9 + 6 — what's the bridge-through-10 move?",
    "options": [
     "9 + 1 = 10, then + 5 more = 15",
     "9 + 6 = 15 straight away",
     "9 + 10 = 19, then − 4 = 15"
    ],
    "correctIndex": 0,
    "explain": "Bridge to 10 first (9 + 1), then add what's left of 6 (which is 5): 10 + 5 = 15."
   }
  },
  "why": {
   "text": "10 is the easiest number to add onto — your brain barely has to think about it. Splitting the second number into 'just enough to reach 10' plus 'the rest' turns a tricky jump into two easy hops.",
   "demo": {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 20,
     "step": 1,
     "start": 7,
     "jumps": [
      {
       "delta": 3
      },
      {
       "delta": 2
      }
     ]
    },
    "caption": "Test it: 7 + 3 = 10, then + 2 = 12 — same trick, matches 7 + 5 = 12."
   }
  },
  "warmup": {
   "model": {
    "type": "jumpline",
    "min": 0,
    "max": 20,
    "step": 1,
    "start": 8,
    "jumps": [
     {
      "delta": 2
     },
     {
      "delta": 3
     }
    ]
   },
   "solve": {
    "prompt": "Bridge through 10: 8 crates plus 5 more?",
    "accepted": [
     "13"
    ]
   }
  }
 },
 "mf1": {
  "id": "mf1",
  "chapter": "ch2",
  "strategy": "Making Friendly Numbers",
  "emoji": "🧪",
  "blurb": "Round one factor up, multiply, then subtract the extra — like prepping one spare test tube too many, then removing it.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "First, use the friendly number:",
      "left": "25",
      "op": "×",
      "right": "100",
      "answer": "2500"
     },
     {
      "label": "Now take away the extra:",
      "left": "2500",
      "op": "−",
      "right": "25",
      "answer": "2475"
     }
    ]
   },
   "note": "You need 25 mL in each of 99 test tubes. Use the friendly 100 tubes first (25 × 100 = 2500), then subtract the one extra tube's worth: 2500 − 25 = 2475."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "First, use the friendly number:",
       "left": "8",
       "op": "×",
       "right": "20",
       "answer": "160"
      },
      {
       "label": "Now take away the extra:",
       "left": "160",
       "op": "−",
       "right": "8",
       "answer": "152"
      }
     ]
    },
    "solve": {
     "prompt": "Use friendly numbers: 8 mL in each of 19 tubes?",
     "accepted": [
      "152"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "First, use the friendly number:",
       "left": "12",
       "op": "×",
       "right": "50",
       "answer": "600"
      },
      {
       "label": "Now take away the extra:",
       "left": "600",
       "op": "−",
       "right": "12",
       "answer": "588"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Use friendly numbers: 12 mL in each of 49 tubes?",
     "accepted": [
      "588"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Round the tricky factor up to a friendly number, multiply, then subtract the extra copies you added.",
   "check": {
    "prompt": "8 × 19 — using the friendly-number trick, what do you compute first?",
    "options": [
     "8 × 20",
     "8 × 19 directly",
     "8 × 18"
    ],
    "correctIndex": 0,
    "explain": "Round 19 up to the friendly 20, multiply (8 × 20 = 160), then subtract the 1 extra group of 8 you added: 160 − 8 = 152."
   }
  },
  "why": {
   "text": "Multiplying by a round number like 20 or 100 is instant mental math, but 19 groups is exactly 1 fewer group than 20. So you compute the easy 'too many' answer first, then subtract exactly one extra group to correct it back down.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "First, use the friendly number:",
       "left": "6",
       "op": "×",
       "right": "20",
       "answer": "120"
      },
      {
       "label": "Now take away the extra:",
       "left": "120",
       "op": "−",
       "right": "6",
       "answer": "114"
      }
     ]
    },
    "caption": "Test it: 6 × 19 = (6 × 20) − 6 = 120 − 6 = 114."
   }
  },
  "warmup": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "First, use the friendly number:",
      "left": "5",
      "op": "×",
      "right": "20",
      "answer": "100"
     },
     {
      "label": "Now take away the extra:",
      "left": "100",
      "op": "−",
      "right": "5",
      "answer": "95"
     }
    ]
   },
   "solve": {
    "prompt": "Use friendly numbers: 5 mL in each of 19 tubes?",
    "accepted": [
     "95"
    ]
   }
  }
 },
 "dh1": {
  "id": "dh1",
  "chapter": "ch2",
  "strategy": "Doubling & Halving",
  "emoji": "🍄",
  "blurb": "Halve one factor, double the other — the answer stays the same, like rearranging blocks into an easier rectangle.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Halve one, double the other:",
      "left": "8",
      "op": "×",
      "right": "10",
      "answer": "80"
     }
    ],
    "preNote": "16 × 5 → half 16 is 8, double 5 is 10."
   },
   "note": "16 rows of 5 blocks. Halve the rows (8), double the blocks-per-row (10): 16 × 5 = 8 × 10 = 80."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Halve one, double the other:",
       "left": "7",
       "op": "×",
       "right": "10",
       "answer": "70"
      }
     ],
     "preNote": "14 × 5 → half 14 is 7, double 5 is 10."
    },
    "solve": {
     "prompt": "Double and halve: 14 rows of 5 blocks?",
     "accepted": [
      "70"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Halve one, double the other:",
       "left": "50",
       "op": "×",
       "right": "8",
       "answer": "400"
      }
     ],
     "preNote": "25 × 16 → double 25 is 50, half 16 is 8."
    },
    "solve": {
     "prompt": "BOSS ROUND: Double and halve: 25 rows of 16 blocks?",
     "accepted": [
      "400"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Halve one factor, double the other — the product stays exactly the same.",
   "check": {
    "prompt": "For 18 × 5, which halve-and-double move keeps the same answer?",
    "options": [
     "9 × 10",
     "18 × 10",
     "9 × 5"
    ],
    "correctIndex": 0,
    "explain": "Halve 18 to 9, double 5 to 10: 9 × 10 = 90, same as 18 × 5 = 90."
   }
  },
  "why": {
   "text": "Multiplication is really just building a rectangle of blocks. If you make one side half as long and the other side twice as long, the rectangle covers the exact same total area — the shape changes, the total doesn't.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Halve one, double the other:",
       "left": "4",
       "op": "×",
       "right": "10",
       "answer": "40"
      }
     ],
     "preNote": "8 × 5 → half 8 is 4, double 5 is 10."
    },
    "caption": "Test it: 8 × 5 = 4 × 10 = 40 — same area, friendlier shape."
   }
  },
  "warmup": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Halve one, double the other:",
      "left": "6",
      "op": "×",
      "right": "10",
      "answer": "60"
     }
    ],
    "preNote": "12 × 5 → half 12 is 6, double 5 is 10."
   },
   "solve": {
    "prompt": "Double and halve: 12 rows of 5 blocks?",
    "accepted": [
     "60"
    ]
   }
  }
 },
 "df1": {
  "id": "df1",
  "chapter": "ch2",
  "strategy": "Difference Strategy",
  "emoji": "🚢",
  "blurb": "Count up from the smaller number to the bigger one — like measuring the distance between two knot-marks.",
  "worked": {
   "model": {
    "type": "jumpline",
    "min": 20,
    "max": 65,
    "step": 1,
    "start": 28,
    "jumps": [
     {
      "delta": 2
     },
     {
      "delta": 30
     },
     {
      "delta": 1
     }
    ]
   },
   "note": "The ship is at knot-mark 28 and needs to reach checkpoint 61. Count up in friendly jumps: 28 → 30 (+2) → 60 (+30) → 61 (+1). Total distance: 33."
  },
  "items": [
   {
    "model": {
     "type": "jumpline",
     "min": 15,
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
     "prompt": "Count up the difference: how far from knot-mark 19 to checkpoint 52?",
     "accepted": [
      "33"
     ]
    }
   },
   {
    "model": {
     "type": "jumpline",
     "min": 40,
     "max": 85,
     "step": 1,
     "start": 47,
     "jumps": [
      {
       "delta": 3
      },
      {
       "delta": 30
      },
      {
       "delta": 3
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Count up the difference: how far from knot-mark 47 to checkpoint 83?",
     "accepted": [
      "36"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Count UP from the smaller number to the bigger number in friendly jumps — the total distance you travelled is the answer.",
   "check": {
    "prompt": "83 − 47 — what's the counting-up move?",
    "options": [
     "Jump from 47 up to 83 in friendly hops, add up the jumps",
     "Jump from 83 down to 47, multiply the jumps",
     "Just subtract 8 from 3"
    ],
    "correctIndex": 0,
    "explain": "Counting up from 47 to 83 in easy hops and adding the jump sizes gives the difference: 36."
   }
  },
  "why": {
   "text": "Subtraction is really asking 'how far apart are these two numbers?' Instead of taking away, you measure the gap by walking from the smaller number to the bigger one in easy steps — the total distance you cover is the answer, every time.",
   "demo": {
    "model": {
     "type": "jumpline",
     "min": 10,
     "max": 40,
     "step": 1,
     "start": 14,
     "jumps": [
      {
       "delta": 1
      },
      {
       "delta": 20
      },
      {
       "delta": 2
      }
     ]
    },
    "caption": "Test it: from 14 to 37, jumps of 1 + 20 + 2 = 23 — matches 37 − 14 exactly."
   }
  },
  "warmup": {
   "model": {
    "type": "jumpline",
    "min": 15,
    "max": 45,
    "step": 1,
    "start": 18,
    "jumps": [
     {
      "delta": 2
     },
     {
      "delta": 20
     },
     {
      "delta": 3
     }
    ]
   },
   "solve": {
    "prompt": "Count up the difference: how far from mark 18 to checkpoint 43?",
    "accepted": [
     "25"
    ]
   }
  }
 }
};
