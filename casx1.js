casper.start('cas1.html', function() {
    this.test.assertExists({
        type: 'xpath',
        path: '//*[@class="plop"]'
    }, 'the element exists');
});