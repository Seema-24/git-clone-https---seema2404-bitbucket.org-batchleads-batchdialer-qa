const phoneNumMenu = 'a[title="Phone System"]';
const buyDidbtn = (btn) =>  `//button[contains(.,"${btn}")]`;
const stateDrpdwn =
  '//div[@class="modal-body"]//div[contains(@class,"ss-select")]//span[contains(text(),"Select state")]';
const searchBtn = '.modal-body button svg[data-icon="search"]';
const firstNum = '.number';
const firstNumberChkBx = '.resizable-table-tbody .tr-dids .td span';
const orderNow = '.btn svg[data-icon="cart-shopping"]';
const dropdownOptions = '.ss-select-group-items';
const searchToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"Search started")]';
const closeBtn = '//button[contains(text(),"Cancel")]';
const closeButton = '//button[contains(text(),"Close")]';
const toast = '.Toastify__toast-body';
const deleteToast =
  '//div[@class="Toastify__toast-body"]//div[contains(text(),"The number has been deleted")]';
const assignNumberRadioBtn = (radioBtn) => `input[value="${radioBtn}"]`;
const assignToDrpdwn = (dropdown) => 
  `//div[@class="modal-content"]//div[span[contains(text(),"${dropdown}")]]`;
const ivrAttendent = 'a[title="IVR/Auto Attendant"]';
const newIvr = '//button[text()=" NEW IVR"]';
const Name = 'input[name="name"]';
const description = 'input[name="description"]';
const clickselectCampaign = '//span[text()="Select Campaign"]';
const selectFromDropdown = '.ss-select-dropdown';
const phoneNumber = '//span[text()="Select Extension"]';
const newWelcomePrompt = '//button[text()=" ADD NEW"]';
const uploadedWelcomePrompt = (fileName) =>
  "//span[contains(@class,'ss-select-value-label')][text()='" + fileName + "']";
const recordingName = '.modal-body input[name="name"]';
const textToSpeech = 'button[value="generate"]';
const recordingText = 'textarea[name="text"]';
const generateButton = '//button[text()="Generate"]';
const speech = '.progress';
const recordingSaveButton =
  "//div[@class='modal-footer']//button[text()=' SAVE']";
const ivrSaveButton = ".modal_btn button[class*='save']";
const saved = "//div[text()='Saved']";
const deleteIvr = (x) =>
  `//div[@class="tr"][div[@class="td"][text()="${x}"]]//img[contains(@src,"delete")]`;
const DeletedIVR = "//div[text()='IVR deleted']";
const inboundCallMenu = 'a[title="Inbound Calls"]';
const searchBox = '.search-box';
const newQueueBtn = '//button[contains(text(),"NEW QUEUE")]';
const tableHeader = '.resizable-table-thead .th';
const selectDropdown = (dropdownName) =>
  "//div[contains(@class,ss-select-control)]//span[text()='" +
  dropdownName +
  "']";
const ringStrategyRadioBtn = '.radio_cstm';
const radioBtn = '.radio_cstm';
const wrapupTimeout =
  '//div[div[label[text()="Wrapup Timeout"]]]/following-sibling::div//div[contains(@class,"ss-select") and not(contains(@class, "fakeinput"))]';
const ringTimeDuration =
  '//div[div[label[text()="Max Ring Time Duration"]]]/following-sibling::div//div[contains(@class,"ss-select") and not(contains(@class, "fakeinput"))]';
const timeoutDestination =
  '//div[div[label[text()="Timeout Destination"]]]/following-sibling::div//div[contains(@class,"ss-select") and not(contains(@class, "fakeinput"))]';
const afterHourDestination =
  '//div[div[label[text()="After Hours Destination"]]]/following-sibling::div//div[contains(@class,"ss-select") and not(contains(@class, "fakeinput"))]';
const createQueueBtn = '//button[text()="CREATE QUEUE"]';
const cancelBtn = '//button[contains(text(),"CANCEL")]';
const deleteBtn = (user) =>
  `//div[@class="tr"][div[@class="td"][text()="${user}"]]//img[contains(@src,"delete")]`;
const dncMenu = 'a[title="DNC"]';
const dncCards = '.dnc.card';
const uploadFileBtn = '//button[contains(text(),"Upload File")]';
const addBtn = (title) =>
  "//div[contains(@class,'card-title')][contains(.,'" + title + "')]//img[@src='/img/icon-row-add.svg']";
const numberField = '.modal-content input[type="text"]';
const saveBtn = '//button[contains(text(),"SAVE")]';
const addMoreBtn = '.modal-content img[src*="add"]';
const deleteAddedDncValue = (title, value) =>
  "//div[span[strong[contains(text(),'" +
  title +
  "')]]]//following-sibling::div//span[text()='" +
  value +
  "']/ancestor::div[@class='item']//img";
const selectStateDropdown = '.modal-content .ss-select';
const ivrDropdown = (title, dropdown) =>
  "//div[contains(@class,form-group)][.='" +
  title +
  "']/following-sibling::div//span[text()='" +
  dropdown +
  "']";
