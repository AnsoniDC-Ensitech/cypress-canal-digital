import { MainPageData } from "./main-page.data";
import { MainPageElements } from "./main-page.elements";

export class MainPageMethods{
      static browseWebsite(){
         cy.clearCookies();
         cy.clearLocalStorage();
         cy.visit(MainPageData.url);
    }

    static clickOnMenuOpstions(selectorMenu){
        MainPageElements.menuOptions.linkMenu(selectorMenu)
        .click({force:true});
    }
}