var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get('http://www.testclass.net/selenium_javascript/');

dr.findElements(By.css('.post-stub a')).then(function(links){
  for (var i = 0; i < links.length; i++) {
    links[i].getAttribute('href').then(function(href) {
      console.log(href);
    });
  }
});
dr.quit();


//12
//学会使用findElements方法
//学会使用getAttribute方法定位一组元素一般有如下的作用
//
//找到一组属性部分相同的元素，遍历元素，做一些批量操作
//找到一组属性部分相同的元素，遍历元素，返回1个或几个特定的元素，做更精确的定位