const newDigitBtn = '//button[contains(text(),"NEW DIGIT")]';
const addNewBtn = '//button[contains(text(),"ADD NEW")]';
const addNewCallResult = '//button[contains(text(),"New Call Result")]';
const newGroupBtn = '//button[contains(text(),"New Group")]';
const tableBody = '.group-inner .dispositions-sortable span';
const callResultMenu = 'a[title="Call Results"]';
const customRadioBtn = (x) =>
  "//label[contains(@class,'radio_cstm')][contains(.,'" + x + "')]";
const buttonColorBox = '.disposition-color';
const groupNameField = '.group-row input';
const addNewRuleBtn = '//button[contains(text(),"ADD NEW RULE")]';
const newRuleOptions = (option) =>
  "//a[@class='dropdown-item'][text()='" + option + "']";
const callResultSaveBtn = '//button[contains(text(),"Save")]';
const callResultCancelBtn = '//button[contains(text(),"Cancel")]';
const callResultDeleteBtn = '.disposition-controls .fa-trash';
const callResultEditBtn = (callResult) =>
  `//span[span[text()="${callResult}"]]/ancestor::tbody/descendant::span[@class="disposition-pencil-icon"]`;
const addPhoneGroup = '.card-title img[src*="add"]';
const destinationDropdown = '.modal-content .ss-select';
const destinationOptions = (option) =>
  "//div[contains(@class,'ss-select-option')][text()='" + option + "']";
const addedPhoneGroup = (group) =>
  `//div[@class="card-body"]//div[div[text()="${group}"]]//div[@class="dropdown"]//span`;
const uploadFile = 'input[type="file"]';
const uploadBtn =
  "//div[contains(@class,'dropbox')]//button[contains(text(),'Upload')]";
const uploadedFile = (fileName) =>
  `//div[@class="tr"][div[@class="td"][contains(text(),"${fileName}")]]//img[contains(@src,"delete")]`;
const dncFileDownloadbtn = (fileName) =>
  `//div[@class="tr"][div[@class="td"][contains(text(),"${fileName}")]]//img[contains(@src,"download")]`;
const dncUploadSearchBox =
  "//div[text()='DNC File Upload']/following-sibling::div//input[contains(@class,'search-box')]";
const callresultDropdown =
  'div[class="collapse show"] .row-calldisposition .ss-select';
const deleteRuleBtn = 'svg[data-icon="trash"]';
const addedNewDigit = '.number-editor input';
const removeNewDigit = (val) =>
  "//div[contains(@class,'number-editor')][input[@value='" +
  val +
  "']]/ancestor::div[contains(@class,'mb-3 row')]//img[contains(@src,'remove')]";
  //"']]/ancestor::div[@class='row']//img[contains(@src,'remove')]";
const contactName = '.custom_checkbox + td span:not(.fakelink)';
const phone = '.phone-number';
const nextPage = 'img[title="Next Page"]';
const contactMenu = 'img[src*="edit"]';
const addToDNC = "//a[@class='dropdown-item' and (text()='Add to DNC')]";
const cardText = '.card-text';
const searchedNumber = (number) =>
  `//div[@class="tr"][div[@class="td"][text()="${number}"]]`;
const searchedNumber1 = "//td[text()='9283662816']";
const areaCode = 'input[name="areacode"]';
const options = '.ss-select-option';
const editForm = '.edit-form';
const edit = (editName) =>
  `//div[@class="tr"][div[@class="td"][text()="${editName}"]]//img[contains(@src,"edit")]`;
const saveQueueBtn = '.save_btn';
const groupNameText = '.group-title';
const callResultsName = '.dropdown-item';
const campaignCallResultGroup = `//div[contains(@class,"ss-select-option")]//span[contains(@class,"campaign__status")]/parent::span`;
const callResultsDropdown = '.group-inner div.dropdown';
const saveFieldIcon = '.group-row input + span .fa-check';
const openCallResultGroup = (groupName) =>
  `//td[@class="group-title" and text()="${groupName}"]/preceding-sibling::td[@class="group-opener"]`;
const deleteCallResultGroupIcon = (groupName) =>
  `//td[@class="group-title" and text()="${groupName}"]/parent::tr[@class="group-row"]//span/*[name()="svg"][contains(@class,"fa-trash")]`;
const editCallResultGroupIcon = (groupName) =>
  `//td[@class="group-title" and text()="${groupName}"]/parent::tr[@class="group-row"]//span/*[name()="svg"][contains(@class,"fa-pencil")]`;
const showOnCampaignPage = `//label[contains(@class,"radio_cstm")][text()="Display on New Campaign Page"]//span[@class="checkmark"]`;
const ungroupedCallResults = '.group-row.noedit + .group-inner .dispositions-sortable span';
const dropdownItems = '.show .dropdown-item';
const phoneNumberCheckbox = (checkboxCount) =>
  `(//div[@class="td"]//span[@class="checkmark"])[${checkboxCount}]`;
const actionsDropdown = '.dids-selected .dropdown button';
const selectedCount = '.dids-selected .dids-selected-text span.bat-blue';
const selectAllCheckbox =
  '//div[contains(@class,"resizable-table-thead")]//span[@class="checkmark"]';
