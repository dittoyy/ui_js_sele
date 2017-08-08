var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var assert = require('selenium-webdriver/testing/assert');

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get('http://www.testclass.net/');

dr.getTitle().then(function(title) {
  assert(title).contains('baidu');//测试教程网
  //AssertionError: 测试教程网 · 测试教程网.indexOf(测试教程网12443) !== -1
});

dr.getCurrentUrl().then(function(url) {
  assert(url).contains('bau');//testclass
});

dr.quit()

//21selenium 自带断言
