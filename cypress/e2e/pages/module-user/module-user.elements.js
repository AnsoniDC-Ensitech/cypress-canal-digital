export class ModuleUserElements{
    static get screenButtonsUsers(){
        return{
            get addButton(){
                return cy.get('a[class="btn btn-primary"][type="button"]');
            },
            get saveButton(){
                return cy.get('button[class="btn btn-primary"][type="submit"]');
            },
            get cancelledButton(){
                return cy.contains('a.btn.btn-default', 'Cancelar');
            }
        }
    }
    static get inputsScreenCreateUsers(){
        return {
            get inputName(){
                return cy.get('input[id="FirstName"]', { timeout: 3000 });
            },
            get inputLastname(){
                return cy.get('input[id="LastName"]',{ timeout: 3000 });
            },
            get inputEmail(){
                return cy.get('input[id="Email"]');
            },
            get inputPassword(){
                return cy.get('input[id="password"]');
            },
            get inputConfirmdPassword(){
                return cy.get('input[name="ConfirmPassword"]');
            },
            get inputRole(){
                return cy.get('input[id="RoleId"]');
            },

        }
    }
    static get errorMessages(){
        return{
            get inputErrorName(){
                return cy.get('span[id="FirstName-error"]');
            },
            get inputErrorLastname(){
                return cy.get('span[id="LastName-error"]');
            },
            get inputErrorEmail(){
                return cy.get('span[id="Email-error"]');
            },
            get inputErrorPassword(){
                return cy.get('span[id="password-error"]');
            },
            get inputErrorConfirmdPassword(){
                return cy.get('span[id="ConfirmPassword"]');
            },
            get inputErrorRole(){
                return cy.get('span[id="RoleId-error"]');
            }
        }
    }
    static get messagesErrorPassword(){
        return{
           
             get mErrorPassword(){
                return cy.get('span[class="text-danger field-validation-error"][data-valmsg-for="Password"]')
            },
             get mErrorConfirmdPassword(){
                return cy.get('span[class="text-danger field-validation-error"][data-valmsg-for="ConfirmPassword"]');
            }
        }
    }
        //método genérico para obtener el selector del input del form
    static get selectorInputs(){
            return{
                selectorName(input){
                    return cy.get(input, { timeout: 3000 });
                }
            }
    }
    // Método genérico para seleccionar botones
    static screenButton = {
        
        // Para botones por selector CSS
        button(selector) {
            return cy.get(selector);
        },

        // Para botones por selector + texto (cy.contains)
        buttonByText(buttonData) {
            return cy.contains(buttonData.selector, buttonData.text);
        }
    }

     //método genérico de selector de mensajes de error
        static get inputsErrors(){
            return {
                inputError(error){
                    return cy.get(error,{ timeout: 3000 });
                }
            }
        }

        //Método genérico de selector de mensaje de validaciones de inputs Password
        static get passwordErrorMessages(){
            return {
                inputErrorPassword(inptPassword){
                    return cy.get(inptPassword, { timeout: 3000 });
                }
            }
        }

}