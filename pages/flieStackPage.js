/**
Created By QA Source
 */


var assert = require('assert');
// locators
var locate = require ('../locator.js'); 
var dropbox = locate.elements.dropbox;
var dropBoxUsername = locate.elements.dropBoxUsername;
var dropBoxPassword = locate.elements.dropBoxPassword;
var signIn = locate.elements.sendButton2;
var allowAccess = locate.elements.allowAccess;
var totalFilesInDropBox = locate.elements.totalFilesInDropBox;
var selectFile = locate.elements.selectFile;
var selectFile1 = locate.elements.selectFile1;
var selectFile2 = locate.elements.selectFile2;
var frames = locate.elements.frames;
var dropBoxSignInWithGoogle = locate.elements.dropBoxSignInWithGoogle;
var dropBoxEmail = locate.elements.emailGmail;
var password = locate.elements.password;
var nextGmail = locate.elements.next;
var fileStackBox = locate.elements.fileStackBox;
var box = locate.elements.box;
var boxUserName = locate.elements.boxUserName;
var boxPassword = locate.elements.password;
var boxAuthorize = locate.elements.sendInvitation;
var allowAccessToBox = locate.elements.allowAccessToBox;
var fileOneDrive = locate.elements.fileOneDrive;
var oneDrive = locate.elements.oneDrive;
var oneDriveUserName = locate.elements.oneDriveUserName;
var oneDrivePassword = locate.elements.oneDrivePassword;
var fileStackGoogleDrive = locate.elements.fileStackGoogleDrive;
var googleDrive = locate.elements.googleDrive;
var useAnotherGoogleAcount = locate.elements.useAnotherGoogleAcount;
var allowAccessToGoogleDrive = locate.elements.allowAccessToGoogleDrive;

//input
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var shortwait = Number(input.shortwait);
var timeoutWait = Number(input.timeout);

var page = require('../framework/page.js');
function FileStackPage (webdriver) {
page.call(this, webdriver, url);
}

FileStackPage.prototype = Object.create(page.prototype);
FileStackPage.prototype.constructor = FileStackPage;



//click connect to drop box
FileStackPage.prototype.connectToDropbox= function() 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({linkText : dropbox }),timeoutWait).then(function(){
		drive.wait(until.elementIsVisible(drive.findElement({linkText : dropbox }),timeoutWait)).then(function(val){
		val.click();
		})
	},function(err){
		drive.wait(until.elementLocated({linkText : dropbox }),timeoutWait).then(function(){
			drive.wait(until.elementIsVisible(drive.findElement({linkText : dropbox }),timeoutWait)).then(function(val){
			val.click();
			});	
		});
	})
} 

//switch to  fileStack  
FileStackPage.prototype.switchToFileStack= function() 
{
	var drive = this.driver;
	this.driver.findElements({xpath : frames}).then(function(val){
		var  switchToFrame = (val.length) - 1 ;
		drive.switchTo().frame(switchToFrame)
	})
}

//provide dropbox user name
FileStackPage.prototype.provideDropboxUserName= function(username) 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ css: dropBoxUsername }),timeoutWait).then(function(){
		drive.wait(until.elementIsVisible(drive.findElement({ css: dropBoxUsername }),timeoutWait)).then(function(val){
		val.sendKeys(username);
	})
	},function(err){
		 throw new Error('Unable to provide dropbox user name');
	})
}


//provide dropbox password
FileStackPage.prototype.provideDropboxPassword= function(password) 
{
	this.driver.wait(this.until.elementLocated({ css: dropBoxPassword }),timeoutWait).then(function(val){
		val.sendKeys(password);
	},function(err){
		 throw new Error('Unable to provide dropbox password');
	})
}

//click signIn button
FileStackPage.prototype.clickSignIn= function() 
{
	this.driver.wait(this.until.elementLocated({ css: signIn }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click sign in button');
	})
}

//click allowAccess button
FileStackPage.prototype.clickAllowAccess= function() 
{
	this.driver.wait(this.until.elementLocated({ name: allowAccess }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click Allow Access button');
	})
}

