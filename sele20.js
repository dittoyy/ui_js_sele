var webdriver = require('selenium-webdriver'),

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
//until一般跟wait一起用，用于等待页面上的一些条件被满足
//until还允许我们自定义条件。我们只需要传入1个回调，
//该回调返回真值(true)就代表等待的条件被满足
driver.wait(function() {
  return driver.getTitle().then(function(title) {
    return title === '测试教程网';
  });
}, 1000);


//20until
//ableToSwitchToFrame(frame): 直到selenium可以将定位上下文切换到frame里
//alertIsPresent(): 直到alert出现
//elementIsDisabled(element): 直到元素灰掉，不能被点击
//elementIsEnabled(element): 直到元素可以被点击
//elementIsNotSelected(element): 直到元素不可选
//elementIsNotVisible(element): 直到元素不可见
//elementIsSelected(element): 直到元素可选
//elementIsVisible(element): 直到元素可见
//elementLocated(locator): 最常用，直到元素可以被定位
//elementTextContains(element, substr): 直到元素的text包含substr
//elementTextIs(element, expected_text): 直到元素的text是expected_text
//elementTextMatches(element,regex): 直到元素的text满足正则表达式regex
//elementsLocated(locator): 直到一组元素被定位
//stalenessOf(element): 直到元素被dom树移除或页面刷新
//titleContains(substr): 直到页面title包含substr
//titleIs(expected_title): 直到页面的title是expected_title
//titleMatches(regex): 直到页面的title满足正则表达式regex
//urlContains(substrUrl): 直到页面url包含substrUrl
//urlIs(expected_url): 直到页面的url是expected_url
//urlMatches(regex): 直到页面的url满足正则表达式regex