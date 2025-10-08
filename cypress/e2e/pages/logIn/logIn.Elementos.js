export class LogInElementos{
    static get inputs_Display_LogIn(){
        return{
            get username(){
                return cy.get('input[id="Email"]');
            },
             get password(){
                return cy.get('input[id="Password"]');
            }
        }
    }

    static get login_Screen_Buttons(){
        return{
            get login_Button(){
                return cy.get('button[type="submit"]').contains('Iniciar Sesión')
            }
        }

    }
}