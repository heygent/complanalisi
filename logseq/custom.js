function whenAvailable(name, callback) {
  window.setTimeout(function() {
    if (window[name]) {
      callback(window[name]);
    } else {
      whenAvailable(name, callback);
    }
  }, 100);
}

const macros = {
  "\\R": "\\mathbb{R}",
  "\\C": "\\mathbb{C}",
}


whenAvailable("katex", function(t) {
  for (const [key, macro] of Object.entries(macros)) {
    katex.__defineMacro(key, macro);
  }
});