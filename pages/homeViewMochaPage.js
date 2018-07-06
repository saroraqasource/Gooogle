/**
Created By QA Source
 */


var assert = require('assert');
//locators
var locate = require ('../locator.js'); 
var channel = locate.elements.channels;
var channel2 = locate.elements.channels2;
var createNewDeck = locate.elements.createDeck;
var allChannel = locate.elements.allChannels;
var decks = locate.elements.allDeck;
var upgradeTeamDialogue = locate.elements.upgradeDialogue;
var upgradeTeamMessage = locate.elements.upgradeMessage;
var teamSettings = locate.elements.teamSetting;
var titleOfAllDecks = locate.elements.titleOfAllDecks;
var titleOfAllDecks2 = locate.elements.titleOfAllDecks2;
var inviteTeam= locate.elements.inviteTeam;
var sendInvitation = locate.elements.sendInvitation;
var inviteChannel = locate.elements.inviteChannel;
var channelsCategorization = locate.elements.channelsCategorization;
var allchannelsInHomeView = locate.elements.allchannelsInHomeView;
var rectangularBraces = locate.elements.rectangularBraces;
var sortingAToZ = locate.elements.sortingAToZ;
var sortingLastEdited = locate.elements.sortingLastEdited;
var sortingLastCreated = locate.elements.sortingLastCreated;
var thumbnail = locate.elements.thumbnail;
var textOfFirstThumbnail = locate.elements.textOfFirstThumbnail;
var decksLoad = locate.elements.decksLoad;
var loadingAfterSignIn = locate.elements.loadingAfterSignIn;
var placeholderTextOfChannels = locate.elements.placeholderTextOfChannels;
var saving = locate.elements.saving;
var switchTeam = locate.elements.switchTeam;
var differentTeams = locate.elements.differentTeams;
var teamNameFromSwitchTeam = locate.elements. teamNameFromSwitchTeam;
var teamNameFromSwitchTeam1 = locate.elements.teamNameFromSwitchTeam1;
var teamDivison = locate.elements.teamDivison;
var moreIcon = locate.elements.moreIcon;
var supportArticles = locate.elements.supportArticles;
var pasteMobileApp = locate.elements.pasteMobileApp;
var termsOfService = locate.elements.termsOfService;
var intercom = locate.elements.intercom;
var questionsAndFeedback = locate.elements.questionsAndFeedback;
var pasteSupportLink = locate.elements.pasteSupportLink;
var pasteMobileAppPage = locate.elements.pasteMobileAppPage;
var termsOfServicesPage = locate.elements.termsOfServicesPage;
var mediaOfFirstThumbnail = locate.elements.mediaOfFirstThumbnail;
var mediaAssetThumbnailUpload = locate.elements.mediaAssetThumbnailUpload;
var channelOfDeck = locate.elements.channelOfDeck;
var profileIconFromUserBubble = locate.elements.profileIconFromUserBubble;
var exitpopovers = locate.elements.exitpopovers;
var xpath3, count=0;

//input
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var timeoutWait = Number(input.timeout);
var shortwait = Number(input.shortwait);

var page = require('../framework/page.js');
function HomeViewPage (webdriver) {
	page.call(this, webdriver, url);
}

HomeViewPage.prototype = Object.create(page.prototype);
HomeViewPage.prototype.constructor = HomeViewPage;

//Add Deck
HomeViewPage.prototype.addNewDeck= function() 
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({ css: createNewDeck }),timeoutWait).then(function(val){
		val.click(); 
		//drive.sleep(1000);
	},function(err){
		 throw new Error('Unable to add new deck in team.');
	})
}
//Refresh Page
HomeViewPage.prototype.refreshPage= function() 
{
	this.driver.navigate().refresh();
}

//Select channel
HomeViewPage.prototype.clickChannel2= function(channelName)
{ 
	var x=this.driver;
	this.driver.findElements({ xpath : allChannel}).then(function(elements_arr){
		var value = elements_arr.length + 2;
		var count=0;
		for(var qq=1; qq<=value ;qq++)
		{
			let q=qq;
			var xpath2 = channel + q + rectangularBraces;
			x.findElement({ xpath: xpath2 }).then(function(val){
				val.getAttribute("innerHTML").then(function(text){
					if(text.indexOf(channelName)!==-1){ // text.includes(channelName) text.search(channelName)>=0 
						xpath3 = channel + q +channel2;
						val.click();
						return;
					}
					if(text.includes(channelName)){ //'Private to Me'
						val.click();
					}
				})

			},function(err){})
		}
	},function(err){})

}
//Click respective deck from Home View
HomeViewPage.prototype.clickNthDeck= function(deck)
{
	var a=0,count=0;
	var promise = require('selenium-webdriver').promise;
	var a=0,count=0;
	var pendingElements = this.driver.findElements({xpath: decks}).then(function (elements) {

		var pendingHtml = elements.map(function (elem) {

			var c =elem.getText().then(function(te)
					{
				if(te==deck)
				{
					elem.click();
					count ++;
				}

				a++;
				if(count==1)
				{
					count=0;		
				}
					},function(err){});
		},function(err){});
	},function(err){});	
	this.driver.sleep(2000);	
}

