loginReaction = new Joist.Logic({
  name: 'loginChanged',
  check: function (changes, executed) {
    var matchedChanges = Joist.filter.matchPath(changes, ['login']);

    return matchedChanges.length;
  },
  command: function (joist, changes, executed, result) {
    result.displayText = [];

    var matchedChanges = Joist.filter.matchPath(changes, ['login']);
    _.each(matchedChanges, function (matchedChange) {
      result.displayText.push({
        target: 'info',
        text: 'you are logged in as ' + matchedChange.rhs
      });
    });

    return result;
  }
});
