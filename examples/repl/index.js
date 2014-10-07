var _ = require('underscore');
var Joist = require('../../lib');

var dep = {};

var joist = Joist.create(Joist.DataManager, dep);

joist
  .addSignalSource(Joist.ReplSignal)
  .addAction(require('./logic/loginAction'))
  .addReaction(require('./logic/loginReaction'))
  .addRenderTarget(Joist.ConsoleOutput);
