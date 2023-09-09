function whenAvailable(name, callback) {
  window.setTimeout(function() {
    if (window[name]) {
      callback(window[name]);
    } else {
      whenAvailable(name, callback);
    }
  }, 100);
}

// Rewrite the following for Katex:
//
// /\newcommand{\R}{\mathbb{R}}
// /\newcommand{\C}{\mathbb{C}}
// /\newcommand{\Z}{\mathbb{Z}}
// /\newcommand{\N}{\mathbb{N}}
// /\newcommand{\L}[2][I]{ {L^{#2}(#1)} }
// /\newcommand{\Li}[1][I]{\L[#1]{\infty}}
// /\newcommand{\norm}[1][\ldots]{\lVert#1\rVert}
// /\newcommand{\lnorm}[1][\ldots]{\left\lVert#1\right\rVert}
// /\newcommand{\expfn}[1]{\exp\left(#1\right)}
// /\newcommand{\F}{\mathcal{F}}
// /\newcommand{\fint}{\int_{-\infty}^{+\infty}}
// /\newcommand{\l}{\left}
// /\newcommand{\r}{\right}
// /\DeclareMathOperator*{\esssup}{ess\,sup}

const macros = {
  "\\R": "\\mathbb{R}",
  "\\C": "\\mathbb{C}",
  "\\t": "\\text{#1}",
  "\\Z": "\\mathbb{Z}",
  "\\N": "\\mathbb{N}",
  "\\L": "{L^{#1}(I)}",
  "\\Li": "{\\L\\infty}",
  "\\norm": "\\lVert\\cdot\\rVert",
  "\\expfn": "\\exp\\left(#1\\right)",
  "\\F": "\\mathcal{F}",
  "\\fint": "\\int_{-\\infty}^{+\\infty}",
  "\\l": "\\left",
  "\\r": "\\right",
  "\\esssup": String.raw`\operatorname*{ess\,sup}`,
  "\\sinc": String.raw`\operatorname*{sinc}`,
  "\\liml": "\\lim\\limits",
}


whenAvailable("katex", function(t) {
  for (const [key, macro] of Object.entries(macros)) {
    katex.__defineMacro(key, macro);
  }
});
