var x = require('casper').selectXPath;

casper.start('http://domain.tld/page.html', function() {
    this.test.assertExists(x('//*[@id="plop"]'), 'the element exists');
});

//a selectXPath helper is available from the casper