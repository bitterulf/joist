bagItemAction = new Joist.Logic({
  name: 'bagItemAction',
  check: function (joist, signal, executed) {
    return (signal.target == 'bagitem');
  },
  command: function (joist, signal, executed, cb) {
    var removeFromBagByName = function (bag, name) {

      var found = false;

      bag = _.reduce(bag, function (list, obj) {
        if (!found && obj.name == name) {
          found = true;
        } else {
          list.push(obj);
        }
        return list;
      }, []);

      return bag;
    };

    var data = joist.dataManager.getData();

    if (signal.data.action == 'throw' && signal.data.bagitem == 'stone') {
      data.log.push('you throwed a stone!');
      data.bag = removeFromBagByName(data.bag, 'stone');
      data.locations[data.location].items.push({
        name: 'stonedust'
      });
    } else {
      data.log.push('action: ' + signal.data.action + ' on ' + signal.data.bagitem);
    }

    cb({
      log: data.log,
      bag: data.bag,
      locations: data.locations
    }, []);
  }
});
