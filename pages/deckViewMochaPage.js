/**
Created By QA Source
 */
//locators
var locate = require ('../locator.js'); 

var oneTimeAddSlideButton = locate.elements.deckAddSlide;
var provideDeckName = locate.elements.deckName;
var channelNameInDeck = locate.elements.channelInDeck;
var GoBackToHomeView = locate.elements.GoToHomeView;
var availableSlide = locate.elements.slide;
var totalSlide = locate.elements.totalSlides;
var textSlidePresence = locate.elements.verifyTextSlide;
var textSlidePresence2 = locate.elements.verifyTextSlide2;
var addSlide = locate.elements.addSlideAtAnyLocation;
var moreIcon = locate.elements.more;
var deleteDeckOption = locate.elements.deleteDeck;
var deleteDeck = locate.elements.confirmDelete;
var moveUI = locate.elements.moveDeck;
var channelsOfMoveUI = locate.elements.channelsOfMoveUI;
var selectChannelFromMoveUI = locate.elements.channelSelectionFromMoveUI;
var navigateToFirstSlide = locate.elements.openFirstSlide;
var duplicateDeckOption = locate.elements.duplicateDeck;
var shareButton = locate.elements.share;
var requireSignInCheckBox = locate.elements.requireSignIn;
var copyLink = locate.elements.copyTextBox;
var deckNameForSignOutUser= locate.elements.deckNameSignOutUser;
var slideAssignment = locate.elements.slideAssignmentButton;
var pageNoInDeck = locate.elements.pageNoInDeck;
var arrowIcon = locate.elements.arrow;
var send = locate.elements.sendButton2;
var requireSign = locate.elements.checkboxSignIn;
var useOfChannelNameDropdown = locate.elements.channelUserDropdown;
var useOfChanneNameValue = locate.elements.channelUserValue;
var channelUserValue1 = locate.elements.channelUserValue1;
var quoteBracket = locate.elements.emojiReaction3;
var backgroundColorFromDeck = locate.elements.backgroundColorFromDeck;
var channelsInMoveUi = locate.elements.channelsInMoveUi;
var channelName = locate.elements.channelName;
var channelsInMoveUi1 = locate.elements.channelsInMoveUi1;
var channelsInMoveUi2 = locate.elements.channelsInMoveUi2;
var slideContentFromDeck = locate.elements.slideContentFromDeckView;
var addSlideAtAnyLocation = locate.elements.addSlideAtAnyLocation;
var emojiIconDeck = locate.elements.emojiIconDeck;
var commentIconDeck = locate.elements.commentIconInDeck;
var assignmentIcon  = locate.elements.assignmentIcon ;
var thumbsUpemojiIconDeck = locate.elements.ThumbsUpemojiIconDeck;
var moreIconInDeck = locate.elements.moreIconInDeck;
var pageNumberInDeck = locate.elements.pageNumberInDeck;
var deleteSlideFromDeckView = locate.elements.deleteSlideFromDeckView;
var provideCommentInDeck = locate.elements.provideCommentInDeck ;
var enterCommentInDeck = locate.elements.enterCommentInDeck;
var totalcommentsInDeck = locate.elements.totalcommentsInDeck;
var lastCommentInDeck = locate.elements.lastCommentInDeck;
var lastCommentInDeck1 = locate.elements.lastCommentInDeck1;
var copyButton = locate.elements.copyButton;
var provideChannelNameInDropdown = locate.elements.provideChannelNameInDropdown;
var listOfChannel = locate.elements.listOfChannel;
var useOfChanneNameValue = locate.elements.channelUserValue;
var quoteBracket = locate.elements.emojiReaction3;
var channelSelectionFromShareDropDown = locate.elements.channelSelectionFromShareDropDown;
var addSlideIconOnGrid = locate.elements.addSlideIconOnGrid;
var addSLideFromMoreIcon = locate.elements.addSLideFromMoreIcon;
var iconsInDeckMoreOption = locate.elements.iconsInDeckMoreOption;
var duplicateFromSlide = locate.elements.duplicateFromSlide;
var cancelDeckDeltetion = locate.elements.cancelDeckDeltetion;
var slideContentForBlankSlideInDeckView = locate.elements.slideContentForBlankSlideInDeckView;
var plusPlaceholderEmptySlide = locate.elements.plusPlaceholderEmptySlide;
var hoverInDeckView = locate.elements.hoverInDeckView;
var rectangularBraces = locate.elements.rectangularBraces;
var commentCountInDeckView = locate.elements.commentCountInDeckView;
var profileIconFromUserDetail = locate.elements.profileIconFromUserDetail;
var userNameFromUserDetail = locate.elements.userNameFromUserDetail;
var viewingStatusFromUserDetail = locate.elements.viewingStatusFromUserDetail;
var userDetail = locate.elements.userDetail;
var totalContributors = locate.elements.totalContributors;
var getContributorIcon = locate.elements.getContributorIcon;
var getContributorIcon1 = locate.elements.getContributorIcon1;
var exportDeckAsPdf = locate.elements.exportDeckAsPdf;
var embedDeck = locate.elements.embedDeck;
var spanTag = locate.elements.spanTag;

