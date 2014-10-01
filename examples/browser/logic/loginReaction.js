loginReaction = new Joist.Logic({
  name: 'loginChanged',
  check: function (changes, executed) {
    var result = false;
    _.each(changes, function (change) {
      if (change.path.join(',') == ['login'].join(',')) {
        result = true;
      }
    });

    return result;
  },
  command: function (dep, changes, executed) {
    _.each(changes, function (change) {
      if (change.path.join(',') == ['login'].join(',')) {
        dep.ui.displayText('you are logged in as ' + change.rhs);
      }
    });
  }
});
