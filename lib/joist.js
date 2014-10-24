var diff = require('deep-diff').diff;
var _ = require('underscore');
var ResultManager = require('./resultManager');

var Joist = function (DataManager, helper) {
  this.helper = helper;
  this.actions = [];
  this.reactions = [];
  this._ = _;
  this.renderTargets = [];

  this.dataManager = new DataManager(this);
};

Joist.prototype.patch = function (set, unset) {
  var old = _.extend({}, this.dataManager.getData());

  this.reactionUpdate(old, this.dataManager.patch(set, unset));
};

Joist.prototype.addSignalSource = function (SignalSource) {
  new SignalSource(this);
  return this;
};

Joist.prototype.addRenderTarget = function (RenderTarget) {
  this.renderTargets.push(new RenderTarget(this));
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
  var that = this;
  var executed = [];
  _.each(this.actions, function (action) {
    if (action.check(that, signal, executed)) {
      action.command(that, signal, executed, function (set, unset) {
        that.patch(set, unset);
      });
      executed.push(action.name);
    }
  });
};

Joist.prototype.reactionUpdate = function (old, current) {
  var that = this;

  var changes = diff(old, current);

  var executed = [];

  var result = {};

  result = new ResultManager();

  _.each(this.reactions, function (reaction) {
    if (reaction.check(that, current, changes, executed)) {
      reaction.command(that, current, changes, executed, result);
      executed.push(reaction.name);
    }
  });

  _.each(this.renderTargets, function (target) {
    target.render(result.getData());
  });
};

module.exports = Joist;
