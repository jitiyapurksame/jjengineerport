import fs from 'fs';
const tpl = fs.readFileSync('template.html', 'utf8');
const js = fs.readFileSync('dist/app.js', 'utf8').replace(/<\/script>/g, '<\\/script>');
const css = fs.existsSync('dist/app.css') ? fs.readFileSync('dist/app.css', 'utf8') : '';
fs.writeFileSync('dist/number-sense-sketchbook.html', tpl.replace('/*CSS*/', () => css).replace('/*JS*/', () => js));
