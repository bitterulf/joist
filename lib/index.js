exports.version = require('../package.json').version;

exports.Logic = require('./logic');

exports.ReplSignal = require('./replSignal');

exports.HtmlSignal = require('./htmlSignal');

exports.consoleOutput = require('./htmlOutput');

exports.htmlOutput = require('./htmlOutput');

exports.create = function (dep, data) {
  return new(require('./joist'))(dep, data);
};
