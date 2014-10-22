travelAction = new Joist.Logic({
  name: 'travelAction',
  check: function (joist, signal, executed) {
    return (signal.target == 'connection');
  },
  command: function (joist, signal, executed, cb) {
    var getLocationIdByName = function (locations, name) {
      var result = -1;
      _.each(locations, function (location, i) {
        if (location.name == name) {
          result = i;
        }
      });

      return result;
    };

    var data = joist.dataManager.getData();

    if (signal.data.action == 'travel') {
      var destId = getLocationIdByName(data.locations, signal.data.destination);
      if (destId > -1) {
        data.log.push('you traveled to ' + data.locations[destId].name + '!');
        data.location = destId;
      }
    } else {
      data.log.push('action: ' + signal.data.action + ' on ' + signal.data.destination);
    }

    cb({
      location: data.location,
      log: data.log
    }, []);
  }
});
