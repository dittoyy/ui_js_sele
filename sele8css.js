var path = require('path');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var testFile = "file://" + path.join(__dirname,  "index.html");

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get(testFile);

// id selector
dr.findElement(By.css('#input__search')).sendKeys('测试教程网');
// attribute selector
dr.findElement(By.css('input[type="number"]')).sendKeys('66666');
// class selector
dr.findElement(By.css('.is-error')).sendKeys('should be error');
// class selector
dr.findElement(By.css('.is-valid')).sendKeys('should be valid');

// <input id="input__text2" type="number" placeholder="Enter a Number">
dr.findElement(By.xpath('//input[@type="number"]')).sendKeys('66666');