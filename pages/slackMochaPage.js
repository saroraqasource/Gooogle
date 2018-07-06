/**
Created By QA Source
 */

//locators
var locate = require ('../locator.js'); 
var createWorkspaceSlack = locate.elements.createWorkspace;
var email = locate.elements.emailSlack;
var confirmButton = locate.elements.consfirm;
var fullNameSlack = locate.elements.fullName;
var password = locate.elements.passwordTeamCreate;
var selectUseOfSlack = locate.elements.teamUserForSlack;
var slackTeamName = locate.elements.slackTeamName;
var slackTeamUrl = locate.elements.slackUrl;
var iAgree = locate.elements.agree;
var skipForNowButton = locate.elements.skipForNow;
var invteeEmail = locate.elements.invite;
var invteeEmail2 = locate.elements.invite2; 
var slackConfimationCode = locate.elements.confimationCode;
var slackConfimationCodePart1 = locate.elements.confimationCodePart1;
var slackConfimationCodePart2 = locate.elements.confimationCodePart2;
var slackConfimationCodePart3 = locate.elements.confimationCodePart3;
var useOfSlackkTeamDropdown = locate.elements.useOfSlackTeamDropdown;
var useOfSlackkTeamValue = locate.elements.useOfSlackTeamValue;
var closeTutorial = locate.elements.crossIcon;
var skipTutorial = locate.elements.skip;
var slackkMenu = locate.elements.slackMenu;
var logout = locate.elements.slackSignOut;
var inviteUserPassword = locate.elements.passwordInviteUser;
var skipTutorialsForInvitee = locate.elements.skipTutorial;
var invitedUserName = locate.elements.nameinviteUser;
var slackSignIn = locate.elements.slackSignIn;
var slackSignBackIn = locate.elements.slackSignBackIn;
var selectSlackChannel = locate.elements.selectSlackChannel;
var selectSlackChanne2 = locate.elements.selectSlackChanne2;
var totalChannels = locate.elements.totalChannels;
var totalChannels2 = locate.elements.totalChannels2;
var allNotifications = locate.elements.allNotifications;
var linkNotifcation = locate.elements.linkNotifcation;
var linkNotifcation2 = locate.elements.linkNotifcation2;
var textOfLinkNotifcation = locate.elements.textOfLinkNotifcation;
var continueInBrowser = locate.elements.continueInBrowser;
var InviteButton = locate.elements.InviteButton;
var inviteFromSlack = locate.elements.inviteFromSlack;
var submittAfterProvidingInvitee = locate.elements.submittAfterProvidingInvitee;
var doneAfterProvidingInvitee = locate.elements.doneAfterProvidingInvitee;
var createChanel = locate.elements.createChannel;
var enterChanelName = locate.elements.provideChannelName;
var saveChannel = locate.elements.saveChannel;
var toogle = locate.elements.toogle;
var allNotificationsContainer = locate.elements.allNotificationsContainer;
var historyLoading = locate.elements.historyLoading;
var textOfLinkNotifcationAssignment = locate.elements.textOfLinkNotifcationAssignment;
var assignmentlinkNotifcationUser = locate.elements.assignmentlinkNotifcationUser;
var assignmentlinkNotifcationMessage = locate.elements.assignmentlinkNotifcationMessage;
var slackPromotionBanner = locate.elements.slackPromotionBanner;
var workspaceIcon = locate.elements.workspaceIcon;
var channelSettings = locate.elements.channelSettings;
var deleteChannel = locate.elements.deleteChannel;
var additionalOptions = locate.elements.additionalOptions;
var deleteChannel = locate.elements.deleteChannel;
var deleteChannelCheckbox = locate.elements.deleteChannelCheckbox;
var deleteButton = locate.elements.deleteButton;
var archiveChannel = locate.elements.archiveChannel;
var confirmArchiveAction = locate.elements.confirmArchiveAction;
var unarchive = locate.elements.unarchive;
var jumpTo = locate.elements.jumpTo;
var jumpToSearchField = locate.elements.jumpToSearchField;
var jumpToResults = locate.elements.jumpToResults;


var counter=0;
var drive = this.driver;
//input data
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var postedComment = input.displayedComment;
var timeoutWait = Number(input.timeout);
var shortwait = Number(input.shortwait);
var page = require('../framework/page.js');


function SlackPage (webdriver) {
page.call(this, webdriver, url);
By = webdriver.By;
}

