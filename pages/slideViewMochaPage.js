/**
Created By QA Source
 */

//locators assignSlideToUser
var locate = require ('../locator.js'); 
var done = locate.elements.doneButton;
var commentPopover = locate.elements.postedComment;
var comment = locate.elements.addComment;
var send = locate.elements.sendButton;
var verifyComment = locate.elements.postedComment;
var exitSlideView = locate.elements.cross;
var threadComment1 = locate.elements.commentThread1;
var threadComment2 = locate.elements.commentThread2;
var countComment = locate.elements.commentCount;
var slideDelete = locate.elements.deleteSlide;
var confirmSlideDelete = locate.elements.confirmDelete;
var textSlide = locate.elements.provideTextToSlide;
var reply = locate.elements.replyButton;
var assign = locate.elements.assignIcon;
var assignDropdown = locate.elements.assignDropDown;
var isAssigned = locate.elements.isAssigned;
var assignmentPopover = locate.elements.assignPopover;
var assigne1 = locate.elements.assignee1;
var assigne2 = locate.elements.assignee2;
var edit = locate.elements.editButton;
var assigned = locate.elements.assigned;
var emojiIcon = locate.elements.emojiIcon;
var emojiReaction1 = locate.elements.emojiReaction1;
var emojiReaction2 = locate.elements.emojiReaction2;
var exitpopovers = locate.elements.exitpopovers;
var slideMoreIcon = locate.elements.slideMoreIcon;
var addSlideAtAnyLocation = locate.elements.addSlideAtAnyLocation;
var slideContentFromDeck = locate.elements.slideContentFromDeckView;
var colorSWatch = locate.elements.colorSWatch;
var backgroundColorFromSlideView = locate.elements.backgroundColorFromSlideView;
var uploadLink = locate.elements.uploadLink;
var uploadAddButton = locate.elements.uploadAddButton;
var mediaAssetMessage = locate.elements.mediaAssetMessage;
var upload1 = locate.elements.upload1;
var upload2 = locate.elements.upload2;
var uploadOptions = locate.elements.uploadOptions;
var mediaAdd = locate.elements.addMedia;
var layoutSyle = locate.elements.layoutSyle;
var giphySuggestion = locate.elements.giphySuggestion;
//var giphy = locate.elements.giphy;
var intro = locate.elements.intro;
var show = locate.elements.show;
var tell = locate.elements.tell;
var ifIntro = locate.elements.ifIntro;
var ifShow = locate.elements.ifShow;
var ifTell = locate.elements.ifTell;
var asset = locate.elements.asset;
var textFromSlide = locate.elements.textFromSlide;
var assetFrame = locate.elements.assetFrame;
var assetPopover = locate.elements.assetPopover;
var assetFrameItem = locate.elements.assetFrameItem;
var assetFrameItem1 = locate.elements.assetFrameItem1;
var isShadowPresent = locate.elements.isShadowPresent;
var exitpopovers = locate.elements.exitpopovers;
var largeText = locate.elements.largeText;
var mediumText = locate.elements.mediumText;
var availableText = locate.elements.availableText;
var availableText2 = locate.elements.availableText2;
var smallText = locate.elements.smallText;
var bulletedList  = locate.elements.bulletedList ;
var numberedList = locate.elements.numberedList;
var availableList = locate.elements.availableList;
var availableList2 = locate.elements.availableList2;
var code = locate.elements.code;
var bold = locate.elements.bold;
var italic = locate.elements.italic;
var style = locate.elements.style;
var style2 = locate.elements.style2;
var useOfChanneNameValue = locate.elements.channelUserValue;
var channelUserValue1 = locate.elements.channelUserValue1;
var quoteBracket = locate.elements.emojiReaction3;
var provideChannelNameInDropdown = locate.elements.provideChannelNameInDropdown;
var listOfChannel = locate.elements.listOfChannel;
var channelSelectionFromShareDropDown = locate.elements.channelSelectionFromShareDropDown;
var saveCopyMoreIcon = locate.elements.saveCopyMoreIcon;
var saveCopyOfDeck = locate.elements.saveCopyOfDeck;
var ifShowWithoutText = locate.elements.ifShowWithoutText;
var saveCopyOfDeck = locate.elements.saveCopyOfDeck;
var mediaAsset = locate.elements.mediaAsset;
var addSlideFromSLideView = locate.elements.addSlideFromSLideView;
var formattingToolbar = locate.elements.formattingToolbar;
var popover = locate.elements.popover;
var linkFromThumbnail = locate.elements.linkFromThumbnail;
var duplicateFromSlide = locate.elements.duplicateFromSlide;
var isMedaUploadedImage = locate.elements.isMedaUploadedImage;
var isMedaUploadedAnchor = locate.elements.isMedaUploadedAnchor;
var navigateToNextSlide = locate.elements.navigateToNextSlide;
var unassign = locate.elements.unassignButton;
var previousButton = locate.elements.previousButton;
var contentContainerforLandscapeSlide= locate.elements.contentContainerforLandscapeSlide;
var contentContainerforPortraitSlide= locate.elements.contentContainerforPortraitSlide;
var unsplashUpload= locate.elements.unsplashUpload;
var provideTextToSlide1= locate.elements.provideTextToSlide1;
var MediaAssetLocation= locate.elements.MediaAssetLocation;
var MediaAssetLocation1= locate.elements.MediaAssetLocation1;
var MediaAssetLocation2= locate.elements.MediaAssetLocation2;
var fourthMediaAsset= locate.elements.fourthMediaAsset;
var isVideoMediaUploaded= locate.elements.isVideoMediaUploaded;