var deckName, totalTextSlides, textOfSlide;
var counter =0 ;
//input
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var timeoutWait = Number(input.timeout);
var pathInInsertIcon = input.pathInInsertIcon;
var pathInDuplicateIcon = input.pathInDuplicateIcon;
var pathInDeleteIcon = input.pathInDeleteIcon;


var page = require('../framework/page.js');

function DeckViewPage (webdriver) {
	page.call(this, webdriver, url);
	By = webdriver.By;
}

DeckViewPage.prototype = Object.create(page.prototype);
DeckViewPage.prototype.constructor = DeckViewPage;



//get Channel in which user is creating deck
DeckViewPage.prototype.getChannelFromDeck= function(channel, cb)
{
	this.driver.wait(this.until.elementLocated({ xpath : channelNameInDeck }),timeoutWait).then(function(val){
		val.getText().then(function(value){ 
			if(value.includes(channel)){
				cb(true);	
			}		
			else{
				cb(false);
			}
		})
	},function(err){
		cb(false);
	});	
}

///Provide name to untittled  deck
DeckViewPage.prototype.provideDeckName= function(deck, cb) 
{
	var today = new Date();
	var date = today.getDate();
	var testName='Untitled ';
	var num = Math.floor((Math.random() * 100) + 1);
	var randomNum = Math.floor((Math.random() * 1000) + 1);
	deckName = deck+ " " +randomNum + " "+num;
	var drive = this.driver;
	var until = this.until;
	drive.sleep(2000);
	this.driver.wait(this.until.elementLocated({ css : provideDeckName }),timeoutWait).then(function(val){
		val.sendKeys(deckName);
		for(var i =0; i< 30; i++){
			var ii =i ;
			drive.getTitle().then(function(title){			
				if(title.includes('Untitled')){
					console.log('entered');
					drive.sleep(500);
				}			
			})
		}
		drive.getTitle().then(function(title){	
			if(title.includes('Untitled')){	
				var Home = require('../pages/homeViewMochaPage.js');
				var Deckk = require('../pages/deckViewMochaPage.js');
				var homeObject = new Home(drive);
				var deckObject = new Deckk(drive);
				deckObject.clickMoreIcon();
				deckObject.clickDeleteDeck();
				deckObject.deleteConfirm();	
				homeObject.waitForDecksToLoad();
				homeObject.refreshPage();				
				homeObject.waitForDecksToLoad();			
				homeObject.addNewDeck();		
				drive.wait(until.elementLocated({ css : provideDeckName }),timeoutWait).then(function(val){					
					val.click();
					var robot = require('robotjs');
					robot.typeString(deckName);
				})
			}
		});
		cb(deckName);
	});	
}

//Add slide in deck
DeckViewPage.prototype.clickAddSlideButton = function()
{
		this.driver.wait(this.until.elementLocated({ xpath : oneTimeAddSlideButton }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Unable to add slide in deck');
		})
}

//ClickHome Button and navigate to Home View
DeckViewPage.prototype.clickHomeButton = function()
{
		this.driver.wait(this.until.elementLocated({ css : GoBackToHomeView }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Unable to navigate to Home View');
		})
	
}
//verify if deck is empty
DeckViewPage.prototype.ifSlideExists= function(cb)
{
	this.driver.wait(this.until.elementLocated({ className: availableSlide }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);		
	});
}

