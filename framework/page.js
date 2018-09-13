/**
 * 
 */
function Page(webdriver, url) {
  this.driver = webdriver;
  this.url = url;
  this.until = require('selenium-webdriver').until;
  this.webdriver = require('selenium-webdriver');
 // this.By = this.webdriver.By;
};

Page.prototype.open = function() {
	console.log('ented open');
	console.log('this.url :'+this.url);
	this.driver.get(this.url).then(function(val){
		console.log('getting url');
	},function(err){
		console.log('error');
	})
  return this;
};

Page.prototype.maximum = function() {
	//this.driver.manage().window().maximize();
	console.log('ented maximize');
	this.driver.manage().window().maximize().then(function(){},function(err){});
}
//get browser
Page.prototype.getBrowser = function(cb) {
  this.driver.getCapabilities().then(function (caps) {
    var capability = caps.get("browserName");
	console.log('capability :' +capability);
    cb(capability);
  });
}

//get platform name
Page.prototype.getPlatform = function(cb) {
  this.driver.getCapabilities().then(function (caps) {
    var capability = caps.get("platform");
    if(capability == undefined)
      {
      capability = caps.get("platformName");
      }
    cb(capability);
  });
}


Page.prototype.waitFor = function(locator, timeout) {
  var waitTimeout = timeout || 20000;
  var driver = this.driver;
  return driver.wait(function() {
    return driver.isElementPresent(locator);
  }, waitTimeout);
};

module.exports = Page;