//verify if decks exists

HomeViewPage.prototype.isDeckPresent= function(deck, cb)
{	
	var counter=0;
	var drive = this.driver;
	var until = this.until;
	this.driver.findElements({xpath: decks}).then(function (elements) {
		var len = elements.length;
		for(var i=1; i<=len; i++){
			let ii = i;
			drive.wait(until.elementLocated({ xpath : titleOfAllDecks +ii+ titleOfAllDecks2 }),timeoutWait).then(function(element){
				element.getText().then(function(val){
				if(val== deck){
					count++;
					cb(true);
				}else
				{
					counter++;
				}
				if(counter==len){
					cb(false);
					 //throw new Error("Deck is not present in Home View");
				}
			},function(err){});
			},function(err){});
		}
	},function(err){});
}


//is Upgrade dialog present
HomeViewPage.prototype.isUpgradeModalPresent= function(cb) 
{
	this.driver.wait(this.until.elementLocated({  xpath: upgradeTeamDialogue}),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);

	});
}
//is message related to upgrade team is available
HomeViewPage.prototype.isUpgradeMessagePresent= function(text, cb) 
{
	this.driver.wait(this.until.elementLocated({  xpath: upgradeTeamMessage}),timeoutWait).then(function(val){
		val.getText().then(function(val){			
			if(val==text){
				cb(true);
			}
			else{
				cb(false);
			}
		});
	})
}
//click team Settings
HomeViewPage.prototype.clickTeamSettings= function() 
{
	this.driver.wait(this.until.elementLocated({ css: teamSettings }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click team settings option from user bubble');
	})
}
//Click Invite Team Button
HomeViewPage.prototype.clickInviteTeamButton= function() 
{
	this.driver.wait(this.until.elementLocated({ css : inviteTeam }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Invite team button is not present');
	})
}
//Click Send Invite Button
HomeViewPage.prototype.clickSendInvitesButton= function() 
{
	this.driver.wait(this.until.elementLocated({ css : sendInvitation }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('send button in Invite team popover is not present');
	})
}
//get channel in which invite is being send
HomeViewPage.prototype.getChannel= function(cb) 
{
	this.driver.wait(this.until.elementLocated({ css : inviteChannel}),timeoutWait).then(function(element){
		element.getText().then(function(val){
			channelName = val.split('#');
			cb(channelName[1]);
		})
	},function(err){
		 throw new Error('send button in Invite team popover in not present');
	})
}
//get total no. of decks
HomeViewPage.prototype.getDeckCount= function(cb) 
{
		this.driver.findElements({xpath : decks}).then(function(val){
			var count = val.length;
			cb(count);
	});
}

//get public channel
HomeViewPage.prototype.getPublicChannel= function(cb)
{ 
	var publicChannels = new Array();
	var drive=this.driver;
	this.driver.findElements({ xpath : allChannel}).then(function(elements_arr){
		var value = elements_arr.length + 3;
		var count=0;
		for(var qq=1; qq<=value ;qq++)
		{
			let q=qq;			
			var xpath2 = channel + q +channelsCategorization; //channel2
			drive.findElement({ xpath: xpath2 }).then(function(val){
				val.getAttribute("transform").then(function(text){
					if(text == 'translate(3.4, 2)'){
						drive.findElement({ xpath: channel + q + channel2 }).then(function(val){
							val.getText().then(function(val){
								publicChannels.push(val);
							})
							if( q == value){
								cb(publicChannels);
							}
						});
					}								
				},function(err){
				})								
			},function(err){
				if( q == value){
					cb(publicChannels);
				}
			})
		}
	})	
}

