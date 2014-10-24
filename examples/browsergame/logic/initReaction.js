initReaction = new Joist.Logic({
  name: 'initReaction',
  check: function (joist, current, changes, executed) {
    var matchedChanges = Joist.filter.matchPath(changes, ['playerId']);

    return matchedChanges.length;
  },
  command: function (joist, current, changes, executed, result) {
    var data = joist.dataManager.getData();

    return result;
  }
});
