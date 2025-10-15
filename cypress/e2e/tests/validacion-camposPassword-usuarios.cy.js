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
const button = ModuleUsersData.screenButtonsUsers;
const selector = ModuleUsersData.selectorsName;
const inputError = ModuleUsersData.errorMessagesInputs;
const errorMessagesPass = ModuleUsersData.messagesErrorPassword;
const valuePassword = MainPageData.PasswordComposition;

describe(MainPageData.testSuites.passwordValidation, () => {

        xit ('Validación de campo de tipo password', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIns(selLogIn.inputname, user, selLogIn.inputPassword, password,selBtn.loginButton);
                MainPageMethods.clickOnMenuOpstions(selectMenu.administrationCollapse);
                MainPageMethods.clickOnMenuOpstions(selectMenu.userMenu);
                ModuleUserMethods.clickOnButtonBySelector(button.addButton);
                ModuleUserMethods.verifyTypePassword(selector.inptPassword);
                ModuleUserMethods.verifyTypePassword(selector.inptConfirmdPassword);
                cy.wait(3000)
        })

         it ('Validación de la composición de la contraseña', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIns(selLogIn.inputname, user, selLogIn.inputPassword, password,selBtn.loginButton);
                MainPageMethods.clickOnMenuOpstions(selectMenu.administrationCollapse);
                MainPageMethods.clickOnMenuOpstions(selectMenu.userMenu);
                ModuleUserMethods.clickOnButtonBySelector(button.addButton);
                ModuleUserMethods.verifyPasswordComposition(selector.inptPassword, valuePassword.withoutnumber,button.saveButton, errorMessagesPass.mErrorPassword);
                ModuleUserMethods.verifyPasswordComposition(selector.inptConfirmdPassword, valuePassword.withoutnumber,button.saveButton, errorMessagesPass.mErrorConfirmdPassword);
                cy.wait(3000)
        })


})