//get private channel
HomeViewPage.prototype.getPrivateChannel= function(cb)
{ 
	var publicChannels = new Array();
	var drive=this.driver;
	this.driver.findElements({ xpath : allChannel}).then(function(elements_arr){
		var value = elements_arr.length + 3;
		var count=0;
		for(var qq=1; qq<=value ;qq++)
		{
			let q=qq;			
			var xpath2 = channel + q +channelsCategorization; //channel2
			drive.findElement({ xpath: xpath2 }).then(function(val){
				val.getAttribute("transform").then(function(text){									
					if(text == 'translate(3, 2)'){
						drive.findElement({ xpath: channel + q + channel2 }).then(function(val){
							val.getText().then(function(val){
								publicChannels.push(val);
							})
							if( q == value){
								cb(publicChannels);
							}
						});
					}
				},function(err){
				})							
			},function(err){
				if( q == value){
					cb(publicChannels);
				}
			})
		}
	})	
}
//is channel present
HomeViewPage.prototype.isChannelPresent= function(channelName,cb)
{ 
	this.driver.findElement({ xpath : allchannelsInHomeView}).getAttribute("innerHTML").then(function(value){
		if(value.includes(channelName)){
			cb(true);
		}
		else
		{
			cb(false);
		}
	})

}
//click A to Z sorting option
HomeViewPage.prototype.clickAToZSortingOption= function()
{ 
	this.driver.wait(this.until.elementLocated({ xpath : sortingAToZ }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click A to z sorting link in home view');
	})
}
//click Last Created sorting option
HomeViewPage.prototype.clickLastCreatedSortingOption= function()
{ 
	this.driver.wait(this.until.elementLocated({ xpath : sortingLastCreated }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click Last created sorting link in home view');
	})
}
//click Last Edited sorting option
HomeViewPage.prototype.clickLastEditedSortingOption= function()
{ 

	this.driver.wait(this.until.elementLocated({ xpath : sortingLastEdited }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click Last edited sorting link in home view');
	})
}
//get all decks in home view
HomeViewPage.prototype.getDecksInHomeView= function(cb)
{ 
	var decksArray = new Array();
	var drive = this.driver;
	this.driver.findElements({xpath: decks}).then(function (elements) {
		var len = elements.length;
		for(var i=1; i<=len; i++){
			let ii = i;
			drive.findElement({xpath : titleOfAllDecks +ii+ titleOfAllDecks2}).then(function(val){
				val.getText().then(function(deckVal){
					decksArray.push(deckVal);	
					if(ii== len){
						cb(decksArray);
					}				
				})

			},function(err){});		
		}
	},function(err){});	
}
//is deck sorted according to A to Z sorting
HomeViewPage.prototype.isDeckSortedByAlphabaticalOrder= function(allDecks,cb)
{ 
	var counter=0;
	var allDecksOfHomeView = allDecks;
	var copyOfAllDecks = allDecksOfHomeView.slice(0, allDecksOfHomeView.length);
	var sortedArray = copyOfAllDecks.sort();
	var totalNoOfDecks = sortedArray.length;
	for(var i=0 ; i< totalNoOfDecks; i++ ){
		var ii = i;
		if(allDecksOfHomeView[ii] == sortedArray[ii]){
			counter++;
		}
		else
		{
			cb(false);
		}
		if(ii == (Number(totalNoOfDecks) -1)  && counter== ii){
			cb(true);
		}
	}

}

//is deck sorted according to last created deck and last edited deck
HomeViewPage.prototype.isDeckSorted= function(deck,cb)
{ 
	var decksArray = new Array();
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({ xpath : titleOfAllDecks +'1' + titleOfAllDecks2}),timeoutWait).then(function(val){
		val.getText().then(function(deckVal){
			if(deckVal == deck){
				cb(true);
			}
			else{
				cb(false);
			}
		},function(err){});		
	},function(err){});	
}

//is thumbnails available for first three slide
HomeViewPage.prototype.isThumbnailAvailable= function(cb)
{ 
	var drive = this.driver;
	var counter =0 ;
	for(var i= 1; i<=3 ;i++){
		var ii = i;
		this.driver.wait(this.until.elementLocated({ xpath : titleOfAllDecks + ii + thumbnail }),timeoutWait).then(function(val){		
			counter ++ ;
		},function(err){
			cb(false)
		});	
		if(counter == 3){
			cb(true);		
		}
	}
}
//is thumbnail available except for first three decks
HomeViewPage.prototype.isThumbnailAvailableExceptForFirstThreeDecks= function(cb)
{ 
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({ xpath : titleOfAllDecks + '4' + thumbnail }),timeoutWait).then(function(val){	
				cb(true);		
		},function(err){
			cb(false)
		});			
}

