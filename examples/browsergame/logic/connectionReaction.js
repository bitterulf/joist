connectionReaction = new Joist.Logic({
  name: 'connectionReaction',
  check: function (joist, changes, executed) {
    var matchedChanges = Joist.filter.matchPath(changes, ['location']);
    var matchedChanges2 = Joist.filter.matchPath(changes, ['locations']);
    var matchedChanges3 = Joist.filter.matchPath(changes, ['bag']);

    return matchedChanges.length + matchedChanges2.length + matchedChanges3.length;
  },
  command: function (joist, changes, executed, result) {
    var data = joist.dataManager.getData();

    var currentLocation = data.locations[data.location];

    var connectionsTree = {
      text: 'connectionsTree',
      children: []
    };

    _.each(currentLocation.connections, function (connection) {
      connectionsTree.children.push({
        text: connection.name,
        target: 'connection',
        data: {
          destination: connection.destination,
          action: 'travel'
        }
      });
    });

    result.add('displayTree', connectionsTree);

    return result;
  }
});
