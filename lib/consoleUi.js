var _ = require('underscore');

var Ui = function (dep) {
  dep.ui = this;
  this.dep = dep;
};

Ui.prototype.displayText = function (id, text) {
  console.log(id + '> ' + text);
};

module.exports = Ui;
