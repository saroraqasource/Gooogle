/**
Created By QA Source
 */

var assert = require('assert');
// locators
var locate = require ('../locator.js'); 
var signInWithSlackk = locate.elements.signInWithSlack;
var domain = locate.elements.team;
var continu = locate.elements.continueButton;
var emaill = locate.elements.email;
var password = locate.elements.password;
var signIn = locate.elements.signIn;
var authorize = locate.elements.authorize;
var createNewDeck = locate.elements.createDeck;
var selectSignInDropdown = locate.elements.selectSignInDropdownn;
var selectSignInMenuItem = locate.elements.selectSignInMenuItemm;
var signInWithEmaill =locate.elements.signInWithEmail;
var emailCredential =locate.elements.emailEmail; 
var continuee = locate.elements.continueEmail; 
var passwordCredential = locate.elements.passwordEmail; 
var signInButton = locate.elements.signInEmail;
var usserbubbleTeam = locate.elements.teamInUsserBubble; 
var signInWithGooglee = locate.elements.signInWithGoogle;
var emailGmailCredential =locate.elements.emailGmail;
var nextGmail = locate.elements.next;
var passwordGmail = locate.elements.passwordGmaill;
var userBubblee = locate.elements.userBubble;
var signOutItem = locate.elements.signOut;
var signOutConfirm = locate.elements.confirmSignOut;
var invalidUserLoginMessage = locate.elements.invalidSignInMessage;
var signnedInUser = locate.elements.loggedInUser;
var domainTeamList = locate.elements.domainTeamList;
var domainTeamList1 = locate.elements.domainTeamList1;
var totalTeams = locate.elements.totalTeams;
var passwordNext = locate.elements.passwordNext;

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
//Click sign in with Email Button
SignInPage.prototype.signInWithEmail= function()
{
	this.driver.wait(this.until.elementLocated({ css: signInWithEmaill }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('sign in with email button is not present');
	})
}
//Provide Email
SignInPage.prototype.provideEmail= function(email)
{
	this.driver.wait(this.until.elementLocated({  name: emailCredential }),timeoutWait).then(function(val){
		val.sendKeys(email);
	},function(err){
		 throw new Error('email textbox is not present');
	})
}
//click continue Button while logging from Email team
SignInPage.prototype.clickContinueButtonEmail= function()
{
	this.driver.wait(this.until.elementLocated({  name: continuee }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Continue button is not present');
	})
}
//provide Password for Email sign in
SignInPage.prototype.providePasswordEmail= function(password)
{
	this.driver.wait(this.until.elementLocated({  name: passwordCredential }),timeoutWait).then(function(val){
		val.sendKeys(password);
	},function(err){
		 throw new Error('unable to provide password for email user');
	})	
}
//click sign in button while logging from Email team
SignInPage.prototype.clickSignInButtonEmail= function()
{
	this.driver.wait(this.until.elementLocated({  name: signInButton }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to provide password for email user');
	})	
}
//Verify if user part of Email Team is successfully logged in
SignInPage.prototype.verifyIfEmailUserloggedIn= function(cb)
{
	this.driver.wait(this.until.elementLocated({  xpath: usserbubbleTeam }),timeoutWait).then(function(val){
		val.getText().then(function(text){
			cb(text);
		})		
	},function(err){
		 throw new Error('Unable to login to Email team');
	})
}
//click signInWithGoogle
SignInPage.prototype.signInWithGoogle= function()
{
	this.driver.wait(this.until.elementLocated({  css : signInWithGooglee }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click sign in with google button');
	})
}
//Provide Email while logging for Gmail Team
SignInPage.prototype.provideEmailGmail = function(emaill)
{
	this.driver.sleep(4000);
	parent = this.driver.getWindowHandle();
	var newWindow = this.driver.getAllWindowHandles();
	var x=this.driver;
	this.driver.getAllWindowHandles().then(function gotWindowHandles(handles){
		for(var i=0; i<handles.length; i++)
			{
				let ii =1;
				if(handles[ii]!= parent){
					newWindow= handles[ii];
				}
			}
		if (newWindow != null) {
		    x.switchTo().window(newWindow);
		    x.findElement({id : emailGmailCredential}).sendKeys(emaill);
		}
	});
	this.driver.sleep(3000);		
}

