/*
Created by QA Source
PASTE-718: Verify that user is able to resize the asset in Slide Editor View.
 */
var assert = require('assert');
var {describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../framework/page.js');
var Sign = require('../pages/signInMochaPage.js');

var page,sign;

//input Data
var input =require('../inputSheet.js');
var crossBrowserTesting =input.crossBrowserTesting;
var wait = input.wait;
var url = input.pasteUrl;
var accountPassword = input.password;
var testDomain = input.team;
var emailId = input.email;


var deckName, textOfSlide,browser;
var browsers = crossBrowserTesting.split(',');
for(var i=0; i<browsers.length; i++){
	let ii = i;
	var browserr = browsers[ii];
	describe('Resize : ' + browserr, function(){
		var driver;
		this.timeout(wait);

		beforeEach(function(){
			driver = require('../framework/driverClass.js').getDriver(browsers[ii]);
			page = new Page(driver,url);
			sign = new Sign(driver);
			page.maximum();
			page.open();
		});
		afterEach(function(){
			if(driver)

				driver.close();
		});

		it('Verify that user is able to resize the asset in Slide Editor View PASTE-718#Smoke', function(){	

			//get browser on which script is getting executed
			page.getBrowser(function(val){
				browser = val;

				//Click Sign In with Slack button
				sign.signInWithSlack();

				//Enter Domain
				sign.team(testDomain);
				
				sign.navigateT0(url);
				
				//Click Sign In with Slack button
				sign.signInWithSlack();

				//Enter Domain
				sign.team(testDomain);
				
				sign.navigateT0(url);
				
				//Click Sign In with Slack button
				sign.signInWithSlack();

				//Enter Domain
				sign.team(testDomain);
				
				sign.navigateT0(url);
				
				//Click Sign In with Slack button
				sign.signInWithSlack();

				//Enter Domain
				sign.team(testDomain);
				
				sign.navigateT0(url);

			})
		});
	});
}