var xpathcount = 2,count=0,counter=1,capabilityy ;
//input data
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var postedComment = input.displayedComment;
var timeoutWait = Number(input.timeout);
var shortwait = Number(input.shortwait);
var page = require('../framework/page.js');


function SlideViewPage (webdriver) {

	page.call(this, webdriver, url);
	By = webdriver.By;
}

SlideViewPage.prototype = Object.create(page.prototype);
SlideViewPage.prototype.constructor = SlideViewPage;



//click done
SlideViewPage.prototype.clickDone= function() 
{
	this.driver.wait(this.until.elementLocated({ css: done }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Unable to click done button');
	})
}

//click comment Popover
SlideViewPage.prototype.clickCommentPopover= function() 
{
	this.driver.wait(this.until.elementLocated({ xpath : commentPopover }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Comment icon is not present');
	})

}
//provide text in comment popover
SlideViewPage.prototype.addComment= function(text) 
{
	this.driver.wait(this.until.elementLocated({ xpath: comment }),timeoutWait).then(function(val){
		val.sendKeys(text);
	},function(err){
	 throw new Error('Unable to provide text in comment popover');
	})
}
//click send
SlideViewPage.prototype.clickSend= function() 
{	
	this.driver.wait(this.until.elementLocated({ xpath: send }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('send button in comment popover is not working');
	})
}
//verify if comment is posted successfully
SlideViewPage.prototype.verfiyPostedComment= function(cb) 
{
	this.driver.wait(this.until.elementLocated({ xpath : verifyComment}),timeoutWait).then(function(val){
		val.getText().then(function(verifyText)  	 {
			var size = verifyText.length;
			var subText = verifyText.substr(1,12);
			cb(subText);
		});	
	},function(err){
		cb(false);
	}
	);

}
//verify if comment count is getting updated
SlideViewPage.prototype.isCommentCountUpdated= function(text,totalComment,cb) 
{
	for(var a=1;a<=totalComment;a++)
	{

		//provide comment
		this.addComment(text);

		//click send
		this.clickSend();

		//Verify that Count of comments is getting updated immediately if more comments are added
		this.countComment(function(value){
			if(counter==value){
				counter++;
			}
			if(counter-1==totalComment)
			{
				cb(true);
			}

		});

	}

}
//Calcultae no. of posted comments
SlideViewPage.prototype.countComment= function(cb) 
{
	this.driver.wait(this.until.elementLocated({ xpath : countComment }),timeoutWait).then(function(val){
		val.getText().then(function(text){
			cb(text);
		});
	},function(err){
	 throw new Error('Total comment count is not present');
	})

}
//Exit slide View
SlideViewPage.prototype.clickExitSlideView= function()
{
	this.driver.wait(this.until.elementLocated({css :exitSlideView }),timeoutWait).then(function(val){
		val.click();
	},function(err){
	 throw new Error('Exit slide view icon is not present');
	})
}
//Provide Text to slide
SlideViewPage.prototype.provideText= function(browser,InputText,cb)
{
	var drive = this.driver;
	var webdriver =require('selenium-webdriver');
	var num = Math.floor((Math.random() * 100) + 1);
	var text = InputText+" "+num;	
	if(browser=='chrome'){
		console.log('chromeee');
		this.driver.sleep(1000);
		new webdriver.ActionSequence(this.driver).
		click(drive.findElement({xpath : textSlide})).
		sendKeys(text).
		perform();
		cb(text);
	}
	if(browser=='firefox')
	{
		this.driver.sleep(2000);
		this.driver.wait(this.until.elementLocated({xpath :textSlide }),timeoutWait).then(function(val){
			val.sendKeys(text);
			cb(text);
		},function(err){
			 throw new Error('Unable to provide text to slide');
		})
	}

}
//clear text
SlideViewPage.prototype.clearText= function()
{
		this.driver.sleep(2000);
		this.driver.wait(this.until.elementLocated({xpath :provideTextToSlide1 }),timeoutWait).then(function(val){
			val.clear();		
		})
}
//delete slide
SlideViewPage.prototype.clickSlideDelete= function()
{
	this.driver.wait(this.until.elementLocated({ css: slideDelete }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('unable to delete slide');
	})
}
//confirm delete action
SlideViewPage.prototype.clickConfirmSlideDelete= function()
{
	this.driver.wait(this.until.elementLocated({ css: confirmSlideDelete }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to confirm delete slide acion');
	})
}
//Add multiple comments
SlideViewPage.prototype.multipleComments= function(totalComment,text ) 
{
	for(var a=1;a<=totalComment;a++)
	{

		//provide comment
		this.addComment(text);

		//click send
		this.clickSend();
	}

}

