exports.version = require('../package.json').version;

exports.Logic = require('./logic');

exports.ReplSignal = require('./replSignal');

exports.HtmlSignal = require('./htmlSignal');

exports.consoleOutput = require('./consoleOutput');

exports.createHtmlUi = function(dep)
{
  return new (require('./htmlUi'))(dep);
};

exports.create = function (dep, data) {
  return new (require('./joist'))(dep, data);
};