//Is Home button available
DeckViewPage.prototype.isPresentHomeButton= function(cb)
{
	this.driver.wait(this.until.elementLocated({ css: GoBackToHomeView }),timeoutWait).then(function(val){
		cb(true);	
	},function(err){
		cb(false);
	});
}
//checks if created text slide exists in deck
DeckViewPage.prototype.isTextSlidePresent= function(text, cb)
{
	var drive= this.driver;
	var until = this.until
	var count=0;
	this.getCountOfSlides(function(value){
		drive.wait(until.elementLocated({ xpath: textSlidePresence +value+ textSlidePresence2 }),timeoutWait).then(function(ele){
			
			ele.getText().then(function(retreviedText){
				if(text.includes(retreviedText) && retreviedText != "" ){
					cb(true);
				}
				else{
					cb(false);
				}	
			},function(err){cb(false);});		
		},function(err){cb(false);});

	},function(err){cb(false);});

}
//get total no. of slides
DeckViewPage.prototype.getCountOfSlides= function(cb)
{	
		this.driver.findElements({className: totalSlide}).then(function(value){
			totalSlides=value.length;
			cb(totalSlides);
		});
}
//Add slide in deck
DeckViewPage.prototype.addSlide = function(cb)
{
	var drive= this.driver;
	var until = this.until;
	this.getCountOfSlides(function(value){
		var element=value+1;
		
			drive.wait(until.elementLocated({ xpath: addSlide +element +']' }),timeoutWait).then(function(val){
				val.click();
			},function(err){
				 throw new Error('Unable to add slide');
			})
		
	})

}
//Click More Icon
DeckViewPage.prototype.clickMoreIcon = function()
{
	
		this.driver.wait(this.until.elementLocated({ css : moreIcon }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Unable to click more icon');
		})
	
}
//CLick Delete Deck menu item
DeckViewPage.prototype.clickDeleteDeck = function()
{

		this.driver.wait(this.until.elementLocated({ css : deleteDeckOption }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Unable to delete deck');
		})	
}
//confirm delete
DeckViewPage.prototype.deleteConfirm = function()
{

		this.driver.wait(this.until.elementLocated({ css : deleteDeck }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Unable to confirm delete action');
		})	
}
//Click Move UI
DeckViewPage.prototype.clickMoveUI= function()
{
	
		this.driver.wait(this.until.elementLocated({ xpath: moveUI }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Unable to click move ui');
		})	
	
}
//Select channel from Move UI
DeckViewPage.prototype.selectChannelFromMoveUI= function(channel)
{
	var drive=this.driver;
	this.driver.findElements({xpath: channelsOfMoveUI}).then(function(count){
		var len =count.length;
		for(var i=1;i<=len;i++){
			let ii =i; 
			drive.findElement({xpath: selectChannelFromMoveUI +ii+ channelsInMoveUi1}).getText().then(function(text){
				if(text.includes(channel))
				{
					drive.findElement({xpath: selectChannelFromMoveUI+ii+ channelsInMoveUi1}).click()
					return;
				}
			},function(err){});	

		}

	});
}
//CLick Slide
DeckViewPage.prototype.openSlide= function()
{
	this.driver.wait(this.until.elementLocated({ xpath: navigateToFirstSlide }),timeoutWait).then(function(val){
		val.click().then(function(){},function(err){}); 
	},function(err){})
}
//Click duplicate Deck menu item
DeckViewPage.prototype.clickDuplicateDeck= function()
{
	
		this.driver.wait(this.until.elementLocated({ css: duplicateDeckOption }),timeoutWait).then(function(val){
			val.click();		
		},function(err){
			 throw new Error('Unable to click move ui');
		})		
}

//verify if deck gets duplicated
DeckViewPage.prototype.verifyDuplicatedDeck= function(createdDeck, cb)
{
	this.driver.wait(this.until.elementLocated({ css: provideDeckName }),timeoutWait).then(function(val){
		val.getAttribute("value").then(function(text)
				{
			if(createdDeck + ' Copy'==text)
			{
				cb(true);
			}
			else{
				cb(false);
			}
				});	
	});
}
//Click share deck button
DeckViewPage.prototype.share= function()
{
	
		this.driver.wait(this.until.elementLocated({ css: shareButton }),timeoutWait).then(function(val){
			val.click();		
		},function(err){
			 throw new Error('Unable to share deck');
		})	
	
}
//toggle require sign In
DeckViewPage.prototype.toggleRequireSignInCheckBox= function()
{
		this.driver.wait(this.until.elementLocated({ className: requireSignInCheckBox }),timeoutWait).then(function(val){
			val.click();		
		},function(err){
			 throw new Error('Unable to toggle require sign in to view check  box');
		})
}
//click copy link
DeckViewPage.prototype.getTextFromCopyLink= function(cb)
{
		this.driver.wait(this.until.elementLocated({ css: copyLink }),timeoutWait).then(function(element){
			element.getAttribute('value').then(function(val){
				cb(val);
			}); 	
		},function(err){
			 throw new Error('Unable to retreive sharable link from text box');
		})
}
//get deck Name for link shared to signed out user
DeckViewPage.prototype.getDeckNameForSignOutUser= function(cb)
{	

		this.driver.wait(this.until.elementLocated({ xpath: deckNameForSignOutUser }),timeoutWait).then(function(element){
			element.getText().then(function(val){
				cb(val);
			}); 	
		},function(err){
			 throw new Error('invalid deck is shared to user');
		})
}
//is more icon present
DeckViewPage.prototype.isPresentMoreIcon= function(cb)
{
	this.driver.wait(this.until.elementLocated({css: moreIcon }),timeoutWait).then(function(element){
		cb(true);
	},function(err){
		cb(false);
	});	
}
//CLick assign slide
DeckViewPage.prototype.clickAssignSlideButton= function() 
{
		this.driver.wait(this.until.elementLocated({css : slideAssignment }),timeoutWait).then(function(element){
			element.click();
		},function(err){
			 throw new Error('Unable to click assign slide button');
		})
}
//Click Arrow for Sharing to particular channel or deck
DeckViewPage.prototype.clickArrow= function()
{
		this.driver.wait(this.until.elementLocated({className: arrowIcon }),timeoutWait).then(function(element){
			element.click();
		},function(err){
			 throw new Error('Unable to click assign slide button');
		})
}


