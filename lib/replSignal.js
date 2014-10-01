var ReplSignal = function (joist) {
  this.joist = joist;
};

ReplSignal.prototype.input = function (cmd, context, filename, callback) {
  cmd = cmd.slice(0, cmd.length - 2).slice(1, cmd.length);
  this.send(cmd);
  callback(null, '');
};

ReplSignal.prototype.send = function (text) {
  var data = text.split(' ');

  var signal = {
    device: {
      type: 'keyboard',
      id: 0
    },
    timestamp: Date.now(),
    target: data[0],
    value: data[1]
  };

  this.joist.actionUpdate(signal);
};

module.exports = ReplSignal;
