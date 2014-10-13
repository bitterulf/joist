var Joist = require('../../../lib');
var _ = require('underscore');

module.exports = new Joist.Logic({
  name: 'loginChanged',
  check: function (joist, changes, executed) {
    var matchedChanges = Joist.filter.matchPath(changes, ['login']);

    return matchedChanges.length;
  },
  command: function (joist, changes, executed, result) {
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