//Click on send button
DeckViewPage.prototype.clickSendtoShare= function()
{
		this.driver.wait(this.until.elementLocated({css : send }),timeoutWait).then(function(element){
			element.click();
		},function(err){
			 throw new Error('invalid deck is shared to user');
		})
}


//Click 'Name or channel' drop down and select value
DeckViewPage.prototype.selectValueForNameChannel= function(user)
{
	var drive= this.driver;
	drive.findElements({className : 'Select-option'}).then(function(value){
		var len = value.length;
		for(var i=0; i<len; i++){
			let ii=i;
			drive.findElement({xpath : useOfChanneNameValue +ii +  quoteBracket + channelUserValue1}).getText().then(function(val){
				if(val == ''){
					var File = require('../pages/deckViewMochaPage.js');
					var file = new File(drive);	
					file.selectValueForNameChannel(user);
				}
				if(val == user){
					drive.findElement({xpath : useOfChanneNameValue +ii +  quoteBracket + channelUserValue1 }).click().then(function(){
					});
				}           
			},function(err){
			})
		}
	});

	this.driver.sleep(1000);
}


//CLick Checkbox Require Sign In
DeckViewPage.prototype.clickRequireSignIn= function()
{
		this.driver.wait(this.until.elementLocated({css : requireSign }),timeoutWait).then(function(element){
			element.click();
		},function(err){
			 throw new Error('unable to click require sign in button');
		})
}

//get deck NAme
DeckViewPage.prototype.getDeckName= function(cb) 
{
		this.driver.wait(this.until.elementLocated({ css : provideDeckName }),timeoutWait).then(function(val){
			val.getAttribute('value').then(function(deck){ 
				cb(deck);
			})
		},function(err){
			 throw new Error('unable to view existing deck name');
		})
}
//get slide sequence in deck View
DeckViewPage.prototype.pageSequence= function(countOfSlides, cb) 
{
	var drive = this.driver;
	var count =1
	for(var i=1; i<=countOfSlides; i++){
		var  ii = i;
		this.driver.findElement({xpath : addSlide + ii + pageNoInDeck }).then(function(element){
			element.getAttribute("innerHTML").then(function(value){
				if(value != count){
					cb(false);
				}
				if(value== count && count == ii ){
					cb(true);
				}
				count++;			
			});	
		});
	}		
}
//get background color of slide from deck view
DeckViewPage.prototype.getBackgrundColorOfSlide =  function(cb)
{
	var hexaCode='';
	this.driver.wait(this.until.elementLocated({ xpath : backgroundColorFromDeck }),timeoutWait).then(function(element){
		element.getCssValue('background-color').then(function(val){
			var rgbArray = val.split('(')[1].split(')')[0].split(',');
			var arrayLength = rgbArray.length;
			if(arrayLength==4){
				arrayLength=3;
			}
			for(var i=0; i<arrayLength; i++){
				var  ii = i;
				var hexa = parseInt(rgbArray[ii]).toString(16);      //Convert to a base16 string
				var lengthOfCode = hexa.length;
				if(lengthOfCode<2)
				{
					hexa = '0' + hexa;
				}
				hexaCode = hexaCode + hexa;
			}
			var HexadecimalCode = '#' + hexaCode;
			cb(HexadecimalCode);
		})
	})
}
//get total no. of channels in move ui
DeckViewPage.prototype.getTotalChannelsCountFromMoveUI= function(cb){
	this.driver.findElements({ xpath : channelName  }).then(function(val){
		var totalchannels = val.length;
		cb(totalchannels);
	});

}
//get channels from move ui
DeckViewPage.prototype.getTotalChannelsFromMoveUI= function(publicChannel, privateChannel, other, cb){
	var drive = this.driver;
	var count =0;
	var allChannelsFromHomeView = publicChannel.concat(privateChannel);
	drive.wait(this.until.elementLocated({  xpath : channelsInMoveUi + channelsInMoveUi2 }),timeoutWait).then(function(element){
		element.getText().then(function(value){
			var otherThanChannel = value ;	
			drive.findElements({ xpath : channelName }).then(function(val){
				var counter = 0,con=2;
				var totalchannels = val.length;
				for(var i =2; i<= totalchannels; i++ )
				{				
					var ii =i;
					drive.findElement({ xpath: channelsInMoveUi + ii +channelsInMoveUi1 }).then(function(val){
						val.getText().then(function(value){					 
							var channelNameFromMoveUI = value ;
							for(var j =0 ; j< allChannelsFromHomeView.length; j++){
								var jj =j;
								if(channelNameFromMoveUI == allChannelsFromHomeView[jj] ){
									count ++;
								}
							}
							if(count == allChannelsFromHomeView.length && otherThanChannel.includes(other))
							{
								cb(true);
								counter++;
							}

							else if(con== totalchannels && counter !=1 ){
								cb(false);
							}
							con++;
						})
					})
				}		
			});	
		});
	});
}
//click move ui
DeckViewPage.prototype.clickMoveToChannel= function()
{
	this.driver.wait(this.until.elementLocated({xpath : moveUI}),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('unable to click move ui');
	})
}
//check text of nth slide from deck view
DeckViewPage.prototype.getTextOfSlide =  function(slide,textOfSlide, cb)
{
	this.driver.wait(this.until.elementLocated({ xpath : addSlideAtAnyLocation + slide + slideContentFromDeck }),timeoutWait).then(function(val){
		val.getAttribute("innerHTML").then(function(text){
			if(textOfSlide.includes(text) && text!=''){
				cb(true);
			}
			else
			{
				cb(false);
			}
		},function(err){
			cb(false);
		})	
	},function(err){
		cb(false);
	})
}

