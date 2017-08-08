var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var Key = webdriver.Key;

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get('http://www.testclass.net/selenium_javascript/');
dr.takeScreenshot().then(function(data) {
  require('fs').writeFile('pic1.png', data, 'base64');
  dr.quit();
})


//18,takeScreenshot()jietu


//19wait
//wait( condition, opt_timeout, opt_message )
//wait方法一般用来等待页面上某些条件得到满足后才继续执行脚本
// 在10s内id是foo的元素被定位到，然后点击之
var button = driver.wait(until.elementLocated(By.id('foo')), 10000);
button.click();

//wait还可以将执行中的脚本暂停住一段时间，直到第1个参数中的异步操作处理完毕
var started = startTestServer();
driver.wait(started, 5 * 1000, 'Server should start within 5 seconds');
driver.get(getServerUrl());

//sleep可以不管任何情况直接将执行中的脚本直接暂停一段时间
console.log('start')
driver.findElement(By.css('.kls')).click();
// 等待3s
driver.sleep(3000)
driver.quit()