SlackPage.prototype = Object.create(page.prototype);
SlackPage.prototype.constructor = SlackPage;


//Click create Workspace button
SlackPage.prototype.clickWorkspace= function()
{
	var drive = this.driver;
	this.driver.wait(this.until.elementIsVisible(drive.findElement({ className: createWorkspaceSlack }),timeoutWait)).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Create Workspace button is not present');
	})	
}
//Provide Email
SlackPage.prototype.provideEmail= function(emaill)
{
	this.driver.wait(this.until.elementLocated({ id: email }),timeoutWait).then(function(val){
		val.sendKeys(emaill);
	},function(err){
		 throw new Error('Email text for sending slack code is not present');
	})	
}
//Click confirm button
SlackPage.prototype.clickConfirm= function()
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ id: confirmButton }),timeoutWait).then(function(){
	drive.wait(until.elementIsEnabled(drive.findElement({ id: confirmButton }),timeoutWait)).then(function(val){
		val.click();
	})
	})
}
//Provide Code
SlackPage.prototype.provideCode= function(browser, slackCode)
{
	var slackCodee = slackCode.split('-');
	var countt=0,counter=0;
	var webdriver =require('selenium-webdriver');
	var drive = this.driver;
	drive.findElements({className: slackConfimationCode}).then(function(val){ 
		var valu = val.length + 1;
		for(var i=1; i<=valu; i++){
			let ii =i;
			drive.findElement({xpath: slackConfimationCodePart1+ii+']'}).getAttribute('class').then(function(value){
				if(value== slackConfimationCode){
					drive.findElements({xpath: slackConfimationCodePart1 + ii + slackConfimationCodePart2}).then(function(value){
						var count = value.length;
						for(var j=0; j<=count; j++){
							let jj =j;
							var divsion = Number(jj)+1;
							drive.sleep(1000);
							if(browser== 'chrome'){
							new webdriver.ActionSequence(drive).
							click(drive.findElement({xpath: slackConfimationCodePart1 + ii + slackConfimationCodePart3 + divsion + ']'})).
							sendKeys(slackCodee[countt].charAt(jj)).
							perform();

							}
							else if(browser== 'firefox'){

							drive.findElement({xpath: slackConfimationCodePart1 + ii + slackConfimationCodePart3 + divsion + ']'}).click().then(function(){},function(err){});
							drive.sleep(1000);
							drive.findElement({xpath: slackConfimationCodePart1 + ii + slackConfimationCodePart3 + divsion + ']'}).sendKeys(slackCodee[countt].charAt(jj)).then(function(){
								},function(err){});
							}
							}
						if(countt==1){

								drive.findElement({xpath: slackConfimationCodePart1 + countt + slackConfimationCodePart3 + '1]'}).click().then(function(){},function(err){});
								drive.sleep(1000);
								drive.findElement({xpath: slackConfimationCodePart1 + countt + slackConfimationCodePart3 + '1]'}).sendKeys(slackCodee[counter].charAt(counter)).then(function(){},function(err){});

							}
						countt++;
						
						
					})
				}
			})
		}
	})
}
//Provide full name fullNameSlack
SlackPage.prototype.provideFullName= function(userName)
{
	this.driver.wait(this.until.elementLocated({ id: fullNameSlack }),timeoutWait).then(function(val){
		val.sendKeys(userName);
	},function(err){
		 throw new Error('Full Name textbox while creating new slack team is not present');
	})
}