//is emoji  displayed in Deck View
DeckViewPage.prototype.isThumbsUpIconPresentInDeck= function(cb){
	this.driver.wait(this.until.elementLocated({ xpath: thumbsUpemojiIconDeck }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	});

}

//is assignment displayed in Deck View
DeckViewPage.prototype.isAssignmentIconPresentInDeck= function(cb){
	this.driver.wait(this.until.elementLocated({ xpath: assignmentIcon }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	});

}

//is comment displayed in Deck View
DeckViewPage.prototype.isCommentIconPresentInDeck= function(cb){
	this.driver.wait(this.until.elementLocated({ xpath: provideCommentInDeck }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	});

}
//click emoji icon displayed in deck
DeckViewPage.prototype.clickEmojiIconInDeck= function(){
	this.driver.wait(this.until.elementLocated({ xpath: emojiIconDeck  }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('unable to click emoji icon in deck');
	})
}
//is emoji icon present
DeckViewPage.prototype.isEmojiIconInDeck= function(cb){
	this.driver.findElement({ xpath: emojiIconDeck  }).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	})

}
//is more icon present on slide in deck view
DeckViewPage.prototype.isMoreIconInDeck= function(cb){
	this.driver.findElement({ className: moreIconInDeck  }).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	})

}
//is page number present on slide in deck view
DeckViewPage.prototype.isPageIconInDeck= function(cb){
	this.driver.findElement({ xpath: pageNumberInDeck  }).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	})

}
//click more icon
DeckViewPage.prototype.clickMoreIconInDeck= function(){
		this.driver.findElement({ className: moreIconInDeck  }).click().then(function(val){
			
		},function(err){
			 throw new Error('unable to click more icon in deck view');
		});	
}
//click delete option
DeckViewPage.prototype.clickdeleteOptionInDeck= function(){
		this.driver.findElement({ xpath: deleteSlideFromDeckView  }).click().then(function(val){
			
		},function(err){
			 throw new Error('unable to click delete option from more icon in deck view');
		});	
}
//Click comment icon in deck view
DeckViewPage.prototype.clickCommentIconInDeck= function()
{
	var drive = this.driver;
	var until = this.until;
		this.driver.wait(this.until.elementLocated({ xpath : provideCommentInDeck }),timeoutWait).then(function(){
			drive.wait(until.elementIsVisible(drive.findElement({ xpath : provideCommentInDeck }),timeoutWait)).then(function(val){
				val.click();
			})
		},function(err){
			 throw new Error('unable to click comment icon in deck view');
		});	
}
//provide comment from deck view
DeckViewPage.prototype.provideCommentInDeck= function(commentText)
{
		this.driver.wait(this.until.elementLocated({ xpath : enterCommentInDeck }),timeoutWait).then(function(val){
			val.sendKeys(commentText);
		},function(err){
			 throw new Error('unable to provide comment icon in deck view');
		});	
}
//returns last posted comment
DeckViewPage.prototype.recentlyPostedComment= function(cb)
{
	var drive = this.driver;
		this.driver.findElements({xpath : totalcommentsInDeck}).then(function(val){
			var totalComments = val.length;
			drive.findElement({xpath : totalcommentsInDeck + lastCommentInDeck + totalComments + lastCommentInDeck1 }).then(function(text){
				text.getText().then(function(value){
					var comment = value;
					cb(comment);
				})
			})

		})
}
//click copy button
DeckViewPage.prototype.clickCopyButton= function()
{
		this.driver.wait(this.until.elementLocated({ xpath : copyButton }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('unable to click copy button in share popover');
		});
}

