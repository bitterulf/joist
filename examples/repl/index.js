var _ = require('underscore');
var Joist = require('../../lib');

var dep = {};
var data = {};

var joist = Joist.create(Joist.DataManager, dep, data);

joist
  .addSignalSource(Joist.ReplSignal)
  .addAction(require('./logic/loginAction'))
  .addReaction(require('./logic/loginReaction'))
  .addRenderTarget(Joist.ConsoleOutput);
