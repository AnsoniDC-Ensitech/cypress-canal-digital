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
                return cy.get('input[id="FirstName"]');
            },
            get input_LastName(){
                return cy.get('input[id="LastName"]');
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
}