//Click 'Name or channel' drop down and select value
DeckViewPage.prototype.selectChannelFromShareDropdown= function(channel)
{
	var drive= this.driver;
	this.driver.wait(this.until.elementLocated({ xpath : provideChannelNameInDropdown }),timeoutWait).then(function(element){
		element.sendKeys(channel);
		drive.findElements({className : listOfChannel}).then(function(value){
			var len = value.length;
			for(var i=0; i<len; i++){
				let ii=i;
				drive.findElement({xpath : useOfChanneNameValue +ii +  quoteBracket + channelSelectionFromShareDropDown}).getText().then(function(val){
					if(val == ''){
						var Slide = require('../pages/deckViewMochaPage.js');
						var slide = new Slide(drive);	
						slide.clickArrow();
						slide.selectChannelFromShareDropdown(channel);
					}
					if(val == channel){
						drive.findElement({xpath : useOfChanneNameValue +ii +  quoteBracket + channelSelectionFromShareDropDown }).click().then(function(){
						});
					}           
				},function(err){
				})
			}
		});
	});
}
//click add slide icon available on slide
DeckViewPage.prototype.clickAddSlideIconAvailableonGrid= function(placeOFIcon)
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({xpath : addSlideIconOnGrid + placeOFIcon + rectangularBraces})).then(function(element){
		var mouseOverScript = "if(document.createEvent){var evObj = document.createEvent('MouseEvents');evObj.initEvent('mouseover', true, false); arguments[0].dispatchEvent(evObj);} else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";
		drive.executeScript(mouseOverScript,element);
		drive.sleep(2000);
		element.click();	
	})
}	
//deleteSlide
DeckViewPage.prototype.addSlideFromMoreIcon= function()
{
		this.driver.wait(this.until.elementLocated({ xpath : addSLideFromMoreIcon }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('unable to add slide from more icon');
		});
}
//hover over first slide
DeckViewPage.prototype.hoverOnSlide= function()
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({xpath: navigateToFirstSlide})).then(function(element){
		var mouseOverScript = "if(document.createEvent){var evObj = document.createEvent('MouseEvents');evObj.initEvent('mouseover', true, false); arguments[0].dispatchEvent(evObj);} else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";
		drive.executeScript(mouseOverScript,element);
	})
}
//clear existing deck name
DeckViewPage.prototype.updateDeckName= function() 
{
	this.driver.wait(this.until.elementLocated({ css : provideDeckName }),timeoutWait).then(function(val){
		val.clear();
	});
}
//is duplicate option available in more options of slide in deck view
DeckViewPage.prototype.isDuplicateSlideOptionAvailableInMoreIconPresent= function(cb)
{
		this.driver.wait(this.until.elementLocated({ xpath : duplicateFromSlide }),timeoutWait).then(function(val){
			cb(true);
		},function(err){
			 cb(false);
		});
}
//is insert option available in more options of slide in deck view
DeckViewPage.prototype.isInsertSlideOptionAvailableInMoreIconPresent= function(cb)
{
		this.driver.wait(this.until.elementLocated({ xpath : addSLideFromMoreIcon }),timeoutWait).then(function(val){
			cb(true);
		},function(err){
			 cb(false);
		});
}

//is delete option available in more options of slide in deck view
DeckViewPage.prototype.isDeleteSlideOptionAvailableInMoreIconPresent= function(cb)
{
		this.driver.wait(this.until.elementLocated({ xpath : deleteSlideFromDeckView }),timeoutWait).then(function(val){
			cb(true);
		},function(err){
			 cb(false);
		});
}
//is insert icon present in more menu of slide in deck view
DeckViewPage.prototype.isInsertSlideIconPresentInMorePopover= function(cb)
{
	var drive = this.driver;	
	this.driver.findElements({ xpath : addSLideFromMoreIcon + iconsInDeckMoreOption}).then(function(val){
		var totalElements = val.length;
		if(totalElements != pathInInsertIcon){
			cb(false);
		}
		for(var i=1; i<=totalElements; i++){
			var ii =i;
			drive.findElement({ xpath : addSLideFromMoreIcon + iconsInDeckMoreOption + '[' + ii + ']'}).then(function(val){
				val.getAttribute('d').then(function(value){
					if(val == ''){
						cb(false);
					}
				})
			},function(err){
				cb(false);
			})
		}

	},function(err){
		cb(false);
	});
}
//is delete icon present in more menu of slide in deck view
DeckViewPage.prototype.isDeleteSlideIconPresentInMorePopover= function(cb)
{
	var drive = this.driver;	
	this.driver.findElements({ xpath : deleteSlideFromDeckView + iconsInDeckMoreOption}).then(function(val){
		var totalElements = val.length;
		if(totalElements != pathInDeleteIcon){
			cb(false);
		}
		for(var i=1; i<=totalElements; i++){
			var ii =i;
			drive.findElement({ xpath : deleteSlideFromDeckView + iconsInDeckMoreOption + '[' + ii + ']'}).then(function(val){
				val.getAttribute('d').then(function(value){
					if(val == ''){
						cb(false);
					}
				})
			},function(err){
				cb(false);
			})
		}

	},function(err){
		cb(false);
	});
}
//is duplicate icon present in more menu of slide in deck view
DeckViewPage.prototype.isDuplicateSlideIconPresentInMorePopover= function(cb)
{
	var drive = this.driver;	
	this.driver.findElements({ xpath : duplicateFromSlide + iconsInDeckMoreOption}).then(function(val){
		var totalElements = val.length;
		if(totalElements != pathInDuplicateIcon){
			cb(false);
		}
		for(var i=1; i<=totalElements; i++){
			var ii =i;
			drive.findElement({ xpath : duplicateFromSlide + iconsInDeckMoreOption + '[' + ii + ']'}).then(function(val){
				val.getAttribute('d').then(function(value){
					if(val == ''){
						cb(false);
					}
				})
			},function(err){
				cb(false);
			})
		}
	},function(err){
		cb(false);
	});
}

