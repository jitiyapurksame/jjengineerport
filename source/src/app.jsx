// Number Sense Sketchbook — app UI (rebuilt from the compiled bundle; names are still short/minified).
import * as React from 'react';
import * as JSX from 'react/jsx-runtime';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { CHAPTERS as Ao } from './data/chapters.js';
import { TOPICS as Ft } from './data/topics.js';
const W = React, K = React, d = JSX, w = JSX, rd = JSX, nd = { createRoot };

function qc(e) {
 return String(e ?? "").trim().toLowerCase().replace(/,/g, "").replace(/^\+/, "")
}

function ia(e, t) {
 let n = qc(e);
 return n === "" ? !1 : t.some(r => qc(r) === n)
}

function Ih({
 model: e,
 readOnly: t,
 onDone: n
}) {
 let {
  min: r,
  max: o,
  step: l,
  start: i,
  jumps: a
 } = e, [s, u] = (0, W.useState)(t ? a.length : 0), [m, f] = (0, W.useState)(!1);
 (0, W.useEffect)(() => {
  u(t ? a.length : 0), f(!1)
 }, [e, t]);

 function g(x) {
  return e.fracDen ? `${x}/${e.fracDen}` : e.decScale ? String(x / e.decScale) : x
 }

 function b(x) {
  return e.fracDen ? (x >= 0 ? `+${x}` : `${x}`) + `/${e.fracDen}` : e.decScale ? (x >= 0 ? "+" : "") + String(x / e.decScale) : x >= 0 ? `+${x} nm` : `${x} nm`
 }
 let v = 320,
  S = 92,
  j = 20,
  p = x => j + (x - r) / (o - r) * (v - j * 2),
  c = [i],
  h = i;
 for (let x of a) h += x.delta, c.push(h);
 let y = [];
 for (let x = r; x <= o; x += l) y.push(x);
 let N = s < a.length ? c[s + 1] : null;

 function C(x) {
  if (t || s >= a.length) return;
  let T = x.currentTarget.getBoundingClientRect(),
   I = x.clientX - T.left,
   L = r + (I - j) / (v - j * 2) * (o - r);
  if (Math.round(L / l) * l === N) {
   let Bt = s + 1;
   u(Bt), f(!1), Bt >= a.length && n && n()
  } else f(!0), setTimeout(() => f(!1), 500)
 }
 return (0, d.jsxs)("div", {
  className: "sk-numline" + (m ? " sk-shake" : ""),
  children: [(0, d.jsxs)("svg", {
   viewBox: `0 0 ${v} ${S}`,
   width: "100%",
   height: S,
   onClick: C,
   style: {
    cursor: t || s >= a.length ? "default" : "pointer"
   },
   children: [(0, d.jsx)("line", {
    x1: j,
    y1: S - 24,
    x2: v - j,
    y2: S - 24,
    stroke: "var(--ink-soft)",
    strokeWidth: "2"
   }), y.map(x => (0, d.jsx)("line", {
    x1: p(x),
    y1: S - 30,
    x2: p(x),
    y2: S - 18,
    stroke: "var(--ink-soft)",
    strokeWidth: x % (l * 5 === 0 ? l * 5 : l) === 0 ? 2 : 1,
    opacity: .5
   }, x)), c.slice(0, s + 1).map((x, T) => {
    if (T === 0) return null;
    let I = p(c[T - 1]),
     L = p(x),
     ke = (I + L) / 2,
     Bt = a[T - 1].delta;
    return (0, d.jsxs)("g", {
     children: [(0, d.jsx)("path", {
      d: `M ${I} ${S-24} Q ${ke} ${S-58} ${L} ${S-24}`,
      stroke: "var(--amber-dark)",
      strokeWidth: "2.5",
      fill: "none"
     }), (0, d.jsx)("text", {
      x: ke,
      y: S - 62,
      textAnchor: "middle",
      fontSize: "12",
      fontWeight: "700",
      fill: "var(--amber-dark)",
      children: b(Bt)
     })]
    }, T)
   }), c.slice(0, s + 1).map((x, T) => (0, d.jsx)("circle", {
    cx: p(x),
    cy: S - 24,
    r: T === 0 ? 5 : 6,
    fill: T === 0 ? "var(--teal)" : "var(--coral)",
    stroke: "#fff",
    strokeWidth: "1.5"
   }, "pt" + T)), (0, d.jsx)("text", {
    x: p(c[0]),
    y: S - 34,
    textAnchor: "middle",
    fontSize: "14",
    children: "\u26F4\uFE0F"
   }), c.slice(0, s + 1).map((x, T) => (0, d.jsx)("text", {
    x: p(x),
    y: S - 6,
    textAnchor: "middle",
    fontSize: "12",
    fontWeight: "700",
    fill: "var(--ink)",
    children: g(x)
   }, "lb" + T))]
  }), !t && s < a.length && (0, d.jsx)("div", {
   className: "sk-hint-line",
   children: "\u2693 Chart the next leg of the voyage \u2014 tap where the ship lands."
  })]
 })
}

function Dh({
 model: e,
 readOnly: t,
 onDone: n
}) {
 let {
  number: r,
  options: o,
  correctIndex: l
 } = e, [i, a] = (0, W.useState)(t ? l : null), [s, u] = (0, W.useState)(!1);
 (0, W.useEffect)(() => {
  a(t ? l : null), u(!1)
 }, [e, t]);
 let m = Math.min(r, ...o),
  g = Math.max(r, ...o) - m || 1,
  b = 300,
  v = 20,
  S = h => v + (h - m) / g * (b - v * 2),
  j = o.map(h => Math.round(Math.abs(r - h) * 100) / 100),
  p = Math.min(...j);

 function c(h) {
  t || i !== null || (h === l ? (a(h), n && n()) : (u(!0), setTimeout(() => u(!1), 500)))
 }
 return (0, d.jsxs)("div", {
  className: "sk-choiceline" + (s ? " sk-shake" : ""),
  children: [(0, d.jsxs)("svg", {
   viewBox: `0 0 ${b} 58`,
   width: "100%",
   height: "58",
   children: [(0, d.jsx)("line", {
    x1: v,
    y1: "30",
    x2: b - v,
    y2: "30",
    stroke: "var(--ink-soft)",
    strokeWidth: "2"
   }), (0, d.jsx)("text", {
    x: S(r),
    y: "18",
    textAnchor: "middle",
    fontSize: "14",
    children: "\u26F4\uFE0F"
   }), (0, d.jsx)("circle", {
    cx: S(r),
    cy: "30",
    r: "5",
    fill: "var(--teal)",
    stroke: "#fff",
    strokeWidth: "1.5"
   }), (0, d.jsx)("text", {
    x: S(r),
    y: "52",
    textAnchor: "middle",
    fontSize: "12",
    fontWeight: "700",
    fill: "var(--teal)",
    children: e.numberLabel ?? r
   }), o.map((h, y) => (0, d.jsxs)("g", {
    children: [(0, d.jsx)("text", {
     x: S(h),
     y: "24",
     textAnchor: "middle",
     fontSize: "12",
     children: "\u2693"
    }), (0, d.jsx)("text", {
     x: S(h),
     y: "52",
     textAnchor: "middle",
     fontSize: "11",
     fill: "var(--ink-soft)",
     children: (e.optionLabels && e.optionLabels[y]) ?? h
    })]
   }, y))]
  }), (0, d.jsx)("div", {
   className: "sk-choice-btns",
   children: o.map((h, y) => (0, d.jsxs)("div", {
    className: "sk-choice-btn-wrap",
    children: [(0, d.jsx)("button", {
     className: "sk-choice-btn" + (i === y ? " sk-choice-correct" : ""),
     disabled: t || i !== null,
     onClick: () => c(y),
     children: (e.optionLabels && e.optionLabels[y]) ?? h
    }), (0, d.jsxs)("div", {
     className: "sk-choice-dist" + (j[y] === p ? " sk-choice-dist-best" : ""),
     children: [j[y], " away"]
    })]
   }, y))
  })]
 })
}