//Verify if comment thread is getting posted
SlideViewPage.prototype.iscommentThreadCreated= function(n,text,cb)
{
	for(var i=0;i<n;i++)
	{
		let ii=i;
		var xpath1 = threadComment1+ii+threadComment2;
		this.driver.findElement({xpath :xpath1}).getText().then(function(value){
			if(value!=text){
				count++;

			}
		});
	}	
	if(count==1){
		cb(false);
	}
	else{
		cb(true);
	}
}

//Click Reply
SlideViewPage.prototype.clickReplyComment= function()
{
	this.driver.wait(this.until.elementLocated({ xpath: reply }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Comment reply button is not present');
	})
}
//click Assign Icon
SlideViewPage.prototype.clickAssignIcon= function()
{
	this.driver.wait(this.until.elementLocated({ css: assign }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Assignment icon is not present');
	})
}
//click assign dropdown icon to open the list
SlideViewPage.prototype.clickAssignDropdown= function()
{
	this.driver.wait(this.until.elementLocated({ className : assignDropdown }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to provide text to slide');
	})
}
//Verify if slide s assigned to user
SlideViewPage.prototype.isSlideAssigned= function(cb)
{
	this.driver.wait(this.until.elementLocated({ css: isAssigned }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	})
}


//Select assignee from dropdown
SlideViewPage.prototype.selectValueFromAssignDropdown= function(assignee,cb)
{
	var count=0;
	var drive= this.driver;
	this.driver.findElements({className : assignmentPopover}).then(function(count){
		var len=count.length-1;
		for(i=1;i<=len;i++){
			let ii=i;
			drive.findElement({xpath : assigne1 +ii+ assigne2}).getText().then(function(text){
				if(text.includes(assignee)){
					drive.findElement({xpath : assigne1 +ii+ assigne2}).click();
				}
			},function(err){});
		}
	},function(err){});
}

