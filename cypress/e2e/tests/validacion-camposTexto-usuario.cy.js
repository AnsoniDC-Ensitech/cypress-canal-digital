import { LogInData } from "../pages/LogIn/LogIn.data";
import { LogInMethods } from "../pages/logIn/logIn.methods";
import { ModuleUserMethods } from "../pages/module-user/module-user.methods";
import { MainPageData } from "../pages/main-page/main-page.data";
import { MainPageMethods } from "../pages/main-page/main-page.methods";
import { ModuleUsersData } from "../pages/module-user/module-user.data";
const urlUser = MainPageData.url.urlCreateUser;
const urlSite = MainPageData.url.urlSite;
const user =  LogInData.validAcceses.username;
const password = LogInData.validAcceses.password;
const longText1 = 'A'.repeat(120);
const longText2 = MainPageData.valuesGreaterThan100Characters.longText;
const emptyText = MainPageData.valuesForEmptySpaces.emptyData;
const extraSpaces = MainPageData.valuesForEmptySpaces.dataWithSpacesAtTheBeginnin;
const specialChars = MainPageData.PermittedDataText.textWithCharacters;
const symbolText = MainPageData.PermittedDataText.textWithCharacters;
const hashtagText = MainPageData.PermittedDataText.textWithSimCat;
const valscatSign = MainPageData.stringsComposedOfSpecialCharacters.catSign;
const valsDoubleQuotationMarks = MainPageData.stringsComposedOfSpecialCharacters.doubleQuotationMarks;
const valsexclamationMark = MainPageData.stringsComposedOfSpecialCharacters.exclamationMark;
const valscompoundWithSymbols = MainPageData.stringsComposedOfSpecialCharacters.compoundWithSymbols;
const valsCurrencySymbol = MainPageData.stringsComposedOfSpecialCharacters.currencySymbol;
const valsAsteriskss = MainPageData.stringsComposedOfSpecialCharacters.asterisks;
const valsbracket = MainPageData.stringsComposedOfSpecialCharacters.bracket;
const valsSingleQuotationMarks = MainPageData.stringsComposedOfSpecialCharacters.singleQuotationMarks;
const selName = ModuleUsersData.selectorsName.inptName;
const selLastname = ModuleUsersData.selectorsName.inptLastname;
const btnSave = ModuleUsersData.screenButtonsUsers.saveButton;
const btnCreate = ModuleUsersData.screenButtonsUsers.addButton;
const msgErrName = ModuleUsersData.errorMessagesInputs.inputErrorName;
const msgErrLastname = ModuleUsersData.errorMessagesInputs.inputErrorLastname;
const selLinkAdmin = MainPageData.menuOptions.administrationCollapse;
const selLinkUser = MainPageData.menuOptions.userMenu;
const inpName = LogInData.selectorLogIn.inputname;
const inpPassword = LogInData.selectorLogIn.inputPassword;
const btnLogin = LogInData.selectorBtnLogIn.loginButton;
const maxlength = 'maxlength';
const nmax = '100';

