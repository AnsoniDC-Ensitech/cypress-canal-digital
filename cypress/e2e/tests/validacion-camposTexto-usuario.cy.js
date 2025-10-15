import { LogInData } from "../pages/LogIn/LogIn.data";
import { LogInMethods } from "../pages/logIn/logIn.methods";
import { ModuleUserMethods } from "../pages/module-user/module-user.methods";
import { MainPageData } from "../pages/main-page/main-page.data";
import { MainPageMethods } from "../pages/main-page/main-page.methods";
import { ModuleUsersData } from "../pages/module-user/module-user.data";



const user =  LogInData.validAcceses.username;
const password = LogInData.validAcceses.password;
const longText1 = 'A'.repeat(120);
const longText2 = MainPageData.valuesGreaterThan100Characters.longText;
const emptyText = MainPageData.valuesForEmptySpaces.emptyData;
const textWithExtraSpaces = MainPageData.valuesForEmptySpaces.dataWithSpacesAtTheBeginnin;
const textWithSpecialChars = MainPageData.PermittedDataText.textWithCharacters;
const symbolText = MainPageData.PermittedDataText.textWithCharacters;
const hashtagText = MainPageData.PermittedDataText.textWithSimCat;
const text = MainPageData.stringsComposedOfSpecialCharacters;
const selector = ModuleUsersData.selectorsName;
const button = ModuleUsersData.screenButtonsUsers;
const errorInputs = ModuleUsersData.errorMessagesInputs;
const errorPasword = ModuleUsersData.messagesErrorPassword;
const selectMenu = MainPageData.menuOptions;
const selLogIn = LogInData.selectorLogIn;
const selBtn = LogInData.selectorBtnLogIn;

describe(MainPageData.testSuites.textValidation, () => {
  xit('Verificación de la longitud de campos de tipo texto', () => {
    MainPageMethods.browseWebsite();
    LogInMethods.logIns(selLogIn.inputname, user, selLogIn.inputPassword, password,selBtn.loginButton);
    MainPageMethods.clickOnMenuOpstions(selectMenu.administrationCollapse);
    MainPageMethods.clickOnMenuOpstions(selectMenu.userMenu);
    ModuleUserMethods.clickOnButtonBySelector(button.addButton);
    ModuleUserMethods.verifyMaxlengthAttributeInputs(selector.inptName);
    ModuleUserMethods.verifyMaxlengthAttributeInputs(selector.inptLastname);
    ModuleUserMethods.verifyMaximumLengthInput(selector.inptName,longText1);
    ModuleUserMethods.verifyMaximumLengthInput(selector.inptLastname,longText2);
    cy.wait(3000);
  })

  xit('Verificación que no se admiten espacios en blanco', () => {
    MainPageMethods.browseWebsite();
    LogInMethods.logIns(selLogIn.inputname, user, selLogIn.inputPassword, password,selBtn.loginButton);
    MainPageMethods.clickOnMenuOpstions(selectMenu.administrationCollapse);
    MainPageMethods.clickOnMenuOpstions(selectMenu.userMenu);
    ModuleUserMethods.clickOnButtonBySelector(button.addButton);
    ModuleUserMethods.verifyThatOnlySpacesCanBeeEnteredName(selector.inptName, emptyText);
    ModuleUserMethods.verifyThatExtraSpacesAreRemovedName(selector.inptName, textWithExtraSpaces);
    ModuleUserMethods.verifyThatOnlySpacesCanBeeEnteredName(selector.inptLastname, emptyText);
    ModuleUserMethods.verifyThatExtraSpacesAreRemovedName(selector.inptLastname, textWithExtraSpaces);
    cy.wait(3000);
  })

   xit('Verificación que valores admitidos sean los correctos', () => {
    MainPageMethods.browseWebsite();
    LogInMethods.logIns(selLogIn.inputname, user, selLogIn.inputPassword, password,selBtn.loginButton);
    MainPageMethods.clickOnMenuOpstions(selectMenu.administrationCollapse);
    MainPageMethods.clickOnMenuOpstions(selectMenu.userMenu);
    ModuleUserMethods.clickOnButtonBySelector(button.addButton);
    ModuleUserMethods.verifyPermittedValues(selector.inptName, textWithSpecialChars, errorInputs.inputErrorName);
    ModuleUserMethods.verifyPermittedValues(selector.inptLastname, textWithSpecialChars, errorInputs.inputErrorLastname);
    ModuleUserMethods.clickOnButtonBySelector(button.saveButton);
    ModuleUserMethods.verifyPermittedValues(selector.inptName, hashtagText, errorInputs.inputErrorName);
    ModuleUserMethods.verifyPermittedValues(selector.inptLastname, hashtagText, errorInputs.inputErrorLastname);
    ModuleUserMethods.clickOnButtonBySelector(button.saveButton);
    ModuleUserMethods.verifyPermittedValues(selector.inptName, symbolText, errorInputs.inputErrorName);
    ModuleUserMethods.verifyPermittedValues(selector.inptLastname, symbolText, errorInputs.inputErrorLastname);
    ModuleUserMethods.clickOnButtonBySelector(button.saveButton);
    cy.wait(3000);
  })

   xit('Verificación que NO  no se permita ingresar únicamente cadenas compuestas por caracteres especiales.', () => {
    MainPageMethods.browseWebsite();
    LogInMethods.logIns(selLogIn.inputname, user, selLogIn.inputPassword, password,selBtn.loginButton);
    MainPageMethods.clickOnMenuOpstions(selectMenu.administrationCollapse);
    MainPageMethods.clickOnMenuOpstions(selectMenu.userMenu);
    ModuleUserMethods.clickOnButtonBySelector(button.addButton);
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptName, text.catSign, errorInputs.inputErrorName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptLastname, text.catSign, errorInputs.inputErrorLastname); 
    ModuleUserMethods.clickOnButtonBySelector(button.saveButton);
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptName, text.asterisks, errorInputs.inputErrorName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptLastname, text.asterisks, errorInputs.inputErrorLastname); 
    ModuleUserMethods.clickOnButtonBySelector(button.saveButton);
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptName, text.doubleQuotationMarks, errorInputs.inputErrorName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptLastname, text.doubleQuotationMarks, errorInputs.inputErrorLastname); 
    ModuleUserMethods.clickOnButtonBySelector(button.saveButton);
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptName, text.compoundWithSymbols, errorInputs.inputErrorName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptLastname, text.compoundWithSymbols, errorInputs.inputErrorLastname); 
    ModuleUserMethods.clickOnButtonBySelector(button.saveButton);
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptName, text.exclamationMark, errorInputs.inputErrorName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptLastname, text.exclamationMark, errorInputs.inputErrorLastname); 
    ModuleUserMethods.clickOnButtonBySelector(button.saveButton);
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptName, text.currencySymbol, errorInputs.inputErrorName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptLastname, text.exclamcurrencySymbolationMark, errorInputs.inputErrorLastname); 
    ModuleUserMethods.clickOnButtonBySelector(button.saveButton);
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptName, text.bracket, errorInputs.inputErrorName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptLastname, text.bracket, errorInputs.inputErrorLastname); 
    ModuleUserMethods.clickOnButtonBySelector(button.saveButton);
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptName, text.singleQuotationMarks, errorInputs.inputErrorName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selector.inptLastname, text.singleQuotationMarks, errorInputs.inputErrorLastname); 
    ModuleUserMethods.clickOnButtonBySelector(button.saveButton);
    cy.wait(3000);
  })
})
