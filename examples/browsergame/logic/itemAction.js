itemAction = new Joist.Logic({
  name: 'itemAction',
  check: function (joist, signal, executed) {
    return (signal.target == 'item');
  },
  command: function (joist, signal, executed, cb) {
    var log = joist.dataManager.getData().log;

    log.push('action: '+signal.data.action+' on '+signal.data.item);

    cb({log: log}, []);
  }
});
