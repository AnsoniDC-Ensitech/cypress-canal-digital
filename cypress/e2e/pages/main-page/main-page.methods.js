import { MainPageData } from "./main-page.data";
import { MainPageElements } from "./main-page.elements";

export class MainPageMethods{
    //método para navegar en el sitio web
      static browseWebsite(url){
         cy.clearCookies();
         cy.clearLocalStorage();
         cy.visit(url);
    }
    //método para gar clic alguna opción de menú
    static clickOnMenuOpstions(selectorMenu){
        MainPageElements.menuOptions.linkMenu(selectorMenu)
        .click({force:true});
    }
}