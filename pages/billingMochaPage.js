/**
Created By QA Source
 */


var assert = require('assert');
// locators
var locate = require ('../locator.js'); 
var upgradeButton = locate.elements.upgradeButton ;
var payButton = locate.elements.pay;
var upgradeInformation = locate.elements.upgradeBillingInformation;
var upgradeInformation1 = locate.elements.upgradeBillingInformation1;
var PayButton = locate.elements.amountInPayButton;
var closeButton = locate.elements.close;
var backTOHomeButton = locate.elements.backTOHome;
var cardNumber = locate.elements.cardNumberForCard;
var mmddForCard = locate.elements.mmddForCard;
var cvcNumber = locate.elements.cvcForCard;
var billingPlan = locate.elements.billingPlan;
var upgradeBillingInformationButton = locate.elements.upgradeBillingInformationButton;
var stripeName = locate.elements.stripeName;
var stripeStreet = locate.elements.stripeStreet;
var stripeCity = locate.elements.stripeCity;
var stripePostcode = locate.elements.stripePostcode;
var payment = locate.elements.sendInvitation;
var totalPlans = locate.elements.totalPlans;
var typeOfPlan = locate.elements.typeOfPlan;
var typeOfPlan1 = locate.elements.typeOfPlan1;
var upgradeButton1 = locate.elements.upgradeButton1;
var ProTeamPrice = locate.elements.ProTeamPrice;
var priceInOptedPlan = locate.elements.priceInOptedPlan;

//input
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var timeoutWait = Number(input.timeout);
var smallTimeoutWait = Number(input.verySmallTimout);

var page = require('../framework/page.js');
function BillingPage (webdriver) {
page.call(this, webdriver, url);
}

BillingPage.prototype = Object.create(page.prototype);
BillingPage.prototype.constructor = BillingPage;


//click upgrade button
BillingPage.prototype.clickUpgradeProButton= function(planClass) 
{	
	this.driver.wait(this.until.elementLocated({xpath: upgradeButton + planClass + upgradeButton1 }),timeoutWait).then(function(val){
		val.click().then(function(){},function(err){});
	},function(err){
		 throw new Error('Upgrade Pro button is not present');
	})
}
//get amount to be paid/person
BillingPage.prototype.getAmount= function(plan, planClass,cb) 
{
	var drive = this.driver;
	this.driver.findElements({ xpath: totalPlans }).then(function(totalPlans){
		var noOfPlans = totalPlans.length ;
		for(var i=1 ; i<=noOfPlans; i++){
			var ii =i;
			drive.findElement({ xpath: typeOfPlan + ii + typeOfPlan1 }).then(function(value){
				value.getText().then(function(typeofPlan){
				var planType = typeofPlan;
				if(plan == planType){
					drive.findElement({ xpath: upgradeInformation + planClass + upgradeInformation1 }).then(function(valu){				
						valu.getText().then(function(val){
							var amount = val.replace('$','');
							cb(amount);
						},function(err){});
					},function(err){})
					
					}
			},function(err){});
			},function(err){});
		}
		
	},function(err){});

}
//get total amount to be paid while upgrading the team
BillingPage.prototype.amountInPayButton= function(cb) 
{	
	this.driver.sleep(2000);
	this.driver.wait(this.until.elementLocated({xpath: PayButton}),timeoutWait).then(function(element){
		element.getText().then(function(val){
		var amount = val.split('$');
		cb(amount[1]);
		});
	});
}
//click close button
BillingPage.prototype.clickCloseButton= function() 
{
	this.driver.wait(this.until.elementLocated({className: closeButton }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to close billing stripe');
	})
	this.driver.switchTo().defaultContent();
}
//click back to Home  
BillingPage.prototype.clickbackTOHomeButton= function() 
{
	this.driver.wait(this.until.elementLocated({css: backTOHomeButton }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to navigate to Home Page');
	})
}

//Provide Card Number
BillingPage.prototype.provideCardNumber= function(card) 
{
	this.driver.wait(this.until.elementLocated({css : cardNumber }),timeoutWait).then(function(val){
		val.sendKeys(card);
	},function(err){
		 throw new Error('Unable to provide card details');
	})
}

