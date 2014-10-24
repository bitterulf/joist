logReaction = new Joist.Logic({
  name: 'logReaction',
  check: function (joist, current, changes, executed) {
    var matchedChanges = Joist.filter.matchPath(changes, ['log']);

    return matchedChanges.length;
  },
  command: function (joist, current, changes, executed, result) {
    var data = joist.dataManager.getData();

    var logTree = {
      text: 'logTree',
      children: []
    };

    _.each(_.last(data.log, 5), function (entry) {
      logTree.children.push({
        text: entry
      });
    });

    result.add('displayTree', logTree);

    return result;
  }
});
