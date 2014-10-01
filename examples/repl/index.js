var _ = require('underscore');
var repl = require('repl');
var Joist = require('../../lib');

var dep = {};
var data = {};

var ui = Joist.createConsoleUi(dep);

var joist = Joist.create(dep, data);

joist.addAction(require('./logic/loginAction'))
  .addRoute(require('./logic/loginRoute'))
  .addReaction(require('./logic/loginReaction'));

var rs = Joist.createReplSignal(joist);

ui.displayActionList('userlist', [
  {
    label: 'login user 1',
    target: 'login',
    value: 'user1'
  },
  {
    label: 'login user 2',
    target: 'login',
    value: 'user2'
  }
  ]);

var replServer = repl.start({
  prompt: "app > ",
  eval: function () {
    rs.input.apply(rs, arguments);
  }
});
