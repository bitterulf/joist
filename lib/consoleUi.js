var _ = require('underscore');

var Ui = function(dep) {
  dep.ui = this;
  this.dep = dep;
};

Ui.prototype.displayText = function(text) {
  console.log('> '+text);
};

module.exports = Ui;
