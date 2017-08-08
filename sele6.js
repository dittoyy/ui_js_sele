var path = require('path');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var testFile = "file://" + path.join(__dirname,  "index.html")

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get(testFile)

dr.findElement(By.className('is-error')).sendKeys('should be error');
dr.findElement(By.className('is-valid')).sendKeys('should be valid');


//6classname
//selenium不支持复合的class属性。比如class="col-md-1 col-sm-2"，
//我们只能通过col-md-1或者是col-sm-2来定位，不能同时使用这2个class进行定位。