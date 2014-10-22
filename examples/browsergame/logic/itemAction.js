itemAction = new Joist.Logic({
  name: 'itemAction',
  check: function (joist, signal, executed) {
    return (signal.target == 'item');
  },
  command: function (joist, signal, executed, cb) {
    var log = joist.dataManager.getData().log;
    var bag = joist.dataManager.getData().bag;

    if (signal.data.action == 'collect' && signal.data.item == 'stone') {
      log.push('you collected a stone!');
      bag.push({
        name: 'stone'
      });
    } else {
      log.push('action: ' + signal.data.action + ' on ' + signal.data.item);
    }

    cb({
      log: log,
      bag: bag
    }, []);
  }
});
