/**
Created By QA Source
 */


var assert = require('assert');
// locators
var locate = require ('../locator.js'); 
var billing = locate.elements.billingTab;
var membersTab = locate.elements.members;
var colorSwatch = locate.elements.colorSwatch;
var teamName = locate.elements.teamName;
var changeTeamName = locate.elements.changeTeamName;
var updateButton = locate.elements.sendInvitation;

//input
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var timeoutWait = Number(input.timeout);
var page = require('../framework/page.js');
function TeamSettingPage (webdriver) {
page.call(this, webdriver, url);
}

TeamSettingPage.prototype = Object.create(page.prototype);
TeamSettingPage.prototype.constructor = TeamSettingPage;


//click billing tab
TeamSettingPage.prototype.clickBilling= function() 
{
		
	this.driver.wait(this.until.elementLocated({ id: billing }),timeoutWait).then(function(val){
		val.click();
	})	
}

//click member tab
TeamSettingPage.prototype.clickMembers= function() 
{
	this.driver.wait(this.until.elementLocated({ id: membersTab }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to navigate to members tab');
	})
}
//change color in color swatch
TeamSettingPage.prototype.changeColor= function(cb) 
{
	var drive = this.driver;
	var num ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
	this.driver.findElement({xpath : colorSwatch }).then(function(val){
		val.clear();
		val.sendKeys(num);
		cb(num);
	})
}
//click team name 
TeamSettingPage.prototype.clickTeamName = function() 
{
	this.driver.wait(this.until.elementLocated({ xpath : teamName }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to focus team name');
	})
}
//provide team name  changeTeamName
TeamSettingPage.prototype.provideTeamName = function(updatedTeamName) 
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({ xpath : changeTeamName }),timeoutWait).then(function(element){
		element.clear();
		element.sendKeys(updatedTeamName);
	})
}
//click update button 
TeamSettingPage.prototype.clickUpdateButton = function() 
{
	this.driver.wait(this.until.elementLocated({ css : updateButton }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to update team name');
	})
}


module.exports = TeamSettingPage;

