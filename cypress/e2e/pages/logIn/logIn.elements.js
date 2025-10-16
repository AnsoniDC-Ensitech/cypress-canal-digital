export class LogInElements{
    //Método genérico para selecionar los selectores de la pantalla LogIn
    static get selectorInputLogIn(){
        return{
            inputsLogIn(selector){
                return cy.get(selector);
            }
        }
    }
    //Método Genérico para selección de los selectores de los botones LogIn
    static get selectorBtnLogIn(){
        return{
            btnLogIn(selectorBtn){
                return cy.get(selectorBtn);
            }
        }
    }
}