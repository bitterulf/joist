var _ = require('underscore');
var Joist = require('../../lib');

var helper = {
  helper1: function (text) {
    console.log('i am just a helper demonstration', text);
    return '#' + text + '#';
  }
};

var joist = Joist.create(Joist.DataManager, helper);

joist
  .addSignalSource(Joist.ReplSignal)
  .addAction(require('./logic/loginAction'))
  .addReaction(require('./logic/loginReaction'))
  .addRenderTarget(Joist.ConsoleOutput);