//Deck Delete Never Mind
DeckViewPage.prototype.cancelDelete = function()
{

		this.driver.wait(this.until.elementLocated({ xpath : cancelDeckDeltetion }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Unable to navigate to deck view');
		})	
}

//Verify if More option is displayed in Deck View after canceling deck deletion
DeckViewPage.prototype.isMoreOptionPresent= function(cb)
{
	this.driver.wait(this.until.elementLocated({ css: moreIcon}),timeoutWait).then(function(val){
		cb(true);	
	},function(err){
		cb(false);
	});
}
//checks if added slide is blank slide
DeckViewPage.prototype.isAddedSlideIsBlank =  function(slide,cb)
{
	this.driver.wait(this.until.elementLocated({ xpath : addSlideAtAnyLocation + slide + slideContentForBlankSlideInDeckView }),timeoutWait).then(function(val){
		cb(false);
	},function(err){
		cb(true);
	})
}
//Duplicate slide from deck view
DeckViewPage.prototype.duplicateSlideFromDeckView= function()
{
		this.driver.wait(this.until.elementLocated({ xpath: duplicateFromSlide }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Unable to duplicate slide from deck view');
		})
	
}
//scroll down the page
DeckViewPage.prototype.scrollDownwards= function()
{	 	
	var  drive = this.driver;
	var until = this.until;
	this.getCountOfSlides(function(value){
		drive.wait(until.elementLocated({ xpath: addSlideAtAnyLocation + value + ']' }),timeoutWait).then(function(val){
			drive.executeScript('arguments[0].scrollIntoView();',val);	
	})
	});		
}
//scroll up the page
DeckViewPage.prototype.scrollUpwards= function()
{	 	
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({ xpath: oneTimeAddSlideButton }),timeoutWait).then(function(val){
			drive.executeScript('arguments[0].scrollIntoView();',val);	
	});		
} 
//verify is first slide is visible
DeckViewPage.prototype.isFirstSlideVisible= function(cb)
{	 	
	var  drive = this.driver;
	var until = this.until;
	this.getCountOfSlides(function(value){	
		drive.wait(until.elementLocated({xpath: oneTimeAddSlideButton }),timeoutWait).then(function(locator){
				drive.executeScript('var elem = arguments[0],box = elem.getBoundingClientRect(),cx = box.left + box.width / 2, cy = box.top + box.height / 2,  e = document.elementFromPoint(cx, cy);for (; e; e = e.parentElement) { if (e === elem)return true;} return false;',locator).then(function(isVisible){
					cb(isVisible);
				});
			},function(err){
				cb(false);
			})		
	})
}
//verify if last slide is visible
DeckViewPage.prototype.isLastSlideVisible= function(cb)
{	 		
	var  drive = this.driver;
	var until = this.until;
	this.getCountOfSlides(function(value){
		console.log('addSlideAtAnyLocation + value ' +addSlideAtAnyLocation + value + ']');			
		drive.wait(until.elementLocated({xpath: addSlideAtAnyLocation + value + ']' }),timeoutWait).then(function(locator){
				drive.executeScript('var elem = arguments[0],box = elem.getBoundingClientRect(),cx = box.left + box.width / 2, cy = box.top + box.height / 2,  e = document.elementFromPoint(cx, cy);for (; e; e = e.parentElement) { if (e === elem)return true;} return false;',locator).then(function(isVisible){
					cb(isVisible);
				});
			},function(err){
				cb(false);
			})		
	})
}
//hover over first slide placeholder in empty deck
DeckViewPage.prototype.hoverOnSlidePlaceholder= function()
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({xpath : hoverInDeckView})).then(function(element){
		var mouseOverScript = "if(document.createEvent){var evObj = document.createEvent('MouseEvents');evObj.initEvent('mouseover', true, false); arguments[0].dispatchEvent(evObj);} else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";
		drive.executeScript(mouseOverScript,element);
	})

}
//Verify "+" placeholder is displayed in empty deck
DeckViewPage.prototype.isPlusPlaceholderPresent= function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath: plusPlaceholderEmptySlide}),timeoutWait).then(function(val){
		cb(true);	
	},function(err){
		cb(false);
	});
}
//is count of posted comment available in deck View  
DeckViewPage.prototype.isCommentCountPresentInDeckView= function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath: commentCountInDeckView}),timeoutWait).then(function(val){
		cb(true);	
	},function(err){
		cb(false);
	});
}
//click User Detail/Contributor icon in deck view
DeckViewPage.prototype.clickUserDetail = function(browser)
{
	
	if(browser == 'firefox' || browser == 'Firefox'){
		this.driver.wait(this.until.elementLocated({ xpath : userDetail }),timeoutWait).then(function(val){
			val.click();		
		},function(err){
			 throw new Error('Unable to click User Detail icon');
		})			
	}
	else if(browser == 'chrome' || browser == 'Chrome'){
		var drive = this.driver;
		var webdriver =require('selenium-webdriver');
		this.driver.sleep(1000);
		new webdriver.ActionSequence(this.driver).
		click(drive.findElement({xpath : userDetail})).
		perform();
	}				
}
//Get Profile Icon from Contributor icon detail list available in deck view
DeckViewPage.prototype.getProfileIconFromUserDetailPopover= function(cb)
{
		this.driver.wait(this.until.elementLocated({ xpath: profileIconFromUserDetail }),timeoutWait).then(function(element){
			element.getAttribute('src').then(function(val){
				console.log('val :' + val);
				cb(val);
			}); 	
		},function(err){
			 throw new Error('Unable to get profile icon from user detail popover');
		})
}
//Get User Name from Contributor icon detail list available in deck view
DeckViewPage.prototype.getUserNameFromUserDetailPopover= function(cb)
{	

		this.driver.wait(this.until.elementLocated({ xpath: userNameFromUserDetail }),timeoutWait).then(function(element){
			element.getText().then(function(val){
				cb(val);
			}); 	
		},function(err){
			 throw new Error('incorrect User name in User Detail popover');
		})
}
//Get Status from Contributor icon detail list available in deck view
DeckViewPage.prototype.getViewingStatusFromUserDetailPopover= function(cb)
{	

		this.driver.wait(this.until.elementLocated({ xpath: viewingStatusFromUserDetail }),timeoutWait).then(function(element){
			element.getText().then(function(val){
				cb(val);
			}); 	
		},function(err){
			 throw new Error('No viewing status in User Detail popover');
		})
}
//Get total contributors of deck
DeckViewPage.prototype.getContributorFromUserDetailPopover= function(cb)
{	
	var iconsArray = [];
	var drive = this.driver;
	var until = this.until;
		this.driver.findElements({xpath : totalContributors}).then(function(val){
			var totalIcons = val.length ;
			for(var i =1; i<=totalIcons + 1; i++){
				var ii =i;
				drive.wait(until.elementLocated({ xpath: getContributorIcon + ii + getContributorIcon1 }),timeoutWait).then(function(element){
					element.getAttribute('src').then(function(val){
						iconsArray.push(val);
						if(iconsArray.length == totalIcons){
							cb(iconsArray);
						}
					},function(err){})
				},function(err){})
			}
		})
		
}
//Verify if export deck as pdf button is present in More option
DeckViewPage.prototype.isPresentExportDeckAsPdf= function(optionText,cb)
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ xpath: exportDeckAsPdf }),timeoutWait).then(function(val){
		drive.wait(until.elementLocated({ xpath: exportDeckAsPdf + spanTag }),timeoutWait).then(function(element){
			element.getText().then(function(text){
				if(text == optionText){
					cb(true);
				}
				else{
					cb(false);
				}
			});
		},function(err){
			cb(false);
		});
	},function(err){
		cb(false);
	});
}