//set Password for creating new team
SlackPage.prototype.setPasswordForTeam= function(createPassword)
{
	this.driver.wait(this.until.elementLocated({ id: password}),timeoutWait).then(function(val){
		val.sendKeys(createPassword);
	},function(err){
		 throw new Error('Password textbox while creating new slack team is not present');
	})
}
//click 'What will your team use Slack for?' dropdown
SlackPage.prototype.selectValueFormUseOfSlack= function(teamUse) 
{
	
	var useOfSlackkTeamDropdown = locate.elements.useOfSlackTeamDropdown;
	var useOfSlackkTeamValue = locate.elements.useOfSlackTeamValue;
	var drive= this.driver;
	drive.findElements({className : useOfSlackkTeamDropdown}).then(function(value){
		var len = value.length;
		for(var i=1; i<=len; i++){
			let ii=i;
			drive.findElement({xpath : useOfSlackkTeamValue +ii + ']'}).getText().then(function(val){
				if(val== teamUse){
					drive.findElement({xpath : useOfSlackkTeamValue +ii + ']'}).click();
				}			
			})
		}
	});
}
//click skip tutorial while accepting slack invitation
SlackPage.prototype.clickSignIn= function()
{
	this.driver.wait(this.until.elementLocated({ css: slackSignIn }),timeoutWait).then(function(val){
		val.click().then(function(val){},function(err){});
	},function(err){})    
}
//set Password for creating new team 'What will your team use Slack for?'
SlackPage.prototype.clickteamUseSlackDropdown= function()
{
	this.driver.wait(this.until.elementLocated({ className: selectUseOfSlack }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Full Name textbox while creating new slack team is not present');
	})
}
//set team name
SlackPage.prototype.provideTeamName= function(team,cb)
{
	var today = new Date();
	var date = today.getDate();
	var num = Math.floor((Math.random() * 100) + 1);
	var month = today.getMonth();
	var teamName = team + "-" +date+ "-"+ num + "-" + month;
	this.driver.wait(this.until.elementLocated({ id: slackTeamName }),timeoutWait).then(function(val){
		val.sendKeys(teamName);
	},function(err){
		 throw new Error('Unable to provide team name');
	}) 
	cb(teamName);
}
//set team url 
SlackPage.prototype.provideSlackTeamUrl= function(urll)
{
	this.driver.wait(this.until.elementLocated({ id: slackTeamUrl }),timeoutWait).then(function(val){
		val.getAttribute('value').then(function(url){
			val.clear();
			val.sendKeys(urll);
		})
		
	})
}
//click i Agree button
SlackPage.prototype.clickAgree= function()
{
	var drive = this.driver;
	this.driver.wait(this.until.elementIsVisible(drive.findElement({ id: iAgree }),timeoutWait)).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Agree button is not present  ');
	})
}
//click skip for now button
SlackPage.prototype.clickSkipForNowButton= function()
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ id: skipForNowButton }),timeoutWait).then(function(value){
		drive.wait(until.elementIsVisible(drive.findElement({ id: skipForNowButton }),timeoutWait)).then(function(val){
		val.click();
	})
	},function(err){
		 throw new Error('skip for now button is not available ');
	})
}
//provide invitee email
SlackPage.prototype.provideInvteeEmail= function(inviteEmail)
{
	var invitees = inviteEmail.split(',');
	var totalInvitees = invitees.length;
	for(var i =1;i <=totalInvitees; i++){
		let ii= i;
		this.driver.wait(this.until.elementLocated({ xpath: invteeEmail + ii + invteeEmail2 }),timeoutWait).then(function(val){
			val.sendKeys(invitees[ii-1]);
		},function(err){
			 throw new Error('invite textbox is not available ');
		})
	}
}
//click 'X' of tutorial dialogue
SlackPage.prototype.clickXOfTutorial= function()
{
	this.driver.wait(this.until.elementLocated({ xpath: closeTutorial }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('X icon is not available ');
	})
}
//click skip tutoral 
SlackPage.prototype.clickSkipTutorial= function()
{
	this.driver.wait(this.until.elementLocated({ xpath: skipTutorial }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('skip tutorial is not available ');
	})
}
//click slack Menu
SlackPage.prototype.clickSlackMenu= function()
{
	this.driver.wait(this.until.elementLocated({ id: slackkMenu }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('skip tutorial option is not available ');
	})
}
//click log out
SlackPage.prototype.clickLogout= function()
{
	this.driver.wait(this.until.elementLocated({ id: logout }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('slack logout is not present ');
	})
}
//close all tabs
SlackPage.prototype.closeAllTabs= function()
{
	var drive= this.driver;
	var currentWindow = this.driver.getWindowHandle();
	this.driver.getAllWindowHandles().then(function(handles){
		var len = handles.length;
		for(var i=1; i<len; i++){
			let ii =i;
			
				 drive.switchTo().window(handles[ii]);
		            drive.close();
		
		}
		drive.switchTo().window(handles[0]);
	});
}
//Provide password to invite user 
SlackPage.prototype.setPasswordForInviteUser= function(invitePassword)
{
	this.driver.wait(this.until.elementLocated({ id: inviteUserPassword }),timeoutWait).then(function(val){
		val.sendKeys(invitePassword);
	},function(err){
		 throw new Error('unable to set password  for invitee user ');
	})
}
//click skip tutorial while accepting slack invitation
SlackPage.prototype.clickInviteeSkipTutorial= function()
{
	 var drive = this.driver;
	 var until = this.until;
	this.driver.wait(this.until.elementLocated({ xpath: skipTutorialsForInvitee }),timeoutWait).then(function(){
	drive.wait(until.elementIsVisible(drive.findElement({ xpath: skipTutorialsForInvitee }),timeoutWait)).then(function(val){
		val.click();
	})
	},function(err){
		 throw new Error('skip tutorial is not present');
	})
}

