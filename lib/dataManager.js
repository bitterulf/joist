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
  joist.dep.dataManager = this;
  this.dep = joist.dep;
  this.data = {};
};

DataManager.prototype.patch = function (key, value) {
  if (arguments.length > 1) {
    deepSet(this.data, key, value);
  } else {
    deepUnset(this.data, key);
  }

  return this.data;
};

DataManager.prototype.getData = function () {
  return this.data;
};

module.exports = DataManager;
