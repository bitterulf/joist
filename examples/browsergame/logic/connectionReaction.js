connectionReaction = new Joist.Logic({
  name: 'connectionReaction',
  check: function (joist, old, current, changes, executed) {
    var matchedChanges = Joist.filter.matchPath(changes, ['location']);
    var matchedChanges2 = Joist.filter.matchPath(changes, ['locations']);
    var matchedChanges3 = Joist.filter.matchPath(changes, ['bag']);

    return matchedChanges.length + matchedChanges2.length + matchedChanges3.length;
  },
  command: function (joist, old, current, changes, executed, result) {
    var hasAmountInBag = function (bag, name, needAmount) {
      _.each(bag, function (bagitem) {
        if (bagitem.name == name) {
          needAmount--;
        }
      });

      if (needAmount < 1) {
        return true;
      }

      return false;
    };

    var fulfillRequirements = function (data, requirements) {
      var result = true;

      _.each(requirements.bagitems, function (value, key) {
        if (!hasAmountInBag(data.bag, key, value)) {
          result = false;
        }
      });

      return result;
    };

    var data = joist.dataManager.getData();

    var currentLocation = data.locations[data.location];

    var connectionsTree = {
      text: 'connectionsTree',
      children: []
    };

    _.each(currentLocation.connections, function (connection) {
      if (fulfillRequirements(data, connection.requirements)) {
        connectionsTree.children.push({
          text: connection.name,
          target: 'connection',
          data: {
            destination: connection.destination,
            action: 'travel'
          }
        });
      }
    });

    result.add('displayTree', connectionsTree);

    return result;
  }
});
