import { ModuleUserElements } from "./module-user.elements";

export class ModuleUserMethods{
     //método genérico verificar que el tipo de campo
    static verifyInputType(input, attribute,value){
        ModuleUserElements.selectorInputs.selectorName(input)
        .should('have.attr', attribute, value);
    }

    // metodo genérico para verificar longitud maxima
    static verifyMaximumLengthInput(input,longText, maxLength){
        ModuleUserElements.selectorInputs.selectorName(input)
      .type(longText)
      .invoke('val')
      .should('have.length', maxLength);
    }

    //Metodo genérico para la acción de dar clic algún botón
     static clickOnButtonBySelector(selector){
        ModuleUserElements.screenButton.button(selector)
        .should('be.visible')
        .click({force:true});
    }
     // Método genérico para dar click a un botón por selector + texto
    static clickOnButtonByText(buttonData) {
        ModuleUserElements.screenButton.buttonByText(buttonData)
            .should('be.visible')
            .click({ force: true });
    }
    //Método genérico para verificar el atributo Maxlength o MinLength
    static verifyLengthAttributeInputs(selector, maxlength, number){
        ModuleUserElements.selectorInputs.selectorName(selector)
        .should('have.attr', maxlength, number);
    }

    //Método Genérico para verificar que no acepta espacios en blanco
    static verifyThatOnlySpacesCanBeeEnteredName(selector, emptyText, btn){
        ModuleUserElements.selectorInputs.selectorName(selector)
        .type(emptyText)        // intenta ingresar solo espacios
        .invoke('val')
        .should('eq', '')    // debe quedarse vacío
        this.clickOnButtonBySelector(btn)
    }

    //Método Genérico para verificar que no contenga espacios al inicio y final
    static verifyThatExtraSpacesAreRemovedName(selector, emptyText, btn){
        ModuleUserElements.selectorInputs.selectorName(selector)
        .clear()
        .type(emptyText)
        .invoke('val')
        .should('eq', emptyText.trim())  // espacios al inicio/final eliminados
        this.clickOnButtonBySelector(btn)
    }

    //Método Genérico para verificar los valores permitodos de tipo texto
     static verifyPermittedValues(selector, values, btn, messageError){
        ModuleUserElements.selectorInputs.selectorName(selector)
        .should('be.visible') 
        .clear()
        .type(values)
        .invoke('val')
        .should('eq', values)
        //click en el botón
        this.clickOnButtonBySelector(btn)
         // Verifica que NO se muestre ningún mensaje de error
         ModuleUserElements.inputsErrors.inputError(messageError)
        .should('not.exist') // no debe existir en el DOM
    }
    //Método Genérico para verificar caracateres inválidos
    static verifyInvalidSpecialChar(selector, values, btn, messageError){
        ModuleUserElements.selectorInputs.selectorName(selector) 
        .clear()
        .type(values)
        .invoke('val')
        .should('eq', values)
                //click en el botón
        this.clickOnButtonBySelector(btn)
         // Verifica que se muestre ningún mensaje de error
         ModuleUserElements.inputsErrors.inputError(messageError)
        .should('exist') // Si debe existir en el DOM
    }

        //Método Genérico para verificar tipo de campo Password
        static verifyInputTypePassword(selector){
            ModuleUserElements.selectorInputs.selectorName(selector)
            .should('have.attr', 'type', 'password');
        }
        
        //Método Genérico verificacion de composición de la contraseña
        static verifyPasswordComposition(selector, password, btn, validationError){
        ModuleUserElements.selectorInputs.selectorName(selector)
        .clear()
        .type(password)
        .invoke('val')
        .should('eq', password)
        //click en el botón
        this.clickOnButtonBySelector(btn)
         // Verifica que se muestre mensaje de error
         ModuleUserElements.passwordErrorMessages.inputErrorPassword(validationError)
         .should('exist')
    }
    //Método Genérico verificacion de composición de la contraseña es correcta
        static verifyPasswordCompositionCorrect(selector, password, btn, validationError){
        ModuleUserElements.selectorInputs.selectorName(selector)
        .clear()
        .type(password)
        .invoke('val')
        .should('eq', password)
        //click en el botón
        this.clickOnButtonBySelector(btn)
         // Verifica que se muestre mensaje de error
         ModuleUserElements.passwordErrorMessages.inputErrorPassword(validationError)
         .should('not.exist')
    }

    //Método generico para verificar el campo requerido
        static verifyRequiredFields(selector, btn, validationError){
            ModuleUserElements.selectorInputs.selectorName(selector)
            this.clickOnButtonBySelector(btn)
            ModuleUserElements.passwordErrorMessages.inputErrorPassword(validationError)
            .should('exist')
        }

    //Verificación de contraseñas no coincididas
        static verifyPasswordMatches(selector, values,selector2, values2, btn, error, text){
            ModuleUserElements.selectorInputs.selectorName(selector)
            .clear()
            .type(values)
            ModuleUserElements.selectorInputs.selectorName(selector2)
            .clear()
            .type(values2)
            this.clickOnButtonBySelector(btn)
            ModuleUserElements.inputsErrors.inputError(error)
            .should('be.visible')
            .and('contain.text', text)
        }
}