//navigate to first deck  
HomeViewPage.prototype.navigateToFirstDeck= function()
{ 
	this.driver.wait(this.until.elementLocated({ xpath : titleOfAllDecks + '1' + rectangularBraces }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to open deck from home view');
	})
}
//get text of thumbnail
HomeViewPage.prototype.getTextOfThumbnail= function(cb)
{ 
	this.driver.wait(this.until.elementLocated({ xpath : textOfFirstThumbnail }),timeoutWait).then(function(element){
		element.getText().then(function(value){
			cb(value);
		})
	},function(err){
		 throw new Error('Thumbnail is not present');
	})
}
//wait untill decks load
HomeViewPage.prototype.waitForDecksToLoad = function()
{
	var drive = this.driver;	
	var until = this.until;
	this.driver.wait(this.until.elementLocated({xpath: decksLoad}),timeoutWait).then(function(val){	
		/*drive.wait(until.elementLocated({xpath: '//*[@class="ReactVirtualized__Grid__innerScrollContainer"]/div[1]//*[contains(@style,"opacity: 1")]'}),timeoutWait).then(function(val){
		},function(err){console.log('zzzz');});		*/
		},function(err){});		
}
//wait until user is logged in  
HomeViewPage.prototype.waitForSuccessfullLogin = function()
{
		this.driver.wait(this.until.elementLocated({xpath: loadingAfterSignIn}),timeoutWait).then(function(val){
		});		
}
//retruns placeholder text exists in empty channel
HomeViewPage.prototype.returnPlaceholderText = function(cb)
{
		this.driver.wait(this.until.elementLocated({xpath: placeholderTextOfChannels}),timeoutWait).then(function(val){
			val.getText().then(function(text){
				cb(text);
			})
		},function(err){
			cb(false)
		});		
}
//wait for media file to upload
HomeViewPage.prototype.waitForFilesToUpload = function()
{
	var drive = this.driver;	
	this.driver.wait(this.until.elementLocated({xpath: saving}),shortwait).then(function(val){
			var Home = require('../pages/homeViewMochaPage.js');
			var home = new Home(drive);
			home.waitForFilesToUpload();
		},function(err){			
		});		
}
//switch team 
HomeViewPage.prototype.switchTeam = function()
{
		this.driver.wait(this.until.elementLocated({linkText: switchTeam}),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Unable to switch team');
		})		
}
//select team
HomeViewPage.prototype.selectTeam = function(team)
{
	var drive = this.driver;
	this.driver.findElements({xpath : differentTeams}).then(function(val){
		var totalTeams = val.length;
		for(var i=1; i<=totalTeams; i++){
			var ii = i;
			drive.findElement({xpath : teamNameFromSwitchTeam  + ii + teamNameFromSwitchTeam1}).then(function(val){
				val.getAttribute("innerHTML").then(function(text){
				if(team == text){
					drive.executeScript("arguments[0].scrollIntoView();", val);
					drive.sleep(2000);
					val.click().then(function(val){
					});
				}
				});
			},function(err){});
		}
	});
}
//wait until switch team page is loaded 
HomeViewPage.prototype.waitUntilSwitchTeamPageIsLoaded = function()
{
		this.driver.wait(this.until.elementLocated({xpath: teamDivison}),timeoutWait).then(function(val){
		});		
}
//click  more icon 
HomeViewPage.prototype.clickMoreIcon = function()
{
		this.driver.wait(this.until.elementLocated({css: moreIcon}),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('? icon is not present');
		})	
}
//click  support article
HomeViewPage.prototype.clickSupportArticles = function()
{
		this.driver.wait(this.until.elementLocated({xpath: supportArticles}),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('support article option is not present');
		})		
}
//click  paste Mobile App
HomeViewPage.prototype.clickPasteMobileApp= function()
{
		this.driver.wait(this.until.elementLocated({xpath: pasteMobileApp}),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Paste Mobile App option is not present');
		})	
}
//click  terms Of Service
HomeViewPage.prototype.clickTermsOfService = function()
{	
		this.driver.wait(this.until.elementLocated({xpath: termsOfService}),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Terms of service option is not present');
		})	
}
//get title of tabs
HomeViewPage.prototype.getTitle = function(cb)
{	
	this.driver.getTitle().then(function(title){
			cb(title);
		})
}
//get current url
HomeViewPage.prototype.getCurrentUrl = function(cb)
{
		this.driver.getCurrentUrl().then(function(url){
			cb(url);
		})
}
//is intercom available
HomeViewPage.prototype.isIntercomAvailable = function(cb)
{	
		this.driver.wait(this.until.elementLocated({xpath: intercom}),timeoutWait).then(function(val){
			cb(true);
		},function(err){
			cb(false);
		});
}
//click  questions And Feedback
HomeViewPage.prototype.clickQuestionsAndFeedback = function()
{	
		this.driver.wait(this.until.elementLocated({xpath: questionsAndFeedback}),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Question and Feedback option is not present');
		})	
}
//wait until paste  support page is loaded
HomeViewPage.prototype.waitUntillPasteSupportLinkLoaded = function()
{	
		this.driver.wait(this.until.elementLocated({partialLinkText: pasteSupportLink}),timeoutWait).then(function(val){			
		},function(err){
			 throw new Error('Support page is not opening');
		})	
}
//wait until paste mobile page is loaded
HomeViewPage.prototype.waitUntillPasteMobilePageLoaded = function()
{	
		this.driver.wait(this.until.elementLocated({xpath: pasteMobileAppPage}),timeoutWait).then(function(val){			
		},function(err){
			 throw new Error('Paste mobile page is not opening');
		})	
}
//wait until terms of service page is loaded
HomeViewPage.prototype.waitUntillTermsOfServicePageIsLoaded = function()
{	
		this.driver.wait(this.until.elementLocated({xpath: termsOfServicesPage}),timeoutWait).then(function(val){			
		},function(err){
			 throw new Error('Terms of service page is not opening');
		})	
}
//is media thumbnail present
HomeViewPage.prototype.isMediaThumbnailAvailable= function(cb)
{ 
	this.driver.wait(this.until.elementLocated({ xpath : mediaOfFirstThumbnail }),timeoutWait).then(function(element){	
			cb(true);	
	},function(err){
		 throw new Error('Media Thumbnail is not present');
	})
}
//is media available in thumbnail
HomeViewPage.prototype.isMediaAssetUploadedInThumbnail = function(cb)
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ xpath: mediaAssetThumbnailUpload}),shortwait).then(function(val){
		cb(true);
	},function(err){
			cb(false);
		})
}
//get channel in which deck is created
HomeViewPage.prototype.getChannelInWhichDeckIsCreated= function(deck, cb)
{	
	var counter=0;
	var drive = this.driver;
	var until = this.until;
	this.driver.findElements({xpath: decks}).then(function (elements) {
		var len = elements.length;
		for(var i=1; i<=len; i++){
			let ii = i;
			drive.wait(until.elementLocated({ xpath : titleOfAllDecks +ii+ titleOfAllDecks2 }),timeoutWait).then(function(element){
				element.getText().then(function(val){
				if(val== deck){
					count++;
					drive.wait(until.elementLocated({ xpath : titleOfAllDecks +ii+ channelOfDeck }),timeoutWait).then(function(channel){
						channel.getText().then(function(val){
							cb(val);
						})
					})
				}else
				{
					counter++;
				}
				if(counter==len){
					cb(false);
				}
			},function(err){});
			},function(err){});
		}
	},function(err){});
}

