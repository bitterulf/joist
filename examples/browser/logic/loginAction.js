var fakeRequest = function (data, cb) {
  cb(data.value);
};

loginAction = new Joist.Logic({
  name: 'login',
  check: function (signal, executed) {
    return (signal.target == 'login');
  },
  command: function (joist, signal, executed, cb) {
    fakeRequest(signal.data, function (result) {
      cb({
        login: result
      }, []);
    });
  }
});
