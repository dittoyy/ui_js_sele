
//11actions
//
//driver.actions().
//   keyDown(Key.SHIFT).
//   click(element1).
//   click(element2).
//   dragAndDrop(element3, element4).
//   keyUp(Key.SHIFT).
//   perform();
//   
//click( opt_elementOrButton, opt_button ): 单击，相当于把鼠标移动到元素的中心，然后点击左键
//
//doubleClick( opt_elementOrButton, opt_button ): 双击, 相当于把鼠标移动到元素的中心，然后双击左键
//
//this.dragAndDrop( element, location ): 拖拽，第1个参数是拖谁(WebElement)，第2个参数是拽到哪里，可以是WebElement，也可以是坐标{x: number, y: number}
//
//this.keyDown( key ): 按下一个键，必须是{ALT, CONTROL, SHIFT, COMMAND, META}中的一个， 会一直按着，除非调用keyUp()进行松开
//
//this.keyUp( key ): 松开一个键，必须是{ALT, CONTROL, SHIFT, COMMAND, META}中的一个
//
//this.mouseDown( opt_elementOrButton, opt_button ): 按下鼠标，除非mouseUp，否则不松开
//
//this.mouseMove( location, opt_offset ): 把鼠标移动到元素的中心或者具体位置，当然，第2个参数可以也可以增加1个偏移量, {x: number, y: number}
//
//this.mouseUp( opt_elementOrButton, opt_button ): 松开鼠标
//
//this.sendKeys( …var_args ): 除了具体的Key以外，该方法也可以接受Array，这样模拟组合键就容易多了