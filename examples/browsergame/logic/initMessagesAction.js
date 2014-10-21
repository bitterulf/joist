initMessagesAction = new Joist.Logic({
  name: 'initMessagesAction',
  check: function (joist, signal, executed) {
    return (signal.target == 'game' && signal.data.value == 'init');
  },
  command: function (joist, signal, executed, cb) {
    cb({log: []}, []);
  }
});
