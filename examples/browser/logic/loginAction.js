var fakeRequest = function(data, cb) {
  cb(data.value);
};

loginAction = new Joist.Logic({
  name: 'login',
  check: function (signal, executed) {
    return (signal.target == 'login');
  },
  command: function (dep, signal, executed) {
    fakeRequest(signal.data, function(result) {
      dep.joist.patch('login', result);
    });
  }
});
