import { ModuleUserElements } from "./module-user.elements";

export class ModuleUserMethods{
    static openCreateUserScreen(){
        ModuleUserElements.screenButtonsUsers.addButton.click({force:true});
    }

    static clickOnButtonCreateUser(){
        ModuleUserElements.screenButtonsUsers.saveButton.click({force:true});
    }

    static clickOnButtonCancelled(){
        ModuleUserElements.screenButtonsUsers.cancelledButton.click({force:true});
    }

    static verifyMaxlengthAttributeName(){
        ModuleUserElements.inputsScreenCreateUsers.inputName.should('have.attr', 'maxlength', '100');
    }
    static verifyMaxlengthAttributeLastName(){
        ModuleUserElements.inputsScreenCreateUsers.inputLastname.should('have.attr', 'maxlength', '100');
    }

    static verifyMaximumLengthInputName(longText){
        ModuleUserElements.inputsScreenCreateUsers.inputName
      .type(longText)
      .invoke('val')
      .should('have.length', 100);
    }
    static verifyMaximumLengthInputLastName(longText){
        ModuleUserElements.inputsScreenCreateUsers.inputLastname
      .type(longText)
      .invoke('val')
      .should('have.length', 100);
    }

    static verifyThatOnlySpacesCanBeeEnteredName(emptyText){
        ModuleUserElements.inputsScreenCreateUsers.inputName
        .type(emptyText)        // intenta ingresar solo espacios
        .invoke('val')
        .should('eq', '')    // debe quedarse vacío
    }

    static verifyThatExtraSpacesAreRemovedName(emptyText){
        ModuleUserElements.inputsScreenCreateUsers.inputName
        .clear()
        .type(emptyText)
        .invoke('val')
        .should('eq', emptyText.trim())  // espacios al inicio/final eliminados
    }

    static verifyEmptySpacesName(test1, test2){
        this.verifyThatOnlySpacesCanBeeEnteredName(test1);
        this.verifyThatExtraSpacesAreRemovedName(test2);
    }

    static verifyThatOnlySpacesCanBeEnteredLastname(emptyText){
        ModuleUserElements.inputsScreenCreateUsers.inputLastname
        .type(emptyText)        // intenta ingresar solo espacios
        .invoke('val')
        .should('eq', '')    // debe quedarse vacío
    }

    static verifyThatExtraSpacesAreRemovedLastname(emptyText){
        ModuleUserElements.inputsScreenCreateUsers.inputLastname
        .clear()
        .type(emptyText)
        .invoke('val')
        .should('eq', emptyText.trim())  // espacios al inicio/final eliminados => .should('eq', 'usuario')
    }

     static verifyEmptySpacesLastname(test1, test2){
        this.verifyThatOnlySpacesCanBeEnteredLastname(test1);
        this.verifyThatExtraSpacesAreRemovedLastname(test2);
    }
    
    static verifyPermittedValuesName(values){
        ModuleUserElements.inputsScreenCreateUsers.inputName
        .should('be.visible') 
        .clear()
        .type(values)
        .invoke('val')
        .should('eq', values)
         // Verifica que NO se muestre ningún mensaje de error
         ModuleUserElements.mensajesError.inputErrorName
        .should('not.exist') // no debe existir en el DOM
    }

     static verifyPermittedValuesLastname(values){
        ModuleUserElements.inputsScreenCreateUsers.inputLastname
        .should('be.visible') 
        .clear()
        .type(values)
        .invoke('val')
        .should('eq', values)
         // Verifica que NO se muestre ningún mensaje de error
         ModuleUserElements.mensajesError.inputErrorLastname
        .should('not.exist') // no debe existir en el DOM
    }

    static verifyInvalidSpecialCharName(values){
        ModuleUserElements.inputsScreenCreateUsers.inputName 
        .clear()
        .type(values)
        .invoke('val')
        .should('eq', values)
         // Verifica que se muestre ningún mensaje de error
         ModuleUserElements.errorMessages.inputErrorName
        .should('exist') // Si debe existir en el DOM
    }

    static verifyInvalidSpecialCharLastName(values){
        ModuleUserElements.inputsScreenCreateUsers.inputLastname 
        .clear()
        .type(values)
        .invoke('val')
        .should('eq', values)
         // Verifica que se muestre ningún mensaje de error
         ModuleUserElements.errorMessages.inputErrorLastname
        .should('exist') // debe existir en el DOM
    }

    //verificar que el campo es de tipo contraseña
    static verifyInputTypePassword(){
        ModuleUserElements.inputsScreenCreateUsers.inputPassword.should('have.attr', 'type', 'password');
        ModuleUserElements.inputsScreenCreateUsers.inputConfirmdPassword.should('have.attr', 'type', 'password');
    }

    //verificar la composicion de la contraseña
    static verifyPasswordCompositionPassword(password){
        ModuleUserElements.inputsScreenCreateUsers.inputPassword
        .clear()
        .type(password)
        .invoke('val')
        .should('eq', password)
         // Verifica que se muestre ningún mensaje de error
         ModuleUserElements.messagesErrorPassword.mErrorPassword
         .should('exist')
    }

    static verifyPasswordCompositionConfirmdPassword(ConfirmPassword){
        ModuleUserElements.inputsScreenCreateUsers.inputConfirmdPassword
        .clear()
        .type(ConfirmPassword)
        .invoke('val')
        .should('eq', ConfirmPassword)
         // Verifica que se muestre ningún mensaje de error
         ModuleUserElements.messagesErrorPassword.mErrorConfirmdPassword
         .should('exist')
    }

    // metodo generico para verificar longitud maxima
    static verifyMaximumLengthInput(input,longText, maxLength = 100){
        ModuleUserElements.selectorInputs.selectorName(input)
      .type(longText)
      .invoke('val')
      .should('have.length', maxLength);
    }

    //Metodo generico para la acción de dar clic algún botón
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
    //Método genérico para verificar el atributo Maxlegnth
    static verifyMaxlengthAttributeInputs(selector){
        ModuleUserElements.selectorInputs.selectorName(selector)
        .should('have.attr', 'maxlength', '100');
    }

    //Método Genérico para verificar que no acepta espacios en blanco
    static verifyThatOnlySpacesCanBeeEnteredName(selector, emptyText){
        ModuleUserElements.selectorInputs.selectorName(selector)
        .type(emptyText)        // intenta ingresar solo espacios
        .invoke('val')
        .should('eq', '')    // debe quedarse vacío
    }

    //Método Genérico para verificar que no contenga espacios al inicio y final
    static verifyThatExtraSpacesAreRemovedName(selector, emptyText){
        ModuleUserElements.selectorInputs.selectorName(selector)
        .clear()
        .type(emptyText)
        .invoke('val')
        .should('eq', emptyText.trim())  // espacios al inicio/final eliminados
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

    //Método Genérico para verificar el tipo de campo constraseña
    static verifyTypePassword(selector){
        ModuleUserElements.selectorInputs.selectorName(selector)
        .should('have.attr', 'type', 'password');
    }


}