//Verify if edit button available
SlideViewPage.prototype.isPresentEditButton= function(cb)
{
	this.driver.wait(this.until.elementLocated({ css: edit }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	});	
}
//click on assigned button
SlideViewPage.prototype.clickAssignedUserIcon =  function()
{

	this.driver.wait(this.until.elementLocated({ xpath: assigned }),timeoutWait).then(function(val){
		val.click().then(function(){},function(err){});
	},function(err){})
}
//click emojiIcon
SlideViewPage.prototype.clickEmojiIcon =  function()
{
	this.driver.wait(this.until.elementLocated({ xpath: emojiIcon }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Emoji icon is not present');
	})
}
//React with emoji
SlideViewPage.prototype.selectEmojiFromPopover =  function(emojii)
{
	this.driver.wait(this.until.elementLocated({ css: emojiReaction1 + emojii +emojiReaction2 }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Emoji reaction is not present');
	})
}
//verify if reacted emoji displayed in the view and deck mode
SlideViewPage.prototype.isEmojiPresent =  function(emojii,cb)
{
	this.driver.wait(this.until.elementLocated({ css: emojiReaction1 + emojii +emojiReaction2 }),timeoutWait).then(function(){
		cb(true);
	},function(err){cb(false);})
}
//exit popover
SlideViewPage.prototype.exitPopoversOfSlideView =  function()
{
	this.driver.sleep(2000);
	this.driver.findElement({xpath : exitpopovers}).click().then(function(val){},function(err){});
}
//click more icon of slide
SlideViewPage.prototype.clickMoreOfSLide =  function()
{
	this.driver.wait(this.until.elementLocated({ xpath : slideMoreIcon }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('slide more icon is not present');
	})
}
//reorder slide
SlideViewPage.prototype.reorderSlide =  function(slide)
{
	var drive = this.driver;
	var LocatorFrom = this.driver.findElement({xpath : addSlideAtAnyLocation + slide +']'});
	drive.executeScript("function simulate(f,c,d,e){var b,a=null;for(b in eventMatchers)if(eventMatchers[b].test(c)){a=b;break}if(!a)return!1;document.createEvent?(b=document.createEvent(a),a==\"HTMLEvents\"?b.initEvent(c,!0,!0):b.initMouseEvent(c,!0,!0,document.defaultView,0,d,e,d,e,!1,!1,!1,!1,0,null),f.dispatchEvent(b)):(a=document.createEventObject(),a.detail=0,a.screenX=d,a.screenY=e,a.clientX=d,a.clientY=e,a.ctrlKey=!1,a.altKey=!1,a.shiftKey=!1,a.metaKey=!1,a.button=1,f.fireEvent(\"on\"+c,a));return!0} var eventMatchers={HTMLEvents:/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,MouseEvents:/^(?:click|dblclick|mouse(?:down|up|over|move|out))$/}; " +
			"simulate(arguments[0],\"mousedown\",0,0); simulate(arguments[0],\"mousemove\",arguments[1],arguments[2]); simulate(arguments[0],\"mouseup\",arguments[1],arguments[2]); ",
			LocatorFrom,'1000','1000');

}
//is slide includes text 
SlideViewPage.prototype.getTextOfSlide =  function(slideText, cb)
{
	this.driver.sleep(1000);
	this.driver.wait(this.until.elementLocated({ xpath : textFromSlide }),timeoutWait).then(function(val){
		val.getAttribute("innerHTML").then(function(text){
			if(slideText.includes(text) && text != '' ){
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
//is done button available
SlideViewPage.prototype.isPresentDoneButton =  function(cb)
{
	this.driver.wait(this.until.elementLocated({ css : done }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	});
}
//is edit button available
SlideViewPage.prototype.isPresentEditButton =  function(cb)
{
	this.driver.wait(this.until.elementLocated({ css : edit }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	});
}
//is emoj icon present  
SlideViewPage.prototype.isPresentEmojiIcon =  function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath : emojiIcon }),timeoutWait).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	});
}
//select background color
SlideViewPage.prototype.selectColorFromSwatch =  function() //selectBackGroundColor
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ xpath : colorSWatch }),timeoutWait).then(function(){
		drive.wait(until.elementIsVisible(drive.findElement({ xpath : colorSWatch }),timeoutWait)).then(function(val){
			val.click();
		});
	},function(err){
		 throw new Error('color swatch for providing background color is not present');
	})
}
//get background color
SlideViewPage.prototype.getColorFromSwatch =  function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath : colorSWatch }),timeoutWait).then(function(val){
		val.getAttribute('fill').then(function(color){
			cb(color);
		})
	},function(err){
		 throw new Error('color swatch for providing background color is not present');
	})
}
//get background color of slide 
SlideViewPage.prototype.getBackgrundColorOfSlide =  function(cb)
{
	var hexaCode='';
	this.driver.wait(this.until.elementLocated({ xpath : backgroundColorFromSlideView }),timeoutWait).then(function(element){
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
//click edit button edit
SlideViewPage.prototype.clickEdit =  function() {
	this.driver.wait(this.until.elementLocated({ css : edit}),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('slide edit button is not present');
	})
}
//provide upload link
SlideViewPage.prototype.provideUploadLink =  function(link) {
	this.driver.wait(this.until.elementLocated({ css : uploadLink}),timeoutWait).then(function(val){
		val.sendKeys(link);
	},function(err){
		 throw new Error('Unable to add media link in add link option');
	})
}
//click add link
SlideViewPage.prototype.clickAddButton =  function() {
	this.driver.wait(this.until.elementLocated({ css : uploadAddButton}),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to add media asset');
	})
}

//choose media option
SlideViewPage.prototype.clickMediaOption =  function(option) {

	var drive = this.driver;
	this.driver.findElements({xpath : uploadOptions}).then(function(val){
		var totalOptions = val.length;
		for(var i=1; i<=totalOptions; i++ ){
			var ii = i;
			drive.findElement({xpath : upload1 + ii + upload2}).then(function(value){
				value.getText(val).then(function(text){
					if(text == option){
						drive.executeScript("arguments[0].scrollIntoView();", value);
						value.click();
					}
				},function(err){})

			},function(err){})
		}
	},function(err){});
}
//mediaAssetMessage
SlideViewPage.prototype.isMAxNoOfAssetsPresent =  function(message,cb) {
	this.driver.wait(this.until.elementLocated({ xpath : mediaAssetMessage}),timeoutWait).then(function(element){
		element.getText().then(function(value){
			if(value.includes(message)){
				cb(true);
			}
			else
			{
				cb(false);
			}
		});
	},function(err){
		cb(false);
	})
}
//click media icon
SlideViewPage.prototype.clickAddMedia =  function()
{
	this.driver.wait(this.until.elementLocated({ css : mediaAdd }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to add media asset');
	})
}
//Click Giphy Suggestion
SlideViewPage.prototype.clickGiphySuggestion =  function()
{
	this.driver.wait(this.until.elementLocated({ xpath : giphySuggestion }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to add Giphy media asset');
	})
}
//Click layout Style
SlideViewPage.prototype.clickLayoutStyle =  function()
{
	this.driver.wait(this.until.elementLocated({ css : layoutSyle }),timeoutWait).then(function(val){
		val.click();
	})
}
//Click Intro layout Style
SlideViewPage.prototype.clickIntroLayoutStyle =  function()
{
	this.driver.wait(this.until.elementLocated({ xpath : intro }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to select Intro layout');
	})
}
//Click Show layout Style
SlideViewPage.prototype.clickShowLayoutStyle =  function()
{

	this.driver.wait(this.until.elementLocated({ xpath : show}),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to select Show layout');
	})
}
//Click Tell layout Style
SlideViewPage.prototype.clickTellLayoutStyle =  function()
{
	this.driver.wait(this.until.elementLocated({ xpath : tell }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to select Tell layout');
	})
}
//If Layout is Intro
SlideViewPage.prototype.isLayoutIntro =  function(cb)
{
	this.driver.sleep(1000);
	this.driver.findElement({className : ifIntro}).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	});
}
//If Layout is Intro
SlideViewPage.prototype.isLayoutShow =  function(cb)
{
	this.driver.sleep(1000);
	this.driver.findElement({className : ifShow}).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	});
}
//If Layout is Tell
SlideViewPage.prototype.isLayoutTell =  function(cb)
{
	this.driver.sleep(1000);
	this.driver.findElement({className : ifTell}).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	});
}
//click upload a file
SlideViewPage.prototype.clickUploadFile =  function()
{
	this.driver.wait(this.until.elementLocated({ className : uploadFile }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to open media popover');
	})
}

