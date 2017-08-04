//var casper = require('casper').create();
//
//casper.start('cas1.html', function() {
//  if (this.exists('h1.page-title')) {
//      this.echo('the heading exists');
//  }
//});
//
//casper.run();

//the heading exists

//testing framework:
//casper.test.begin('The heading exists', 1, function suite(test) {
//  casper.start('cas1.html', function() {
//      test.assertExists('h1.page-title');
//  }).run(function() {
//      test.done();
//  });
//});

casper.test.begin('Page content tests', 3, function suite(test) {
    casper.start('cas1.html', function() {
        test.assertExists('h1.page-title');
        test.assertSelectorHasText('h1.page-title', 'Hello');
        test.assertVisible('footer');
    }).run(function() {
        test.done();
    });
});