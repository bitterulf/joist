var _ = require('underscore');
var Joist = require('../../lib');

var dep = {};
var data = {};

var ui = Joist.createConsoleUi(dep);

var joist = Joist.create(dep, data);

joist.addSignalSource(Joist.ReplSignal)
  .addAction(require('./logic/loginAction'))
  .addRoute(require('./logic/loginRoute'))
  .addReaction(require('./logic/loginReaction'));

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

ui.displayList('itemlist', [
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
