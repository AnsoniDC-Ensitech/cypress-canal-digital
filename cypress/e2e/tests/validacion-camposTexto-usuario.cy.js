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
  it('Verificación de la longitud de campos de tipo texto', () => {
    MainPageMethods.browseWebsite();
    LogInMethods.logIns(user,password,selBtn.loginButton)
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
    LogInMethods.logIn(user,password);
    MainPageMethods.clickOnAdministrationLink();
    MainPageMethods.clickOnUserLink();
    ModuleUserMethods.openCreateUserScreen();
    ModuleUserMethods.verifyEmptySpacesName(emptyText,textWithExtraSpaces);
    ModuleUserMethods.verifyEmptySpacesLastname(emptyText,textWithExtraSpaces);
    cy.wait(3000);
  })

   xit('Verificación que valores admitidos sean los correctos', () => {
    MainPageMethods.browseWebsite();
    LogInMethods.logIn(user,password);
    MainPageMethods.clickOnAdministrationLink();
    MainPageMethods.clickOnUserLink();
    ModuleUserMethods.openCreateUserScreen();
    ModuleUserMethods.verifyPermittedValuesName(textWithSpecialChars);
    ModuleUserMethods.verifyPermittedValuesLastname(textWithSpecialChars);
    ModuleUserMethods.clickOnButtonCreateUser();
    ModuleUserMethods.verifyPermittedValuesName(hashtagText);
    ModuleUserMethods.verifyPermittedValuesLastname(hashtagText);
    ModuleUserMethods.clickOnButtonCreateUser();
    ModuleUserMethods.verifyPermittedValuesName(symbolText);
    ModuleUserMethods.verifyPermittedValuesLastname(symbolText);
    ModuleUserMethods.clickOnButtonCreateUser();
    cy.wait(3000);
  })

   xit('Verificación que NO  no se permita ingresar únicamente cadenas compuestas por caracteres especiales.', () => {
    MainPageMethods.browseWebsite();
    LogInMethods.logIn(user,password);
    MainPageMethods.clickOnAdministrationLink();
    MainPageMethods.clickOnUserLink();
    ModuleUserMethods.openCreateUserScreen();
    ModuleUserMethods.verifyInvalidSpecialCharName(text.catSign);
    ModuleUserMethods.verifyInvalidSpecialCharLastName(text.catSign);
    ModuleUserMethods.clickOnButtonCreateUser();
    ModuleUserMethods.verifyInvalidSpecialCharName(text.asterisks);
    ModuleUserMethods.verifyInvalidSpecialCharLastName(text.asterisks);
    ModuleUserMethods.clickOnButtonCreateUser();
    ModuleUserMethods.verifyInvalidSpecialCharName(text.doubleQuotationMarks);
    ModuleUserMethods.verifyInvalidSpecialCharLastName(text.doubleQuotationMarks);
    ModuleUserMethods.clickOnButtonCreateUser();
    ModuleUserMethods.verifyInvalidSpecialCharName(text.compoundWithSymbols);
    ModuleUserMethods.verifyInvalidSpecialCharLastName(text.compoundWithSymbols);
    ModuleUserMethods.clickOnButtonCreateUser();
    ModuleUserMethods.verifyInvalidSpecialCharName(text.exclamationMark);
    ModuleUserMethods.verifyInvalidSpecialCharLastName(text.exclamationMark);
    ModuleUserMethods.clickOnButtonCreateUser();
    ModuleUserMethods.verifyInvalidSpecialCharName(text.currencySymbol);
    ModuleUserMethods.verifyInvalidSpecialCharLastName(text.currencySymbol);
    ModuleUserMethods.clickOnButtonCreateUser();
    ModuleUserMethods.verifyInvalidSpecialCharName(text.bracket);
    ModuleUserMethods.verifyInvalidSpecialCharLastName(text.bracket);
    ModuleUserMethods.clickOnButtonCreateUser();
    ModuleUserMethods.verifyInvalidSpecialCharName(text.singleQuotationMarks);
    ModuleUserMethods.verifyInvalidSpecialCharLastName(text.singleQuotationMarks);
    ModuleUserMethods.clickOnButtonCreateUser();
    cy.wait(3000);
  })
})
