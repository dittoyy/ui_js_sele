var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get('some url');

// 切换到第2个frame进行元素定位
dr.switchTo().frame(1).then(function() {
  dr.findElement(By.id('this-element-is-in-frame'));
});

// 切换到第id==example-frame的frame中进行元素定位
dr.findElement(By.id('example-frame')).then(function(iframe) {
  dr.switchTo().frame(iframe).then(function() {
    dr.findElement(By.id('this-element-is-in-frame'));
  });
});

// 切换回主页面
dr.switchTo().defaultContent();


//13切换frame
//switchTo().frame(id)
//switchTo().defaultContent()