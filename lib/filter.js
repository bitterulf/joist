var _ = require('underscore');

exports.matchPath = function (changes, path) {
  var results = [];
  var tempResult;
  _.each(changes, function (change) {
    if (change.path.length >= path.length) {
      tempResult = true;
      for (var i = 0; i < path.length; i++) {
        if (path[i] != change.path[i]) {
          tempResult = false;
        }
      }
      if (tempResult) {
        results.push(change);
      }
    }
  });
  return results;
};

exports.matchKind = function (changes, kind) {
  var results = [];
  _.each(changes, function (change) {
    if (change.kind == kind) {
      results.push(change);
    }
  });
  return results;
};

exports.matchLeft = function (changes, fn) {
  var results = [];
  _.each(changes, function (change) {
    if (fn(change.lhs)) {
      results.push(change);
    }
  });
  return results;
};

exports.matchRight = function (changes, fn) {
  var results = [];
  _.each(changes, function (change) {
    if (fn(change.rhs)) {
      results.push(change);
    }
  });
  return results;
};
