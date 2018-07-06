/**
Created By QA Source
 */


var assert = require('assert');
// locators
var locate = require ('../locator.js'); 
var totalMembersOfTeam = locate.elements.totalMembers;
var emailOfUser = locate.elements.emailOfUser;
var emailOfUser2 = locate.elements.emailOfUser2;
var remove = locate.elements.remove;
var remove2 = locate.elements.remove2;
var totalUsersInPasteTeam = locate.elements.totalUsersInPasteTeam;


//input
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;

var page = require('../framework/page.js');
function MembersPage (webdriver) {
page.call(this, webdriver, url);
}

MembersPage.prototype = Object.create(page.prototype);
MembersPage.prototype.constructor = MembersPage;


//get total members in team
MembersPage.prototype.getTotalMembersOfTeam= function(cb) 
{
	var count =0;
	var x = this.driver;
	this.driver.findElements({xpath: totalMembersOfTeam}).then(function(val){
		var totalMembersOfTeam= val.length;		
		cb(totalMembersOfTeam);
	});
}
//remove user from paste team
MembersPage.prototype.removeUser= function(user,cb) 
{
	var drive = this.driver;
	this.driver.findElements({ xpath: totalMembersOfTeam }).then(function(val){
		var length = val.length;
		for(var i=1; i<=length; i++){
			let ii =i;
			drive.findElement({xpath : emailOfUser + ii + emailOfUser2 }).getText().then(function(text){

				if(text==user){
					drive.findElement({xpath : remove + ii + remove2 }).click();
					cb(true);

				}
			},function(err){});
		}
	});
}


module.exports = MembersPage;