//get asset size
SlideViewPage.prototype.getAssetSize =  function(cb){
	this.driver.wait(this.until.elementLocated({ xpath : asset }),timeoutWait).then(function(value){
		value.getCssValue('width').then(function(val1){
			var width = val1;

			value.getCssValue('height').then(function(val2){
				var height = val2 ;

				var dimension =width + "," + height
				cb(dimension);
			});
		});});
}

//resize
SlideViewPage.prototype.setAssetSize =  function(cb)
{
	var drive = this.driver;
	this.driver.findElement({xpath : asset}).then(function(value){
		value.getCssValue('width').then(function(val1){
			var width = val1;
			var widthDimension = val1.split('px')[0]
			var updatedWidthDimension = Number(widthDimension)-200 ;

			value.getCssValue('height').then(function(val2){
				var height = val2 ;
				var heightDimension = val2.split('px')[0]
				var updatedheightDimension = Number(heightDimension)-200 ;
				drive.executeScript("arguments[0].setAttribute('style', 'width:" + updatedWidthDimension +"px; height:"+ updatedheightDimension +"px')",value);    

				value.getCssValue('width').then(function(vall1){

					value.getCssValue('height').then(function(vall2){

						var dimension =updatedWidthDimension + "px," + updatedheightDimension+ "px";
						cb(dimension);
					});});});});});
}
//Click Asset Frame icon
SlideViewPage.prototype.clickAssetFrame =  function()
{
	this.driver.wait(this.until.elementLocated({ css : assetFrame }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to select Intro layout');
	})
}
//Click Asset Frame Option
SlideViewPage.prototype.selectAssetFrameOption =  function(assetOption)
{
	var drive = this.driver;
	this.driver.findElements({xpath : assetPopover}).then(function(val){
		var totalElements = val.length;
		for(var i=1 ; i<=totalElements; i++){
			var ii = i;
			drive.findElement({xpath : assetFrameItem+ ii +assetFrameItem1}).then(function(value){
				value.getAttribute("data-test").then(function(val){
					if(val== assetOption)
					{
						value.click();

					}
				},function(err){})
			},function(err){});
		}
	},function(err){});
}
//checks if shadow is available
SlideViewPage.prototype.isShadowAvailable =  function(cb)
{
	this.driver.sleep(1000);
	this.driver.findElement({xpath : isShadowPresent}).then(function(value){
		cb(true);

	},function(err){
		cb(false);
	});
}

//open Formatting toolbar
SlideViewPage.prototype.openFormattingToolbar =  function(platform, browser)
{	
	var webdriver = require('selenium-webdriver');
	if(platform.includes('windows') ){
		this.driver.wait(this.until.elementLocated({ xpath : exitpopovers }),timeoutWait).then(function(val){
			val.sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL, "a"));
		})
	}
	else if(browser =='chrome'){
		this.driver.wait(this.until.elementLocated({ xpath : formattingToolbar }),timeoutWait).then(function(val){
			val.click();
		})
	}	
	else if(platform.includes('Mac') || platform.includes('darwin') && browser =='firefox'){
		this.driver.wait(this.until.elementLocated({ xpath : exitpopovers }),timeoutWait).then(function(val){
			val.sendKeys(webdriver.Key.chord(webdriver.Key.COMMAND, "a"));
		})
	}
}

