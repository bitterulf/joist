loginAction = new Joist.Logic({
  name: 'login',
  check: function (signal, executed) {
    return (signal.target == 'login');
  },
  command: function (dep, signal, executed) {
    dep.joist.routeUpdate(signal);
  }
});