//Click Invite Team Button
HomeViewPage.prototype.hoverInviteTeamButton= function() 
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({ css : inviteTeam }),timeoutWait).then(function(val){
		var mouseOverScript = "if(document.createEvent){var evObj = document.createEvent('MouseEvents');evObj.initEvent('mouseover', true, false); arguments[0].dispatchEvent(evObj);} else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";
		drive.executeScript(mouseOverScript,val);	
		
	},function(err){
		 throw new Error('Invite team button is not present');
	})
}
//get profile icon available on user bubble
HomeViewPage.prototype.getProfileIconFromUserBubble= function(cb)
{
		this.driver.wait(this.until.elementLocated({ xpath: profileIconFromUserBubble }),timeoutWait).then(function(element){
			element.getAttribute('src').then(function(val){
				cb(val);
			}); 	
		},function(err){
			 throw new Error('Unable to get profile icon from user bubble');
		})
}
// get data from Paste Mobile App Help Page
HomeViewPage.prototype.getPasteMobileHelpPageData= function(dataFromPage, cb)
{
		this.driver.wait(this.until.elementLocated({ xpath: exitpopovers }),timeoutWait).then(function(element){
			element.getText().then(function(text){
				if(text.includes(dataFromPage)){
					cb(true);
				}
				else{
					cb(false);
				}
			}); 	
		},function(err){
			 throw new Error('Unable to get data from PAste Mobile App Help Page  ');
		})
}
module.exports = HomeViewPage;