//Provide mmdd Number
BillingPage.prototype.provideMmdd= function(mmdd) 
{
	this.driver.wait(this.until.elementLocated({ css : mmddForCard }),timeoutWait).then(function(val){
		val.sendKeys(mmdd);
	},function(err){
		 throw new Error('Unable to provide expiry month and date');
	})
}

//Provide cvc Number
BillingPage.prototype.provideCVV= function(cvc) 
{
	this.driver.wait(this.until.elementLocated({ css : cvcNumber }),timeoutWait).then(function(val){
		val.sendKeys(cvc);
	},function(err){
		 throw new Error('Unable to provide cvv');
	})
}
//click Pay Button
BillingPage.prototype.clickPayButton= function() 
{
	this.driver.wait(this.until.elementLocated({ className: payButton }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click Pay button');
	})
}
//get the plan of user
BillingPage.prototype.getPlan= function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath: billingPlan }),timeoutWait).then(function(element){
		element.getText().then(function(plan){		
		cb(plan);	
	},function(err){
		cb('');
	});
	},function(err){
		cb('');
	});
}
//switch back to page from stripe
BillingPage.prototype.switchBackToWebPage= function() 
{
	this.driver.switchTo().defaultContent();
}
//is update billing information button is prest
BillingPage.prototype.isUpgradeProButtonPresent= function(cb) 
{
	this.driver.wait(this.until.elementLocated({ xpath: upgradeBillingInformationButton }),timeoutWait).then(function(element){
		cb(true);
	},function(err){
		cb(false);
	});
}
//provide user name
BillingPage.prototype.provideUserName= function(userName)
{

	var drive = this.driver;
	var until = this.until;
	this.driver.findElements({xpath : '//iframe'}).then(function(val){ 
		var  totalFrames = val.length -1 ;
		for(var i =0 ;i<=totalFrames; i++){
			let ii = i;
			drive.switchTo().frame(ii).then(function(){},function(err){});
			drive.wait(until.elementLocated({ css: stripeName }),timeoutWait).then(function(element){
			element.sendKeys(userName);			
		},function(err){
			drive.switchTo().defaultContent();
		});			
		}
		})
}

//provide street name
BillingPage.prototype.provideStreetName= function(streetName)
{
	this.driver.wait(this.until.elementLocated({ css: stripeStreet }),timeoutWait).then(function(val){
		val.sendKeys(streetName);
	},function(err){
		 throw new Error('Unable to provide street name in billing stripe');
	})
}
//provide city name
BillingPage.prototype.provideCityName= function(cityName)
{
	this.driver.wait(this.until.elementLocated({ css: stripeCity }),timeoutWait).then(function(val){
		val.sendKeys(cityName);
	},function(err){
		 throw new Error('Unable to provide city name in billing stripe');
	})
}
//provide post code
BillingPage.prototype.providePostCode= function(postCode)
{
	this.driver.wait(this.until.elementLocated({ css: stripePostcode }),timeoutWait).then(function(val){
		val.sendKeys(postCode);
	},function(err){
		 throw new Error('Unable to provide post code in billing stripe');
	})
}
//click payment info button
BillingPage.prototype.clickPaymentInfoButton= function()
{
	this.driver.wait(this.until.elementLocated({ css: payment }),timeoutWait).then(function(val){
		val.click();
	},function(err){
		 throw new Error('Unable to click payment info button in billing stripe');
	})
	this.driver.sleep(2000);
}
//Get Price from banner displayed in Team billing
BillingPage.prototype.getTeamPlanPrice= function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath: ProTeamPrice }),timeoutWait).then(function(element){
		element.getAttribute("innerHTML").then(function(val){		
		var price = val;
		var stringLenght = val.length;
		var indexOfPrice = price.indexOf('$');
		var leftString = price.substring(Number(indexOfPrice)+1);
		var billingPrice = leftString.split(' ')[0];
		cb(billingPrice);
		});
	},function(err){
		 throw new Error('Price banner is not available in Team Plan');
	})
}
//Get amount payed by customer as per billing plan
BillingPage.prototype.getAmountChargedAsPerPlan= function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath: priceInOptedPlan }),timeoutWait).then(function(element){
		element.getText().then(function(val){	
		var price = val;
		cb(price);
		});
	},function(err){
		 throw new Error('Charged amount in current plan section is not available in Team Plan');
	})
}

module.exports = BillingPage;