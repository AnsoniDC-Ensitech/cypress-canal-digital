export class MainPageElements{
    //Método obtener el selector del menú
    static get menuOptions(){
        return {
            linkMenu(selectorMenu){
                return cy.get(selectorMenu);
            }
        }
    }
}