function dr({
 whole: e,
 parts: t,
 wholeLabel: n
}) {
 let o = 264 / e,
  l = e <= 20;
 return (0, d.jsxs)("div", {
  className: "sk-barmodel",
  children: [(0, d.jsx)("div", {
   className: "sk-barmodel-brace",
   style: {
    width: 264
   },
   children: (0, d.jsxs)("span", {
    className: "sk-barmodel-whole",
    children: ["\u26F4\uFE0F ", n ?? e]
   })
  }), (0, d.jsx)("div", {
   className: "sk-barmodel-bar",
   style: {
    width: 264
   },
   children: t.map((i, a) => {
    let s = Math.max(34, Math.round(i.value * o));
    return (0, d.jsxs)("div", {
     className: "sk-barmodel-seg" + (i.missing ? " sk-barmodel-seg-missing" : " sk-barmodel-seg-" + (i.color || "a")),
     style: {
      width: s
     },
     children: [!i.missing && l && (0, d.jsx)("div", {
      className: "sk-dotgrid",
      children: Array.from({
       length: i.value
      }).map((u, m) => (0, d.jsx)("span", {
       className: "sk-dot"
      }, m))
     }), (0, d.jsx)("span", {
      className: "sk-barmodel-seg-label",
      children: i.missing ? "?" : i.value
     })]
    }, a)
   })
  })]
 })
}

function Ah({
 model: e,
 missingValue: t
}) {
 if (e.mode === "neardouble") {
  let {
   small: s,
   big: u,
   doubleVal: m,
   adjust: f
  } = e, g = [{
   value: s,
   color: "a"
  }, {
   value: s,
   color: "a"
  }, {
   value: f,
   color: "b"
  }];
  return (0, d.jsxs)("div", {
   children: [(0, d.jsxs)("div", {
    className: "sk-neardouble-caption",
    children: [s, " + ", u, " is close to double ", s, ":"]
   }), (0, d.jsx)(dr, {
    whole: s + u,
    parts: g
   })]
  })
 }
 let {
  whole: n,
  a: r,
  b: o,
  missing: l
 } = e, i = t != null;
 return (0, d.jsx)(dr, {
  whole: n,
  parts: [{
   value: r,
   missing: l === "a" && !i,
   color: "a"
  }, {
   value: o,
   missing: l === "b" && !i,
   color: "b"
  }]
 })
}

function Gc({
 groups: e,
 each: t
}) {
 let n = t <= 12 && t > 0;
 return (0, d.jsxs)("div", {
  className: "sk-groupvisual",
  children: [(0, d.jsxs)("div", {
   className: "sk-groupvisual-caption",
   children: [e, " groups of ", t]
  }), (0, d.jsx)("div", {
   className: "sk-groupvisual-grid",
   children: Array.from({
    length: e
   }).map((r, o) => (0, d.jsxs)("div", {
    className: "sk-groupvisual-item",
    children: [n ? (0, d.jsx)("div", {
     className: "sk-groupvisual-box",
     children: (0, d.jsx)("div", {
      className: "sk-groupvisual-dots",
      children: Array.from({
       length: t
      }).map((l, i) => (0, d.jsx)("span", {
       className: "sk-groupvisual-dot"
      }, i))
     })
    }) : (0, d.jsx)("span", {
     className: "sk-groupvisual-crate",
     children: "\u{1F4E6}"
    }), (0, d.jsx)("span", {
     className: "sk-groupvisual-num",
     children: t
    })]
   }, o))
  })]
 })
}

function Oh({
 rows: e,
 cols: t
}) {
 let n = e * t;
 return (0, d.jsxs)("div", {
  className: "sk-array-wrap",
  children: [(0, d.jsx)("div", {
   className: "sk-array-grid",
   style: {
    gridTemplateColumns: `repeat(${t}, 1fr)`
   },
   children: Array.from({
    length: n
   }).map((r, o) => (0, d.jsx)("span", {
    className: "sk-array-dot"
   }, o))
  }), (0, d.jsxs)("div", {
   className: "sk-array-caption",
   children: [e, " rows \xD7 ", t, " cols"]
  })]
 })
}

function zh({
 original: e,
 factor: t,
 scaled: n
}) {
 return (0, d.jsxs)("div", {
  className: "sk-scalepair",
  children: [(0, d.jsxs)("div", {
   className: "sk-scalepair-row",
   children: [(0, d.jsx)("span", {
    className: "sk-scalepair-tag",
    children: "Before"
   }), (0, d.jsx)(dr, {
    whole: e,
    parts: [{
     value: e,
     color: "a"
    }],
    wholeLabel: e
   })]
  }), (0, d.jsxs)("div", {
   className: "sk-scalepair-arrow",
   children: ["\xD7 ", t, " \u2193"]
  }), (0, d.jsxs)("div", {
   className: "sk-scalepair-row",
   children: [(0, d.jsx)("span", {
    className: "sk-scalepair-tag",
    children: "After"
   }), (0, d.jsx)(dr, {
    whole: n,
    parts: [{
     value: n,
     color: "b"
    }],
    wholeLabel: n
   })]
  })]
 })
}

function Fh(e) {
 return e === 1 ? "100% split into 100 equal squares is 1 square each \u2014 that's why \xF7100 finds 1%." : e === 10 ? "100% split into 10 equal groups is 10 squares each \u2014 that's why \xF710 finds 10%." : e === 5 ? "5% is exactly half of 10% \u2014 find 10% first, then split it in half." : e === 25 ? "25% is one quarter of the whole \u2014 that's why \xF74 finds 25%." : e === 50 ? "50% is exactly half the whole \u2014 that's why \xF72 finds 50%." : e === 75 ? "75% is three quarters \u2014 find one quarter (\xF74), then \xD73." : `${e}% means ${e} shaded out of every 100 squares.`
}

function Mh({
 percent: e,
 why: t
}) {
 let n = Math.round(e);
 return (0, d.jsxs)("div", {
  className: "sk-pctgrid",
  children: [(0, d.jsx)("div", {
   className: "sk-pctgrid-grid",
   children: Array.from({
    length: 100
   }).map((r, o) => (0, d.jsx)("span", {
    className: "sk-pctgrid-cell" + (o < n ? " sk-pctgrid-cell-filled" : "")
   }, o))
  }), (0, d.jsxs)("div", {
   className: "sk-pctgrid-caption",
   children: [e, "% = ", n, " out of 100 squares shaded"]
  }), (0, d.jsx)("div", {
   className: "sk-pctgrid-why",
   children: t || Fh(e)
  })]
 })
}

