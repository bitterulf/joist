var _ = require('underscore');

var Ui = function (dep) {
  dep.ui = this;
  this.dep = dep;
};

Ui.prototype.displayText = function (id, text) {
  console.log(id + '> ' + text);
};

Ui.prototype.displayActionList = function (id, actions) {
  console.log(id + '> ');

  _.each(actions, function (action) {
    var content = action.label + ' [ ';
    _.each(action, function (value, key) {
      if (key != 'label') {
        content += key + '="' + value + '" ';
      }
    });
    content += ']';
    console.log(content);
  });
};

module.exports = Ui;
