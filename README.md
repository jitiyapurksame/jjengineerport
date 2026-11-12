# Number Sense Sketchbook

- `number-sense-sketchbook.html` — the finished app. This is the file the website serves. Nothing to build.
- `source/` — the editable source code (only needed when changing the app).

## To change the app later (on a computer with Node.js)
1. `cd source`
2. `npm install`
3. `bash build.sh` (checks the maths, then builds `dist/number-sense-sketchbook.html`)
4. Copy that file over the one in the main folder, then commit and push.

Topic content lives in `source/src/data/topics/ch01.js` … `ch12.js`.
