import { LogInData } from "../pages/LogIn/LogIn.data";
import { LogInMethods } from "../pages/logIn/logIn.methods";
import { ModuleUserMethods } from "../pages/module-user/module-user.methods";
import { MainPageData } from "../pages/main-page/main-page.data";
import { MainPageMethods } from "../pages/main-page/main-page.methods";

const user =  LogInData.validAcceses.username;
const password = LogInData.validAcceses.password;

xdescribe(MainPageData.testSuites.passwordValidation, () => {

        it ('Validación de campo de tipo password', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIn(user,password);
                MainPageMethods.clickOnAdministrationLink();
                MainPageMethods.clickOnUserLink();
                ModuleUserMethods.openCreateUserScreen();
                ModuleUserMethods.verifyInputTypePassword();
                cy.wait(3000)
        })

         xit ('Validación de la composición de la contraseña', ()=>{
                MainPageMethods.browseWebsite();
                LogInMethods.logIn(user,password);
                MainPageMethods.clickOnAdministrationLink();
                MainPageMethods.clickOnUserLink();
                ModuleUserMethods.openCreateUserScreen();
                ModuleUserMethods.verifyInputTypePassword();
                cy.wait(3000)
        })


})