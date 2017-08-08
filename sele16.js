var path = require('path');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var url = "http://www.baidu.com/";

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get(url)

// 先隐藏掉百度一下按钮
// 通过arguments[0]传入百度一下按钮
var hideBtn = "arguments[0].style.display='none';"

dr.executeScript(hideBtn, dr.findElement(By.id('su')));


// 然后返回页面上所有导航链接的文本
// 通过return返回需要的结果，
//因为是node所以可以直接console输出，python里用return
var linkTexts = "return $('.mnav').text()"
dr.executeScript(linkTexts).then(function(texts) {
  console.log(texts);
});

// 最后把页面背景变成黑色

dr.executeScript("document.body.style.backgroundColor='black'");

//
//16执行javascript