function Bh(e, t, n) {
 let r = String(e),
  o = r.startsWith("-");
 o && (r = r.slice(1));
 let [l, i = ""] = r.split("."), a = l + i, s = l.length, u = s + n * t, m = Math.max(0, -u);
 a = "0".repeat(m) + a, s += m, u += m;
 let f = Math.max(s, u) + 1;
 a.length < f && (a = a + "0".repeat(f - a.length));

 function g(b) {
  let v = a.slice(0, b) || "0";
  v = v.replace(/^0+(?=\d)/, "");
  let S = a.slice(b);
  return {
   int: (o ? "-" : "") + v,
   frac: S
  }
 }
 return {
  from: g(s),
  to: g(u)
 }
}

function Yc({
 from: e,
 places: t,
 direction: n
}) {
 let {
  from: r,
  to: o
 } = Bh(e, t, n);
 return (0, d.jsxs)("div", {
  className: "sk-decshift",
  children: [(0, d.jsxs)("div", {
   className: "sk-decshift-row",
   children: [r.int, (0, d.jsx)("span", {
    className: "sk-decshift-point",
    children: "."
   }), r.frac]
  }), (0, d.jsxs)("div", {
   className: "sk-decshift-arrow",
   children: [n < 0 ? "\u2B05" : "\u27A1", " point moves ", t, " place", t > 1 ? "s" : "", " ", n < 0 ? "left" : "right"]
  }), (0, d.jsxs)("div", {
   className: "sk-decshift-row sk-decshift-row-to",
   children: [o.int, (0, d.jsx)("span", {
    className: "sk-decshift-point",
    children: "."
   }), o.frac]
  })]
 })
}

function Kc(e) {
 if (!e || e.type !== "chain") return null;
 for (let t of e.steps) {
  let n = parseFloat(t.right);
  if ((t.op === "\xD7" || t.op === "\xF7") && [10, 100, 1e3].includes(n)) return {
   from: parseFloat(t.left),
   places: Math.log10(n),
   direction: t.op === "\xD7" ? 1 : -1
  }
 }
 return null
}

function Xc(e) {
 let t = !1;

 function n(r) {
  t || (typeof r == "number" ? Math.abs(r) >= 100 && (t = !0) : Array.isArray(r) ? r.forEach(n) : r && typeof r == "object" && Object.values(r).forEach(n))
 }
 return n(e), t
}
var Hh = ["Th", "H", "T", "O"];

function Zc() {
 let [e, t] = (0, W.useState)("+"), [n, r] = (0, W.useState)({
  top: ["", "", "", ""],
  bottom: ["", "", "", ""],
  answer: ["", "", "", ""]
 });

 function o(i, a, s) {
  let u = s.replace(/[^0-9]/g, "").slice(-1);
  r(m => ({
   ...m,
   [i]: m[i].map((f, g) => g === a ? u : f)
  }))
 }

 function l() {
  r({
   top: ["", "", "", ""],
   bottom: ["", "", "", ""],
   answer: ["", "", "", ""]
  })
 }
 return (0, d.jsxs)("div", {
  className: "sk-colpad",
  children: [(0, d.jsx)("div", {
   className: "sk-colpad-title",
   children: "\u{1F9EE} SCRATCH PAD"
  }), (0, d.jsxs)("div", {
   className: "sk-colpad-grid",
   children: [(0, d.jsxs)("div", {
    className: "sk-colpad-row sk-colpad-headers",
    children: [(0, d.jsx)("div", {
     className: "sk-colpad-opcell"
    }), Hh.map(i => (0, d.jsx)("div", {
     className: "sk-colpad-cell sk-colpad-headcell",
     children: i
    }, i))]
   }), (0, d.jsxs)("div", {
    className: "sk-colpad-row",
    children: [(0, d.jsx)("div", {
     className: "sk-colpad-opcell"
    }), n.top.map((i, a) => (0, d.jsx)("input", {
     className: "sk-colpad-cell sk-colpad-input",
     inputMode: "numeric",
     maxLength: 1,
     value: i,
     onChange: s => o("top", a, s.target.value)
    }, a))]
   }), (0, d.jsxs)("div", {
    className: "sk-colpad-row",
    children: [(0, d.jsx)("button", {
     className: "sk-colpad-opcell sk-colpad-opbtn",
     onClick: () => t(e === "+" ? "\u2212" : "+"),
     children: e
    }), n.bottom.map((i, a) => (0, d.jsx)("input", {
     className: "sk-colpad-cell sk-colpad-input",
     inputMode: "numeric",
     maxLength: 1,
     value: i,
     onChange: s => o("bottom", a, s.target.value)
    }, a))]
   }), (0, d.jsx)("div", {
    className: "sk-colpad-rule"
   }), (0, d.jsxs)("div", {
    className: "sk-colpad-row",
    children: [(0, d.jsx)("div", {
     className: "sk-colpad-opcell"
    }), n.answer.map((i, a) => (0, d.jsx)("input", {
     className: "sk-colpad-cell sk-colpad-input sk-colpad-answer",
     inputMode: "numeric",
     maxLength: 1,
     value: i,
     onChange: s => o("answer", a, s.target.value)
    }, a))]
   })]
  }), (0, d.jsx)("button", {
   className: "sk-colpad-clear",
   onClick: l,
   children: "Clear pad"
  })]
 })
}

function Uh({
 a: e,
 b: t,
 product: n
}) {
 return (0, d.jsxs)("svg", {
  viewBox: "0 0 200 140",
  width: "100%",
  height: "130",
  children: [(0, d.jsx)("polygon", {
   points: "100,14 18,120 182,120",
   fill: "none",
   stroke: "var(--ink-soft)",
   strokeWidth: "2",
   opacity: "0.5"
  }), (0, d.jsx)("circle", {
   cx: "100",
   cy: "20",
   r: "22",
   fill: "var(--success-bg)",
   stroke: "var(--success)",
   strokeWidth: "2"
  }), (0, d.jsx)("text", {
   x: "100",
   y: "27",
   textAnchor: "middle",
   fontSize: "15",
   fontWeight: "700",
   fill: "var(--teal-dark)",
   children: n
  }), (0, d.jsx)("circle", {
   cx: "20",
   cy: "120",
   r: "20",
   fill: "#fff",
   stroke: "var(--teal)",
   strokeWidth: "2"
  }), (0, d.jsx)("text", {
   x: "20",
   y: "127",
   textAnchor: "middle",
   fontSize: "14",
   fontWeight: "700",
   fill: "var(--teal-dark)",
   children: e
  }), (0, d.jsx)("circle", {
   cx: "180",
   cy: "120",
   r: "20",
   fill: "#fff",
   stroke: "var(--teal)",
   strokeWidth: "2"
  }), (0, d.jsx)("text", {
   x: "180",
   y: "127",
   textAnchor: "middle",
   fontSize: "14",
   fontWeight: "700",
   fill: "var(--teal-dark)",
   children: t
  })]
 })
}

