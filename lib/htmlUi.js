var _ = require('underscore');

var Ui = function (dep) {
  dep.ui = this;
  this.dep = dep;
};

Ui.prototype.displayText = function (id, text) {
  var textBox = document.getElementById('joist-box-' + id);

  if (!textBox) {
    textBox = document.createElement('div');
    textBox.id = 'joist-box-' + id;
    document.body.appendChild(textBox);
  }

  textBox.innerHTML = text;
};

Ui.prototype.displayActionList = function (id, actions) {
  var textBox = document.getElementById('joist-box-' + id);

  if (!textBox) {
    textBox = document.createElement('div');
    textBox.id = 'joist-box-' + id;
    document.body.appendChild(textBox);
  }

  var content = '';

  _.each(actions, function (action) {
    content += '<div ';
    _.each(action, function (value, key) {
      if (key != 'label') {
        content += 'data-joist-' + key + '="' + value + '" ';
      }
    });
    content += '>' + action.label + '<div>';
  });

  textBox.innerHTML = content;
};

module.exports = Ui;
