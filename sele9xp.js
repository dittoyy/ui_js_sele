var path = require('path');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var testFile = "file://" + path.join(__dirname,  "index.html");

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get(testFile);


// <input id="input__text2" type="number" placeholder="Enter a Number">
dr.findElement(By.xpath('//input[@type="number"]')).sendKeys('66666');


//9xpath
//	nodename 选取此节点的所有子节点。
//	/ 从根节点选取。
//	// 从匹配选择的当前节点选择文档中的节点，而不考虑它们的位置。
//	. 选取当前节点。
//	.. 选取当前节点的父节点。
//	@ 选取属性。