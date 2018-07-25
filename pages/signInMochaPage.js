/**
Created By QA Source
 */

var assert = require('assert');
// locators
var locate = require ('../locator.js'); 
var signInWithSlackk = locate.elements.signInWithSlack;
var domain = locate.elements.team;


//input data
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var timeoutWait = Number(input.timeout);

var parent;
var page = require('../framework/page.js');

function SignInPage (webdriver) {
  page.call(this, webdriver, url);
  By = webdriver.By;
}

SignInPage.prototype = Object.create(page.prototype);
SignInPage.prototype.constructor = SignInPage;

//Click sign in with Slack button
SignInPage.prototype.signInWithSlack= function() 
{
	this.driver.wait(this.until.elementLocated({ css: signInWithSlackk }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('sign in with slack button is not present');
	})
}

//Provide team
SignInPage.prototype.team= function(team)
{
	this.driver.wait(this.until.elementLocated({ name : domain }),timeoutWait).then(function(val){
		val.sendKeys(team);
	},function(err){
		 throw new Error('Unable to provide team name while signing with Slack');
	})
}

//Click sign in with Slack button
SignInPage.prototype.navigateT0= function(url) 
{
	this.driver.get(url);	
}

module.exports = SignInPage;