//select Large Text
SlideViewPage.prototype.largeText =  function(browser)
{	
	if(browser == 'chrome'){
		this.driver.sleep(2000);
		var drive = this.driver;
		new this.webdriver.ActionSequence(this.driver).
		click(drive.findElement({xpath : largeText})).
		perform();
	}
	else if(browser == 'firefox'){
		this.driver.wait(this.until.elementLocated({ xpath : largeText }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Unable to select Large font');
		})
	}

}
//select Medium Text
SlideViewPage.prototype.mediumText =  function()
{	
	this.driver.wait(this.until.elementLocated({ xpath : mediumText }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to select medium font');
	})
}
//select small Text
SlideViewPage.prototype.smallText =  function()
{	
	this.driver.wait(this.until.elementLocated({ xpath : smallText }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to select small font');
	})
}
//select bulleted list
SlideViewPage.prototype.bulletedList =  function()
{	

	this.driver.wait(this.until.elementLocated({ xpath : bulletedList }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to select bulleted list');
	})
}
//select numbered list
SlideViewPage.prototype.numberedList =  function()
{	
	this.driver.wait(this.until.elementLocated({ xpath : numberedList }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to select numbered list');
	})
}
//select code
SlideViewPage.prototype.selectCode =  function()
{	
	this.driver.wait(this.until.elementLocated({ xpath : code }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to select code font');
	})
}
//select bold
SlideViewPage.prototype.selectBold=  function(browser)
{	

	if(browser == 'chrome'){
		this.driver.sleep(3000);
		var drive = this.driver;
		new this.webdriver.ActionSequence(this.driver).
		click(drive.findElement({xpath : bold})).
		perform();
	}
	else if(browser == 'firefox'){
		this.driver.wait(this.until.elementLocated({ xpath : bold }),timeoutWait).then(function(val){
			val.click();
		},function(err){
			 throw new Error('Unable to select bold style');
		})
	}

}
//select italic
SlideViewPage.prototype.selectItalic=  function()
{	
	this.driver.wait(this.until.elementLocated({ xpath : italic }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to select italic style');
	})
}

//returns type list applied on text
SlideViewPage.prototype.typeOfStyle =  function(type, cb)
{	
	this.driver.sleep(3000);
	this.driver.findElement({xpath : style + type + style2}).then(function(type){
		cb(true);
	},function(err){
		cb(false);
	});
}


//returns type of text
SlideViewPage.prototype.typeOfText =  function(type, cb)
{	
	this.driver.findElement({xpath : availableText + type + availableText2}).then(function(type){
		cb(true);
	},function(err){
		cb(false);
	});
}

//Click 'Name or channel' drop down and select value
SlideViewPage.prototype.selectChannelFromShareDropdown= function(channel)
{
	var drive= this.driver;
	this.driver.wait(this.until.elementLocated({ xpath : provideChannelNameInDropdown }),timeoutWait).then(function(element){
		element.sendKeys(channel);
		drive.findElements({className : listOfChannel}).then(function(value){
			var len = value.length;
			for(var i=0; i<len; i++){
				let ii=i;
				drive.findElement({xpath : useOfChanneNameValue +ii +  quoteBracket + channelSelectionFromShareDropDown}).getText().then(function(val){
					drive.sleep(2000);
					if(val == ''){
						var Slide = require('../pages/slideViewMochaPage.js');
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
//click more icon to save copy of deck
SlideViewPage.prototype.clickSaveCopyMoreIcon =  function()
{	
	this.driver.wait(this.until.elementLocated({ xpath : saveCopyMoreIcon }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('More icon for saving deck copy is not avaialble');
	})
}
//click save copy option
SlideViewPage.prototype.clickSaveCopyOption =  function()
{	
	this.driver.wait(this.until.elementLocated({ xpath : saveCopyOfDeck }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to save copy of deck');
	})
}
//is by default show layout is selected
SlideViewPage.prototype.isByDefaultShow =  function(cb)
{	
	this.driver.findElements({xpath : ifShowWithoutText}).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	})
}
//Verify if media asset is avilable in slide
SlideViewPage.prototype.isMediaAssetPresent=  function(cb)
{	
	this.driver.findElement({xpath : mediaAsset }).then(function(val){
		cb(true);
	},function(err){
		cb(false);
	})
}
//click add slide button in slide view
SlideViewPage.prototype.clickAddSlideFromSLideView = function()
{	
	this.driver.wait(this.until.elementLocated({ xpath : addSlideFromSLideView }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to add slide in slide view');
	})
}
//get slide Text
SlideViewPage.prototype.getSlideText =  function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath : textFromSlide }),timeoutWait).then(function(val){
		val.getAttribute("innerHTML").then(function(text){		
			cb(text);
		})
	},function(err){
		 throw new Error('text slide is not present');
	})
}
//paste sharable link
SlideViewPage.prototype.pasteSharableLink= function(platform){
	var webdriver = require("selenium-webdriver");
	if(platform.includes('windows') || platform.includes('Windows')){
		this.driver.findElement({xpath : exitpopovers}).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL, "v"));
	}

	else if(platform.includes('Mac') || platform.includes('darwin') ){
		this.driver.findElement({xpath : exitpopovers}).sendKeys(webdriver.Key.chord(webdriver.Key.COMMAND, "v"));
	}

}
//returns  text of slide
SlideViewPage.prototype.getTextFromSlide =  function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath : textFromSlide}),timeoutWait).then(function(element){
		element.getText().then(function(text){
			cb(text);
		})
	},function(err){
		cb(false);
	})
}
//is popover exists
SlideViewPage.prototype.ispopoverPresent =  function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath : popover}),timeoutWait).then(function(element){
		cb(true);
	},function(err){
		cb(false);
	});
}