const totalNumbers = '.resizable-table-tbody .tr';
const modalWindow = '.modal-content';
const modalContentDropdown = '.modal-content .ss-select-control';
const callResultName = '.dispositions-sortable span';
const itemType = '.table-order-tbody__td';
const dncSearchBox = (dncBox) =>`//span[contains(.,'${dncBox}')]/parent::div/child::span//div[@class="search-box__wrapper"]/input`
const dncValue = (val) => `//div[@class="card-body"][contains(.,"${val}")]//div[@class="item"]`;
const shieldIcon = '[src*="shield"]';
const reputationUpdate =(title) => `//span[text()="${title}"]/parent::div`;

export default class PhoneNum {
  clickCallResultDeleteBtn() {
    cy.get(callResultDeleteBtn).then((del) => {
      for (let i = 0; i < del.length; i++) {
        cy.get(del[i]).click({force:true});
      }
    });
  }

  verifyCreatedCallResult(callResult) {
    cy.get('.ss-select-value-label').contains(callResult).should('be.visible');
  }

  verifyCreatedCallResultGroup(groupName) {
    cy.get('.form-label')
      .contains('Call Results')
      .parent()
      .siblings('div')
      .children('.ss-select')
      .click();
    cy.xpath(campaignCallResultGroup).should('contain.text', groupName);
  }

  clickCallResultEditBtn(callResult) {
    cy.xpath(callResultEditBtn(callResult)).first().click({force:true});
  }

  verifyCallResultDelete(callResult) {
    cy.xpath(callResultEditBtn(callResult)).should('not.exist');
  }

  enterSearchKeyword(search) {
    cy.get(searchBox).type(search);
  }

  enterPhoneToSearchKeyword(search) {
    const num = search.split('');
    for (let i = 0; i < num.length; i++) {
      if (num[i] != '(' && num[i] != ')' && num[i] != ' ' && num[i] != '-') {
        cy.get(searchBox).type(num[i],{force:true});
      }
    }
  }

  clickAddNewRuleBtn() {
    cy.xpath(addNewBtn).click();
  }

  selectRule(option) {
    cy.xpath(newRuleOptions(option)).click();
  }

  clickDeleteRuleBtn() {
    cy.get(deleteRuleBtn).first().scrollIntoView().click({force:true});
  }

  verifySearchResults(callResult) {
    cy.xpath(callResultEditBtn(callResult)).should('be.visible');
  }

  clickAddPhoneGroup() {
    cy.get(addPhoneGroup).click({ force: true });
  }

  verifyNumberGroupAddIcon() {
    cy.get(addPhoneGroup).should('be.visible');
  }

  SelectDestination(destination) {
    cy.get(destinationDropdown).first().click();
    cy.wait(1000);
    cy.xpath(destinationOptions(destination)).click();
  }

  clickSaveFieldIcon() {
    cy.get(saveFieldIcon).click();
  }

  VerifyAddedGroupName(name) {
    cy.get(groupNameText).should('contain.text', name);
  }

  VerifyDeleteGroup(name) {
    cy.get(groupNameText).should('not.contain.text', name);
  }

  verifyDestinationDropdown() {
    cy.get(destinationDropdown).should('be.visible');
  }

  clickDeleteCallResultGroupIcon(groupName) {
    cy.xpath(deleteCallResultGroupIcon(groupName)).click();
  }

  verifyAddedPhoneGroup(group) {
    cy.xpath(addedPhoneGroup(group)).should('be.visible');
  }

  clickDeletePhoneGroup(group) {
    cy.xpath(addedPhoneGroup(group)).click({force:true});
    this.clickDropdownItem('Delete');
  }

  clickEditCallResultGroupIcon(groupName) {
    cy.xpath(editCallResultGroupIcon(groupName)).click();
  }

  clickUploadFileBtn() {
    cy.xpath(uploadFileBtn).click({ force: true });
  }

  uploadFile(file) {
    cy.get(uploadFile).attachFile(file);
  }

  clickUploadBtn() {
    cy.xpath(uploadBtn).click();
  }

  selectCallResultsFromDropdown(callResultName) {
    cy.get(callResultsDropdown).click();
    cy.get(callResultsName).then((results) => {
      for (let i = 0; i < results.length; i++) {
        if (results[i].textContent.trim() === callResultName) {
          results[i].click();
        }
      }
    });
  }

  clickCloseBtn() {
    cy.xpath(closeButton, { timeout: 5000 }).click();
  }

  verifyUploadDncFile(fileName) {
    cy.xpath(uploadedFile(fileName)).should('be.visible');
  }

  enterCallResutlGroupName(name) {
    cy.get(groupNameField).type(name);
  }

  verifyDncFileDownloadBtn(fileName) {
    cy.xpath(dncFileDownloadbtn(fileName)).should('be.visible');
  }

  clickDeleteDncFile(fileName) {
    cy.xpath(uploadedFile(fileName)).click({force:true});
  }

  enterFileNameToSearch(search) {
    cy.xpath(dncUploadSearchBox).type(search);
  }