xdescribe(MainPageData.testSuites.textValidation, () => {
  it('Verificación de la longitud de campos de tipo texto', () => {
    MainPageMethods.browseWebsite(urlSite);
    LogInMethods.logIn(inpName, user, inpPassword, password,btnLogin);
    MainPageMethods.clickOnMenuOpstions(selLinkAdmin);
    MainPageMethods.clickOnMenuOpstions(selLinkUser);
    ModuleUserMethods.clickOnButtonBySelector(btnCreate);
    ModuleUserMethods.verifyLengthAttributeInputs(selName, maxlength, nmax);
    ModuleUserMethods.verifyLengthAttributeInputs(selLastname,maxlength, nmax);
    ModuleUserMethods.verifyMaximumLengthInput(selName,longText1, nmax);
    ModuleUserMethods.verifyMaximumLengthInput(selLastname,longText2, nmax);
    cy.wait(3000);
  })

  xit('Verificación que no se admiten espacios en blanco', () => {
    MainPageMethods.browseWebsite(urlSite);
    LogInMethods.logIn(inpName, user, inpPassword, password,btnLogin);
    MainPageMethods.clickOnMenuOpstions(selLinkAdmin);
    MainPageMethods.clickOnMenuOpstions(selLinkUser);
    ModuleUserMethods.clickOnButtonBySelector(btnCreate);
    ModuleUserMethods.verifyThatOnlySpacesCanBeeEnteredName(selName, emptyText,btnSave);
    ModuleUserMethods.verifyThatExtraSpacesAreRemovedName(selName, extraSpaces, btnSave);
    ModuleUserMethods.verifyThatOnlySpacesCanBeeEnteredName(selLastname, emptyText, btnSave);
    ModuleUserMethods.verifyThatExtraSpacesAreRemovedName(selLastname, extraSpaces, btnSave);
    cy.wait(3000);
  })

   xit('Verificación que valores admitidos sean los correctos', () => {
    MainPageMethods.browseWebsite(urlSite);
    LogInMethods.logIn(inpName, user, inpPassword, password,btnLogin);
    MainPageMethods.clickOnMenuOpstions(selLinkAdmin);
    MainPageMethods.clickOnMenuOpstions(selLinkUser);
    ModuleUserMethods.clickOnButtonBySelector(btnCreate);
    ModuleUserMethods.verifyPermittedValues(selName, specialChars, btnSave, msgErrName);
    ModuleUserMethods.verifyPermittedValues(selLastname, specialChars, btnSave,msgErrLastname);
    ModuleUserMethods.verifyPermittedValues(selName, hashtagText, btnSave, msgErrName);
    ModuleUserMethods.verifyPermittedValues(selLastname, hashtagText, btnSave, msgErrLastname);
    ModuleUserMethods.verifyPermittedValues(selName, symbolText, btnSave, msgErrName);
    ModuleUserMethods.verifyPermittedValues(selLastname, symbolText, btnSave, msgErrLastname);
    cy.wait(3000);
  })

   xit('Verificación que NO  no se permita ingresar únicamente cadenas compuestas por caracteres especiales.', () => {
    MainPageMethods.browseWebsite(urlSite);
    LogInMethods.logIn(inpName, user, inpPassword, password,btnLogin);
    MainPageMethods.clickOnMenuOpstions(selLinkAdmin);
    MainPageMethods.clickOnMenuOpstions(selLinkUser);
    ModuleUserMethods.clickOnButtonBySelector(btnCreate);
    ModuleUserMethods.verifyInvalidSpecialChar(selName, valscatSign, btnSave, msgErrName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selLastname, valscatSign, btnSave, msgErrLastname); 
    ModuleUserMethods.verifyInvalidSpecialChar(selName, valsAsteriskss, btnSave, msgErrName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selLastname, valsAsteriskss, btnSave, msgErrLastname); 
    ModuleUserMethods.verifyInvalidSpecialChar(selName, valsDoubleQuotationMarks, btnSave, msgErrName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selLastname, valsDoubleQuotationMarks, btnSave, msgErrLastname); 
    ModuleUserMethods.verifyInvalidSpecialChar(selName, valscompoundWithSymbols, btnSave, msgErrName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selLastname, valscompoundWithSymbols, btnSave, msgErrLastname); 
    ModuleUserMethods.verifyInvalidSpecialChar(selName, valsexclamationMark, btnSave, msgErrName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selLastname, valsexclamationMark, btnSave, msgErrLastname); 
    ModuleUserMethods.verifyInvalidSpecialChar(selName, valsCurrencySymbol, btnSave, msgErrName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selLastname, valsCurrencySymbol, btnSave, msgErrLastname); ;
    ModuleUserMethods.verifyInvalidSpecialChar(selName, valsbracket, btnSave, msgErrName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selLastname, valsbracket, btnSave, msgErrLastname); 
    ModuleUserMethods.verifyInvalidSpecialChar(selName, valsSingleQuotationMarks, btnSave, msgErrName); 
    ModuleUserMethods.verifyInvalidSpecialChar(selLastname, valsSingleQuotationMarks, btnSave, msgErrLastname); 
    cy.wait(3000);
  })
})
