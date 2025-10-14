export class LogInElements{
    static get inputsDisplayLogIn(){
        return{
            get username(){
                return cy.get('input[id="Email"]');
            },
             get password(){
                return cy.get('input[id="Password"]');
            }
        }
    }

    static get loginScreenButtons(){
        return{
            get loginButton(){
                return cy.get('button[type="submit"].btn.btn-primary.fw-semibold.py-2');
                    //button[type="submit"]').contains('Iniciar Sesión')
            }
        }
    }
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