  verifySearchResult(result) {
    cy.xpath(uploadedFile(result)).should('be.visible');
  }

  clickOpenCallResultGroup(groupName) {
    cy.xpath(openCallResultGroup(groupName)).click();
  }

  chooseActiveInactive(choice) {
    cy.xpath(customRadioBtn(choice)).click();
  }

  verifyCallResultSaveBtn() {
    cy.xpath(callResultSaveBtn).should('be.visible');
  }

  verifyCallResultCancelBtn() {
    cy.xpath(callResultCancelBtn).should('be.visible');
  }

  clickCallResultSaveBtn() {
    cy.xpath(callResultSaveBtn).click({ force: true });
  }

  verifyUploadedWelcomePrompt(fileName) {
    cy.xpath(uploadedWelcomePrompt(fileName)).should('be.visible');
  }

  chooseShowOnNewCampaignPage(choice) {
    cy.xpath(customRadioBtn(choice)).click();
  }

  verifyAddNewRuleBtn() {
    cy.xpath(addNewRuleBtn).should('be.visible');
  }

  verifyShowOnNewCompaignPage(choice) {
    cy.xpath(showOnCampaignPage).should('be.visible');
  }

  verifyRules(rules) {
    for (let i = 0; i < rules.length; i++) {
      cy.xpath(customRadioBtn(rules[i])).should('be.visible');
    }
  }

  verifyButtonColorBox() {
    cy.get(buttonColorBox).should('be.visible');
  }

  chooseButtonColor(color) {
    cy.get(buttonColorBox).click();
  }

  verifyNumberGroupDropdown() {
    cy.xpath(selectDropdown('Select Number Group')).should('be.visible');
  }

  verifyCallResultGroupDropdown() {
    cy.xpath(selectDropdown('Select Call Results Group')).should('be.visible');
  }

  verifyActiveInactive(choice) {
    cy.xpath(customRadioBtn(choice)).should('be.visible');
  }

  clickPhoneNumberMenu() {
    cy.get(phoneNumMenu).click({ force: true });
  }

  clickBuyDidButton() {
    cy.xpath(buyDidbtn('BUY NUMBER')).click({force:true});
  }

  selectStateModeOption(state) {
    cy.xpath(stateDrpdwn).click();
    cy.get(dropdownOptions)
      .contains(state)
      .then((option) => {
        option[0].click();
      });
  }
  clickSearchButton() {
    cy.get(searchBtn).click({ force: true });
  }

  selectPhoneNumber(number) {
    cy.get(firstNumberChkBx, { timeout: 30000 }).first().click();
  }

  clickOrderNowButton() {
    cy.get(orderNow).click({ force: true });
  }

  closingDialog() {
    cy.xpath(closeBtn).last({ timeout: 120000 }).should('be.enabled');
    cy.xpath(closeBtn).last().click();
  }

  getFirstPhoneNumber() {
    cy.get(firstNum, { timeout: 30000 })
      .first({ timeout: 30000 })
      .then((el) => {
        cy.readFile('cypress/fixtures/testData.json', (err, data) => {
          if (err) {
            return console.error(err);
          }
        }).then((data) => {
          data.BuyNumber = el.text().trim();
          cy.writeFile('cypress/fixtures/testData.json', JSON.stringify(data));
        });
      });
  }

  verifysearchStartedToast() {
    cy.xpath(searchToast, { timeout: 5000 }).should('be.visible');
  }

  verifyAddedPhoneNum(num) {
    cy.xpath(
      `//div[contains(@class,"resizable-table-tbody")]//div[contains(@class,"td")][text()="${num}"]`,
      { timeout: 10000 }
    ).should('be.visible');
  }
  verifyAddedPhoneNumNotVisible(num) {
    cy.xpath(
      '//table[contains(@class,"table")]//td[contains(.,"' + num + '")]',
      { timeout: 5000 }
    ).should('not.be.visible');
  }

  clickPhoneMenuDropdown(num) {
    cy.xpath(
      `//div[@class="tr"][div[@class="td"][text()="${num}"]]//div[@class="dropdown"]//img`,
      { timeout: 5000 }
    )
      .first()
      .scrollIntoView({force:true})
      .click({force:true});
  }

  deleteAddedPhoneNumber(num) {
    this.clickPhoneMenuDropdown(num);
    this.clickDropdownItem('Delete Number');
  }