//select file from dropbox
FileStackPage.prototype.selectFile= function(file,cb) 
{
	var drive = this.driver;
	this.driver.findElements({xpath: totalFilesInDropBox}).then(function(elements){
		var totalElements = Number(elements.length)/2;
		var count  = 1;
		for(var i = 1; i<=totalElements ; i++){
			var ii =i;
			drive.findElement({xpath: selectFile + ii + selectFile1}).then(function(val){
				val.getText().then(function(text){
					if(text.includes(file)){
						drive.findElement({xpath: selectFile + count + selectFile2}).then(function(val){
							val.click();						
						})
						cb('');
					}
					count ++ ;
				})
			})
		}
	})
}
//switch to  fileStack  
FileStackPage.prototype.switchBackToPaste= function() 
{
	this.driver.switchTo().defaultContent();
}

//click sign in with google option on dropbox page
FileStackPage.prototype.clickDropboxSignInWithGoogle= function() 
{
	this.driver.wait(this.until.elementLocated({ xpath: dropBoxSignInWithGoogle }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click dropbox sign in with google button');
	})
}
//provide dropbox email
FileStackPage.prototype.provideEmail= function(username) 
{
	this.driver.wait(this.until.elementLocated({ id: dropBoxEmail }),timeoutWait).then(function(val){
		val.sendKeys(username);
	},function(err){
		 throw new Error('Unable to provide email while signing with dropbox');
	})
}

//provide Password
FileStackPage.prototype.providePassword= function(browser, password1) 
{
	var drive = this.driver;
	var until = this.until;
	if(browser == 'Firefox' || browser == 'firefox'){
	this.driver.wait(this.until.elementLocated({id : password }),timeoutWait).then(function(){
		drive.wait(until.elementIsVisible(drive.findElement({  id: password }),timeoutWait)).then(function(val){
		val.sendKeys(password1);
		});
	},function(err){
		 throw new Error('Unable to provide password while signing with dropbox');
	})
	}
	else if(browser== 'Chrome' || browser == 'chrome'){
	this.driver.sleep(1000);
	new this.webdriver.ActionSequence(this.driver).
	click(drive.findElement({id: password})).
	sendKeys(password1).
	perform();
	}
	//cb(text);
}

//Switch to first tab
FileStackPage.prototype.switchToFirstTab= function()
{
parent = this.driver.getWindowHandle();
var newWindow = this.driver.getAllWindowHandles();
var x=this.driver;
this.driver.getAllWindowHandles().then(function gotWindowHandles(handles){
	    x.switchTo().window(handles[0]);
});
this.driver.sleep(3000);
}

