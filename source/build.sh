#!/usr/bin/env bash
# Build: bundle React + app into ONE offline-capable HTML file  ->  dist/number-sense-sketchbook.html
set -e
cd "$(dirname "$0")"
node scripts/verify.mjs                      # math + structure check first
npx esbuild src/app.jsx --bundle --minify --format=iife --target=safari14 \
  --define:process.env.NODE_ENV='"production"' --loader:.css=css \
  --outfile=dist/app.js --log-level=warning
node scripts/inline.mjs
node --check dist/app.js && echo "syntax OK"
ls -l dist/number-sense-sketchbook.html
