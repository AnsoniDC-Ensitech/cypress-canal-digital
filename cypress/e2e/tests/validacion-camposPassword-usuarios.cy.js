import { LogInData } from "../pages/LogIn/LogIn.data";
import { LogInMethods } from "../pages/logIn/logIn.methods";
import { ModuleUserMethods } from "../pages/module-user/module-user.methods";
import { MainPageData } from "../pages/main-page/main-page.data";
import { MainPageMethods } from "../pages/main-page/main-page.methods";
import { ModuleUsersData } from "../pages/module-user/module-user.data";

const user =  LogInData.validAcceses.username;
const password = LogInData.validAcceses.password;
const inpName = LogInData.selectorLogIn.inputname;
const inpPassword = LogInData.selectorLogIn.inputPassword;
const btnLogIn = LogInData.selectorBtnLogIn.loginButton;
const linkAdmin = MainPageData.menuOptions.administrationCollapse;
const linkUser = MainPageData.menuOptions.userMenu;
const btnCreate = ModuleUsersData.screenButtonsUsers.addButton;
const btnSave = ModuleUsersData.screenButtonsUsers.saveButton;
const selPassword = ModuleUsersData.selectorsName.inptPassword;
const selConfirmPassword = ModuleUsersData.selectorsName.inptConfirmdPassword;
const errorPassword = ModuleUsersData.messagesErrorPassword.mErrorPassword;
const errorConfirmPaswword = ModuleUsersData.messagesErrorPassword.mErrorPassword
const withoutNumber = MainPageData.PasswordComposition.withoutnumber;
const withoutLetter  = MainPageData.PasswordComposition.withoutletter;
const withoutSpecialCharacters = MainPageData.PasswordComposition.withoutSpecialCharacters;
const valsPassword = MainPageData.PasswordComposition.correctValue;

describe(MainPageData.testSuites.passwordValidation, () => {

        xit ('Validación de campo de tipo password', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIns(inpName, user, inpPassword, password,btnLogIn);
                MainPageMethods.clickOnMenuOpstions(linkAdmin);
                MainPageMethods.clickOnMenuOpstions(linkUser);
                ModuleUserMethods.clickOnButtonBySelector(btnCreate);
                ModuleUserMethods.verifyTypePassword(selPassword);
                ModuleUserMethods.verifyTypePassword(selConfirmPassword);
                cy.wait(3000)
        })

         xit ('Validación de la composición de la contraseña', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIns(inpName, user, inpPassword, password,btnLogIn);
                MainPageMethods.clickOnMenuOpstions(linkAdmin);
                MainPageMethods.clickOnMenuOpstions(linkUser)
                ModuleUserMethods.clickOnButtonBySelector(btnCreate);
                ModuleUserMethods.verifyPasswordComposition(selPassword, withoutNumber,btnSave, errorPassword);
                ModuleUserMethods.verifyPasswordComposition(selConfirmPassword, withoutNumber,btnSave, errorConfirmPaswword);
                ModuleUserMethods.verifyPasswordComposition(selPassword, withoutSpecialCharacters,btnSave, errorPassword);
                ModuleUserMethods.verifyPasswordComposition(selConfirmPassword, withoutSpecialCharacters,btnSave, errorConfirmPaswword);
                ModuleUserMethods.verifyPasswordComposition(selPassword, withoutLetter,btnSave, errorPassword);
                ModuleUserMethods.verifyPasswordComposition(selConfirmPassword, withoutLetter,btnSave, errorConfirmPaswword);
                ModuleUserMethods.verifyPasswordCompositionCorrect(selPassword, valsPassword,btnSave, errorPassword);
                ModuleUserMethods.verifyPasswordCompositionCorrect(selConfirmPassword, valsPassword,btnSave, errorConfirmPaswword);
                cy.wait(3000)
        })


})