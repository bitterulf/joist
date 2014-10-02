var diff = require('deep-diff').diff;
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

var Joist = function (dep, data) {
  dep.joist = this;
  this.data = data;
  this.dep = dep;
  this.actions = [];
  this.reactions = [];
  this.routes = [];
  this._ = _;
};

Joist.prototype.patch = function (key, value) {
  var old = _.extend({}, this.data);
  if (arguments.length > 1) {
    deepSet(this.data, key, value);
  }
  else {
    deepUnset(this.data, key);
  }
  this.reactionUpdate(old, this.data);
};

Joist.prototype.addAction = function (action) {
  this.actions.push(action);
  return this;
};

Joist.prototype.addRoute = function (route) {
  this.routes.push(route);
  return this;
};

Joist.prototype.addReaction = function (reaction) {
  this.reactions.push(reaction);
  return this;
};

Joist.prototype.actionUpdate = function (signal) {
  var dep = this.dep;
  var executed = [];
  _.each(this.actions, function (action) {
    if (action.check(signal, executed)) {
      action.command(dep, signal, executed);
      executed.push(action.name);
    }
  });
};

Joist.prototype.routeUpdate = function (data) {
  var dep = this.dep;

  var executed = [];

  _.each(this.routes, function (route) {
    if (route.check(data, executed)) {
      route.command(dep, data, executed);
      executed.push(route.name);
    }
  });

};

Joist.prototype.reactionUpdate = function (old, current) {
  var dep = this.dep;

  var changes = diff(old, current);

  var executed = [];

  _.each(this.reactions, function (reaction) {
    if (reaction.check(changes, executed)) {
      reaction.command(dep, changes, executed);
      executed.push(reaction.name);
    }
  });
};

module.exports = Joist;
