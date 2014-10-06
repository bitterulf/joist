exports.version = require('../package.json').version;

exports.Logic = require('./logic');

exports.ReplSignal = require('./replSignal');

exports.HtmlSignal = require('./htmlSignal');

exports.ConsoleOutput = require('./htmlOutput');

exports.HtmlOutput = require('./htmlOutput');

exports.create = function (dep, data) {
  return new(require('./joist'))(dep, data);
};
