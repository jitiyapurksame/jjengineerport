// Data checks — run after every chapter. Fails the build (exit 1) on any problem.
import { CHAPTERS } from '../src/data/chapters.js';
import { TOPICS } from '../src/data/topics.js';
const norm = x => String(x ?? '').trim().toLowerCase().replace(/,/g, '').replace(/^\+/, '');
const num = x => parseFloat(String(x).replace(/,/g, ''));
const bad = [];
const ops = { '+': (a, b) => a + b, '\u2212': (a, b) => a - b, '-': (a, b) => a - b, '\xD7': (a, b) => a * b, '\xF7': (a, b) => a / b };
function checkModel(id, tag, m, accepted) {
  if (m.type === 'chain' || m.type === 'ratiotable') {
    for (const s of m.steps || []) {
      const f = ops[s.op]; if (!f) continue;
      const v = f(num(s.left), num(s.right));
      if (isFinite(v) && Math.abs(v - num(s.answer)) > 1e-9) bad.push(`${id} ${tag}: ${s.left} ${s.op} ${s.right} = ${s.answer} (should be ${v})`);
    }
    const last = (m.steps || []).at(-1);
    if (accepted && last && !accepted.map(norm).includes(norm(last.answer))) bad.push(`${id} ${tag}: last step ${last.answer} not in accepted ${accepted}`);
  }
  if (m.type === 'bondweb' && m.mode !== 'neardouble' && m.a + m.b !== m.whole) bad.push(`${id} ${tag}: bond ${m.a}+${m.b}!=${m.whole}`);
  if (m.barSplit && m.barSplit.segs.reduce((a, s) => a + s.v, 0) !== m.barSplit.whole) bad.push(`${id} ${tag}: barSplit segments don't add to whole`);
  if (m.type === 'numweb') for (const [a, b] of m.pairs) { if (a != null && b != null && a + b !== m.whole) bad.push(`${id} ${tag}: web pair ${a}+${b}!=${m.whole}`); if (a == null && b == null) bad.push(`${id} ${tag}: pair with no known end`); }
  if (m.type === 'scale' && m.original * m.factor !== m.scaled) bad.push(`${id} ${tag}: scale mismatch`);
  if (m.type === 'factfamily' && m.a * m.b !== m.product) bad.push(`${id} ${tag}: fact family mismatch`);
  if (m.type === 'fracequiv' && (m.a * m.d) % m.b !== 0) bad.push(`${id} ${tag}: fracequiv not whole`);
}

// ---- v1.9 extra checks: models whose answer is NOT a chain step (recompute from the model, compare with accepted) ----
const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
function checkAnswerModel(id, tag, m, accepted) {
  if (!accepted) return;
  const acc = accepted.map(norm);
  const must = (what, ok) => { if (!ok) bad.push(`${id} ${tag}: ${what} (accepted: ${accepted})`); };
  if (m.type === 'choice') {
    let best = 0;
    m.options.forEach((o, i) => { if (Math.abs(o - m.number) < Math.abs(m.options[best] - m.number)) best = i; });
    must(`choice correctIndex ${m.correctIndex} but nearest option to ${m.number} is index ${best}`, best === m.correctIndex);
    const label = norm(m.optionLabels ? m.optionLabels[m.correctIndex] : m.options[m.correctIndex]);
    must(`choice answer "${label}" not in accepted`, acc.includes(label));
  }
  if (m.type === 'fracequiv') {
    const x = (m.a * m.d) / m.b;
    must(`fracequiv answer should be ${x}`, acc.includes(String(x)));
  }
  if (m.type === 'fraccompare') {
    const va = m.a.num / m.a.den, vb = m.b.num / m.b.den;
    const win = va === vb ? null : (va > vb ? 'a' : 'b');
    must(`fraccompare: correct is '${m.correct}' but bigger side is '${win}'`, win === m.correct);
    const w = m[m.correct];
    must(`fraccompare answer ${w.num}/${w.den} not in accepted`, acc.includes(`${w.num}/${w.den}`));
  }
  if (m.type === 'jumpline' && (m.fracDen || m.decScale)) {
    const pos = m.start + m.jumps.reduce((a, j) => a + j.delta, 0);
    must(`jumpline lands outside ${m.min}..${m.max}`, pos >= m.min && pos <= m.max);
    if (m.fracDen) {
      const g = gcd(pos, m.fracDen), forms = [`${pos}/${m.fracDen}`, `${pos / g}/${m.fracDen / g}`];
      must(`jumpline lands on ${forms[0]}`, forms.some(f => acc.includes(f)));
    } else {
      const v = pos / m.decScale;
      must(`jumpline lands on ${v}`, acc.some(a => Math.abs(parseFloat(a) - v) < 1e-9));
    }
  }
  if (m.type === 'judgechoice') {
    must('judgechoice correctIndex out of range', m.correctIndex >= 0 && m.correctIndex < m.options.length);
  }
}
let n = 0;
for (const c of CHAPTERS) for (const id of c.topics) {
  const t = TOPICS[id]; n++;
  if (!t) { bad.push(`${id}: MISSING`); continue; }
  for (const k of ['worked', 'items', 'generalRule', 'why']) if (!t[k]) bad.push(`${id}: missing ${k}`);
  if (t.items?.length !== 2) bad.push(`${id}: needs exactly 2 items`);
  checkModel(id, 'worked', t.worked.model);
  checkModel(id, 'why', t.why.demo.model);
  t.items.forEach((it, k) => { if (!it.solve.accepted?.length) bad.push(`${id} item${k}: no accepted answer`); checkModel(id, 'item' + k, it.model, it.solve.accepted); checkAnswerModel(id, 'item' + k, it.model, it.solve.accepted); });
  if (t.warmup) { if (!t.warmup.solve?.accepted?.length) bad.push(`${id}: warmup has no accepted answer`); checkModel(id, 'warmup', t.warmup.model, t.warmup.solve.accepted); checkAnswerModel(id, 'warmup', t.warmup.model, t.warmup.solve.accepted); }
  const g = t.generalRule.check; if (!(g.correctIndex >= 0 && g.correctIndex < g.options.length)) bad.push(`${id}: rule correctIndex`);
}
console.log(`verify: ${CHAPTERS.length} chapters, ${n} topics, ${bad.length} problems`);
bad.forEach(b => console.log('  ✗ ' + b));
process.exit(bad.length ? 1 : 0);
