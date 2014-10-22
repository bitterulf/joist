travelAction = new Joist.Logic({
  name: 'travelAction',
  check: function (joist, signal, executed) {
    return (signal.target == 'connection');
  },
  command: function (joist, signal, executed, cb) {
    var data = joist.dataManager.getData();

    if (signal.data.action == 'travel' && signal.data.destination == 'village') {
      data.log.push('you traveled to the village!');
      data.location = 1;
    } else {
      data.log.push('action: ' + signal.data.action + ' on ' + signal.data.destination);
    }

    cb({
      location: data.location,
      log: data.log
    }, []);
  }
});
