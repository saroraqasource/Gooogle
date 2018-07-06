/**
Created By QA Source
 */

//locators

var locate = require ('../locator.js'); 
var getStartedSlack = locate.elements.getStarted;
var email = locate.elements.emailAddress;
var nextt =  locate.elements.nextButtonInGmail;
var next = locate.elements.nextButton;
var password = locate.elements.passwordGmail;
var moreIcon = locate.elements.gmailMore;
var gmailOption = locate.elements.selectGmail;
var slackEmail = locate.elements.slackCode;
var userBubble = locate.elements.userBubbleGmail;
var signOut = locate.elements.signOutGmail;
var joinNowSlack = locate.elements.joinNow;
var otherIcon = locate.elements.otherUserIcon;
//nextButtton = locate.elements.next;
var selectSigninFromOtherAccount1 = locate.elements.selectLoginFromOtherAccount1;
var selectSigninFromOtherAccount2 = locate.elements.selectLoginFromOtherAccount2;
var userBubbleApps = locate.elements.userBubbleGmailApps;



var slack, code, slackCode, parent;
//input data
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var timeoutWait = Number(input.timeout);

var page = require('../framework/page.js');


function GmailPage (webdriver) {
page.call(this, webdriver, url);
By = webdriver.By;
}

GmailPage.prototype = Object.create(page.prototype);
GmailPage.prototype.constructor = GmailPage;


//Open new tab
GmailPage.prototype.newTab= function()
{
	this.driver.sleep(1000);
	this.driver.executeScript('window.open("_blank");');
}
//Switch to new tab
GmailPage.prototype.switchToNewTab= function()
{
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
	if (newWindow != null ) {
	    x.switchTo().window(newWindow);
	}
	x.sleep(10000);
});
this.driver.sleep(3000);
}
//Switch back to parent window once gmail user has logged in successfully
GmailPage.prototype.switchToParent= function()
{
	this.driver.switchTo().window(parent);	
}
//wait
GmailPage.prototype.waitForGmailMailTOTrigerred= function()
{
	 this.driver.sleep(30000);
}
//provide Email
GmailPage.prototype.provideEmail= function(emaill)
{
	 this.driver.wait(this.until.elementLocated({ id : email }),timeoutWait).then(function(val){
			val.sendKeys(emaill);
		},function(err){
			 throw new Error('Unable to provide email while signing to Gmail');
		})
}
//click Next
GmailPage.prototype.clickNext= function()
{
	 this.driver.wait(this.until.elementLocated({ xpath : nextt }),timeoutWait).then(function(val){
			val.click().then(function(){},
				 	function(err){ 
		 	});;
		},function(err){
			 throw new Error('Next button is not present');
		})
}
//click next on providing password
GmailPage.prototype.clickNextAfterProvidingPasssword= function(browser)
{
	if(browser=='Firefox'){
		this.driver.wait(this.until.elementLocated({ id : next }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Next button is not present');
		})
	}
	else if(browser== 'Chrome'){
		var drive = this.driver;
	 new this.webdriver.ActionSequence(this.driver).
		click(drive.findElement({id :next})).
		perform();
	}		
}
//provide password
GmailPage.prototype.providePassword= function(passwordd)
{
	 var drive = this.driver;
	 var until = this.until;
	 this.driver.wait(this.until.elementLocated({ xpath : password }),timeoutWait).then(function(val){
		  drive.wait(until.elementIsVisible(drive.findElement({ xpath : password }),timeoutWait)).then(function(val){
			val.sendKeys(passwordd);
		})
	 },function(err){
		 throw new Error('Unable to provide password');
		})
}
//click more icon
GmailPage.prototype.waitUntilUserIsLoggedInToGmail= function()
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ xpath : userBubbleApps }),timeoutWait).then(function(){
	 drive.wait(until.elementIsEnabled(drive.findElement({ xpath : userBubbleApps }),timeoutWait)).then(function(val){
		 val.click();
		})
	})
}
//select Gmail
GmailPage.prototype.clickGmailIcon= function()
{
	 this.driver.wait(this.until.elementLocated({xpath : gmailOption }),timeoutWait).then(function(val){
			val.click();
		},function(err){
		 throw new Error('Gmail icon is not present');
		})
}
//get Slack code
GmailPage.prototype.getSlackCode= function(cb)
{
	this.driver.wait(this.until.elementLocated({xpath: slackEmail }),timeoutWait).then(function(val){
		val.getText().then(function(tex){
			code = tex.split(': ');
			slackCode = code[1];
			cb(slackCode);
		});
	},function(err){
		 throw new Error('Slack code is not available on email');
	})

}
//Click user bubble
GmailPage.prototype.clickUserBubble= function()
{
	 this.driver.findElement({xpath : userBubble}).click().then(function(){		 
	 },function(err){
		 throw new Error('Gmail user bubble is not present');
		})
}
//Click sign Out
GmailPage.prototype.clickSignOut= function()
{
	this.driver.wait(this.until.elementLocated({ xpath : signOut }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Sign out button is not present');
	})
}
//Accept slack invitation
GmailPage.prototype.clickJoinNow= function()
{
	this.driver.wait(this.until.elementLocated({ xpath: slackEmail }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('slack join now button is not present');
	})
	this.driver.wait(this.until.elementLocated({ xpath : joinNowSlack }),timeoutWait).then(function(val){
		val.click();
	})
}

GmailPage.prototype.clickOtherUser= function()
{
	this.driver.wait(this.until.elementLocated({ xpath : otherIcon }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Gmail other user icon is not present');
	})
}
GmailPage.prototype.selectOtherUserIcon= function()
{s
	var drive = this.driver;
	this.driver.findElements({xpath : selectSigninFromOtherAccount1}).then(function(val){
		var len = val.length;
	drive.findElement({xpath : selectSigninFromOtherAccount2 +len + ']'}).click();
		
	},function(err){
		 throw new Error('Other user option is not present');
	})
	
}

module.exports = GmailPage;