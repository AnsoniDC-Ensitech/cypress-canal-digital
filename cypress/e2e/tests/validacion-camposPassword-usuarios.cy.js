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
const errPassword = ModuleUsersData.messagesErrorPassword.mErrorPassword;
const errConfirmPasword = ModuleUsersData.messagesErrorPassword.mErrorPassword
const withoutNumber = MainPageData.PasswordComposition.withoutnumber;
const withoutLetter  = MainPageData.PasswordComposition.withoutletter;
const withoutSpecialCharacters = MainPageData.PasswordComposition.withoutSpecialCharacters;
const valsPassword = MainPageData.PasswordComposition.correctValue;
const minLength = 'data-val-length-min';
const min = '8';
const maxLength = 'data-val-length-max';
const max = '20';
const atrr = 'type';
const values = 'password';
const valsLength4 = MainPageData.valuesPassword.vals4;
const valsLength6 = MainPageData.valuesPassword.vals6;
const valsLength7 = MainPageData.valuesPassword.vals7;
const valsLength20 =  MainPageData.valuesPassword.vals20;
const valsLength21 =  MainPageData.valuesPassword.vals21;
const valsLength25 =  MainPageData.valuesPassword.vals25;


describe(MainPageData.testSuites.passwordValidation, () => {

        xit ('Validación de campo de tipo password', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIn(inpName, user, inpPassword, password,btnLogIn);
                MainPageMethods.clickOnMenuOpstions(linkAdmin);
                MainPageMethods.clickOnMenuOpstions(linkUser);
                ModuleUserMethods.clickOnButtonBySelector(btnCreate);
                ModuleUserMethods.verifyInputType(selPassword, atrr, values);
                ModuleUserMethods.verifyInputType(selConfirmPassword, atrr, values);
                cy.wait(3000)
        })

         xit ('Validación de la composición de la contraseña', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIn(inpName, user, inpPassword, password,btnLogIn);
                MainPageMethods.clickOnMenuOpstions(linkAdmin);
                MainPageMethods.clickOnMenuOpstions(linkUser)
                ModuleUserMethods.clickOnButtonBySelector(btnCreate);
                ModuleUserMethods.verifyPasswordComposition(selPassword, withoutNumber,btnSave, errPassword);
                ModuleUserMethods.verifyPasswordComposition(selConfirmPassword, withoutNumber,btnSave, errConfirmPasword);
                ModuleUserMethods.verifyPasswordComposition(selPassword, withoutSpecialCharacters,btnSave, errPassword);
                ModuleUserMethods.verifyPasswordComposition(selConfirmPassword, withoutSpecialCharacters,btnSave, errConfirmPasword);
                ModuleUserMethods.verifyPasswordComposition(selPassword, withoutLetter,btnSave, errPassword);
                ModuleUserMethods.verifyPasswordComposition(selConfirmPassword, withoutLetter,btnSave, errConfirmPasword);
                ModuleUserMethods.verifyPasswordCompositionCorrect(selPassword, valsPassword,btnSave, errPassword);
                ModuleUserMethods.verifyPasswordCompositionCorrect(selConfirmPassword, valsPassword,btnSave, errConfirmPasword);
                cy.wait(3000)
        })

        xit ('Validación de longitud mínima de los campos de contrseña', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIn(inpName, user, inpPassword, password,btnLogIn);
                MainPageMethods.clickOnMenuOpstions(linkAdmin);
                MainPageMethods.clickOnMenuOpstions(linkUser);
                ModuleUserMethods.clickOnButtonBySelector(btnCreate);
                ModuleUserMethods.verifyLengthAttributeInputs(selPassword,minLength, min);
                ModuleUserMethods.verifyLengthAttributeInputs(selConfirmPassword, minLength,min);
                ModuleUserMethods.verifyPasswordComposition(selPassword, valsLength4, btnSave, errPassword);
                ModuleUserMethods.verifyPasswordComposition(selConfirmPassword, valsLength4, btnSave, errConfirmPasword);
                ModuleUserMethods.verifyPasswordComposition(selPassword, valsLength6, btnSave, errPassword);
                ModuleUserMethods.verifyPasswordComposition(selConfirmPassword, valsLength6, btnSave, errConfirmPasword);
                ModuleUserMethods.verifyPasswordComposition(selPassword, valsLength7, btnSave, errPassword);
                ModuleUserMethods.verifyPasswordComposition(selConfirmPassword, valsLength7, btnSave, errConfirmPasword);
                cy.wait(3000)
        })
        it ('Validación de longitud máxima de los campos de contrseña', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIn(inpName, user, inpPassword, password,btnLogIn);
                MainPageMethods.clickOnMenuOpstions(linkAdmin);
                MainPageMethods.clickOnMenuOpstions(linkUser);
                ModuleUserMethods.clickOnButtonBySelector(btnCreate);
                ModuleUserMethods.verifyLengthAttributeInputs(selPassword,maxLength, max);
                ModuleUserMethods.verifyLengthAttributeInputs(selConfirmPassword, maxLength,max);
                ModuleUserMethods.verifyPasswordCompositionCorrect(selPassword, valsLength20, btnSave, errPassword);
                ModuleUserMethods.verifyPasswordCompositionCorrect(selPassword, valsLength21, btnSave, errPassword);
                ModuleUserMethods.verifyPasswordCompositionCorrect(selPassword, valsLength25, btnSave, errPassword);
                ModuleUserMethods.verifyMaximumLengthInput(selPassword, valsLength25, max);
                cy.wait(3000)
        })

})