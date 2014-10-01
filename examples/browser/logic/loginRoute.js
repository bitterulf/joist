loginRoute = new Joist.Logic({
  name: 'login',
  check: function (signal, executed) {
    return (signal.target == 'login');
  },
  command: function (dep, signal, executed) {
    dep.joist.patch('login', signal.data.value);
  },
  confirm: function () {
    return true;
  }
});