function Wh({
 model: e,
 readOnly: t,
 onDone: n
}) {
 let {
  statement: r,
  options: o,
  correctIndex: l
 } = e, [i, a] = (0, W.useState)(t ? l : null), [s, u] = (0, W.useState)(!1);
 (0, W.useEffect)(() => {
  a(t ? l : null), u(!1)
 }, [e, t]);

 function m(f) {
  t || i !== null || (f === l ? (a(f), n && n()) : (u(!0), setTimeout(() => u(!1), 500)))
 }
 return (0, d.jsxs)("div", {
  className: "sk-judge" + (s ? " sk-shake" : ""),
  children: [(0, d.jsx)("div", {
   className: "sk-judge-statement",
   children: r
  }), (0, d.jsx)("div", {
   className: "sk-judge-btns",
   children: o.map((f, g) => (0, d.jsx)("button", {
    className: "sk-judge-btn" + (i === g ? " sk-choice-correct" : ""),
    disabled: t || i !== null,
    onClick: () => m(g),
    children: f
   }, g))
  })]
 })
}

function zo({
 num: e,
 den: t,
 color: n,
 missing: r
}) {
 return (0, d.jsxs)("div", {
  className: "sk-fracbar",
  children: [(0, d.jsxs)("div", {
   className: "sk-fracbar-bar" + (r ? " sk-fracbar-bar-missing" : ""),
   children: [Array.from({
    length: t
   }).map((o, l) => (0, d.jsx)("div", {
    className: "sk-fracbar-seg" + (!r && l < e ? " sk-fracbar-seg-filled sk-fracbar-seg-" + (n || "a") : "")
   }, l)), r && (0, d.jsx)("span", {
    className: "sk-fracbar-missing-mark",
    children: "?"
   })]
  }), (0, d.jsx)("div", {
   className: "sk-fracbar-label",
   children: r ? `? /${t}` : `${e}/${t}`
  })]
 })
}

function $h({
 model: e,
 readOnly: t,
 onDone: n
}) {
 let {
  a: r,
  b: o,
  correct: l
 } = e, [i, a] = (0, W.useState)(t ? l : null), [s, u] = (0, W.useState)(!1);
 (0, W.useEffect)(() => {
  a(t ? l : null), u(!1)
 }, [e, t]);

 function m(f) {
  t || i || (f === l ? (a(f), n && n()) : (u(!0), setTimeout(() => u(!1), 500)))
 }
 return (0, d.jsxs)("div", {
  className: "sk-fraccompare" + (s ? " sk-shake" : ""),
  children: [(0, d.jsx)("button", {
   className: "sk-fraccompare-opt" + (i === "a" ? " sk-choice-correct" : ""),
   disabled: t || !!i,
   onClick: () => m("a"),
   children: (0, d.jsx)(zo, {
    num: r.num,
    den: r.den,
    color: "a"
   })
  }), (0, d.jsx)("div", {
   className: "sk-fraccompare-vs",
   children: "vs"
  }), (0, d.jsx)("button", {
   className: "sk-fraccompare-opt" + (i === "b" ? " sk-choice-correct" : ""),
   disabled: t || !!i,
   onClick: () => m("b"),
   children: (0, d.jsx)(zo, {
    num: o.num,
    den: o.den,
    color: "b"
   })
  })]
 })
}

function Qc({
 model: e
}) {
 let {
  topVals: t,
  bottomVals: n,
  missingIndex: r,
  side: o,
  topLabel: l,
  bottomLabel: i
 } = e, a = t.length, s = 300, u = 22, m = 66, f = (s - u * 2) / (a - 1), g = v => u + v * f;

 function b(v, S, j, p) {
  return (0, d.jsxs)("svg", {
   viewBox: `0 0 ${s} ${m}`,
   width: "100%",
   height: m,
   children: [(0, d.jsx)("line", {
    x1: u,
    y1: m - 22,
    x2: s - u,
    y2: m - 22,
    stroke: "var(--ink-soft)",
    strokeWidth: "2"
   }), v.slice(1).map((c, h) => {
    let y = h + 1,
     N = g(y - 1),
     C = g(y),
     x = (N + C) / 2,
     I = !(o === (S ? "bottom" : "top") && (y === r || y - 1 === r)) && typeof v[y] == "number" && typeof v[y - 1] == "number" ? v[y] - v[y - 1] : null;
    return (0, d.jsxs)("g", {
     children: [(0, d.jsx)("path", {
      d: `M ${N} ${m-22} Q ${x} ${m-44} ${C} ${m-22}`,
      stroke: j,
      strokeWidth: "2",
      fill: "none",
      opacity: "0.6"
     }), I != null && (0, d.jsxs)("text", {
      x,
      y: m - 48,
      textAnchor: "middle",
      fontSize: "10.5",
      fontWeight: "700",
      fill: j,
      children: ["+", I]
     })]
    }, y)
   }), v.map((c, h) => {
    let y = o === (S ? "bottom" : "top") && h === r;
    return (0, d.jsxs)("g", {
     children: [(0, d.jsx)("circle", {
      cx: g(h),
      cy: m - 22,
      r: y ? 7 : 5,
      fill: y ? "var(--nudge-bg)" : p,
      stroke: y ? "var(--amber-dark)" : "#fff",
      strokeWidth: y ? 2 : 1.5,
      strokeDasharray: y ? "2,2" : void 0
     }), (0, d.jsx)("text", {
      x: g(h),
      y: m - 4,
      textAnchor: "middle",
      fontSize: "12",
      fontWeight: "700",
      fill: y ? "var(--amber-dark)" : "var(--ink)",
      children: y ? "?" : c
     })]
    }, h)
   })]
  })
 }
 return (0, d.jsxs)("div", {
  className: "sk-dnl",
  children: [l && (0, d.jsx)("div", {
   className: "sk-dnl-label",
   children: l
  }), b(t, !1, "var(--teal)", "var(--teal)"), i && (0, d.jsx)("div", {
   className: "sk-dnl-label sk-dnl-label-b",
   children: i
  }), b(n, !0, "var(--coral)", "var(--coral)")]
 })
}

function Vh({
 headers: e,
 rows: t
}) {
 return (0, d.jsxs)("table", {
  className: "sk-ratiotable",
  children: [(0, d.jsx)("thead", {
   children: (0, d.jsx)("tr", {
    children: e.map((n, r) => (0, d.jsx)("th", {
     children: n
    }, r))
   })
  }), (0, d.jsx)("tbody", {
   children: t.map((n, r) => (0, d.jsx)("tr", {
    children: n.map((o, l) => (0, d.jsx)("td", {
     children: o
    }, l))
   }, r))
  })]
 })
}

function qh({
 model: e
}) {
 return (0, d.jsx)("div", {
  className: "sk-chips-row",
  children: e.columns.map((t, n) => (0, d.jsxs)("div", {
   className: "sk-chip-pair",
   children: [(0, d.jsx)("div", {
    className: "sk-chip sk-chip-a",
    children: t.a
   }), (0, d.jsx)("div", {
    className: "sk-chip-plus",
    children: "+"
   }), (0, d.jsx)("div", {
    className: "sk-chip sk-chip-b",
    children: t.b
   })]
  }, n))
 })
}

