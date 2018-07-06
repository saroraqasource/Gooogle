/**
Created By QA Source
 */

// locators
var locate = require ('../locator.js'); 
var zoomIn = locate.elements.zoomIn;
var zoomOut = locate.elements.zoomOut;
var closeLightBoxView = locate.elements.closeLightBoxView;
var mediaSizeAfterZoomIn = locate.elements.mediaSizeAfterZoomIn;
var mediaSizeAfterZoomOut = locate.elements.mediaSizeAfterZoomOut;
var mediaAssetSize = locate.elements.mediaAssetSize;


//input
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var timeoutWait = Number(input.timeout);
var page = require('../framework/page.js');
function LightBoxViewPage (webdriver) {
page.call(this, webdriver, url);
}

LightBoxViewPage.prototype = Object.create(page.prototype);
LightBoxViewPage.prototype.constructor = LightBoxViewPage;


//click billing tab
LightBoxViewPage.prototype.clickZoomIn= function() 
{
	this.driver.wait(this.until.elementLocated({ xpath: zoomIn }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Lightbox zoom in icon is not present');
	})	
}

//click member tab
LightBoxViewPage.prototype.clickZoomOut= function() 
{
	this.driver.wait(this.until.elementLocated({ xpath: zoomOut }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Lightbox zoom out icon is not present');
	})	
}
//click close icon
LightBoxViewPage.prototype.clickCloseIcon= function() 
{
	this.driver.wait(this.until.elementLocated({ xpath: closeLightBoxView }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Lightbox zoom close icon is not present');
	})	
}
//verify is media zoomed In
LightBoxViewPage.prototype.isMediaZoomedIn= function(cb) 
{
	this.driver.wait(this.until.elementLocated({ className: mediaSizeAfterZoomIn }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	})
}
//is media sized changes in lightbox view
LightBoxViewPage.prototype.getWidthOfMedia= function(cb) 
{
	this.driver.wait(this.until.elementLocated({ xpath : mediaAssetSize }),timeoutWait).then(function(val){
		val.getCssValue('width').then(function(text){
			cb(text);
	})
	},function(err){
		cb('');
	})
}

//verify is media zoomed out
LightBoxViewPage.prototype.isMediaZoomedOut= function(cb) 
{
	this.driver.wait(this.until.elementLocated({ className: mediaSizeAfterZoomOut }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	})
}


module.exports = LightBoxViewPage;

