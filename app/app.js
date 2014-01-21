var Threedify;

Threedify = (function() {
  function Threedify(options) {
    if (options == null) {
      options = {};
    }
    this.target = options.target || document.body;
    this.amount = options.amount || 10;
    this.parent = this.target.parentElement;
    this.target.classList.add('threedify-target');
    this.parent.classList.add('threedify-parent');
    this.iterate();
  }

  Threedify.prototype.iterate = function(target, level) {
    var child, key, _ref, _results;
    if (target == null) {
      target = this.target;
    }
    if (level == null) {
      level = 0;
    }
    if (target instanceof HTMLElement) {
      target.setAttribute('data-threedify', level);
      this.style(target);
      _ref = target.childNodes;
      _results = [];
      for (key in _ref) {
        child = _ref[key];
        _results.push(this.iterate(child, level + 1));
      }
      return _results;
    }
  };

  Threedify.prototype.style = function(target) {
    var index, zAxis;
    index = target.getAttribute('data-threedify');
    zAxis = index * this.amount;
    return target.setAttribute('style', "-webkit-transform: translateZ(" + zAxis + "px)");
  };

  return Threedify;

})();

window.addEventListener("load", function() {
  return new Threedify({
    amount: 25
  });
});

//# sourceMappingURL=../app/app.js.map