function ze({
 rows: e,
 readOnly: t,
 onDone: n
}) {
 let [r, o] = (0, W.useState)(() => e.map(() => t ? "x" : "")), [l, i] = (0, W.useState)(() => e.map(() => t)), [a, s] = (0, W.useState)(null);
 (0, W.useEffect)(() => {
  o(e.map(() => t ? "x" : "")), i(e.map(() => t)), s(null)
 }, [e, t]);

 function u(m, f) {
  if (ia(f, [String(e[m].answer)])) {
   let g = [...l];
   g[m] = !0, i(g), s(null), g.every(Boolean) && n && n()
  } else s(m), setTimeout(() => s(null), 500)
 }
 return (0, d.jsx)("div", {
  className: "sk-steprows",
  children: e.map((m, f) => t || f === 0 || l[f - 1] ? (0, d.jsxs)("div", {
   className: "sk-steprow" + (a === f ? " sk-shake" : ""),
   children: [m.label && (0, d.jsx)("div", {
    className: "sk-steprow-label",
    children: m.label
   }), m.visual && (0, d.jsx)(Gc, {
    groups: m.visual.groups,
    each: m.visual.each
   }), (0, d.jsxs)("div", {
    className: "sk-steprow-eq",
    children: [(0, d.jsx)("span", {
     children: m.prompt
    }), l[f] ? (0, d.jsx)("span", {
     className: "sk-steprow-answer",
     children: t ? m.answer : e[f].answer
    }) : (0, d.jsx)("input", {
     type: "text",
     inputMode: "decimal",
     className: "sk-steprow-input",
     value: r[f],
     onChange: b => {
      let v = [...r];
      v[f] = b.target.value, o(v)
     },
     onKeyDown: b => {
      b.key === "Enter" && u(f, r[f])
     }
    }), !l[f] && (0, d.jsx)("button", {
     className: "sk-steprow-check",
     onClick: () => u(f, r[f]),
     children: "\u2713"
    }), l[f] && (0, d.jsx)("span", {
     className: "sk-steprow-tick",
     children: "\u2713"
    })]
   })]
  }, f) : null)
 })
}

function je(e) {
 switch (e.type) {
  case "bondweb": {
   if (e.mode === "neardouble") {
    let r = e.small + e.big;
    return [{
     prompt: `${e.small} + ${e.small} =`,
     answer: e.doubleVal,
     label: "Double the smaller number:"
    }, {
     prompt: `${e.doubleVal} + ${e.adjust} =`,
     answer: r,
     label: "Add the extra:"
    }]
   }
   let t = e.missing === "a" ? e.a : e.b,
    n = e.missing === "a" ? e.b : e.a;
   return [{
    prompt: `${e.whole} = ${n} + ?`,
    answer: t,
    label: null
   }]
  }
  case "columnsum": {
   let t = e.columns.map(n => ({
    prompt: `${n.a} + ${n.b} =`,
    answer: n.sum,
    label: n.place.charAt(0).toUpperCase() + n.place.slice(1) + ":"
   }));
   return t.push({
    prompt: e.columns.map(n => n.sum).join(" + ") + " =",
    answer: e.total,
    label: "Add the parts together:"
   }), t
  }
  case "chain":
   return e.steps.map(t => {
    let n = {
     prompt: `${t.left} ${t.op} ${t.right} =`,
     answer: t.answer,
     label: t.label
    };
    if (t.op === "\xD7") {
     let r = parseFloat(t.left),
      o = parseFloat(t.right);
     isFinite(r) && isFinite(o) && r > 0 && o > 0 && (n.visual = {
      groups: Math.min(r, o),
      each: Math.max(r, o)
     })
    }
    return n
   });
  case "compensate": {
   if (e.op === "-") {
    let r = e.a.start + e.a.delta,
     o = r + e.fix.delta;
    return [{
     prompt: `${e.a.start} \u2212 ${Math.abs(e.a.delta)} =`,
     answer: r,
     label: e.a.label ? e.a.label.charAt(0).toUpperCase() + e.a.label.slice(1) + ":" : "Round it off:"
    }, {
     prompt: `${r} ${e.fix.delta>=0?"+":"\u2212"} ${Math.abs(e.fix.delta)} =`,
     answer: o,
     label: "Fix the answer:"
    }]
   }
   let t = e.a.start + e.a.delta,
    n = e.b.start + e.b.delta;
   return [{
    prompt: `${e.a.start} ${e.a.delta>=0?"+":""}${e.a.delta} =`,
    answer: t,
    label: "Adjust the first number:"
   }, {
    prompt: `${e.b.start} ${e.b.delta>=0?"+":""}${e.b.delta} =`,
    answer: n,
    label: "Adjust the second number:"
   }, {
    prompt: `${t} + ${n} =`,
    answer: t + n,
    label: "Now add the friendly numbers:"
   }]
  }
  case "array": {
   let t = e.rows * e.cols;
   return e.missing === "cols" ? [{
    prompt: `${t} shared into ${e.rows} equal groups \u2192 each group =`,
    answer: e.cols,
    label: null
   }] : e.missing === "rows" ? [{
    prompt: `${t} split into groups of ${e.cols} \u2192 number of groups =`,
    answer: e.rows,
    label: null
   }] : [{
    prompt: `${e.rows} \xD7 ${e.cols} =`,
    answer: t,
    label: null
   }]
  }
  case "groups":
   return [{
    prompt: `${e.groups} \xD7 ${e.each} =`,
    answer: e.groups * e.each,
    label: null
   }];
  case "scale":
   return [{
    prompt: `${e.original} \xD7 ${e.factor} =`,
    answer: e.scaled,
    label: null,
    visual: {
     groups: Math.min(e.original, e.factor),
     each: Math.max(e.original, e.factor)
    }
   }];
  case "factfamily": {
   let {
    a: t,
    b: n,
    product: r,
    askFact: o
   } = e;
   return [{
    ...{
     mult1: {
      prompt: `${t} \xD7 ${n} =`,
      answer: r
     },
     mult2: {
      prompt: `${n} \xD7 ${t} =`,
      answer: r
     },
     div1: {
      prompt: `${r} \xF7 ${t} =`,
      answer: n
     },
     div2: {
      prompt: `${r} \xF7 ${n} =`,
      answer: t
     }
    } [o],
    label: null
   }]
  }
  case "fracequiv": {
   let t = Math.round(e.a * e.d / e.b);
   return [{
    prompt: `${e.a}/${e.b} = ?/${e.d}`,
    answer: t,
    label: null
   }]
  }
  case "doubleline":
   return [{
    prompt: "Missing value =",
    answer: e.missingValue,
    label: "Find the missing pair:"
   }];
  case "ratiotable":
   return je({
    type: "chain",
    steps: e.steps
   });
  default:
   return []
 }
}

