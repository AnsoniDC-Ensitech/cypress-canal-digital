import { MainPageData } from "./main-page.data";
import { MainPageElements } from "./main-page.elements";

export class MainPageMethods{
      static browseWebsite(){
         cy.clearCookies();
         cy.clearLocalStorage();
         cy.visit(MainPageData.url);
    }

    static clickOnAdministrationLink(){
        MainPageElements.menuHome.administrationCollapse.click({force:true});
    }
    static clickOnUserLink(){
        MainPageElements.menuHome.userMenu.click({force:true});
    }
    static clickOnPermissionLink(){
        MainPageElements.menuHome.permissionMenu.click({force:true});
    }
    static clickOnRolesLink(){
        MainPageElements.menuHome.rolesMenu.click({force:true});
    }

}