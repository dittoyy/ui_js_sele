var path = require('path');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By;

var testFile = "file://" + path.join(__dirname,  "index.html")//open index.html

//var testFile="http://httpbin.org/forms/post"
var dr = new webdriver.Builder().forBrowser('chrome').build();
dr.get(testFile)

dr.findElement(By.id('input__text')).sendKeys('测试教程网');
dr.findElement(By.id('input__password')).sendKeys('password');
dr.findElement(By.id('input__webaddress')).sendKeys('http://www.itest.info');
dr.findElement(By.id('input__emailaddress')).sendKeys('service@itest.info');
dr.findElement(By.id('input__phone')).sendKeys('13888888888');
dr.findElement(By.id('input__search')).sendKeys('keywords');
dr.findElement(By.id('input__text2')).sendKeys('6666666');
dr.findElement(By.id('input__text3')).sendKeys('should be error');
dr.findElement(By.id('input__text4')).sendKeys('should be valid');

// <input name="username" />
dr.findElement(By.name('username')).sendKeys('测试教程网');
// <input name="password" type="password" />
dr.findElement(By.name('password')).sendKeys('就不告诉你');

//4id
//By.className( name )
//
//By.css( selector )
//
//By.id( id )
//
//By.js( script, …var_args )
//
//By.linkText( text )
//
//By.name( name )
//
//By.partialLinkText( text )
//
//By.xpath( xpath )