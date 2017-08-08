//如果我们不在乎alert上提示的内容，只想页面上不弹出alert/confirm/prompt的话，可以通过js来覆盖这些方法的原生实现，
//从而达到禁用弹出框的效果，比如下面的代码就演示了如何禁用alert。
//var banAlert = 'window.alert = function(msg){}'
//driver.executeScript(banAlert);

//driver.switchTo().alert().dismiss();
//driver.switchTo().alert().accept();
//accept(): 接受,点ok
//dismiss(): 点取消
//getText(): 拿到提示文本
//sendKeys( text ): 如果是prompt的话，可以用该方法输入一些内容
//authenticateAs( username, password ): 如果是basic authentication的话，可以通过该方法来输入用户名和密码