initReaction = new Joist.Logic({
  name: 'initReaction',
  check: function (joist, changes, executed) {
    var matchedChanges = Joist.filter.matchPath(changes, ['playerId']);

    return matchedChanges.length;
  },
  command: function (joist, changes, executed, result) {
    var data = joist.dataManager.getData();

    var currentLocation = data.locations[data.location];

    var itemTree = {
      text: 'itemTree',
      children: []
    };
    var objectTree = {
      text: 'objectTree',
      children: []
    };
    var npcTree = {
      text: 'npcTree',
      children: []
    };

    _.each(currentLocation.items, function (item) {
      var possibleActions = [];
      _.each(data.actions, function (action) {
        if (_.indexOf(action.items, item.name) > -1) {
          possibleActions.push({
            text: action.name,
            target: 'item',
            data: {
              item: item.name,
              action: action.name
            }
          });
        }
      });
      itemTree.children.push({
        text: item.name,
        children: possibleActions
      });
    });
    _.each(currentLocation.objects, function (object) {
      var possibleActions = [];
      _.each(data.actions, function (action) {
        if (_.indexOf(action.objects, object.name) > -1) {
          possibleActions.push({
            text: action.name,
            target: 'object',
            data: {
              object: object.name,
              action: action.name
            }
          });
        }
      });
      objectTree.children.push({
        text: object.name,
        children: possibleActions
      });
    });
    _.each(currentLocation.npcs, function (npc) {
      var possibleActions = [];
      _.each(data.actions, function (action) {
        if (_.indexOf(action.npcs, npc.name) > -1) {
          possibleActions.push({
            text: action.name,
            target: 'npc',
            data: {
              npc: npc.name,
              action: action.name
            }
          });
        }
      });
      npcTree.children.push({
        text: npc.name,
        children: possibleActions
      });
    });

    result.add('displayTree', itemTree);
    result.add('displayTree', objectTree);
    result.add('displayTree', npcTree);

    return result;
  }
});