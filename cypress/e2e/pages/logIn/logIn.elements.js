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
                return cy.get('button[type="submit"]').contains('Iniciar Sesión')
            }
        }

    }
}