//Verify if Embed Deck button is present in More option
DeckViewPage.prototype.isPresentEmbedDeckButton= function(optionText,cb)
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ xpath: embedDeck }),timeoutWait).then(function(val){
		drive.wait(until.elementLocated({ xpath: embedDeck + spanTag }),timeoutWait).then(function(element){
			element.getText().then(function(text){
				if(text == optionText){
					cb(true);
				}
				else{
					cb(false);
				}
			});
		},function(err){
			cb(false);
		});
	},function(err){
		cb(false);
	});
}

//Verify if duplicate button is present in More option
DeckViewPage.prototype.isPresentDuplicateButton= function(optionText,cb)
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ css: duplicateDeckOption }),timeoutWait).then(function(val){
		drive.wait(until.elementLocated({ css: duplicateDeckOption }),timeoutWait).then(function(element){
			element.getText().then(function(text){
				if(text == optionText){
					cb(true);
				}
				else{
					cb(false);
				}
			});
		},function(err){
			cb(false);
		});
	},function(err){
		cb(false);
	});
}

//Verify if duplicate button is present in More option   
DeckViewPage.prototype.isPresentDeleteButton= function(optionText,cb)
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ css: deleteDeckOption }),timeoutWait).then(function(val){
		drive.wait(until.elementLocated({ css: deleteDeckOption }),timeoutWait).then(function(element){
			element.getText().then(function(text){
				if(text == optionText){
					cb(true);
				}
				else{
					cb(false);
				}
			});
		},function(err){
			cb(false);
		});
	},function(err){
		cb(false);
	});
}
module.exports = DeckViewPage;




