var _ = require('underscore');
var Joist = require('../../lib');

var dep = {};
var data = {};

var joist = Joist.create(dep, data);

joist.addSignalSource(Joist.ReplSignal)
  .addAction(require('./logic/loginAction'))
  .addRoute(require('./logic/loginRoute'))
  .addReaction(require('./logic/loginReaction'))
  .addRenderTarget(Joist.consoleOutput);
