/**
 * 
 */
function Page(webdriver, url) {
  this.driver = webdriver;
  this.url = url;
 // this.By = this.webdriver.By;
};

Page.prototype.open = function() {
	this.driver.get(this.url);
  return this;
};

Page.prototype.maximum = function() {
	//this.driver.manage().window().maximize();
	//this.driver.manage().window().maximize().then(function(){},function(err){});
}
//get browser
Page.prototype.getBrowser = function(cb) {
  this.driver.getCapabilities().then(function (caps) {
    var capability = caps.get("browserName");
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