function Fo({
 model: e,
 readOnly: t,
 onDone: n
}) {
 let [r, o] = (0, W.useState)(!1);
 if ((0, W.useEffect)(() => o(!1), [e]), e.type === "jumpline") return (0, d.jsx)(Ih, {
  model: e,
  readOnly: t,
  onDone: n
 });
 if (e.type === "choice") return (0, d.jsx)(Dh, {
  model: e,
  readOnly: t,
  onDone: n
 });
 if (e.type === "bondweb") {
  let l = je(e);
  return (0, d.jsxs)("div", {
   children: [(0, d.jsx)(Ah, {
    model: e,
    missingValue: r ? (l[l.length - 1] || {}).answer : null
   }), e.mode !== "neardouble" ? null : e.preNote, (0, d.jsx)(ze, {
    rows: l,
    readOnly: t,
    onDone: () => {
     o(!0), n && n()
    }
   })]
  })
 }
 if (e.type === "columnsum") {
  let l = je(e);
  return (0, d.jsxs)("div", {
   children: [(0, d.jsx)(qh, {
    model: e
   }), (0, d.jsx)(ze, {
    rows: l,
    readOnly: t,
    onDone: n
   })]
  })
 }
 if (e.type === "chain") {
  let l = je(e);
  return (0, d.jsxs)("div", {
   children: [e.preNote && (0, d.jsx)("div", {
    className: "sk-prenote",
    children: e.preNote
   }), e.percentGrid && (0, d.jsx)(Mh, {
    percent: e.percentGrid.percent,
    why: e.percentGrid.why
   }), e.ratioVisual && (0, d.jsx)(Qc, {
    model: e.ratioVisual
   }), e.areaParts && (0, d.jsx)(dr, {
    whole: e.areaParts.reduce((i, a) => i + a, 0),
    parts: e.areaParts.map((i, a) => ({
     value: i,
     color: a === 0 ? "a" : "b"
    }))
   }), (0, d.jsx)(ze, {
    rows: l,
    readOnly: t,
    onDone: n
   })]
  })
 }
 if (e.type === "compensate") {
  let l = je(e);
  return (0, d.jsx)(ze, {
   rows: l,
   readOnly: t,
   onDone: n
  })
 }
 if (e.type === "array") {
  let l = je(e);
  return (0, d.jsxs)("div", {
   children: [(0, d.jsx)(Oh, {
    rows: e.rows,
    cols: e.cols
   }), (0, d.jsx)(ze, {
    rows: l,
    readOnly: t,
    onDone: n
   })]
  })
 }
 if (e.type === "groups") {
  let l = je(e);
  return (0, d.jsxs)("div", {
   children: [(0, d.jsx)(Gc, {
    groups: e.groups,
    each: e.each
   }), (0, d.jsx)(ze, {
    rows: l,
    readOnly: t,
    onDone: n
   })]
  })
 }
 if (e.type === "scale") {
  let l = je(e);
  return (0, d.jsxs)("div", {
   children: [(0, d.jsx)(zh, {
    original: e.original,
    factor: e.factor,
    scaled: e.scaled
   }), (0, d.jsx)(ze, {
    rows: l,
    readOnly: t,
    onDone: n
   })]
  })
 }
 if (e.type === "factfamily") {
  let l = je(e),
   {
    a: i,
    b: a,
    product: s,
    askFact: u
   } = e,
   m = {
    mult1: `${i} \xD7 ${a} = ${s}`,
    mult2: `${a} \xD7 ${i} = ${s}`,
    div1: `${s} \xF7 ${i} = ${a}`,
    div2: `${s} \xF7 ${a} = ${i}`
   };
  return (0, d.jsxs)("div", {
   children: [(0, d.jsx)(Uh, {
    a: i,
    b: a,
    product: s
   }), (0, d.jsx)("div", {
    className: "sk-factlist",
    children: Object.keys(m).filter(f => f !== u).map(f => (0, d.jsx)("div", {
     className: "sk-factlist-item",
     children: m[f]
    }, f))
   }), (0, d.jsx)(ze, {
    rows: l,
    readOnly: t,
    onDone: n
   })]
  })
 }
 if (e.type === "judgechoice") return (0, d.jsx)(Wh, {
  model: e,
  readOnly: t,
  onDone: n
 });
 if (e.type === "fracequiv") {
  let l = je(e),
   i = t || r ? Math.round(e.a * e.d / e.b) : null;
  return (0, d.jsxs)("div", {
   children: [(0, d.jsxs)("div", {
    className: "sk-fracequiv-row",
    children: [(0, d.jsx)(zo, {
     num: e.a,
     den: e.b,
     color: "a"
    }), (0, d.jsx)("span", {
     className: "sk-fracequiv-eq",
     children: "="
    }), (0, d.jsx)(zo, {
     num: i ?? 0,
     den: e.d,
     color: "b",
     missing: i == null
    })]
   }), (0, d.jsx)(ze, {
    rows: l,
    readOnly: t,
    onDone: () => {
     o(!0), n && n()
    }
   })]
  })
 }
 if (e.type === "fraccompare") return (0, d.jsx)($h, {
  model: e,
  readOnly: t,
  onDone: n
 });
 if (e.type === "doubleline") {
  let l = je(e);
  return (0, d.jsxs)("div", {
   children: [(0, d.jsx)(Qc, {
    model: e
   }), (0, d.jsx)(ze, {
    rows: l,
    readOnly: t,
    onDone: n
   })]
  })
 }
 if (e.type === "ratiotable") {
  let l = je(e);
  return (0, d.jsxs)("div", {
   children: [(0, d.jsx)(Vh, {
    headers: e.headers,
    rows: e.rows
   }), (0, d.jsx)(ze, {
    rows: l,
    readOnly: t,
    onDone: n
   })]
  })
 }
 return null
}
var td = "number-sense-sketchbook-v1",
 Qh = 15;

function Gh() {
 try {
  let e = localStorage.getItem(td);
  if (e) return JSON.parse(e)
 } catch {}
 return {
  xp: 0,
  topicsDone: {}
 }
}

function Yh(e) {
 try {
  localStorage.setItem(td, JSON.stringify(e))
 } catch {}
}

function Kh(e) {
 return Math.floor(e / 100) + 1
}

function Xh(e) {
 return e % 100
}
var Jc = ["Cadet", "Ensign", "Navigator", "Chief Engineer", "First Mate", "Captain", "Commodore", "Admiral"];

function Zh(e) {
 return Jc[Math.min(e - 1, Jc.length - 1)]
}

function aa() {
 let [e, t] = (0, K.useState)(Gh), [n, r] = (0, K.useState)({
  screen: "home"
 });
 (0, K.useEffect)(() => {
  Yh(e)
 }, [e]);
 let o = (0, K.useCallback)(s => {
   t(u => u.topicsDone[s] ? u : {
    xp: u.xp + Qh,
    topicsDone: {
     ...u.topicsDone,
     [s]: !0
    }
   })
  }, []),
  l = () => r({
   screen: "home"
  }),
  i = s => r({
   screen: "chapter",
   chapterId: s
  }),
  a = s => r({
   screen: "topic",
   topicId: s
  });
 return (0, w.jsxs)("div", {
  className: "sk-app",
  children: [(0, w.jsx)(Jh, {
   progress: e,
   onHome: l,
   showBack: n.screen !== "home",
   onBack: n.screen === "topic" ? () => i(Ft[n.topicId].chapter) : l
  }), n.screen === "home" && (0, w.jsx)(em, {
   progress: e,
   onOpenChapter: i
  }), n.screen === "chapter" && (0, w.jsx)(tm, {
   chapterId: n.chapterId,
   progress: e,
   onOpenTopic: a,
   onBack: l
  }), n.screen === "topic" && (0, w.jsx)(nm, {
   topicId: n.topicId,
   onComplete: o,
   onExit: () => i(Ft[n.topicId].chapter),
   onNextTopic: s => s ? a(s) : i(Ft[n.topicId].chapter)
  })]
 })
}

