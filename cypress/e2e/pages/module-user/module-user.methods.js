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
         ModuleUserElements.mensajesError.inputErrorName
        .should('exist') // Si debe existir en el DOM
    }

    static verifyInvalidSpecialCharLastName(values){
        ModuleUserElements.inputsScreenCreateUsers.inputLastname 
        .clear()
        .type(values)
        .invoke('val')
        .should('eq', values)
         // Verifica que se muestre ningún mensaje de error
         ModuleUserElements.mensajesError.inputErrorLastname
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
         ModuleUserElements.mensajesErrorPassword.mensajeErrorPassword
         .should('exist')
    }

    static verifyPasswordCompositionConfirmdPassword(ConfirmPassword){
        ModuleUserElements.inputsScreenCreateUsers.inputConfirmdPassword
        .clear()
        .type(ConfirmPassword)
        .invoke('val')
        .should('eq', ConfirmPassword)
         // Verifica que se muestre ningún mensaje de error
         ModuleUserElements.mensajesErrorPassword.mensajeErrorConfirmdPassword
         .should('exist')
    }

    // metodo generico para verificar longitud maxima
    static verifyMaximumLengthInput(input,longText, maxLength = 100){
        ModuleUserElements.inputFormUser.inputName(input)
      .type(longText)
      .invoke('val')
      .should('have.length', maxLength);
    }
}