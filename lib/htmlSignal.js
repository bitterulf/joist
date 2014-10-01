var HtmlSignal = function (joist) {
  this.joist = joist;
};

HtmlSignal.prototype.input = function (event) {
  if (event.target) {
    var target = event.target.getAttribute("data-joist-target");
    var value = event.target.getAttribute("data-joist-value");
    if (target && value) {
      var signal = {
        device: {
          type: 'mouse',
          id: 0
        },
        timestamp: Date.now(),
        target: target,
        value: value,
      };
      this.joist.actionUpdate(signal);
    }
  }
};

module.exports = HtmlSignal;