//get link from thumbnail 
SlideViewPage.prototype.getLinkFromThumbnail =  function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath : linkFromThumbnail}),timeoutWait).then(function(element){
		element.getAttribute('href').then(function(text){
			cb(text);
		});
	});
}
//click duplicate option of slide
SlideViewPage.prototype.clickDuplicateFromSlide= function()
{
	this.driver.wait(this.until.elementLocated({ xpath: duplicateFromSlide }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to save copy of deck');
	})
}

//is media asset  uploaded  isVideoMediaUploaded
SlideViewPage.prototype.isMediaAssetUploaded = function(cb)
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ xpath: isMedaUploadedAnchor}),shortwait).then(function(val){
		cb(true);
	},function(val){
		drive.wait(until.elementLocated({ xpath: isMedaUploadedImage }),shortwait).then(function(val){
			cb(true);
		},function(val){
			drive.wait(until.elementLocated({ xpath: isVideoMediaUploaded }),shortwait).then(function(val){
				cb(true);
			},function(err){
				cb(false);
		})
	})
	})
}

//click media asset
SlideViewPage.prototype.clickMediaAsset = function(browser)
{
	var drive = this.driver;
	var until = this.until;
	if(browser== 'firefox'){
		drive.wait(until.elementLocated({ xpath: isMedaUploadedImage }),timeoutWait).then(function(val){
			val.click();
		});
	}
	else if(browser == 'chrome'){
		new this.webdriver.ActionSequence(drive).
		click(drive.findElement({xpath: isMedaUploadedImage})).
		perform();
	}
}
//navigate To NextSlide
SlideViewPage.prototype.navigateToNextSlide = function()
{
	this.driver.wait(this.until.elementLocated({ xpath: navigateToNextSlide }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to navigate to next slide');
	})
}
//Verify if unassign button is present 
SlideViewPage.prototype.ifUnassignPresent= function(cb)
{
	this.driver.findElement({css: unassign}).then(function(x){
		x.getText().then(function(val){
			if(val=='Unassign'){
				cb(true);
			}
			else{
				if(count==1){
					clickAssignedUserIcon();
					this.driver.findElement({css: unassign}).then(function(x){
						x.getText().then(function(val){
							if(val=='Unassign'){
								cb(true);
							}
						});
					});

				}
				cb(false);
				count++;
			}
		})

	},function(err){
		cb(false);
	});	

}

//navigate To previous Slide
SlideViewPage.prototype.navigateToPreviousSlide = function()
{
	this.driver.wait(this.until.elementLocated({ css: previousButton }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to navigate to previous slide');
	})
}

//verify that text is left aligned
SlideViewPage.prototype.isTextSlideLeftAlligned = function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath: contentContainerforPortraitSlide }),timeoutWait).then(function(val){
		val.getCssValue('justify-content').then(function(align){
			if(align == 'left'){
				cb(true)
			}
			else{
				cb(false);
			}
		})		
	},function(err){
		cb(false);
	});
}
//verify that text is center aligned
SlideViewPage.prototype.isTextSlideCenterAlligned = function(cb)
{
	var drive = this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ xpath: contentContainerforLandscapeSlide }),timeoutWait).then(function(val){
		val.getCssValue('justify-content').then(function(align){
			if(align == 'center'){
				cb(true);
			}
			else{
				cb(false);
			}	
		});
	},function(err){
		cb(false);
	});
}
//select unsplash image
SlideViewPage.prototype.selectUnsplashImage = function()
{
	this.driver.wait(this.until.elementLocated({ xpath: unsplashUpload }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to select unsplash media asset');
	})
}
//is save copy of deck icon present
SlideViewPage.prototype.isSaveCopyMoreIconPresent =  function()
{	
	this.driver.wait(this.until.elementLocated({ xpath : saveCopyMoreIcon }),timeoutWait).then(function(val){
		
	},function(err){
		var Home = require('../pages/homeViewMochaPage.js');
		var home = new Home(drive);	
		home.refreshPage();
	})
}