//Provide full name fullNameSlack
SlackPage.prototype.provideFullNameOfInvitedUser= function(userName)
{
	this.driver.wait(this.until.elementLocated({ id: invitedUserName }),timeoutWait).then(function(val){
		val.sendKeys(userName);
	},function(err){
		 throw new Error('full Name field is not present');
	})
}
//click sign in back button
SlackPage.prototype.clickSignBackIn= function()
{
	this.driver.wait(this.until.elementLocated({ css: slackSignBackIn }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('sign in back button for loging to slack again is not present');
	})
}
//click channel
SlackPage.prototype.clickchannel= function(channel)
{
	var drive = this.driver;
	this.driver.findElements({xpath: totalChannels}).then(function(val){
		var slackChannel = val.length;
		drive.findElements({xpath: totalChannels2}).then(function(value){
		var slackChannel1 = value.length;	
		var totalElments = slackChannel + slackChannel1 + 1;
		for(var i=1 ; i<=totalElments; i++){
			let ii =i;
			drive.findElement({xpath : selectSlackChannel +ii+selectSlackChanne2}).getText().then(function(text){
				if(channel == text){
					drive.findElement({xpath : selectSlackChannel + ii + selectSlackChanne2}).click();
				}
			},function(err){});
			
		}
			
		})
	});
	
}



//verify if notification link is sent to user in slack
SlackPage.prototype.isNotificationLinkPresent= function(cb)
{
	var drive = this.driver;
	this.driver.findElements({css: allNotifications}).then(function(val){
		var length = val.length;
		var lastelement = length+1;
		drive.findElement({xpath: linkNotifcation +lastelement+ linkNotifcation2}).getAttribute('href').then(function(val){
			if(val== null || val== ''){
				cb(null);
			}
		drive.findElement({xpath: linkNotifcation +lastelement+ textOfLinkNotifcation}).getText().then(function(val){
			cb(val);
			})
	},function(err){
		cb(null);
	});
	},function(err){
		cb(null);
		});
}

//click continue in browser link
SlackPage.prototype.clickContinueInBrowserLink= function()
{
	this.driver.wait(this.until.elementLocated({ id: continueInBrowser }),timeoutWait).then(function(val){
		val.click().then(function(val){},function(err){});
	},function(err){})
}
//click Notification Link
SlackPage.prototype.clickNotificationLink= function()
{	
    var drive = this.driver;
    this.driver.findElements({css: allNotifications}).then(function(val){ 
    	 drive.findElements({className: allNotificationsContainer}).then(function(containerVal){
    		 drive.findElements({className: historyLoading}).then(function(historyVal){
    			 var containerCount = containerVal.length;
    			 var historyContainer = historyVal.length;
    	 		 var length = val.length+containerCount+historyContainer;
        var lastelement = length;
        drive.findElement({xpath: linkNotifcation +lastelement+ linkNotifcation2}).getAttribute('href').then(function(val){
            if(val== null || val== ''){
               cb(false);
            }
        drive.findElement({xpath: linkNotifcation +lastelement+ textOfLinkNotifcation}).click();
        },function(err){
       
    });});
    });
    },function(err){
       
        });
}
//click Assignment Notification Link
SlackPage.prototype.clickAssignmentNotificationLink= function()
{	
    var drive = this.driver;
    this.driver.findElements({css: allNotifications}).then(function(val){ 
    	 drive.findElements({className: allNotificationsContainer}).then(function(containerVal){
    		 drive.findElements({className: historyLoading}).then(function(historyVal){
    			 var containerCount = containerVal.length;
    			 var historyContainer = historyVal.length;
    	 		 var length = val.length+containerCount+historyContainer;
        var lastelement = length;
        drive.findElement({xpath: linkNotifcation +lastelement+ textOfLinkNotifcationAssignment}).click();
        },function(err){
       
    });});
    },function(err){
       
        });
}
//click invite button
SlackPage.prototype.clickInviteButton= function()
{
	this.driver.wait(this.until.elementLocated({ xpath: InviteButton }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('sign in back button for loging to slack again is not present');
	})
}
//provide invitee after login to slack
SlackPage.prototype.inviteFromSlack= function(invitee)
{
	this.driver.wait(this.until.elementLocated({ name: inviteFromSlack }),timeoutWait).then(function(val){
		val.sendKeys(invitee);
	},function(err){
		 throw new Error('email textbox for sending invitation notification is not present');
	})
}
//click submit button while inviting other user
SlackPage.prototype.submitInvitation= function()
{
	this.driver.wait(this.until.elementLocated({ id : submittAfterProvidingInvitee }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('send invitation button is not present');
	})
}
//click done button while inviting other user
SlackPage.prototype.doneInvitation= function()
{
	var drive = this.driver;
	this.driver.wait(this.until.elementIsVisible(drive.findElement({ className: doneAfterProvidingInvitee }),timeoutWait)).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Done button while inviting user to slack team is not present');
	})
}

