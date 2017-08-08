var path = require('path');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var testFile = "file://" + path.join(__dirname,  "index.html")

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get(testFile)

dr.findElement(By.id('select')).then(function(select) {
  dr.findElements(By.css('option')).then(function(options) {
    options[options.length - 1].click();
  });
});


//14处理下拉列表 select
//感叹一下js比python快多了啊