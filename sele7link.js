var path = require('path');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var testFile = "file://" + path.join(__dirname,  "index.html");

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get(testFile);

dr.findElement(By.linkText('Headings')).getAttribute('href').then(function(href) {
  console.log(href);
});

dr.findElement(By.linkText('Paragraphs')).getAttribute('href').then(function(href) {
  console.log(href);
});

dr.findElement(By.linkText('Blockquotes')).getAttribute('href').then(function(href) {
  console.log(href);
});

dr.findElement(By.linkText('Lists')).getAttribute('href').then(function(href) {
  console.log(href);
});

dr.findElement(By.linkText('Horizontal rules')).getAttribute('href').then(function(href) {
  console.log(href);
});

dr.findElement(By.linkText('Tabular data')).getAttribute('href').then(function(href) {
  console.log(href);
});

dr.findElement(By.linkText('Code')).getAttribute('href').then(function(href) {
  console.log(href);
});

dr.findElement(By.partialLinkText('Inline')).getAttribute('href').then(function(href) {
  console.log(href);
});

dr.quit();

//7link
//getAttribute 方法返回了Thenable的实例，
//Thenable跟Promise很像，我们可以使用then()方法来传入回调，
//表示当异步过程成功结束的时候进行调用。