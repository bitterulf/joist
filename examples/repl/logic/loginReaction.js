var Joist = require('../../../lib');
var _ = require('underscore');

module.exports = new Joist.Logic({
  name: 'loginChanged',
  check: function (joist, old, current, changes, executed) {
    var matchedChanges = Joist.filter.matchPath(changes, ['login']);

    return matchedChanges.length;
  },
  command: function (joist, old, current, changes, executed, result) {
    var matchedChanges = Joist.filter.matchPath(changes, ['login']);
    _.each(matchedChanges, function (matchedChange) {
      result.add('displayText', {
        target: 'info',
        text: 'you are logged in as ' + joist.helper.helper1(matchedChange.rhs)
      });
    });

    return result;
  }
});
