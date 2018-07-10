/*
Created by QA Source
PASTE-718: Verify that user is able to resize the asset in Slide Editor View.
 */
var assert = require('assert');
var {describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../framework/page.js');
var Sign = require('../pages/signInMochaPage.js');
var Home = require('../pages/homeViewMochaPage.js');
var Deck = require('../pages/deckViewMochaPage.js');
var Slide = require('../pages/slideViewMochaPage.js');
var Slide = require('../pages/slideViewMochaPage.js');
var page,sign,home,deck, slide;

//input Data
var input =require('../inputSheet.js');
var crossBrowserTesting =input.crossBrowserTesting;
var wait = input.wait;
var url = input.pasteUrl;
var accountPassword = input.password;
var testDomain = input.team;
var emailId = input.email;
var imageLink = input.imageLink;
var addLink = input.addLink;
var inputText = input.text;

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
			home = new Home(driver);
			deck = new Deck(driver);
			slide = new Slide(driver);
			page.maximum();
			page.open();
		});
		afterEach(function(){
			if(driver)

				driver.quit();
		});

		it('Verify that user is able to resize the asset in Slide Editor View PASTE-718#Smoke', function(){	

			//get browser on which script is getting executed
			page.getBrowser(function(val){
				browser = val;

				//Click Sign In with Slack button
				sign.signInWithSlack();

				//Enter Domain
				sign.team(testDomain);

				//Click Continue button
				sign.continueButton();

				//Enter email
				sign.emailText(emailId);

				//Enter password
				sign.providePassword(accountPassword);

				//Click Sign in
				sign.clickSignIn();

				//Authorize the sign in
				sign.clickAuthorize();

				//wait for decks to load
				home.waitForDecksToLoad();

				//add new Deck
				home.addNewDeck();

				//provide name to untitled deck
				deckName = deck.provideDeckName('Resize', function(deckName1)
						{
					deckName = deckName1;

					//add new slide
					deck.clickAddSlideButton();

					//provide text to slide
					slide.provideText(browser, inputText,function(value){				
						textOfSlide=value;

						//click upload button
						slide.clickAddMedia();

						//sleep
						driver.sleep(2000);

						//click add a link option
						slide.clickMediaOption(addLink);

						//upload video
						slide.provideUploadLink(imageLink);

						//click add button
						slide.clickAddButton();

						//wait for media to upload
						sign.shortwaitt();

						//resize
						slide.setAssetSize(function(previousValue){

							//click done
							slide.clickDone();

							slide.getAssetSize(function(actualValue){
								assert.equal(previousValue, actualValue ,["Unable to resze media assets in slide"]);
							})
						})
						//wait for media sset to get resize
						sign.shortwaitt();

						//Exit slide view
						slide.clickExitSlideView();

						//click Home button
						deck.clickHomeButton();

						//wait until media asset is uploaded successfully
						home.waitForFilesToUpload();

						//refresh the page
						home.refreshPage();

						//wait for decks to get load
						home.waitForDecksToLoad();

						//navigate to same deck  
						home.clickNthDeck(deckName);

						//Click more icon
						deck.clickMoreIcon();

						//delete deck
						deck.clickDeleteDeck();

						//confirm delete action
						deck.deleteConfirm();			

						//click user Bubble icon
						sign.clickUserBubble();

						//click sign Out menu item
						sign.clickSignOut();

						//Click sign Out from confirm dialog
						sign.clickSignOutConfirm();

						//wait untill user is logged out
						sign.waitUntillUserIsSignOut();
					});
				});
			}); 
		});
	});
}