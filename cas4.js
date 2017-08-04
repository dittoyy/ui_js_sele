var casper = require('casper').create();
var utils = require('utils');

utils.dump(casper.cli.get('foo'));
utils.dump(casper.cli.raw.get('foo'));

casper.exit();

//casperjs cas.js --foo=01234567
//1234567
//"01234567"