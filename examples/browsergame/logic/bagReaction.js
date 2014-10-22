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
      bagTree.children.push({
        text: obj.name
      });
    });

    result.add('displayTree', bagTree);

    return result;
  }
});
