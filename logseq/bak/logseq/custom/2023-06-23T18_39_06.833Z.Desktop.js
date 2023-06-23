function whenAvailable(name, callback) {
    window.setTimeout(function() {
        if (window[name]) {
            callback(window[name]);
        } else {
            whenAvailable(name, callback);
        }
    }, 10);
}

const macros = {
  "\\R": "\\mathbb{R}",
}


whenAvailable("katex", function(t) {
    // Put your macros below, key will be replaced by the corresponding macro
    katex.__defineMacro(key, macro);
});
