// Chapter 4 — Division Thinking
export const ch04 = {
 "sh1": {
  "id": "sh1",
  "chapter": "ch4",
  "strategy": "Sharing",
  "emoji": "🍄",
  "blurb": "Split a total equally among a number of groups — like sharing out coins evenly between players.",
  "worked": {
   "model": {
    "type": "array",
    "rows": 4,
    "cols": 5,
    "missing": "cols"
   },
   "note": "20 coins shared equally among 4 players gives 5 coins each."
  },
  "items": [
   {
    "model": {
     "type": "array",
     "rows": 3,
     "cols": 6,
     "missing": "cols"
    },
    "solve": {
     "prompt": "Share 18 coins equally among 3 players. How many each?",
     "accepted": [
      "6"
     ]
    }
   },
   {
    "model": {
     "type": "array",
     "rows": 5,
     "cols": 4,
     "missing": "cols"
    },
    "solve": {
     "prompt": "BOSS ROUND: Share 20 coins equally among 5 players. How many each?",
     "accepted": [
      "4"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Sharing equally means splitting the total into that many EQUAL groups — total ÷ number of groups = amount in each.",
   "check": {
    "prompt": "20 coins shared among 4 players — which operation finds each player's share?",
    "options": [
     "20 ÷ 4",
     "20 × 4",
     "20 − 4"
    ],
    "correctIndex": 0,
    "explain": "total ÷ groups = amount each: 20 ÷ 4 = 5."
   }
  },
  "why": {
   "text": "Division is multiplication's undo button. If 4 equal groups make 20 (4 × 5 = 20), then splitting 20 back into 4 equal groups must return exactly 5 each — the two operations are mirror images of each other.",
   "demo": {
    "model": {
     "type": "array",
     "rows": 4,
     "cols": 4,
     "missing": null
    },
    "caption": "Test it: 16 shared into 4 groups = 4 each, since 4 × 4 = 16, so 16 ÷ 4 = 4."
   }
  }
 },
 "gp1": {
  "id": "gp1",
  "chapter": "ch4",
  "strategy": "Grouping",
  "emoji": "🚢",
  "blurb": "Find how many equal groups fit inside a total — like sorting crates into equal-sized loads.",
  "worked": {
   "model": {
    "type": "jumpline",
    "min": 0,
    "max": 24,
    "step": 6,
    "start": 24,
    "jumps": [
     {
      "delta": -6
     },
     {
      "delta": -6
     },
     {
      "delta": -6
     },
     {
      "delta": -6
     }
    ]
   },
   "note": "24 crates split into loads of 6: that's 4 jumps back to 0. 24 ÷ 6 = 4."
  },
  "items": [
   {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 15,
     "step": 5,
     "start": 15,
     "jumps": [
      {
       "delta": -5
      },
      {
       "delta": -5
      },
      {
       "delta": -5
      }
     ]
    },
    "solve": {
     "prompt": "How many loads of 5 crates fit in 15?",
     "accepted": [
      "3"
     ]
    }
   },
   {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 28,
     "step": 7,
     "start": 28,
     "jumps": [
      {
       "delta": -7
      },
      {
       "delta": -7
      },
      {
       "delta": -7
      },
      {
       "delta": -7
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: How many loads of 7 crates fit in 28?",
     "accepted": [
      "4"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Grouping asks 'how many equal-sized groups fit inside the total?' — repeatedly subtract the group size and count the jumps.",
   "check": {
    "prompt": "How many groups of 6 fit in 24?",
    "options": [
     "4 jumps of 6, so 4 groups",
     "24 × 6 = 144 groups",
     "6 groups of 24"
    ],
    "correctIndex": 0,
    "explain": "24 ÷ 6 = 4 — you can subtract 6 four times before reaching 0."
   }
  },
  "why": {
   "text": "Grouping and sharing are two sides of the same coin — instead of splitting into a fixed NUMBER of groups, you're now asking how many groups of a fixed SIZE fit inside. Counting how many times you can subtract the group size before hitting zero is exactly what division measures.",
   "demo": {
    "model": {
     "type": "jumpline",
     "min": 0,
     "max": 18,
     "step": 6,
     "start": 18,
     "jumps": [
      {
       "delta": -6
      },
      {
       "delta": -6
      },
      {
       "delta": -6
      }
     ]
    },
    "caption": "Test it: 18 split into loads of 6 takes 3 jumps back to 0, so 18 ÷ 6 = 3."
   }
  }
 },
 "pq1": {
  "id": "pq1",
  "chapter": "ch4",
  "strategy": "Partial Quotients",
  "emoji": "🧪",
  "blurb": "Chip away friendly chunks until nothing's left — like measuring out a solution in easy repeated pours.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Take a friendly chunk:",
      "left": "6",
      "op": "×",
      "right": "10",
      "answer": "60"
     },
     {
      "label": "Subtract it:",
      "left": "84",
      "op": "−",
      "right": "60",
      "answer": "24"
     },
     {
      "label": "Take another chunk:",
      "left": "6",
      "op": "×",
      "right": "4",
      "answer": "24"
     },
     {
      "label": "Subtract it:",
      "left": "24",
      "op": "−",
      "right": "24",
      "answer": "0"
     },
     {
      "label": "Add up the chunks:",
      "left": "10",
      "op": "+",
      "right": "4",
      "answer": "14"
     }
    ]
   },
   "note": "84 mL split into 6 mL doses = 14, found in two friendly chunks: 10 doses, then 4 more."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Take a friendly chunk:",
       "left": "8",
       "op": "×",
       "right": "10",
       "answer": "80"
      },
      {
       "label": "Subtract it:",
       "left": "96",
       "op": "−",
       "right": "80",
       "answer": "16"
      },
      {
       "label": "Take another chunk:",
       "left": "8",
       "op": "×",
       "right": "2",
       "answer": "16"
      },
      {
       "label": "Subtract it:",
       "left": "16",
       "op": "−",
       "right": "16",
       "answer": "0"
      },
      {
       "label": "Add up the chunks:",
       "left": "10",
       "op": "+",
       "right": "2",
       "answer": "12"
      }
     ]
    },
    "solve": {
     "prompt": "Use partial quotients: 96 mL split into 8 mL doses?",
     "accepted": [
      "12"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Take a friendly chunk:",
       "left": "11",
       "op": "×",
       "right": "10",
       "answer": "110"
      },
      {
       "label": "Subtract it:",
       "left": "132",
       "op": "−",
       "right": "110",
       "answer": "22"
      },
      {
       "label": "Take another chunk:",
       "left": "11",
       "op": "×",
       "right": "2",
       "answer": "22"
      },
      {
       "label": "Subtract it:",
       "left": "22",
       "op": "−",
       "right": "22",
       "answer": "0"
      },
      {
       "label": "Add up the chunks:",
       "left": "10",
       "op": "+",
       "right": "2",
       "answer": "12"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: Use partial quotients: 132 mL split into 11 mL doses?",
     "accepted": [
      "12"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: Chip away friendly multiplication chunks from the total, track how many you removed, then add up the chunks — that sum is the answer.",
   "check": {
    "prompt": "84 ÷ 6, using partial quotients: after removing a chunk of 6 × 10 = 60, what's left to work on?",
    "options": [
     "24",
     "84",
     "6"
    ],
    "correctIndex": 0,
    "explain": "84 − 60 = 24, then keep chipping away chunks of 6 from what remains."
   }
  },
  "why": {
   "text": "Long division is scary, but partial quotients breaks it into friendly, repeatable moves: keep subtracting easy multiples of the divisor until nothing's left, then add up how many multiples you removed. Each chunk you peel off gets you closer, and there's no single 'trick step' to memorize — just the same simple move, repeated.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Take a friendly chunk:",
       "left": "9",
       "op": "×",
       "right": "10",
       "answer": "90"
      },
      {
       "label": "Subtract it:",
       "left": "108",
       "op": "−",
       "right": "90",
       "answer": "18"
      },
      {
       "label": "Take another chunk:",
       "left": "9",
       "op": "×",
       "right": "2",
       "answer": "18"
      },
      {
       "label": "Subtract it:",
       "left": "18",
       "op": "−",
       "right": "18",
       "answer": "0"
      },
      {
       "label": "Add up the chunks:",
       "left": "10",
       "op": "+",
       "right": "2",
       "answer": "12"
      }
     ]
    },
    "caption": "Test it: 108 ÷ 9 = 12, found in chunks of 10 and 2."
   }
  }
 },
 "ff1": {
  "id": "ff1",
  "chapter": "ch4",
  "strategy": "Fact Families",
  "emoji": "🚢",
  "blurb": "Multiplication and division facts travel in families — like a crew that can be arranged four different ways.",
  "worked": {
   "model": {
    "type": "factfamily",
    "a": 4,
    "b": 3,
    "product": 12,
    "askFact": "div1"
   },
   "note": "4 lifeboats × 3 crew = 12, 3 × 4 = 12, 12 ÷ 4 = 3, 12 ÷ 3 = 4 — one family, four facts."
  },
  "items": [
   {
    "model": {
     "type": "factfamily",
     "a": 6,
     "b": 5,
     "product": 30,
     "askFact": "mult2"
    },
    "solve": {
     "prompt": "What is 5 × 6?",
     "accepted": [
      "30"
     ]
    }
   },
   {
    "model": {
     "type": "factfamily",
     "a": 7,
     "b": 8,
     "product": 56,
     "askFact": "div2"
    },
    "solve": {
     "prompt": "BOSS ROUND: What is 56 ÷ 8?",
     "accepted": [
      "7"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: One multiplication fact unlocks 4 related facts — 2 multiplications and 2 divisions, all built from the same 3 numbers.",
   "check": {
    "prompt": "If 6 × 7 = 42, which is automatically also true?",
    "options": [
     "42 ÷ 7 = 6",
     "42 ÷ 6 = 42",
     "7 × 6 = 13"
    ],
    "correctIndex": 0,
    "explain": "The same 3 numbers (6, 7, 42) form a fact family: 6×7=42, 7×6=42, 42÷6=7, 42÷7=6."
   }
  },
  "why": {
   "text": "A fact family works because multiplication and division describe the SAME relationship between 3 numbers, just viewed from different directions. Once you know how 3 numbers connect, you automatically know all 4 ways to write that connection — you're not learning 4 new facts, just 1 fact from 4 angles.",
   "demo": {
    "model": {
     "type": "factfamily",
     "a": 5,
     "b": 6,
     "product": 30,
     "askFact": "mult1"
    },
    "caption": "Test it: 5, 6, and 30 connect four ways: 5×6=30, 6×5=30, 30÷5=6, 30÷6=5."
   }
  }
 },
 "it1": {
  "id": "it1",
  "chapter": "ch4",
  "strategy": "Inverse Thinking",
  "emoji": "🍄",
  "blurb": "Use multiplication backwards to solve division — like reversing a warp-pipe to see where you came from.",
  "worked": {
   "model": {
    "type": "chain",
    "steps": [
     {
      "label": "Think: what times 4 makes 20?",
      "left": "20",
      "op": "÷",
      "right": "4",
      "answer": "5"
     }
    ]
   },
   "note": "Think 4 × ? = 20 → ? = 5. So 20 ÷ 4 = 5."
  },
  "items": [
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Think: what times 6 makes 42?",
       "left": "42",
       "op": "÷",
       "right": "6",
       "answer": "7"
      }
     ]
    },
    "solve": {
     "prompt": "What is 42 ÷ 6?",
     "accepted": [
      "7"
     ]
    }
   },
   {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Think: what times 9 makes 63?",
       "left": "63",
       "op": "÷",
       "right": "9",
       "answer": "7"
      }
     ]
    },
    "solve": {
     "prompt": "BOSS ROUND: What is 63 ÷ 9?",
     "accepted": [
      "7"
     ]
    }
   }
  ],
  "generalRule": {
   "statement": "SPEC SHEET: To solve a division, ask the multiplication question backwards: 'what number times the divisor gives the total?'",
   "check": {
    "prompt": "For 54 ÷ 6, what backwards question do you ask?",
    "options": [
     "What times 6 makes 54?",
     "What times 54 makes 6?",
     "54 plus what makes 6?"
    ],
    "correctIndex": 0,
    "explain": "Division is multiplication in reverse: 6 × ? = 54, so ? = 9."
   }
  },
  "why": {
   "text": "Division and multiplication are the same relationship viewed from opposite ends. Instead of a brand-new type of problem, you're just asking a multiplication fact you might already know, backwards — division stops being scary once you see it's really a multiplication puzzle in disguise.",
   "demo": {
    "model": {
     "type": "chain",
     "steps": [
      {
       "label": "Think: what times 8 makes 40?",
       "left": "40",
       "op": "÷",
       "right": "8",
       "answer": "5"
      }
     ]
    },
    "caption": "Test it: 8 × 5 = 40, so 40 ÷ 8 = 5 — same fact, opposite direction."
   }
  }
 }
};
