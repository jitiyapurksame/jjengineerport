# Number Sense Sketchbook
- `number-sense-sketchbook.html` — the finished app (this is what the website serves).
- `source/` — editable source. To rebuild: `cd source && npm install && bash build.sh`, then copy `dist/number-sense-sketchbook.html` over the main file.

## Adding a warm-up to a topic
In `source/src/data/topics/chNN.js`, add a `warmup` next to `items`: `{ model: {...}, solve: { prompt, accepted: ["..."] } }`. Topics without one skip the stage automatically.

## Changelog
- v1.9: Warm-ups for Chapter 5 (Estimation) and Chapter 6 (Fraction Sense) - 34 of 60 topics now have one. **Fix:** jump-line (number line) taps were mapped wrongly on tablets/wide screens (a tap could land one tick away from where it was drawn); now correct at any width. The maths check (`scripts/verify.mjs`) now also recomputes `choice`, `fraccompare`, `fracequiv`, fraction/decimal jump-line and `judgechoice` answers.
- v1.8: Warm-ups for Chapter 4 (25 of 60 topics now have one).
- v1.7: Chapter 3 warm-ups. v1.6: Chapter 2. v1.5: 🔥 WARM-UP stage + Chapter 1.
- v1.4: Concrete pictures for 4 topics. v1.3: Number Webs. v1.2: Chapter 12 bar models. v1.1: hint ladder, Show me, 44px targets, reset, etc.