//Click Next
SignInPage.prototype.clickNext= function(browser)
{
	if(browser=='Firefox' || browser=='firefox'){
		var drive = this.driver;
		var until = this.until;
		this.driver.wait(this.until.elementLocated({  id: nextGmail }),timeoutWait).then(function(){
			drive.wait(until.elementIsVisible(drive.findElement({  id: nextGmail }),timeoutWait)).then(function(val){
				val.click();
			})
		},function(err){
			 throw new Error('Unable to click Next button of Sign In with Gmail signin');
		})
	}
	else if(browser== 'Chrome' || browser== 'chrome'){
		//var webdriver =require('selenium-webdriver');
			new this.webdriver.ActionSequence(this.driver).
			click(this.driver.findElement({ id: nextGmail })).
			perform();
	}
	
}
//Provide Password of Gmail User
SignInPage.prototype.providePasswordGmail= function(passwordd)
{
	this.driver.wait(this.until.elementLocated({  css: passwordGmail }),timeoutWait).then(function(val){
		val.sendKeys(passwordd);
	},function(err){
		 throw new Error('Unable to provide password while signing with Gmail');
	})
}
//Switch back to parent window once gmail user has logged in successfully
SignInPage.prototype.switchToParent= function()
{
	this.driver.switchTo().window(parent);	
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
//click continue Button
SignInPage.prototype.continueButton= function()
{	
	this.driver.wait(this.until.elementLocated({id : continu }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click continue button ');
	})
}
//Provide email
SignInPage.prototype.emailText= function(email)
{	
	this.driver.wait(this.until.elementLocated({id : emaill }),timeoutWait).then(function(val){
		val.sendKeys(email); 
	},function(err){
		 throw new Error('Unable to provide Email ');
	})
}
//provide Password
SignInPage.prototype.providePassword= function(password1) 
{
	this.driver.wait(this.until.elementLocated({id : password }),timeoutWait).then(function(val){
		val.sendKeys(password1);
	},function(err){
		 throw new Error('Unable to provide Password ');
	})
}
//click signin button
SignInPage.prototype.clickSignIn= function()
{
	this.driver.wait(this.until.elementLocated({id: signIn }),timeoutWait).then(function(val){
		val.click(); 
		val.click().then(function(){},function(err){});
	},function(err){
		 throw new Error('Unable to click sign in button ');
	})
}
//Click Authorize
SignInPage.prototype.clickAuthorize= function()
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({id : "oauth_authorizify" }),timeoutWait).then(function(value){
		drive.wait(until.elementIsEnabled(drive.findElement({id : "oauth_authorizify" }),timeoutWait)).then(function(val){
		drive.executeScript("arguments[0].scrollIntoView(true);", value);
		value.click(); 
	})
	},function(err){
		 throw new Error('Unable to click authorize button ');
	})
/*	WebElement element = driver.findElement(By.id("id_of_element"));
((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
Thread.sleep(500); */
	
}
//verify if user has logged in successfully
SignInPage.prototype.verifyNewDeckButton= function(cb)
{
	this.driver.wait(this.until.elementLocated({css :createNewDeck }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	})	
}
//wait
SignInPage.prototype.longwaitt = function()
{
	this.driver.sleep(15000);
}
SignInPage.prototype.shortwaitt = function()
{
	this.driver.sleep(5000);
}
//Click Sign Out
SignInPage.prototype.clickSignOut = function()
{
	this.driver.wait(this.until.elementLocated({xpath: signOutItem }),timeoutWait).then(function(val){
		val.click(); 
	},function(err){
		 throw new Error('Unable to click sign out button ');
	})
}
//Click User Buuble icon
SignInPage.prototype.clickUserBubble = function()
{
	this.driver.wait(this.until.elementLocated({className: userBubblee }),timeoutWait).then(function(val){
		val.click(); 
	},function(err){
		 throw new Error('Unable to click user bubble ');
	})
}
//confirm sign out
SignInPage.prototype.clickSignOutConfirm = function()
{
	this.driver.wait(this.until.elementLocated({css: signOutConfirm }),timeoutWait).then(function(val){
		val.click(); 
	},function(err){
		 throw new Error('Unable to click signot confirm button ');
	})
}
//Click sign in with Slack button
SignInPage.prototype.navigateT0= function(url) 
{
	this.driver.get(url);	
}
//checks if user is invalid user
SignInPage.prototype.isUserInvalid = function(text, cb)
{
	this.driver.wait(this.until.elementLocated({className: invalidUserLoginMessage }),timeoutWait).then(function(val){
		val.getText().then(function(val){
		if(val.includes(text)){
			cb(true);
		}
		else{
			cb(false);
		}
	})
	})
}
//Verifiy if respectrive user loggedn
SignInPage.prototype.isValidUserLoggedIn = function(user, cb)
{
	this.driver.wait(this.until.elementLocated({xpath: signnedInUser}),timeoutWait).then(function(element){
		element.getText().then(function(value){
		if(value.includes(user)){
			cb(true);
		}
		else{
			cb(false);
		}
	})
	})
}
//Select Team from choose your team page
SignInPage.prototype.selectEmailTeamFromDomainPage = function(emailTeam)
{
	var drive = this.driver;
	this.driver.findElements({xpath : totalTeams }).then(function(value){
		var totalTeam = value.length;
		for(var i=1 ; i<=totalTeam; i++){
			var ii = i;
			drive.findElement({xpath : domainTeamList + ii + domainTeamList1}).then(function(text){
				text.getText().then(function(val){
					if(val == emailTeam){
						text.click();
					}
				},function(err){})
			},function(err){})
		}
		
	});
}
//click password Next button
SignInPage.prototype.clickPasswordNext = function(browser)
{
	if(browser=='Firefox' || browser=='firefox'){
		this.driver.wait(this.until.elementLocated({id: passwordNext}),timeoutWait).then(function(val){
			val.click();	
		},function(err){
			 throw new Error('Unable to click next button ');
		})	
	}
	else if(browser== 'Chrome' || browser== 'chrome'){
			new this.webdriver.ActionSequence(this.driver).
			click(this.driver.findElement({id: passwordNext})).
			perform();
	}
	

}
//wait until user is logged out successfully
SignInPage.prototype.waitUntillUserIsSignOut = function()
{
	this.driver.wait(this.until.elementLocated({css: signInWithSlackk }),timeoutWait).then(function(val){
	},function(err){
		 throw new Error('Unable to sign out from paste');
	})	
}
//is user logged out from slack
SignInPage.prototype.isUserLoggedOut= function(cb) 
{
	this.driver.wait(this.until.elementLocated({ css: signInWithSlackk }),timeoutWait).then(function(val){
		cb(true);	
	},function(err){
		cb(false);
	})
}
module.exports = SignInPage;