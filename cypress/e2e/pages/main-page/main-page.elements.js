export class MainPageElements{
    static get menuOptions(){
        return {
            linkMenu(selectorMenu){
                return cy.get(selectorMenu);
            }
        }
    }
}