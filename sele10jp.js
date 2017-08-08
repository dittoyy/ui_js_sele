var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var Key = webdriver.Key;

var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get('http://www.qq.com');

// 把页面的body找到，在body上模拟按钮，这是整页面模拟按键事件的小技巧
var body = dr.findElement(By.css("body"));

// 每隔1.5s按一次空格键
// setTimeout在js binding中相当于其他binding中的sleep功能
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    body.sendKeys(Key.SPACE);
  }, i * 1500);
}


//10sendKeys
//ADD	
//ALT	
//ARROW_DOWN	
//ARROW_LEFT	
//ARROW_RIGHT	
//ARROW_UP	
//BACK_SPACE	
//CANCEL	
//CLEAR	
//COMMAND	
//CONTROL	
//DECIMAL	
//DELETE	
//DIVIDE	
//DOWN	
//END	
//ENTER	
//EQUALS	
//ESCAPE	
//F1	
//F10	
//F11	
//F12	
//F2	
//F3	
//F4	
//F5	
//F6	
//F7	
//F8	
//F9	
//HELP	
//HOME	
//INSERT	
//LEFT	
//META	
//MULTIPLY	
//NULL	
//NUMPAD0	
//NUMPAD1	
//NUMPAD2	
//NUMPAD3	
//NUMPAD4	
//NUMPAD5	
//NUMPAD6	
//NUMPAD7	
//NUMPAD8	
//NUMPAD9	
//PAGE_DOWN	
//PAGE_UP	
//PAUSE	
//RETURN	
//RIGHT	
//SEMICOLON	
//SEPARATOR	
//SHIFT	
//SPACE	
//SUBTRACT	
//TAB	
//UP