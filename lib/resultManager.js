var _ = require('underscore');

var ResultManager = function () {
  this.data = {};
};

ResultManager.prototype.add = function (key, obj) {
  if (!_.has(this.data, key)) {
    this.data[key] = [];
  }

  this.data[key].push(obj);

  return this;
};

ResultManager.prototype.getData = function () {
  return this.data;
};

module.exports = ResultManager;
