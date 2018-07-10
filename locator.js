/**
Created By QA Source
 */
module.exports={
		elements: {
	        signInWithSlack : 'button[data-test="SlackSignInButton"]',
	        team : 'domain',
			continueButton : 'submit_team_domain',
	        email : 'email',
	        password : 'password',
	        signIn : 'signin_btn',
	        authorize : 'oauth_authorizify',
	        createDeck : '*[data-test="NewDeckButton"]',//'button[data-test="NewDeckButton"]', 
	        userBubble : 'moreMenu_s7rh31',
	        signOut : '//*[@data-test="SignOutMenuItem"]',
	        confirmSignOut : '*[data-test="ModalConfirm"]', //'button[data-test="ModalConfirm"]',
			invalidSignInMessage : 'alert alert_error',
			loggedInUser :'userName_1i04b3n',
	        
	        //sign in with email
	        signInWithEmail : '*[data-test="EmailSignInButton"]', //'a[data-test="EmailSignInButton"]',
	        emailEmail : 'email', //name
	        continueEmail : 'continue',
	        passwordEmail : 'password',
	        signInEmail :'signInWithPassword',
	        teamInUsserBubble : '//*[starts-with(@class,"teamName")]',
	        totalTeams : '//*[starts-with(@class,"item_")]',
	        domainTeamList : '//*[starts-with(@class,"domainTeamsList_")]/li[',
	        domainTeamList1 : ']//p[1]',
	        
	        //sign in with google
	        signInWithGoogle : '*[data-test="GoogleSignInButton"]', //a[data-test="GoogleSignInButton"]
	        emailGmail : 'identifierId',
	        next : 'identifierNext', 
	        passwordNext : 'passwordNext',
	        passwordGmaill: '.whsOnd.zHQkBf',
	        
	        
	        	
	        //Home View
	         decksLoad:'//*[@class="ReactVirtualized__Grid__innerScrollContainer"]',
			 loadingAfterSignIn : '//*[@class="ReactVirtualized__Grid ReactVirtualized__List"]',
	         channels : '//div[@data-reactid="11"]/div[', //div[@data-reactid="2"]/div/div[1]/div[2]/div/div/div[',
	         channels2 : ']/div/div/div[2]',
	         channelsCategorization : ']//*[name()="g"]',
	         allChannels : '//*[@data-reactid="11"]/*[@data-test="DeckGroups"]', //div[@data-reactid="11"]/div[@data-test="DeckGroups"]
	         allDeck : '//*[starts-with(@class,"title")]',
			 upgradeDialogue : '//*[@data-test="UpgradeModalOverlay"]',
			 upgradeMessage : '//*[@data-test="UpgradeModalOverlay"]//p[2]',
			 teamSetting : '*[data-test="TeamSettingsMenuItem"]', //div[data-test="TeamSettingsMenuItem"]
			 titleOfAllDecks : '//div[@class="ReactVirtualized__Grid__innerScrollContainer"]/div[',
			 titleOfAllDecks2 : ']//*[starts-with(@class,"title")]',
			 channelOfDeck : ']//*[contains(@class,"navigableChannel")]/div/div[2]',
			 inviteTeam : '*[data-test="InviteButton"]',
			 sendInvitation :'*[type="submit"]',
			 inviteChannel: '*[class="Select-value-label"]',
			 allchannelsInHomeView : '//div[@data-reactid="11"]',
			 rectangularBraces : ']',
			 sortingAToZ : './/*[@id="app"]/div/div/div/div[3]/div[1]/div/div[2]/button[3]',
			 sortingLastEdited : './/*[@id="app"]/div/div/div/div[3]/div[1]/div/div[2]/button[1]',
			 sortingLastCreated : './/*[@id="app"]/div/div/div/div[3]/div[1]/div/div[2]/button[2]',
			 thumbnail : ']//*[@data-test="contentContainer"]',
			 textOfFirstThumbnail : '//div[contains(@class,"innerScrollContainer")]/div[1]//*[@data-test="contentContainer"]/div[2]//span/span',
			 mediaOfFirstThumbnail :'//div[@class="ReactVirtualized__Grid__innerScrollContainer"]/div[1]//*[@data-test="AssetContainer"]',
			 placeholderTextOfChannels : '//*[@class="ReactVirtualized__Grid ReactVirtualized__List"]/div[1]',	
			 saving : '//div[@data-test="ViewManager"]/div/div/div[3]/div[1]/div/div[1]/div[2]/div',
	         switchTeam : 'Switch Team',
	         moreIcon : '*[data-test="HelpButton"]',
	         questionsAndFeedback : '//*[starts-with(@class,"popoverWrap")]/div[1]//span',
	         supportArticles : '//*[starts-with(@class,"popoverWrap")]/div[2]//span',
	         pasteMobileApp : '//*[starts-with(@class,"popoverWrap")]/div[3]//span',
	         termsOfService : '//*[starts-with(@class,"popoverWrap")]/div[4]//span',
	         intercom : '//*[starts-with(@class, "intercom-messenger")]',
	         pasteSupportLink : 'Go to Paste', //pastial link
	         pasteMobileAppPage : '//picture[contains(@class,"product-hero")]',
	         termsOfServicesPage: '//*[@id="fiftythree-terms-of-service"]',
	         mediaAssetThumbnailUpload : '//div[@class="ReactVirtualized__Grid__innerScrollContainer"]/div[1]//*[@data-test="AssetContainer"]//img',
	         profileIconFromUserBubble : '//*[@data-test="UserAccountAvatar"]/img',
	         
	        //Deck View
	        deckAddSlide : '//div[@data-test="Grid"]/div[1]',
            deckName : '*[data-test="DeckTitle"]', //input[data-test="DeckTitle"]
            channelInDeck :'//*[starts-with(@class,"navigableChannel")]', 
            GoToHomeView : '*[data-test="GoHome"]', //button[data-test="GoHome"]
            slide: 'grid-slide item_1k4zfd7-o_O-itemHover_14hidl8',
            addSlideAtAnyLocation:'//*[@data-test="Grid"]/div[',  //div[@data-test="Grid"]/div[
	        totalSlides : 'grid-slide item_1k4zfd7-o_O-itemHover_14hidl8',
	        verifyTextSlide :'//*[@data-test="Grid"]/div[',  //div[@data-test="Grid"]/div[
	        verifyTextSlide2 :  ']//*[@data-text="true"]', //]//span[@data-text="true"]
	        more : '*[data-test="DeckOptionsButton"]', //button[data-test="DeckOptionsButton"]
	        deleteDeck : '*[data-test="DeleteDeckMenuItem"]',  //div[data-test="DeleteDeckMenuItem"]
	        confirmDelete : '*[data-test="ModalConfirm"]',  //button[data-test="ModalConfirm"]
	        moveDeck : '//*[starts-with(@class,"moveDeckLink")]', 
	        channelsOfMoveUI : '//*[starts-with(@class,"singleChannel")]',
	        openFirstSlide : '//*[@data-test="Grid"]/div[1]/div[1]',   //div[@data-test="Grid"]/div[1]
	        channelSelectionFromMoveUI : '//*[@data-test="DeckMoverList"]/div[',   //div[@data-test="DeckMoverList"]/div[
	        duplicateDeck :'*[data-test="DuplicateDeckMenuItem"]',   //span[data-test="DuplicateDeckMenuItem"]
	        share : '*[data-test="ShareButton"]',   //button[data-test="ShareButton"]
			requireSignIn : 'pt-control-indicator',
			copyTextBox : '*[data-test="ShareCopyLinkInput"]',   //input[data-test="ShareCopyLinkInput"]
			deckNameSignOutUser : '//*[starts-with(@class,"title_")]',
			pageNoInDeck : ']//p',
			channelUserDropdown : '//div[@id="react-select-4--]',
            channelUserValue : '//div[contains(@id,"option-',
			 channelUserValue1 : '/div/div[2]',
            arrow : 'Select-arrow',
            sendButton2 : '*[type="Submit"]',
            checkboxSignIn : '*[type="checkbox"]',
            emojiReaction3 : '")]',
			slideContentFromDeckView : ']//*[@data-test="contentContainer"]/div[2]//*[@data-text="true"]',
			backgroundColorFromDeck : '//*[@data-test = "Grid"]/div[1]//div[@data-test="slideContainer"]',
			ThumbsUpemojiIconDeck : '//*[@data-test="ReactionThumbsUp"]',//*[@class="grid-slide item_1k4zfd7-o_O-itemHover_14hidl8"]/div[2]//*[@data-test="data-test="ReactionThumbsUp"]',
			commentIconInDeck : '//*[@data-test="CommentsBubbleCount"]/span',
			assignmentIcon :  '//*[starts-with(@class,"grid-slide")]/div[2]//*[name()="polyline"]',
			emojiIconDeck : '//*[contains(@class,"reactionTriggerGrid")]',
			moreIconInDeck : 'grid-item-options',
			pageNumberInDeck : '//*[starts-with(@class,"actionItem")]//p',
			deleteSlideFromDeckView : '//*[@data-test="GridItemDeleteButton"]',
			provideCommentInDeck : '//*[@data-test="CommentsBubbleCount"]',
			commentCountInDeckView :'//*[@data-test="CommentsBubbleCount"]/span',
			enterCommentInDeck : '//*[starts-with(@class,"comment-input")]',
			totalcommentsInDeck : '//*[@data-test="CommentsPopover"]//*[starts-with(@data-test,"Comment")]',
			lastCommentInDeck : '[',
			lastCommentInDeck1 : ']/div[2]/div[2]',
			copyButton : '//*[@class="pt-popover-content"]//button',
			popover : '//*[@class="pt-popover-content"]',
			addSlideIconOnGrid :'//*[@data-test="InsertionIndicator"][',
			addSLideFromMoreIcon : '//*[@data-test="GridItemInsertButton"]',
			iconsInDeckMoreOption : '//*[name()="path"]',
			cancelDeckDeltetion : '//*[@data-test="ModalCancel"]',
			slideContentForBlankSlideInDeckView : ']//*[@data-test="contentContainer"]/div[2]',
			plusPlaceholderEmptySlide : '//*[contains(@class,"buttonLabelHover")]',
			hoverInDeckView : '//div[@data-test="Grid"]/div[1]//button',
			userDetail: '//*[@class="pt-popover-target"]/span/div[1]/img',
			profileIconFromUserDetail : '//*[@class="pt-popover-content"]//img',
			userNameFromUserDetail : '//*[@class="pt-popover-content"]//p[1]',
			viewingStatusFromUserDetail : '//*[@class="pt-popover-content"]//p[2]',
			totalContributors : '//*[@class="pt-popover-content"]//li',
			getContributorIcon : '//*[@class="pt-popover-content"]//li[',
			getContributorIcon1 : ']//img',
			exportDeckAsPdf : '//*[@data-test="ExportDeckMenuItem"]',
			embedDeck : '//*[@data-test="EmbedDeckMenuItem"]',
			spanTag : '/span',
			isShadowPresentInDeck : '//*[@data-test="Grid"]/div[1]//*[@data-test="AssetContainer"]/div/div[2]/div[1]',

	        	
	        //Slide View
			slideAssignmentButton : '*[data-test="AssignSlideButton"]',
			doneButton : '*[data-test="DoneButton"]',    //button[data-test="DoneButton"]
			comment : '//*[starts-with(@class,"commentLabelPlaceholder")]',   //span[class="commentLabelPlaceholder_698tg"]
			addComment : '//*[contains(@class,"commentInput")]',
			sendButton : '//*[starts-with(@class,"sendButton")]',
			postedComment : '//*[starts-with(@class,"commentLabelPlaceholder")]', //span[class="commentLabelPlaceholder_698tg"]
			cross : '*[data-test="OverlayCloseButton"]',  //div[data-test="OverlayCloseButton"]
	        commentThread1 : '//*[@data-test="Comment',  //div[@data-test="Comment
			commentThread2 : '"]',
			commentCount : '//*[@data-test="CommentCount"]', //span[@data-test="CommentCount"]
			deleteSlide : '*[data-test="GridItemDeleteButton"]',//'*[data-test="DeleteButton"]'
			provideTextToSlide : '//*[@class="slide_l45n3r"]//*[@data-test="contentContainer"]/div[1]//*[@class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]',//'public-DraftStyleDefault-block public-DraftStyleDefault-ltr',//'//div[@class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]/span',//,//'.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr',
			provideTextToSlide1 : '//div[@class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]/span/span',//,//'.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr',
			
			confirmDelete : '*[data-test="ModalConfirm"]',  //button[data-test="ModalConfirm"]
			replyButton : '//*[starts-with(@class,"commentLabelPlaceholder")]',
			assignIcon : '*[data-test="AssignButton"]',  //button[data-test="AssignButton"]
			assignDropDown : 'Select-control',  //div[class="Select-control"]
			isAssigned : '*[data-test="SlideCollaboratorAssigned"]',  //button[data-test="UnassignSlideButton"]
			assignPopover : 'Select-option',
		    assignee1 : '//div[@class="Select-menu"]/div[',  
		    assignee2 : ']/div/div[2]',
		    editButton : '*[data-test="EditButton"]',  //button[data-test="EditButton"]
		    assigned: '//*[@data-test="SlideCollaboratorAssigned"]',//'//div[@data-test="SlideCollaborationControls"]/div//button',
		    emojiIcon : '//*[@data-reactid="2"]/div[2]//*[starts-with(@class,"reactionTriggerEditor_")]',//'//*[@data-reactid="2"]/div[2]//*[contains(@class,"reaction-button")]',
		    emojiReaction1 : '*[data-test= "',
		    emojiReaction2 : '"]',
		    exitpopovers : '//body',
		    slideMoreIcon : '//*[@data-reactid="2"]/div[2]//*[@class="grid-item-options"]//*[name()="g"]',
		    colorSWatch : '//*[@data-test="ColorPopover"]/div[2]//*[name()="circle"]',//'//*[@class="component_4wpar2"]/div[3]/div[2]//*[name()="circle"]',
		    backgroundColorFromSlideView : '//*[@data-test="OverlaySlideEditor"]',
		    uploadLink : '*[data-test="SearchMediaInput"]',
		    uploadAddButton : '*[data-test="AddMediaButton"]',
		    mediaAssetMessage : '//*[@data-test="MediaPopover"]//p',
		    upload1 : '//*[starts-with(@class,"popoverWrap_")]/div[',
		    upload2 :  ']//span[2]',
		    uploadOptions : '//*[starts-with(@class,"item_")]',
		    addMedia : '*[data-test="MediaButton"]',
		   	//giphy : '//*[@data-test="AddMediaGiphyItem"]',
		    giphySuggestion : '//*[@class="suggested-images"]/div[1]',
		    layoutSyle: '*[data-test="LayoutModeButton"]',
		    intro : '//*[@class="popoverWrap_14v1uwv"]/div[1]//span',
		    show : '//*[@class="popoverWrap_14v1uwv"]/div[2]//span',
		    tell : '//*[@class="popoverWrap_14v1uwv"]/div[3]//span',    
		    ifIntro :  'slide-editor-draft placeholder-h2-intro',
		    ifShow :  'slide-editor-draft placeholder-h2-show',
		    ifTell :  'slide-editor-draft placeholder-h2-tell',
		    ifShowWithoutText :  '//*[contains(@class,"placeholder-h2-show")]',
		    uploadAFile : 'providerIcon_dqa20p',
		    asset : '//*[@data-test="ViewManager"]/div[1]/div[2]//*[@data-test="Asset"]',
		    channelsInMoveUi : '//*[@data-test="DeckMoverList"]/div[',
		    channelsInMoveUi1 : ']/div/div[2]',
		    channelsInMoveUi2 : '1]/span',
			channelName : '//*[starts-with(@class,"singleChannel_")]',
			textFromSlide : '//*[@data-test="ViewManager"]/div[1]/div[2]//*[@data-test="contentContainer"]/div[2]//*[@data-text="true"]',
			assetFrame : '*[data-test="AssetFrameButton"]',
			assetPopover : '//*[starts-with(@class,"popoverWrap_")]//*[starts-with(@class,"item_")]',
			assetFrameItem : '//*[@class="popoverWrap_14v1uwv"]/div[',
			assetFrameItem1 : ']/div[1]',
			largeText :  '//*[@title ="Large Text"]',//*[@title ="Large Text"]//*[name()="svg"]',
			mediumText : '//*[@title ="Medium Text"]',//'//*[@title ="Medium Text"]//*[name()="svg"]',
			smallText : '//*[@title ="Small Text"]',//*[@title ="Small Text"]//*[name()="svg"]',
			bulletedList : '//*[@title ="Bulleted List"]',//*[@title ="Bulleted List"]//*[name()="g"]',//'//*[@title ="Bulleted List"]//*[name()="svg"]',
			isShadowPresent : '//*[starts-with(@class,"slide_")]//*[@data-test="AssetContainer"]/div/div[2]/div[1]',//*[@data-test="AssetBoxShadow"]',
			numberedList : '//*[@title ="Numbered List"]',
			code : '//*[@title ="Code"]',
			bold : '//*[@title ="Bold"]',
			italic : '//*[@title ="Italic"]',
			availableText : '//*[starts-with(@class,"slide_")]//*[@data-test="contentContainer"]/div[1]//*[contains(@class,"slide-',
			availableText2 :	'-tell")]',
			/*availableList : '//*[@class="slide_l45n3r"]//*[@data-test="contentContainer"]/div[1]//ul//*[contains(@class, "',
			availableList2 : '")] ',*/
			style : '//*[starts-with(@class,"slide_")]//*[@data-test="contentContainer"]/div[1]//*[contains(@style, "font-',
			style2 : '")]',
			provideChannelNameInDropdown : '//*[@class="Select-input"]/input',
			listOfChannel : 'Select-option',
			channelSelectionFromShareDropDown : '/div/div/div/div[2]',
			saveCopyMoreIcon : '//*[@data-test="GuestDeckOptionsButton"]',
			saveCopyOfDeck:'//*[@data-test="SaveCopyButton"]',
			mediaAsset : '//*[starts-with(@class,"slide_")]//*[@data-test="Asset"]',
			addSlideFromSLideView : '//*[@data-test="NewSlideButton"]',
			formattingToolbar : '//*[contains(@title,"Text") or contains(@title,"List") or contains(@title,"Bold") or contains(@title,"Italic") or contains(@title,"Code")]',
			linkFromThumbnail : '//*[@data-test="linkContent"]//a[1]',
			duplicateFromSlide : '//*[@data-test="GridItemDuplicateButton"]',
			isMedaUploadedImage : '//*[@data-test="ViewManager"]/div[1]/div[2]//*[@data-test="Asset"]//img',
			isMedaUploadedAnchor : '//*[@data-test="Asset"]//a',
			isVideoMediaUploaded : '//*[@data-test="Asset"]//*[name()="svg"]',
			navigateToNextSlide : '//*[@data-test="nextButton"]',
			unassignButton : '*[data-test="UnassignSlideButton"]', 
			previousButton :'*[data-test="previousButton"]',
			contentContainerforLandscapeSlide : '//*[@data-test="ViewManager"]/div[1]/div[2]//*[@data-test="contentContainer"]/div[2]',
			contentContainerforPortraitSlide : '//*[@data-test="ViewManager"]/div[1]/div[2]//*[@data-test="contentContainer"]/div[2]/div[1]',
			unsplashUpload : ' //*[@class="suggested-images"]/div[1]',
			MediaAssetLocation : '//*[@data-test="ViewManager"]/div[1]/div[2]//*[@id="multiAssetParentSizer"]//*[@data-test="assetContainerWrap', 
			MediaAssetLocation1 :	'"]//*[contains(@data-id,"content") or contains(@src, "filestackcontent")]',
		//	MediaAssetLocation2 :	'"]//*[contains(@data-id,"content")]',
			//*[@data-test="ViewManager"]/div[1]/div[2]//*[@id="multiAssetParentSizer"]//*[@data-test="assetContainerWrap0"]//*[contains(@data-id,"content") or contains(@src, "filestackcontent")]				
			fourthMediaAsset : '//*[@data-test="ViewManager"]/div[1]/div[2]//*[@id="multiAssetParentSizer"]//*[@data-test="assetContainerWrap3"]//img or //*[@data-test="ViewManager"]/div[1]/div[2]//*[@id="multiAssetParentSizer"]//*[@data-test="assetContainerWrap3"]//*[contains(@data-id,"content")]',
			firstMediaAssetAnchor : '',
			
		  //Slack
		    slackSignIn :'*[data-qa="cta_sign_in"]',
	        createWorkspace : 'c-button--nav',
	        emailSlack : 'signup_email',
	        consfirm : 'submit_btn', 
	        fullName : 'signup_real_name', 
	        passwordTeamCreate : 'signup_password',  
	        teamUserForSlack : 'lfs_input', 
	        slackTeamName : 'signup_team_name', 
	        slackUrl : 'signup_url',
	        agree : 'create_tos_i_agree', 
	        skipForNow : 'secondary_btn', 
	        invite : '//*[@id="invite_rows"]/div[',
	        invite2 :	']//input',//'//div[@id="invite_rows"]/div[1]//input',   
	        confimationCode : 'confirmation_code_group',
	        confimationCodePart1 : '//div[@class="confirmation_code split_input large_bottom_margin"]/div[',  
	        confimationCodePart3 : ']/div[',    
	        confimationCodePart2 : ']//div[@class="split_input_item input_wrapper"]',
	        useOfSlackTeamDropdown : 'lfs_item selected single',
	        useOfSlackTeamValue : '//div[@class="list_items"]/div[',  
	        crossIcon : '//*[@data-dismiss="close"]',   //button[@data-dismiss="close"]
	        skip : '//*[@data-value="skip"]',   //a[@data-value="skip"]
	        slackMenu : 'team_menu',
	        slackSignOut : 'logout',
	        nameinviteUser : 'invite_real_name',
	        passwordInviteUser : 'invite_password',
	        skipTutorial : '//*[@data-qa="skip_tutorial"]',   //button[@data-qa="skip_tutorial"]
	        loggedInUser :'//*[starts-with(@class,"userName")]',
	        slackSignIn :'*[data-qa="cta_sign_in"]',
	        slackSignBackIn :'*[data-qa="sign_back_in"]',
	        selectSlackChannel :'//*[@class="p-channel_sidebar__static_list"]/div[',
	        selectSlackChanne2 :']//*[@class ="p-channel_sidebar__name"]',
	        totalChannels :'//*[@class="p-channel_sidebar__static_list"]/div[@style="height: 26px;"]',
	        totalChannels2 :'//*[@class="p-channel_sidebar__static_list"]/div[@style="height: 18px;"]',
	        allNotifications : '*[class="c-virtual_list__item"]',
	        allNotificationsContainer : 'c-virtual_list__sticky_container',
	        historyLoading : 'p-degraded_list__loading',
	        linkNotifcation : '//*[@class="c-virtual_list__scroll_container"]/div[',
	        linkNotifcation2 : ']//*[@class="c-message__attachments"]//a',
	        assignmentlinkNotifcationUser : ']//*[@class="c-message__body"]//a',
	        assignmentlinkNotifcationMessage : ']//*[@class="c-message__body"]',
	        textOfLinkNotifcation :   ']//*[@class="c-message__attachments"]//a/span',
	        textOfLinkNotifcationAssignment : ']//*[@class="c-message__attachments"]//*[@class="c-message_attachment__text"]//a',
	        continueInBrowser : 'continue_in_browser_link',
	        InviteButton : '//*[@aria-label="Invite People"]/span',
	        inviteFromSlack : 'email_address', //name
	        submittAfterProvidingInvitee : 'admin_invites_submit_btn', //id
	        doneAfterProvidingInvitee : 'btn btn_large float_right dialog_cancel admin_invites_btn', //class
	        createChannel : '//*[@aria-label="Create a channel"]',
            provideChannelName: 'channel_create_title',
            saveChannel : 'save_channel',
            toogle : 'ts_toggle_button',
            slackPromotionBanner : '//*[@class="c-announcement-banner__dismiss"]',
			workspaceIcon : 'nav_menu_btn',
			channelSettings : 'channel_actions_toggle',
			additionalOptions : 'Additional options',
			deleteChannel : '//*[@data-action="delete"]//h3',
			deleteChannelCheckbox : '//*[contains(@id,"delete_channel_cb")]',
			deleteButton : '//*[@data-qa="create_action"]',
			archiveChannel : '//*[@data-action="archive"]//h3',
			confirmArchiveAction : '//*[@data-qa="create_action"]',
			unarchive : 'Un-archive',
			jumpTo :'//*[@aria-label="Open the Quick Switcher to jump to a conversation."]',
			jumpToSearchField : '//*[@data-qa="jumper_input"]',
			jumpToResults : '[class*=item_details]',//'//*[contains(@class,"item_details")]//ts-icon',//*[@class="channel_name small_left_margin"]',
			
	      //Gmail
	        emailAddress : 'identifierId',
	        nextButton : 'passwordNext',
	        passwordGmail : '//*[@id="password"]//input', 
	        gmailMore : '//a[contains(@title,"Google apps")]', 
	        selectGmail : '//li//*[contains(@href, "mail")]', 
	        slackCode : ' //tbody/tr[1]//*[@class="bog"]//b[1]',
	        userBubbleGmail : '//a[contains(@title,"elgon")]',//'gb_ab gbii',
	        signOutGmail : ' //*[contains(@href, "Logout")]',
	        joinNow : '//a[contains(@href, "join.slack.com")]',
	        nextButtonInGmail : '//*[@id="identifierNext"]//span',			
	        otherUserIcon : '//*[@id ="view_container"]//*[name()="svg"]',   //content[@class="xjKiLb"]/span
	        selectLoginFromOtherAccount1 : '//*[@id ="view_container"]//ul[1]//li',
	        selectLoginFromOtherAccount2 : '//*[@id ="view_container"]//ul[1]//li[',  
			userBubbleGmailApps :'//a[contains(@aria-label,"Google apps")]//*[name()="svg"]',
			
	        
	      //team Settings
	        members : 'pt-tab-1',
	        billingTab : 'pt-tab-2',
	        colorSwatch : '//*[@data-reactid=22]/li[1]//input',
	        teamName : '//*[@method="post"]//h1',
	        changeTeamName : '//*[@method="post"]/input[3]',
	        
	        //light Box View
	        zoomIn : '//*[@id="ToolbarTop"]/div[2]/span[1]//button[1]',
	        zoomOut : '//*[@id="ToolbarTop"]/div[2]/span[2]//button[1]',
	        closeLightBoxView : '//*[@id="ToolbarTop"]/span/button',
	        mediaSizeAfterZoomIn : 'cursor-grabber',
	        mediaSizeAfterZoomOut : 'cursor-zoom-in',
	        mediaAssetSize : '//*[@data-test="LightboxView"]/div[2]',
	        
	        //Billing 
	        upgradeButton : '//*[contains(@class,"',
	        upgradeButton1 :	'") and contains(@class,"pricing")]//*[@data-test="UpgradeButton"]',   //button[data-test="UpgradeButton"]
	        pay : 'Button-animationWrapper-child--primary Button',
	        upgradeBillingInformation: '//*[contains(@class,"',
	        upgradeBillingInformation1: '") and contains(@class,"pricing")]//h1',//'//div[@class="pt-tab-panel"]/div/div/div/span/div/p[2]',  
	        amountInPayButton: '//div[@class="Button-content"]/span/span/span',
	        close : 'Header-navClose',
	        backTOHome : '*[data-reactid="3"]',  //a[data-reactid="3"]
	        cardNumberForCard : '*[placeholder="Card number"]',
	        mmddForCard : '*[placeholder="MM / YY"]',
	        cvcForCard :  '*[placeholder="CVC"]',
	        billingPlan : '//*[starts-with(@class,"subscriptionWrapper")]//p[starts-with(@class,"planHeading")]',
	        upgradeBillingInformationButton :'//*[starts-with(@class,"updateButton")]',
	        stripeName : '*[placeholder="Name"]',
	        stripeStreet :	'*[placeholder="Street"]',
	        stripeCity :	'*[placeholder="City"]',
	        stripePostcode :	'*[placeholder="Postcode"]',
	        typeOfPlan : '//*[starts-with(@class,"pricingPlans")]/div[',
	        typeOfPlan1 : ']//h3',
	        totalPlans : '//*[starts-with(@class,"pricingPlanBox")]',
	        ProTeamPrice:'//*[contains(@class,"pricingPlanBox")]//p',
	        priceInOptedPlan : '//*[contains(@class,"copy")]//b',
	        
	        //member
	        totalMembers : '//*[@data-test="TeamMember"]',//'//div[@class="pt-tab-panel"]//form/div//div[@style="font-size: 20px;"]',
	       // totalUsersInPasteTeam : '//div[@class="pt-tab-panel"]//form/div',
	        emailOfUser : '//*[@data-test="TeamMembersList"]/div[',//'//div[@class="pt-tab-panel"]//form/div/div[',
	        emailOfUser2 :	']//*[@data-test="TeamMemberEmail"]',//']/div[1]/div[2]',
	        remove : '//*[@data-test="TeamMembersList"]/div[',//'//div[@class="pt-tab-panel"]//form/div/div[',
	        remove2 : ']//*[@data-test="RemoveTeamMemberButton"]',//']//button[@name="removeMember"]',
	        
	        //File Stack
	        dropbox : 'Connect to Dropbox',
	        dropBoxUsername : 'input[name="login_email"]',
	        dropBoxPassword : 'input[name="login_password"]',
	        allowAccess : 'allow_access',
	        totalFilesInDropBox : '//section[starts-with(@class,"content__box")]//*[starts-with(@class,"ng-scope")]',
	        selectFile : '//*[contains(@class,"content__box")]/div[',
	        selectFile1 : ']//button//span',
	        selectFile2 : ']//button',
	        frames : '//iframe',
	        dropBoxSignInWithGoogle : '//*[starts-with(@class,"auth-google")]',
	        fileStackBox : 'Box',
	        box : 'Connect to Box',
	        boxUserName : 'login',
	        allowAccessToBox : 'consent_accept_button',
	        fileOneDrive :'OneDrive',
	        oneDrive : 'Connect to OneDrive',
		    oneDriveUserName :'loginfmt', 
		    oneDrivePassword : 'passwd',
		    fileStackGoogleDrive : 'Google Drive',
		    googleDrive : 'Connect to Google Drive',
		    useAnotherGoogleAcount : 'identifierLink',
		    allowAccessToGoogleDrive : 'submit_approve_access',
		    
		    //switch team
		    differentTeams : '//*[starts-with(@data-test,"SwitchTeamItem")]',
		    teamDivison : '//*[starts-with(@class,"domainTeamsList")]',
		    teamNameFromSwitchTeam : '//*[starts-with(@class,"domainTeamsList")]/li[',
		    teamNameFromSwitchTeam1 : ']//p[1]',
		    
	        
	    }

}