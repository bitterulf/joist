var diff = require('deep-diff').diff;
var _ = require('underscore');

var Joist = function (dep, data) {
  dep.joist = this;
  this.data = data;
  this.dep = dep;
  this.actions = [];
  this.reactions = [];
  this._ = _;
  this.renderTargets = [];
};

Joist.prototype.patch = function (key, value) {
  var old = _.extend({}, this.dep.dataManager.getData());

  this.reactionUpdate(old, this.dep.dataManager.patch(key, value));
};

Joist.prototype.addSignalSource = function (SignalSource) {
  new SignalSource(this);
  return this;
};

Joist.prototype.addRenderTarget = function (RenderTarget) {
  this.renderTargets.push(new RenderTarget(this));
  return this;
};

Joist.prototype.addDataManager = function (DataManager) {
  new DataManager(this);
  return this;
};

Joist.prototype.addAction = function (action) {
  this.actions.push(action);
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

Joist.prototype.reactionUpdate = function (old, current) {
  var dep = this.dep;

  var changes = diff(old, current);

  var executed = [];

  var result = {};

  _.each(this.reactions, function (reaction) {
    if (reaction.check(changes, executed)) {
      reaction.command(dep, changes, executed, result);
      executed.push(reaction.name);
    }
  });

  _.each(this.renderTargets, function (target) {
    target.render(result);
  });
};

module.exports = Joist;
