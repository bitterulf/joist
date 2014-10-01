var _ = require('underscore');

var Ui = function (dep) {
  dep.ui = this;
  this.dep = dep;
};

Ui.prototype.displayText = function (id, text) {
  var textBox = document.getElementById('joist-textBox-' + id);

  if (!textBox) {
    textBox = document.createElement('div');
    textBox.id = 'joist-textBox-' + id;
    document.body.appendChild(textBox);
  }

  textBox.innerHTML = text;
};

module.exports = Ui;