//wait until user is logged into dropbox
FileStackPage.prototype.waitUntilUserIsLoggedInToDropBox= function() 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({linkText : dropbox }),shortwait).then(function(){
	//	drive.wait(until.elementIsVisible(drive.findElement({linkText : dropbox }),timeoutWait)).then(function(val){
		var File = require('../pages/flieStackPage.js');
		var file = new File(drive);
		
		file.waitUntilUserIsLoggedInToDropBox();
		//});
	},function(err){
	})
} 
//click box option from file stack
FileStackPage.prototype.fileStackBox= function() 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({partialLinkText : fileStackBox }),timeoutWait).then(function(){
		drive.wait(until.elementIsVisible(drive.findElement({partialLinkText : fileStackBox }),timeoutWait)).then(function(val){
		val.click();
		});
	},function(err){
		 throw new Error('Unable to click box option from file stack');
	})
}
//click connect to box
FileStackPage.prototype.clickConnectToBox= function() 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({linkText : box }),timeoutWait).then(function(){
		drive.wait(until.elementIsVisible(drive.findElement({linkText : box }),timeoutWait)).then(function(val){
		val.click();
		});
	},function(err){
		 throw new Error('Unable to click connect to box');
	})
}
//provide box user name
FileStackPage.prototype.provideboxUserName= function(username) 
{
	this.driver.wait(this.until.elementLocated({ id: boxUserName }),timeoutWait).then(function(val){
		val.sendKeys(username);
	},function(err){
		 throw new Error('Unable to provide user name while sign in to box');
	})
}
//provide box password
FileStackPage.prototype.provideboxPassword= function(password) 
{
	this.driver.wait(this.until.elementLocated({ id: boxPassword }),timeoutWait).then(function(val){
		val.sendKeys(password);
	},function(err){
		 throw new Error('Unable to provide password while sign in to box');
	})
}
//click box authorize
FileStackPage.prototype.clickBoxAuthorize= function() 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ css: boxAuthorize }),timeoutWait).then(function(){
		drive.wait(until.elementIsVisible(drive.findElement({css: boxAuthorize }),timeoutWait)).then(function(val){
		val.click();
		})
	},function(err){
		 throw new Error('Unable to click authorize button while sign in to box');
	})
}
//wait until user is logged into box
FileStackPage.prototype.waitUntilUserIsLoggedInToBox= function() 
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({linkText : box }),shortwait).then(function(){
		var File = require('../pages/flieStackPage.js');
		var file = new File(drive);
		
		file.waitUntilUserIsLoggedInToBox();
		//});
	},function(err){
	})
} 
//allowAccessToBox
FileStackPage.prototype.clickAllowAccessToBoxButton= function() 
{
	this.driver.wait(this.until.elementLocated({ id: allowAccessToBox }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click allow access button while sign in to box');
	})
}
//click one drive option from file stack
FileStackPage.prototype.fileStackOneDrive= function() 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({partialLinkText : fileOneDrive }),timeoutWait).then(function(){
		drive.wait(until.elementIsVisible(drive.findElement({partialLinkText : fileOneDrive }),timeoutWait)).then(function(val){
		val.click();
		});
	},function(err){
		 throw new Error('Unable to click one drive button from file Stack');
	})
}
//click connect to one drive
FileStackPage.prototype.clickConnectToOneDrive= function() 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({linkText : oneDrive }),timeoutWait).then(function(){
		drive.wait(until.elementIsVisible(drive.findElement({linkText : oneDrive }),timeoutWait)).then(function(val){
		val.click();
		});
	},function(err){
		 throw new Error('Unable to click connect to one drive button');
	})
}
//provide one drive user name
FileStackPage.prototype.provideOneDriveUserName= function(username) 
{
	this.driver.wait(this.until.elementLocated({ name: oneDriveUserName }),timeoutWait).then(function(val){
		val.sendKeys(username);
	},function(err){
		 throw new Error('Unable to provide one drive user name');
	})
}
//
//provide one drive password
FileStackPage.prototype.provideOneDrivePassword= function(password) 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ name: oneDrivePassword }),timeoutWait).then(function(element){
		drive.wait(until.elementIsVisible(drive.findElement({name: oneDrivePassword }),timeoutWait)).then(function(val){
		val.sendKeys(password);
		});
	},function(err){
		 throw new Error('Unable to provide one drive password');
	})
}
//wait until user is logged into one drive
FileStackPage.prototype.waitUntilUserIsLoggedInToOneDrive= function() 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({linkText : oneDrive }),shortwait).then(function(){
		var File = require('../pages/flieStackPage.js');
		var file = new File(drive);	
		file.waitUntilUserIsLoggedInToOneDrive();
	},function(err){
	})
} 
//click google drive option from file stack
FileStackPage.prototype.fileStackGoogleDrive= function() 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({partialLinkText : fileStackGoogleDrive }),timeoutWait).then(function(){
		drive.wait(until.elementIsVisible(drive.findElement({partialLinkText : fileStackGoogleDrive }),timeoutWait)).then(function(val){
		val.click();
		});
	},function(err){
		 throw new Error('Unable to click google drive from file stack');
	})
}
//click connect to google drive
FileStackPage.prototype.clickConnectToGoogleDrive= function() 
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({linkText : googleDrive }),timeoutWait).then(function(){
		drive.wait(until.elementIsVisible(drive.findElement({linkText : googleDrive }),timeoutWait)).then(function(val){
		val.click();
		});
	},function(err){
		 throw new Error('Unable to click connect to google drive ');
	})
}
//click use another google account button
FileStackPage.prototype.clickUseAnotherGoogleAccount= function() 
{
	this.driver.wait(this.until.elementLocated({id : useAnotherGoogleAcount }),timeoutWait).then(function(val){
		val.click();
		},function(err){
			 throw new Error('Unable to click use another google account link ');
		})
}
//click allow button to provide access to google drive
FileStackPage.prototype.allowAccessToGoogleDrive= function() 
{
	this.driver.wait(this.until.elementLocated({id : allowAccessToGoogleDrive }),timeoutWait).then(function(val){
		val.click();
		},function(err){
			 throw new Error('Unable to click allow Access To Google Drive button ');
		})
}
//wait until user is logged into google drive
FileStackPage.prototype.waitUntilUserIsLoggedInToGoogleDrive= function() 
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({linkText : googleDrive }),shortwait).then(function(){
		var File = require('../pages/flieStackPage.js');
		var file = new File(drive);	
		file.waitUntilUserIsLoggedInToGoogleDrive();
	},function(err){
	})
} 
module.exports = FileStackPage;

