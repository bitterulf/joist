var _ = require('underscore');
_.s = require('underscore.string');

var HtmlSignal = function (joist) {
  var that = this;
  this.joist = joist;
  document.onclick = function (event) {
    that.input(event);
  };
};

HtmlSignal.prototype.input = function (event) {
  if (event.target) {
    var target = event.target.getAttribute("data-joist-target");
    var data = {};

    _.each(event.target.attributes, function (attribute) {
      if (_.s.startsWith(attribute.name, 'data-joist-')) {
        if (attribute.name == 'data-joist-target') {
          target = attribute.value;
        } else {
          data[attribute.name.replace('data-joist-', '')] = attribute.value;
        }
      }
    });

    if (target) {
      console.log(target, data);
      var signal = {
        device: {
          type: 'mouse',
          id: 0
        },
        timestamp: Date.now(),
        target: target,
        data: data,
      };
      this.joist.actionUpdate(signal);
    }
  }
};

module.exports = HtmlSignal;
