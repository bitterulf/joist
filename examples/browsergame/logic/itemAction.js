itemAction = new Joist.Logic({
  name: 'itemAction',
  check: function (joist, signal, executed) {
    return (signal.target == 'item');
  },
  command: function (joist, signal, executed, cb) {
    var removeFromLocationByName = function (location, type, name) {

      var found = false;

      location[type] = _.reduce(location[type], function (list, obj) {
        if (!found && obj.name == name) {
          found = true;
        } else {
          list.push(obj);
        }
        return list;
      }, []);

      return location;
    };

    var data = joist.dataManager.getData();

    if (signal.data.action == 'collect' && signal.data.item == 'stone') {
      data.log.push('you collected a stone!');
      data.locations[data.location] = removeFromLocationByName(data.locations[data.location], 'items', 'stone');
      data.bag.push({
        name: 'stone'
      });
    } else {
      data.log.push('action: ' + signal.data.action + ' on ' + signal.data.item);
    }

    cb({
      log: data.log,
      bag: data.bag,
      locations: data.locations
    }, []);
  }
});