function Jh({
 progress: e,
 onHome: t,
 onBack: n,
 showBack: r
}) {
 let o = Kh(e.xp),
  l = Xh(e.xp);
 return (0, w.jsxs)("div", {
  className: "sk-header",
  children: [(0, w.jsx)("div", {
   className: "sk-header-left",
   children: r ? (0, w.jsx)("button", {
    className: "sk-back-btn",
    onClick: n,
    children: "\u2039 Back"
   }) : (0, w.jsx)("div", {
    className: "sk-brand",
    onClick: t,
    children: "\u2693 Number Sense Sketchbook"
   })
  }), (0, w.jsxs)("div", {
   className: "sk-header-right",
   children: [(0, w.jsxs)("div", {
    className: "sk-level-badge",
    children: ["\u2699\uFE0F ", Zh(o)]
   }), (0, w.jsx)("div", {
    className: "sk-xp-track",
    children: (0, w.jsx)("div", {
     className: "sk-xp-fill",
     style: {
      width: l + "%"
     }
    })
   })]
  })]
 })
}

function em({
 progress: e,
 onOpenChapter: t
}) {
 return (0, w.jsxs)("div", {
  className: "sk-screen sk-home",
  children: [(0, w.jsxs)("div", {
   className: "sk-hero",
   children: [(0, w.jsx)("div", {
    className: "sk-hero-title",
    children: "Number Sense Sketchbook"
   }), (0, w.jsx)("div", {
    className: "sk-hero-tag",
    children: "Train your brain to SEE numbers."
   })]
  }), (0, w.jsx)("div", {
   className: "sk-chapter-grid",
   children: Ao.map(n => {
    let r = n.topics.filter(o => e.topicsDone[o]).length;
    return (0, w.jsxs)("div", {
     className: "sk-chapter-card",
     onClick: () => t(n.id),
     children: [(0, w.jsx)("div", {
      className: "sk-chapter-emoji",
      children: n.emoji
     }), (0, w.jsxs)("div", {
      className: "sk-chapter-name",
      children: ["Ch ", n.num, " \xB7 ", n.name]
     }), (0, w.jsx)("div", {
      className: "sk-chapter-desc",
      children: n.desc
     }), (0, w.jsxs)("div", {
      className: "sk-chapter-progress",
      children: [(0, w.jsx)("div", {
       className: "sk-chapter-track",
       children: (0, w.jsx)("div", {
        className: "sk-chapter-fill",
        style: {
         width: 100 * r / n.topics.length + "%"
        }
       })
      }), (0, w.jsxs)("span", {
       children: [r, "/", n.topics.length]
      })]
     })]
    }, n.id)
   })
  }), (0, w.jsx)("div", {
   className: "sk-more-note",
   children: "More chapters (Patterns, Algebraic Thinking & more) are on the way!"
  })]
 })
}

function tm({
 chapterId: e,
 progress: t,
 onOpenTopic: n,
 onBack: r
}) {
 let o = Ao.find(l => l.id === e);
 return o ? (0, w.jsxs)("div", {
  className: "sk-screen",
  children: [(0, w.jsxs)("div", {
   className: "sk-chapter-header",
   children: [(0, w.jsx)("div", {
    className: "sk-chapter-header-emoji",
    children: o.emoji
   }), (0, w.jsxs)("div", {
    children: [(0, w.jsxs)("div", {
     className: "sk-chapter-header-title",
     children: ["Chapter ", o.num, " \xB7 ", o.name]
    }), (0, w.jsx)("div", {
     className: "sk-chapter-header-desc",
     children: o.desc
    })]
   })]
  }), (0, w.jsx)("div", {
   className: "sk-topic-list",
   children: o.topics.map(l => {
    let i = Ft[l],
     a = !!t.topicsDone[l];
    return (0, w.jsxs)("div", {
     className: "sk-topic-row" + (a ? " sk-topic-done" : ""),
     onClick: () => n(l),
     children: [(0, w.jsx)("div", {
      className: "sk-topic-emoji",
      children: i.emoji
     }), (0, w.jsxs)("div", {
      className: "sk-topic-info",
      children: [(0, w.jsx)("div", {
       className: "sk-topic-name",
       children: i.strategy
      }), (0, w.jsx)("div", {
       className: "sk-topic-blurb",
       children: i.blurb
      })]
     }), (0, w.jsx)("div", {
      className: "sk-topic-status",
      children: a ? "\u2713" : "\u2192"
     })]
    }, l)
   })
  })]
 }) : null
}
var Mo = {
 model: "\u{1F4D0} VISUAL MODEL \u2014 BLUEPRINT",
 strategy: "\u2699\uFE0F MENTAL STRATEGY \u2014 ENGINE ROOM",
 rule: "\u{1F4CF} GENERAL RULE \u2014 SPEC SHEET",
 why: "\u{1F52C} WHY IT WORKS \u2014 TEST BENCH",
 challenge: "\u{1F3C6} COMPETITION CHALLENGE \u2014 BOSS BATTLE"
};

function ed(e) {
 let t = ["model", "strategy", "rule", "why", "challenge"],
  n = e && e.skipStages || [];
 return t.filter(r => !n.includes(r))
}

