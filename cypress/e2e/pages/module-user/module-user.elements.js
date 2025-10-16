export class ModuleUserElements{
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