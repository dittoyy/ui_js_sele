var path = require('path');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var testFile = "file://" + path.join(__dirname,  "index.html")

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get(testFile)


//遍历浏览器所有的标签，并逐一切换过去
dr.getAllWindowHandles().then(function(handles) }{
  for (var i = 0; i < handles.length; i++) {
    dr.switchTo().window(handles[i]);
  }
});

//15学会使用switchTo().window(name_or_handle)方法
//点击链接会弹出新窗口，我们需要去新窗口继续定位和操作元素，这时候就需要用到切换窗口的操作了。
//switchTo().window(name_or_handle)方法可以切换到目标窗口。
//不建议大家直接使用上面的方法去切换，更明智的做法是获取要打开的窗口的链接，
//然后直接用get访问该链接，这样就不需要写切换窗口的代码了。
//窗口的name，这是为了兼容以前的实现，至于窗口的name是什么，我不太清楚
//窗口句柄，使用driver.getAllWindowHandles()句柄就可以返回浏览器中所有的打开的标签句柄了