function nm({
 topicId: e,
 onComplete: t,
 onExit: n,
 onNextTopic: r
}) {
 let o = Ft[e],
  l = (0, K.useMemo)(() => ed(o), [o]),
  [i, a] = (0, K.useState)(l[0]),
  [s, u] = (0, K.useState)(!1);
 if ((0, K.useEffect)(() => {
   a(ed(o)[0]), u(!1)
  }, [e]), !o) return null;

 function m() {
  let v = l.findIndex(S => S === i);
  v < l.length - 1 ? (u(!1), a(l[v + 1])) : (t(e), a("done"))
 }
 if (i === "model") return (0, w.jsxs)("div", {
  className: "sk-screen sk-topic-view",
  children: [(0, w.jsx)(Bo, {
   topic: o,
   tag: Mo.model
  }), (0, w.jsxs)("div", {
   className: "sk-card",
   children: [(0, w.jsx)(Fo, {
    model: o.worked.model,
    readOnly: !0
   }), (0, w.jsx)("div", {
    className: "sk-worked-note",
    children: o.worked.note
   })]
  }), (0, w.jsx)("button", {
   className: "sk-primary-btn",
   onClick: m,
   children: "Logged! Let's set sail \u2192"
  })]
 });
 if (i === "strategy" || i === "challenge") {
  let v = i === "strategy" ? 0 : 1;
  return (0, w.jsx)(rm, {
   topic: o,
   item: o.items[v],
   stepLabel: Mo[i],
   showHint: s,
   onHint: () => u(!0),
   onFinished: m
  }, e + i)
 }
 if (i === "rule") return (0, w.jsx)(om, {
  topic: o,
  onFinished: m
 }, e + "rule");
 if (i === "why") return (0, w.jsx)(lm, {
  topic: o,
  onFinished: m
 }, e + "why");
 let f = Ao.find(v => v.id === o.chapter),
  g = f.topics.indexOf(e),
  b = g >= 0 && g < f.topics.length - 1 ? f.topics[g + 1] : null;
 return (0, w.jsxs)("div", {
  className: "sk-screen sk-topic-view sk-stamp-screen",
  children: [(0, w.jsx)("div", {
   className: "sk-stamp",
   children: "\u2693"
  }), (0, w.jsxs)("div", {
   className: "sk-stamp-title",
   children: ["Boss defeated \u2014 ", o.strategy, " complete!"]
  }), (0, w.jsx)("div", {
   className: "sk-stamp-xp",
   children: "+15 Knots"
  }), (0, w.jsxs)("div", {
   className: "sk-stamp-actions",
   children: [b && (0, w.jsxs)("button", {
    className: "sk-primary-btn",
    onClick: () => r(b),
    children: ["Next: ", Ft[b].strategy, " \u2192"]
   }), (0, w.jsx)("button", {
    className: "sk-secondary-btn",
    onClick: n,
    children: "Back to chapter"
   })]
  })]
 })
}

function Bo({
 topic: e,
 tag: t
}) {
 return (0, w.jsxs)("div", {
  className: "sk-topic-title-row",
  children: [(0, w.jsx)("div", {
   className: "sk-topic-title-emoji",
   children: e.emoji
  }), (0, w.jsxs)("div", {
   children: [(0, w.jsx)("div", {
    className: "sk-topic-title-tag",
    children: t
   }), (0, w.jsx)("div", {
    className: "sk-topic-title-name",
    children: e.strategy
   })]
  })]
 })
}

function rm({
 topic: e,
 item: t,
 stepLabel: n,
 onFinished: r,
 showHint: o,
 onHint: l
}) {
 let [i, a] = (0, K.useState)(!1), [s, u] = (0, K.useState)(""), [m, f] = (0, K.useState)(!1), [g, b] = (0, K.useState)(!1), v = e.decimalHint ? Kc(t.model) : null, S = Xc(t.model);

 function j() {
  ia(s, t.solve.accepted) ? (b(!0), setTimeout(r, 850)) : (f(!0), setTimeout(() => f(!1), 500))
 }
 return (0, w.jsxs)("div", {
  className: "sk-screen sk-topic-view",
  children: [(0, w.jsx)(Bo, {
   topic: e,
   tag: n
  }), (0, w.jsx)("div", {
   className: "sk-card",
   children: (0, w.jsx)(Fo, {
    model: t.model,
    readOnly: !1,
    onDone: () => a(!0)
   })
  }), i && (0, w.jsxs)("div", {
   className: "sk-card sk-solve-card" + (m ? " sk-shake" : ""),
   children: [(0, w.jsx)("div", {
    className: "sk-solve-prompt",
    children: t.solve.prompt
   }), (0, w.jsxs)("div", {
    className: "sk-solve-row",
    children: [(0, w.jsx)("input", {
     type: "text",
     inputMode: "decimal",
     className: "sk-solve-input",
     value: s,
     disabled: g,
     onChange: p => u(p.target.value),
     onKeyDown: p => {
      p.key === "Enter" && j()
     },
     autoFocus: !0
    }), (0, w.jsx)("button", {
     className: "sk-primary-btn sk-solve-btn",
     disabled: g,
     onClick: j,
     children: g ? "\u2713 Yes!" : "Check"
    })]
   })]
  }), !g && !o && (0, w.jsx)("button", {
   className: "sk-hint-btn",
   onClick: l,
   children: "\u{1F4E1} Radio for a hint?"
  }), o && !g && (0, w.jsxs)("div", {
   className: "sk-hint-box",
   children: [e.blurb, v && (0, w.jsx)(Yc, {
    from: v.from,
    places: v.places,
    direction: v.direction
   }), S && (0, w.jsx)(Zc, {})]
  })]
 })
}

function om({
 topic: e,
 onFinished: t
}) {
 let n = e.generalRule,
  [r, o] = (0, K.useState)(null),
  [l, i] = (0, K.useState)(!1);

 function a(s) {
  r === null && (s === n.check.correctIndex ? o(s) : (i(!0), setTimeout(() => i(!1), 500)))
 }
 return (0, w.jsxs)("div", {
  className: "sk-screen sk-topic-view",
  children: [(0, w.jsx)(Bo, {
   topic: e,
   tag: Mo.rule
  }), (0, w.jsx)("div", {
   className: "sk-card",
   children: (0, w.jsx)("div", {
    className: "sk-worked-note",
    children: n.statement
   })
  }), (0, w.jsxs)("div", {
   className: "sk-card" + (l ? " sk-shake" : ""),
   children: [(0, w.jsx)("div", {
    className: "sk-judge-statement",
    children: n.check.prompt
   }), (0, w.jsx)("div", {
    className: "sk-judge-btns",
    children: n.check.options.map((s, u) => (0, w.jsx)("button", {
     className: "sk-judge-btn" + (r === u ? " sk-choice-correct" : ""),
     disabled: r !== null,
     onClick: () => a(u),
     children: s
    }, u))
   }), r !== null && (0, w.jsx)("div", {
    className: "sk-hint-box",
    children: n.check.explain
   })]
  }), r !== null && (0, w.jsx)("button", {
   className: "sk-primary-btn",
   onClick: t,
   children: "Spec confirmed! \u2192"
  }), r === null && !l && (0, w.jsx)("div", {
   className: "sk-more-note",
   children: "Not sure? Read the spec sheet above again \u2014 no rush, just tap when ready."
  })]
 })
}

function lm({
 topic: e,
 onFinished: t
}) {
 let n = e.why;
 return (0, w.jsxs)("div", {
  className: "sk-screen sk-topic-view",
  children: [(0, w.jsx)(Bo, {
   topic: e,
   tag: Mo.why
  }), (0, w.jsx)("div", {
   className: "sk-card",
   children: (0, w.jsx)("div", {
    className: "sk-worked-note",
    children: n.text
   })
  }), (0, w.jsxs)("div", {
   className: "sk-card",
   children: [(0, w.jsx)(Fo, {
    model: n.demo.model,
    readOnly: !0
   }), n.demo.caption && (0, w.jsx)("div", {
    className: "sk-worked-note",
    children: n.demo.caption
   })]
  }), (0, w.jsx)("button", {
   className: "sk-primary-btn",
   onClick: t,
   children: "\u2705 Confirmed \u2014 it checks out!"
  })]
 })
}
var im = (0, nd.createRoot)(document.getElementById("root"));
im.render((0, rd.jsx)(aa, {}));
