var _ = require('underscore');

var Output = function (joist) {};

Output.prototype.render = function (data) {
  var that = this;
  _.each(data.displayText, function (textData) {
    that.displayText(textData.target, textData.text);
  });
};

Output.prototype.displayText = function (id, text) {
  var textBox = document.getElementById('joist-box-' + id);

  if (!textBox) {
    textBox = document.createElement('div');
    textBox.id = 'joist-box-' + id;
    document.body.appendChild(textBox);
  }

  textBox.innerHTML = text;
};

Output.prototype.displayActionList = function (id, actions) {
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

Output.prototype.displayList = function (id, items) {
  var textBox = document.getElementById('joist-box-' + id);

  if (!textBox) {
    textBox = document.createElement('div');
    textBox.id = 'joist-box-' + id;
    document.body.appendChild(textBox);
  }

  var content = '';

  _.each(items, function (item) {
    content += '<div>' + item.label + ': ';
    _.each(item, function (value, key) {
      content += key + '=' + value + ' ';
    });
    content += '<div>';
  });

  textBox.innerHTML = content;
};

module.exports = Output;
