var _ = require('underscore');

var Output = function (dep) {
  dep.output = this;
  this.dep = dep;
};

Output.prototype.render = function (data) {
  var that = this;
  _.each(data.displayText, function(textData) {
    that.displayText(textData.target, textData.text);
  });
};

Output.prototype.displayText = function (id, text) {
  console.log(id + '> ' + text);
};

Output.prototype.displayActionList = function (id, actions) {
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

Output.prototype.displayList = function (id, items) {
  console.log(id + '> ');

  _.each(items, function (item) {
    var content = '[ ';
    _.each(item, function (value, key) {
      content += key + '="' + value + '" ';
    });
    content += ']';
    console.log(content);
  });
};

module.exports = Output;
