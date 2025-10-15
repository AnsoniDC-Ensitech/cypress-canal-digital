import { LogInData } from "../pages/LogIn/LogIn.data";
import { LogInMethods } from "../pages/logIn/logIn.methods";
import { ModuleUserMethods } from "../pages/module-user/module-user.methods";
import { MainPageData } from "../pages/main-page/main-page.data";
import { MainPageMethods } from "../pages/main-page/main-page.methods";
import { ModuleUsersData } from "../pages/module-user/module-user.data";

const user =  LogInData.validAcceses.username;
const password = LogInData.validAcceses.password;
const selLogIn = LogInData.selectorLogIn;
const selBtn = LogInData.selectorBtnLogIn;
const selectMenu = MainPageData.menuOptions;
const buttonAdd = ModuleUsersData.screenButtonsUsers.addButton;
const buttonSave = ModuleUsersData.screenButtonsUsers.saveButton;
const selecPassword = ModuleUsersData.selectorsName.inptPassword;
const selecConfirmPassword = ModuleUsersData.selectorsName.inptConfirmdPassword;
const inputError = ModuleUsersData.errorMessagesInputs;
const errorPassword = ModuleUsersData.messagesErrorPassword.mErrorPassword;
const errorConfirmPaswword = ModuleUsersData.messagesErrorPassword.mErrorPassword
const withoutnumber = MainPageData.PasswordComposition.withoutnumber;
const withoutletter  = MainPageData.PasswordComposition.withoutletter;
const withoutSpecialCharacters = MainPageData.PasswordComposition.withoutSpecialCharacters;
const valuePassword = MainPageData.PasswordComposition.correctValue;

describe(MainPageData.testSuites.passwordValidation, () => {

        xit ('Validación de campo de tipo password', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIns(selLogIn.inputname, user, selLogIn.inputPassword, password,selBtn.loginButton);
                MainPageMethods.clickOnMenuOpstions(selectMenu.administrationCollapse);
                MainPageMethods.clickOnMenuOpstions(selectMenu.userMenu);
                ModuleUserMethods.clickOnButtonBySelector(buttonAdd);
                ModuleUserMethods.verifyTypePassword(selecPassword);
                ModuleUserMethods.verifyTypePassword(selecConfirmPassword);
                cy.wait(3000)
        })

         it ('Validación de la composición de la contraseña', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIns(selLogIn.inputname, user, selLogIn.inputPassword, password,selBtn.loginButton);
                MainPageMethods.clickOnMenuOpstions(selectMenu.administrationCollapse);
                MainPageMethods.clickOnMenuOpstions(selectMenu.userMenu);
                ModuleUserMethods.clickOnButtonBySelector(buttonAdd);
                ModuleUserMethods.verifyPasswordComposition(selecPassword, withoutnumber,buttonSave, errorPassword);
                ModuleUserMethods.verifyPasswordComposition(selecConfirmPassword, withoutnumber,buttonSave, errorConfirmPaswword);
                cy.wait(3000)
                ModuleUserMethods.verifyPasswordComposition(selecPassword, withoutSpecialCharacters,buttonSave, errorPassword);
                ModuleUserMethods.verifyPasswordComposition(selecConfirmPassword, withoutSpecialCharacters,buttonSave, errorConfirmPaswword);
                cy.wait(3000)
                ModuleUserMethods.verifyPasswordComposition(selecPassword, withoutletter,buttonSave, errorPassword);
                ModuleUserMethods.verifyPasswordComposition(selecConfirmPassword, withoutletter,buttonSave, errorConfirmPaswword);
                cy.wait(3000)
                ModuleUserMethods.verifyPasswordCompositionCorrect(selecPassword, valuePassword,buttonSave, errorPassword);
                ModuleUserMethods.verifyPasswordCompositionCorrect(selecConfirmPassword, valuePassword,buttonSave, errorConfirmPaswword);
                cy.wait(3000)
        })


})