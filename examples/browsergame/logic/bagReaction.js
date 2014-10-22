bagReaction = new Joist.Logic({
  name: 'bagReaction',
  check: function (joist, changes, executed) {
    var matchedChanges = Joist.filter.matchPath(changes, ['bag']);

    return matchedChanges.length;
  },
  command: function (joist, changes, executed, result) {
    var data = joist.dataManager.getData();

    var bagTree = {
      text: 'bagTree',
      children: []
    };

    _.each(data.bag, function (obj) {

      var possibleActions = [];
      _.each(data.actions, function (action) {
        if (_.indexOf(action.bagitems, obj.name) > -1) {
          possibleActions.push({
            text: action.name,
            target: 'bagitem',
            data: {
              bagitem: obj.name,
              action: action.name
            }
          });
        }
      });

      bagTree.children.push({
        text: obj.name,
        children: possibleActions
      });
    });

    result.add('displayTree', bagTree);

    return result;
  }
});
