var _ = require('underscore');
_.s = require('underscore.string');

var ReplSignal = function (joist) {
  this.joist = joist;
};

ReplSignal.prototype.input = function (cmd, context, filename, callback) {
  cmd = cmd.slice(0, cmd.length - 2).slice(1, cmd.length);
  this.send(cmd);
  callback(null, '');
};

ReplSignal.prototype.send = function (text) {
  var parts = text.split(' ');

  var parameters = {};

  var target = parts.shift();

  _.each(parts, function (part) {
    if (part.indexOf("=") > -1) {
      var subparts = part.split('=');
      if (subparts.length == 2) {
        parameters[subparts[0]] = subparts[1];
      }
    }
  });

  var signal = {
    device: {
      type: 'keyboard',
      id: 0
    },
    timestamp: Date.now(),
    target: target,
    data: parameters
  };

  this.joist.actionUpdate(signal);
};

module.exports = ReplSignal;
