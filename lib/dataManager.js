var _ = require('underscore');

var deepSet = function (obj, pathString, value) {
  var path = pathString.split('.');
  var len = path.length;
  for (var i = 0; i < len; i++) {
    if (i == len - 1) {
      obj[path[i]] = value;
    } else {
      if (!_.has(obj, path[i])) {
        obj[path[i]] = {};
      }
      obj = obj[path[i]];
    }
  }
};

var deepUnset = function (obj, pathString) {
  var path = pathString.split('.');
  var len = path.length;
  for (var i = 0; i < len; i++) {
    if (i == len - 1) {
      delete obj[path[i]];
    } else {
      if (!_.has(obj, path[i])) {
        break;
      }
      obj = obj[path[i]];
    }
  }
};

var DataManager = function (joist) {
  this._private_data = {};
};

DataManager.prototype.patch = function (set, unset) {
  var that = this;
  _.each(set, function (value, key) {
    deepSet(that._private_data, key, value);
  });

  _.each(unset, function (key) {
    deepUnset(that._private_data, key);
  });

  return this.getData();
};

DataManager.prototype.getData = function () {
  return JSON.parse(JSON.stringify(this._private_data));
};

module.exports = DataManager;