  clickDropdownItem(itemName) {
    cy.get(dropdownItems).then((items) => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.trim() === itemName) {
          cy.get(items[i]).click();
          break;
        }
      }
    });
  }

  handleAlertForDelete() {
    cy.on('	window:alert', (str) => {
      expect(str).to.equal('Delete Number?');
    });
    cy.on('window:confirm', () => true);
  }
  verifyDeletedToast() {
    cy.xpath(deleteToast, { timeout: 20000 }).should('be.visible');
  }

  assignAgentUser(usrName) {
    cy.get(assignNumberRadioBtn('agent')).check({ force: true });
    cy.xpath(assignToDrpdwn('Agent')).first().click();
    cy.get(dropdownOptions)
      .contains(usrName)
      .then((option) => {
        option[0].click();
      });
  }

  clickIvrAttendent() {
    cy.get(ivrAttendent).click({ force: true });
  }

  clickNewIvr() {
    cy.xpath(newIvr).click();
  }

  enterName(name) {
    cy.get(Name).type(name, {force:true});
  }

  enterDescription(desc) {
    cy.get(description).type(desc,{force:true});
  }

  selectCampaign() {
    cy.xpath(clickselectCampaign).click();
    cy.get(selectFromDropdown)
      .contains('FirstCampaign')
      .then((option) => {
        option[0].click();
      });
  }

  selectNumber(state) {
    cy.xpath(phoneNumber).click();
    cy.get(selectFromDropdown)
      .contains(state)
      .then((option) => {
        option[0].click();
      });
  }

  clickAddNewWelcomePrompt() {
    cy.xpath(newWelcomePrompt).click({ force: true });
  }

  enterRecordingName(recording) {
    cy.get(recordingName).clear().type(recording);
  }

  clickTextToSpeech() {
    cy.get(textToSpeech).click();
  }

  enterRecordingText(text) {
    cy.get(recordingText).type(text);
  }

  clickGenerateButton() {
    cy.xpath(generateButton).click();
    cy.get(speech, { timeout: 7000 }).should('be.visible');
  }

  clickRecordingSaveButton() {
    cy.xpath(recordingSaveButton).click();
    cy.wait(2000);
  }

  clickIvrSaveButton() {
    cy.get(ivrSaveButton).click({ force: true });
  }

  verifySaved() {
    cy.xpath(saved).should('be.visible');
  }

  deleteIVR(name) {
    cy.xpath(deleteIvr(name)).click();
  }

  handleAlertForDelete() {
    cy.on('	window:alert', (str) => {
      expect(str).to.equal('Delete user?');
    });
    cy.on('window:confirm', () => true);
  }

  verifyDeletedIvr() {
    cy.xpath(DeletedIVR).should('be.visible');
  }

  clickInboundCallMenu() {
    cy.get(inboundCallMenu).click({ force: true });
  }

  verifySearchBox() {
    cy.get(searchBox).should('be.visible');
  }

  verifyNewQueueBtn() {
    cy.xpath(newQueueBtn).should('be.visible');
  }

  verifyTableHeaderName(header) {
    for (let i = 0; i < header.length; i++) {
      cy.get(tableHeader).should('contain.text', header[i]);
    }
  }

  verifyCallResultTableHeader(header) {
    for (let i = 0; i < header.length; i++) {
      cy.get('.table-responsive thead th').should('contain.text', header[i]);
    }
  }

  clickNewQueueBtn() {
    cy.xpath(newQueueBtn).click();
  }

  verifyNameField() {
    cy.get(Name).should('be.visible');
  }

  verifyDescriptionField() {
    cy.get(description).should('be.visible');
  }

  verifyExtensionsDropdown(dropdownName) {
    cy.xpath(selectDropdown(dropdownName)).should('be.visible');
  }

  selectExtensionDropdown(dropdownName, number) {
    cy.xpath(selectDropdown(dropdownName)).click().type(number).type('{enter}');
  }

  verifyAssignAgent(dropdownName) {
    cy.xpath(selectDropdown(dropdownName)).should('be.visible');
  }

  selectAssignAgent(name, agent) {
    cy.xpath(selectDropdown(name))
      .click({ force: true })
      .type(agent)
      .type('{enter}');
    cy.get("img[src*='question']").first().click({force:true});
  }

  verifyAssignCampaignDropdown(name) {
    this.verifyDropdownField(name);
  }

  verifyDropdownField(name) {
    cy.xpath(selectDropdown(name)).should('be.visible');
  }

  verifyNumberGroupCard() {
    cy.get('.did-groups-card').should('be.visible')
  }

  selectAssignCampaignDropdown(name, campaign) {
    cy.wait(1000);
    cy.xpath(selectDropdown(name)).click({force:true});
    cy.wait(1000);
    this.selectDropdownOption(campaign);
  }

  selectDropdownOption(optionName) {
    cy.get(options).then((opt) => {
      for (let i = 0; i < opt.length; i++) {
        if (opt[i].textContent.trim() === optionName) {
          cy.get(opt[i]).click({ force: true });
          break;
        }
      }
    });
  }

  clickOnButton(buttonName) {
    cy.get('button').then((Btn) => {
      for (let i = 0; i < Btn.length; i++) {
        if (Btn[i].textContent.trim() === buttonName) {
          cy.get(Btn[i]).click();
          break;
        }
      }
    });
  }

  selectCallResultCampaignDropdown(campaign) {
    cy.xpath(selectDropdown('Select Campaigns')).click();
    cy.wait(1000);
    cy.get('.ss-select-option').then((Names) => {
      for (let i = 0; i < Names.length; i++) {
        if (Names[i].textContent.trim() === campaign) {
          cy.get(Names[i]).click({force:true});
          break;
        }
      }
    });
  }

  verifyRingStrategy(strategy) {
    for (let i = 0; i < strategy.length; i++) {
      cy.get(ringStrategyRadioBtn).should('contain.text', strategy[i]);
    }
  }

  selectRingStrategy(strategy) {
    cy.get(ringStrategyRadioBtn).contains(strategy).click({});
  }

  verifyWrapupTimeoutDropdown() {
    cy.xpath(wrapupTimeout).should('be.visible');
  }

  selectWrapupTime(time) {
    cy.xpath(wrapupTimeout).click().contains(time).click();
  }

  verifyRingTimeDurationDropdown() {
    cy.xpath(ringTimeDuration).should('be.visible');
  }

  selectRingTimeDuration(time) {
    cy.xpath(ringTimeDuration).click().contains(time).click();
  }

  verifyTimeoutDestinationDropdown() {
    cy.xpath(timeoutDestination).should('be.visible');
  }

  selectTimeoutDestination(destination) {
    cy.xpath(timeoutDestination).click().contains(destination).click();
  }

  verifyAfterHourDestinationDropdown() {
    cy.xpath(afterHourDestination).should('be.visible');
  }

  selectAfterHourDestination(destination) {
    cy.xpath(afterHourDestination).click().contains(destination).click();
  }

  verifyCreateQueueBtn() {
    cy.xpath(createQueueBtn).scrollIntoView().should('be.visible');
  }

  clickCreateQueueBtn() {
    cy.xpath(createQueueBtn).click({ force: true });
  }

  verifyCancelBtn() {
    cy.xpath(cancelBtn).should('be.visible');
  }

  clickDeleteBtn(user) {
    cy.xpath(deleteBtn(user)).click({force:true});
  }

  clickDncMenu() {
    cy.get(dncMenu).click({ force: true });
  }

  verifyDncCards() {
    cy.get(dncCards).should('be.visible');
  }

  verifyDncCardTitle(title) {
    for (let i = 0; i < title.length; i++) {
      cy.get(dncCards).should('contain.text', title[i]);
    }
  }

  verifyDncTable() {
    cy.get(tableHeader).should('be.visible');
  }

  verifyDncTableHeader(header) {
    for (let i = 0; i < header.length; i++) {
      cy.get(tableHeader).should('contain.text', header[i]);
    }
  }

  verifyDncUploadFileBtn() {
    cy.xpath(uploadFileBtn).should('be.visible');
  }

  clickAddBtn(title) {
    cy.xpath(addBtn(title)).click({force:true});
  }

  verifyNumberField() {
    cy.get(numberField).should('be.visible');
  }

  enterDncNumber(number) {
    cy.get(numberField).type(number);
  }

  verifySaveBtn() {
    cy.xpath(saveBtn).should('be.visible');
  }

  clickSaveBtn() {
    cy.xpath(saveBtn).click({ force: true });
  }

  verifyAddMoreBtn() {
    cy.get(addMoreBtn).should('be.visible');
  }

  verifyAddedValue(number) {
    cy.get(dncCards).should('contain.text', number);
  }

  clickDeleteDncValue(title, number) {
    cy.xpath(deleteAddedDncValue(title, number)).click({force:true});
  }

  verifySelectStateDropdown() {
    cy.get(selectStateDropdown).should('be.visible');
  }

  selectState(state) {
    cy.get(selectStateDropdown).type(state);
    cy.wait(2000);
    cy.contains(state).click();
    // cy.xpath("//div[text()='" + state + "']").click();
    // cy.get(selectStateDropdown).type(state, { delay: 3000 }).type('{enter}');
  }

  verifyNewIVRBtn() {
    cy.xpath(newIvr).should('be.visible');
  }

  verifyNewDigitBtn() {
    cy.xpath(newDigitBtn).should('be.visible');
  }

  clickNewDigitBtn() {
    cy.xpath(newDigitBtn).click();
  }

  verifyIVRDropdown(title, dropdown) {
    cy.xpath(ivrDropdown(title, dropdown)).should('be.visible');
  }

  verifyWelcomePromptDropdown(dropdown) {
    cy.xpath(selectDropdown(dropdown)).should('be.visible');
  }

  verifyAddNewBtn() {
    cy.xpath(addNewBtn).should('be.visible');
  }

  verifyAddNewCallResultBtn() {
    cy.xpath(addNewCallResult).should('be.visible');
  }

  clickAddNewCallResultBtn() {
    cy.xpath(addNewCallResult).click({force:true});
  }

  verifyAddNewGroupBtn() {
    cy.xpath(newGroupBtn).should('be.visible');
  }

  clickAddNewGroupBtn() {
    cy.xpath(newGroupBtn).click();
  }

  verifyDefaultCallResults(body) {
    for (let i = 0; i < body.length; i++) {
      cy.get(tableBody).should('contain.text', body[i]);
    }
  }

  verifyRadioBtn(radio) {
    for (let i = 0; i < radio.length; i++) {
      cy.get(radioBtn).should('contain.text', radio[i]);
    }
  }

  clickCallResultMenu() {
    cy.get(callResultMenu).click({ force: true });
  }

  handleDeleteAlert(text) {
    cy.on('	window:alert', (str) => {
      expect(str).to.equal(text);
    });
    cy.on('window:confirm', () => true);
  }

  verifyAddedNewDigit(val) {
    cy.get(addedNewDigit).should('have.value', val);
  }

  verifyDeletedDigit() {
    cy.get(addedNewDigit).should('not.exist');
  }

  removeAddedNewDigit(val) {
    cy.xpath(removeNewDigit(val)).click();
  }

  clickContactMenu() {
    cy.get(contactMenu).first().click({force:true});
  }

  clickAddToDNC() {
    cy.xpath(addToDNC).click({ force: true });
  }

  verifyAddedDNCNumber(num) {
    cy.get(cardText).then((el) => {
      expect(el.text()).to.contains(num);
    });
  }
  verifySearchedNumber(number) {
    cy.wait(1000);
    cy.xpath(searchedNumber(number)).should('be.visible');
  }

  verifyNumberNotVisible() {
    cy.xpath(searchedNumber1).should('not.exist');
  }

  enterAreaCode(code) {
    cy.get(areaCode).type(code);
  }

  verifySearchNumber(code) {
    cy.get('.number', { timeout: 60000 }).should('contain.text', code);
  }

  clickeditIVR(name) {
    cy.xpath(edit(name)).first().click();
  }

  verifyEditIVRPage() {
    cy.get(editForm).should('be.visible');
  }

  clickeditQueue(name) {
    cy.xpath(edit(name)).first().click();
  }

  verifyEditQueuePage() {
    cy.get(editForm).should('be.visible');
  }

  clickSaveQueueBtn() {
    cy.get(saveQueueBtn).scrollIntoView().click();
  }

  verifyCallResultAvailableInUngrouped(callResultName) {
    cy.get(ungroupedCallResults).should('contain.text', callResultName);
  }

  verifyToastMessage(message) {
    cy.get(toast).should('contain.text', message);
  }

  selectPhoneNumberCheckbox(count) {
    for (let i = 1; i <= count; i++) {
      cy.xpath(phoneNumberCheckbox(i)).click({force:true});
    }
  }

  verifyActionsDropdownVisible() {
    cy.get(actionsDropdown).should('be.visible');
  }

  verifySelectedCount(count) {
    cy.get(selectedCount).last().should('contain.text', count);
  }

  clickSelectAllCheckbox() {
    cy.xpath(selectAllCheckbox).last().click({force:true});
  }

  getTotalNumbersAvailable() {
    cy.get(totalNumbers).then((count) => {
      cy.readFile('cypress/fixtures/testData.json').then((data) => {
        data.numbersCount = count.length;
        cy.writeFile('cypress/fixtures/testData.json', JSON.stringify(data));
      });
    });
  }

  clickActionsButton() {
    cy.get(actionsDropdown).click({force:true});
  }

  verifyModalWindowOpen() {
    cy.get(modalWindow).should('be.visible');
  }

  verifyModalWindowText(msg) {
    cy.get(modalWindow).should('contain', msg);
  }

  clickSelectGroupDropdown() {
    cy.get(modalContentDropdown).click();
  }

  verifyCallResultAvailable(callResult) {
    cy.get(callResultName).then((dispositions) => {
      for (let i = 0; i < callResult.length; i++) {
        expect(dispositions.text().toLowerCase()).to.contain(
          callResult[i].toLowerCase()
        );
      }
    });
  }

  verifySelectStateField() {
    cy.xpath(stateDrpdwn).should('be.visible');
  }

  verifyAreaCodeField() {
    cy.get(areaCode).should('be.visible');
  }

  selectNumberOneByOne(number) {
    for (let i = 1; i <= number; i++) {
      cy.get(firstNumberChkBx, { timeout: 30000 }).eq(i).click();
    }
  }

  selectNumberUsingDropdown() {
    cy.get('.ss-select-placeholder').click();
    cy.get('.ss-select-option').then((opt) => {
      for (let i = 0; i < opt.length; i++) {
        let elemnt = opt[i].textContent.trim();
        cy.contains(elemnt).click({force:true});

        if(elemnt !== 'Unselect All') { 
          cy.get('.ss-select-value-label').then(($ele) => {
            if($ele.text().includes('Select All')) {
              elemnt= 'Select All';
            }
            cy.get(`[title*="${elemnt}"]`).click({force:true});
          });
        }
      }
    });
  }

  verifyOrderNowBtn(status) {
    if(status === 'disable') {
      cy.xpath(buyDidbtn(' Order Now')).should('be.disabled')
    } else {
      cy.xpath(buyDidbtn(' Order Now')).should('be.enabled')
    }
  }

  checkAssignNumberToAgent() {
    cy.get(assignNumberRadioBtn('agent')).check();
    cy.xpath(assignToDrpdwn('Agent')).should('be.visible');
  }

  checkAssignNumberToGroup() {
    cy.get(assignNumberRadioBtn('group')).check();
    cy.xpath(assignToDrpdwn('Number Group')).should('be.visible');
  }

  checkAssignNumberToCallQueue() {
    cy.get(assignNumberRadioBtn('queue')).check();
    cy.xpath(assignToDrpdwn('Call Queue')).should('be.visible');
  }

  checkAssignNumberToVoicemail() {
    cy.get(assignNumberRadioBtn('voicemail')).check();
    cy.xpath('//span[text()="Default"]').should('be.visible');
  }

  verifyAssignNumbersRadioBtn() {
    this.checkAssignNumberToAgent();
    this.checkAssignNumberToGroup();
    this.checkAssignNumberToCallQueue();
    this.checkAssignNumberToVoicemail();
  }

  assignNumberToNumberGroup() {
    this.checkAssignNumberToGroup();
    cy.xpath(assignToDrpdwn('Number Group')).first().click();
    cy.get(options).first().click();
  }

  assignNumberToCallQueue() {
    this.checkAssignNumberToCallQueue();
    cy.xpath(assignToDrpdwn('Call Queue')).first().click();
    cy.get(options).first().click();
  }

  verifyAssignNumberLabel(status) {
    if(status === 'exist') {
      cy.get('.dids-order-label').should('be.visible');
    } else {
      cy.get('.dids-order-label').should('not.exist');
    }
  }

  verifySelectedAndTotalCount(num) {
    cy.get('.ss-select-placeholder').click();
    cy.contains('Select All').then(txt => {
      let val= txt.text().match(/\d+/g)
      this.verifySelectedCount(num+'/'+val);
    });
  }

  verifyOrderAmt() {
    cy.get('.table-order-amount').should('be.visible')
  }

  verifyItemTypes(type) {
    cy.get(itemType).should('contain.text', type)
  }


  verifyBulkPhoneNumber() {
    this.verifySelectedCount('0/');
    this.clickSelectAllCheckbox();
    this.verifySelectedAndTotalCount();
  }

  selectNumberDropdownAndVerifyCount() {
    cy.get('.ss-select-placeholder',{timeout:30000}).click();
    cy.get('.ss-select-option').then((opt) => {
      for (let i = 0; i < opt.length; i++) {
        let elemnt = opt[i].textContent.trim();
        cy.contains(elemnt).click({force:true});

        if(elemnt !== 'Unselect All') { 
          cy.get('.ss-select-value-label').then(($ele) => {
            if($ele.text().includes('Select All')) {
              elemnt= 'Select All';
            }
            cy.get(`[title*="${elemnt}"]`).then(txt => {
              let value= txt.text().match(/\d+/g);
              this.verifySelectedCount(value+'/');
            });
            cy.get(`[title*="${elemnt}"]`).click({force:true});
          });
        }
      }
    });
  }

  enterDncValue(field, val) {
    cy.xpath(dncSearchBox(field)).type(val,{force:true})
  }

  verifyDncValueLength(field, leng) {
    cy.xpath(dncValue(field)).should('have.length', leng);
  }
  
  clickExportBtn() {
    cy.get('[src*="icon-export"]').click({force:true});
    // cy.downloadFile('/img/icon-export-button.svg')
    
    // cy.get('[src*="icon-export"]').then
    // .readFile("cypress/downloads/dnc-export.csv")
    //   .then(function() {
    //      // Do something with the file.
    //   });
    // cy.reload()
  }

  verifyDownloadFile(file) {
    cy.readFile(`cypress/downloads/${file}`).should('exist');
    cy.exec('del /q "cypress\\downloads\\*.*"', { log: true, failOnNonZeroExit: false })
    cy.exec('rm cypress/downloads/*', { log: true, failOnNonZeroExit: false })
  }

  clickReplacePhoneNumber(num) {
    this.clickPhoneMenuDropdown(num);
    this.clickDropdownItem('Replace Number');
  }

  checkNewlyExistsCR() {
    cy.wait(2000).get('body').then($body => {
      if($body.find(callResultDeleteBtn).length) {
        this.clickCallResultDeleteBtn();
      }
    })
  }

  verifyTooltipText(tooltip) {
    for (let i = 0; i < tooltip.length; i++) {
      cy.get('[role="tooltip"]').should('contain.text', tooltip[i]);
    }
  }

  verifyPhoneReputationShieldIcon() {
    cy.get(shieldIcon).should('be.visible');
  }

  mouseOverOnShield() {
    cy.get(shieldIcon).first().trigger('mouseover');
  }

  mouseOverOnReputationQuest() {
    cy.get('[src*="reputation/question"]').trigger('mouseover');
  }

  clickOnShieldIcon() {
    cy.get(shieldIcon).first().click();
  }

  verifyAddedReputation(status) {
    cy.get(shieldIcon +`[alt="${status}"]`).should('be.visible')
  }

  verifyKpiUpdateCount(title, expVal) {
    for (let i = 0; i < title.length; i++) {
      cy.wait(1000).xpath(reputationUpdate(title[i]) + '//span[@class="value"]').then((val)  => {
        expect('/'+expVal).to.equals(val.text());
      });
    }
  }

  verifyUsageReputationCount(expVal) {
    cy.xpath(reputationUpdate('Phone Reputation Usage') + '//span[@class="value blue-text"]').then((val)  => {
      expect(String(expVal)).to.equals(val.text());
    });
  }


}
