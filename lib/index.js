exports.version = require('../package.json').version;

exports.Logic = require('./logic');

exports.createReplSignal = function(joist)
{
  return new (require('./replSignal'))(joist);
};

exports.HtmlSignal = require('./htmlSignal');

exports.ConsoleUi = require('./consoleUi');

exports.createHtmlUi = function(dep)
{
  return new (require('./htmlUi'))(dep);
};

exports.create = function (dep, data) {
  return new (require('./joist'))(dep, data);
};
