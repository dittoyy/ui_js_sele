var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    chrome = require('selenium-webdriver/chrome');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options()
        .setMobileEmulation({deviceName: 'Google Nexus 5'}))
    .build();

driver.get('https://m.baidu.com');
driver.findElement(By.name('word')).sendKeys('webdriver');
driver.findElement(By.name('word')).submit();
driver.wait(until.titleIs('webdriver - 百度'), 2000);
driver.quit();