//click + button to add a channel
SlackPage.prototype.addChannelButton= function()
{
var drive =this.driver;
var until = this.until;
 this.driver.wait(this.until.elementLocated({ xpath : createChanel }),timeoutWait).then(function(){
	 drive.wait(until.elementIsVisible(drive.findElement({ xpath : createChanel }),timeoutWait)).then(function(){
	  drive.wait(until.elementIsEnabled(drive.findElement({ xpath : createChanel }),timeoutWait)).then(function(val){
		val.click();
	  })
	})
 },function(err){
	 throw new Error('Unable to add channel to slack team');
	})
}
//Provide name to untitled  Channel
SlackPage.prototype.provideChannelName= function(channel)
{
  //get todays date
  var today = new Date();
  var date = today.getDate();
  //generate random number
  var num = Math.floor((Math.random() * 100) + 1);
  channelName = channel+date+num;
  this.driver.wait(this.until.elementLocated({ id : enterChanelName }),timeoutWait).then(function(val){
		val.sendKeys(channel)
	},function(err){
	 throw new Error('Unable to provide name to untitled channel');
	})
    
}
//click save Channel button
SlackPage.prototype.saveChannel= function()
{
  this.driver.wait(this.until.elementLocated({ id : saveChannel }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to save created channel');
	})
}
//click toogle buton
SlackPage.prototype.toogleButton= function()
{
  this.driver.wait(this.until.elementLocated({className : toogle }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to change channel type while channel creation ');
	})
}
//verify if assignment link is sent to user in slack
SlackPage.prototype.isNotificationMessageLinkPresent= function(user, messageLink, cb)
{
	var drive = this.driver;
	this.driver.findElements({css: allNotifications}).then(function(val){
		drive.findElements({className: allNotificationsContainer}).then(function(containerVal){
   		 drive.findElements({className: historyLoading}).then(function(historyVal){
   			 var containerCount = containerVal.length;
   			 var historyContainer = historyVal.length;
   	 		 var length = val.length+containerCount+historyContainer;  	
		var lastelement = length;
		drive.findElement({xpath: linkNotifcation +lastelement+ assignmentlinkNotifcationUser}).getText().then(function(val){
			drive.findElement({xpath: linkNotifcation +lastelement+ assignmentlinkNotifcationMessage}).getText().then(function(value){
				if(value ==  '@'+ user+ messageLink){
					cb(true);
				}
				else{
					cb(false);
				}
				
			})
			});});});
	},function(err){
		cb(null);
	});
	
}
//wait until slack Sign Back In buttpn is displayed
SlackPage.prototype.waitUntillSlackUserIsSignOut= function()
{
	this.driver.wait(this.until.elementLocated({ css: slackSignBackIn }),timeoutWait).then(function(val){

	},function(err){})
}
//wait until usr is logged into slack  
SlackPage.prototype.waitUntillSlackUserIsLoggedIn= function()
{
	var drive  = this.driver;
	var until =this.until;
	this.driver.wait(this.until.elementLocated({ className : "team_name_container top_margin" }),timeoutWait).then(function(val){
		drive.wait(until.elementIsVisible(drive.findElement({ className : "team_name_container top_margin" }),timeoutWait)).then(function(val){
		})
	},function(err){
	 throw new Error('Unable to logn to slack successfully');
	})
}
//click channel settings icon
SlackPage.prototype.clickChannelSettingsIcon= function()
{
	this.driver.wait(this.until.elementLocated({ id : channelSettings }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to logn to slack successfully');
	})
}
//click additional options
SlackPage.prototype.clickAdditionalOptions= function()
{
	this.driver.wait(this.until.elementLocated({ partialLinkText : additionalOptions }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to login to slack successfully');
	})
}
//Select delete channel option from additional options
SlackPage.prototype.clickdeleteChannel= function()
{
	this.driver.wait(this.until.elementLocated({ xpath : deleteChannel }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to delete slack channel');
	})
}
//click delete channel check box
SlackPage.prototype.clickDeleteChannelCheckbox= function()
{
	this.driver.wait(this.until.elementLocated({ xpath : deleteChannelCheckbox }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to check delete permanently channel option');
	})
}
//click delete button
SlackPage.prototype.clickDeleteButton= function()
{
	this.driver.wait(this.until.elementLocated({ xpath : deleteButton }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to check delete permanently channel option');
	})
}
//wait until slack logout is available
SlackPage.prototype.waitUntilLogoutIsPresent= function()
{
	var drive = this.driver;
	var until =this.until;
	this.driver.wait(this.until.elementLocated({ id: logout }),shortwait).then(function(val){
	},function(err){
		drive.wait(until.elementLocated({ id: slackkMenu }),shortwait).then(function(val){
			val.click();
			val.click();
			var File = require('../pages/slackMochaPage.js');
			var file = new File(drive);	
			file.waitUntilLogoutIsPresent();			
		},function(err){})
	})
}
//wait until user is present in paste channel
SlackPage.prototype.isPasteClickable= function()
{
	var drive = this.driver;
	this.driver.findElements({xpath: totalChannels}).then(function(val){
		var slackChannel = val.length;
		drive.findElements({xpath: totalChannels2}).then(function(value){
		var slackChannel1 = value.length;	
		var totalElments = slackChannel + slackChannel1 + 1;
			drive.findElement({xpath : selectSlackChannel +totalElments+']//span/span'}).getText().then(function(text){
				drive.findElement({xpath : selectSlackChannel +totalElments+']//a//i'}).getAttribute('title').then(function(title){
				if( text == 'Paste' && title =='Active' ){
					var File = require('../pages/slackMochaPage.js');
					var file = new File(drive);	
					file.clickChannel('Paste');

				}
				else{
					var File = require('../pages/slackMochaPage.js');
					var file = new File(drive);	
					file.isPasteClickable();
					
					}
				})
			},function(err){});
		})
	});
	
}
//click archive channel option
SlackPage.prototype.clickArchiveChannel= function()
{
	this.driver.wait(this.until.elementLocated({ xpath : archiveChannel }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to archive slack channel');
	})
}
//confirm archive action
SlackPage.prototype.clickYesArchiveTheChannelButton= function()
{
	this.driver.wait(this.until.elementLocated({ xpath : confirmArchiveAction }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to confirm slack channel archive action');
	})
}
//unarchive the channel
SlackPage.prototype.clickUnarchiveChannel= function()
{
	this.driver.wait(this.until.elementLocated({ partialLinkText : unarchive }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to unarchive slack channel');
	})
}
//click Jump to
SlackPage.prototype.clickJumpTO= function()
{
	this.driver.wait(this.until.elementLocated({ xpath : jumpTo }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to click jump to');
	})
}
//provide value in Jump to search field
SlackPage.prototype.provideChanneInJumpTOSearchField= function(channel)
{
	this.driver.wait(this.until.elementLocated({ xpath : jumpToSearchField }),timeoutWait).then(function(val){
		val.sendKeys(channel);
	},function(err){
	 throw new Error('Unable to provide channel in jumpto search field');
	})
}
//click Jump to results
SlackPage.prototype.clickJumpToResults= function()
{
	this.driver.executeScript("document.querySelector('" +jumpToResults + "').click()");
}
//is additional option is available
SlackPage.prototype.isAdditionalOptionsPresent= function(cb)
{
	this.driver.wait(this.until.elementLocated({ partialLinkText : additionalOptions }),shortwait).then(function(val){
		cb(true);
	},function(err){
	cb(false);
	})
}

module.exports = SlackPage;