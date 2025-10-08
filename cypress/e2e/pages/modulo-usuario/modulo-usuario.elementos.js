export class ModuloUsuarioElementos{
    static get screen_Buttons_Users(){
        return{
            get add_button(){
                return cy.get('a[class="btn btn-primary"][type="button"]');
            },
            get save_button(){
                return cy.get('button[class="btn btn-primary"][type="submit"]');
            },
            get cancelled_button(){
                return cy.contains('a.btn.btn-default', 'Cancelar');
            }
        }
    }
    static get inputs_Screen_Create_Users(){
        return {
            get input_Name(){
                return cy.get('input[id="FirstName"]', { timeout: 9000 });
            },
            get input_LastName(){
                return cy.get('input[id="LastName"]',{ timeout: 9000 });
            },
            get input_Email(){
                return cy.get('input[id="Email"]');
            },
            get input_Password(){
                return cy.get('input[id="password"]');
            },
            get input_ConfirmdPassword(){
                return cy.get('input[name="ConfirmPassword"]');
            },
            get input_Role(){
                return cy.get('input[id="RoleId"]');
            },

        }
    }
    static get mensajes_Error(){
        return{
            get inputError_Name(){
                return cy.get('span[id="FirstName-error"]');
            },
            get inputError_LastName(){
                return cy.get('span[id="LastName-error"]');
            },
            get inputError_Email(){
                return cy.get('span[id="Email-error"]');
            },
            get inputError_password(){
                return cy.get('span[id="password-error"]');
            },
            get inputError_ConfirmdPassword(){
                return cy.get('span[id="ConfirmPassword"]');
            },
            get inputError_Role(){
                return cy.get('span[id="RoleId-error"]');
            }
        }
    }
}