//Hover on Intro layout Style
SlideViewPage.prototype.hoverIntroLayoutStyle =  function()
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({ xpath : intro }),timeoutWait).then(function(element){
		
		var mouseOverScript = "if(document.createEvent){var evObj = document.createEvent('MouseEvents');evObj.initEvent('mouseover', true, false); arguments[0].dispatchEvent(evObj);} else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";
		drive.executeScript(mouseOverScript,element);	
			

		
	},function(err){
		 throw new Error('Unable to preview Intro layout');
	})
}

//Hover on Tell layout Style
SlideViewPage.prototype.hoverTellLayoutStyle =  function()
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({ xpath : tell }),timeoutWait).then(function(element){
		var mouseOverScript = "if(document.createEvent){var evObj = document.createEvent('MouseEvents');evObj.initEvent('mouseover', true, false); arguments[0].dispatchEvent(evObj);} else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";
		drive.executeScript(mouseOverScript,element);		
	},function(err){
		 throw new Error('Unable to preview Tell layout');
	})
}

//Hover on Show layout Style
SlideViewPage.prototype.hoverShowLayoutStyle =  function()
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({ xpath : show }),timeoutWait).then(function(element){
		var mouseOverScript = "if(document.createEvent){var evObj = document.createEvent('MouseEvents');evObj.initEvent('mouseover', true, false); arguments[0].dispatchEvent(evObj);} else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";
		drive.executeScript(mouseOverScript,element);		
	},function(err){
		 throw new Error('Unable to preview Show layout');
	})
}
//reorder media assets
SlideViewPage.prototype.reorderMediaAsset =  function(browser,from, to)
{

	if(browser == 'Chrome' || browser == 'chrome'){
		var webdriver = require("selenium-webdriver");
		var drive = this.driver;
		this.driver.findElement({xpath : MediaAssetLocation + from + MediaAssetLocation1 }).then(function(LocatorFrom){ //fourthMediaAsset
			drive.findElement({xpath : MediaAssetLocation + to + MediaAssetLocation1 }).then(function(LocatorTo){ //			
					new webdriver.ActionSequence(drive).
					dragAndDrop(LocatorFrom, LocatorTo).
					perform();
			})
		})
	}
	else if(browser == 'Firefox' || browser == 'firefox'){
		
		var drive = this.driver;
		this.driver.findElement({xpath : MediaAssetLocation + from + MediaAssetLocation1 }).then(function(LocatorFrom){ //fourthMediaAsset
			drive.findElement({xpath : MediaAssetLocation + to + MediaAssetLocation1 }).then(function(LocatorTo){ //
				LocatorTo.getLocation().then(function(val){
					var x = Number(val.x) +10  ;
					var y = Number(val.y) +2 ;
					drive.executeScript("function simulate(f,c,d,e){var b,a=null;for(b in eventMatchers)if(eventMatchers[b].test(c)){a=b;break}if(!a)return!1;document.createEvent?(b=document.createEvent(a),a==\"HTMLEvents\"?b.initEvent(c,!0,!0):b.initMouseEvent(c,!0,!0,document.defaultView,0,d,e,d,e,!1,!1,!1,!1,0,null),f.dispatchEvent(b)):(a=document.createEventObject(),a.detail=0,a.screenX=d,a.screenY=e,a.clientX=d,a.clientY=e,a.ctrlKey=!1,a.altKey=!1,a.shiftKey=!1,a.metaKey=!1,a.button=1,f.fireEvent(\"on\"+c,a));return!0} var eventMatchers={HTMLEvents:/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,MouseEvents:/^(?:click|dblclick|mouse(?:down|up|over|move|out))$/}; " +
							"simulate(arguments[0],\"mousedown\",0,0); simulate(arguments[0],\"mousemove\",arguments[1],arguments[2]); simulate(arguments[0],\"mouseup\",arguments[1],arguments[2]); ",
							LocatorFrom,x , y);

				});
			});
		});
	}
}
//get source of image for slide having multiple medias
SlideViewPage.prototype.getSourceOfImage =  function(mediaAssetNumber, cb)
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({ xpath : MediaAssetLocation + mediaAssetNumber + MediaAssetLocation1  }),timeoutWait).then(function(val){
		val.getAttribute('src').then(function(imageContent){
			cb(imageContent);
		},function(err){
			val.getAttribute('data-id').then(function(anchorContent){
				cb(anchorContent)	;
			});
		})
	},function(err){
		throw new Error('Unable to get information related to media asset');
	})
}
module.exports = SlideViewPage;