import { ModuloUsuarioElementos } from "./modulo-usuario.elementos";

export class ModuloUsuarioMetodos{
    static click_On_Button_Open_Screen_Create_Users(){
        ModuloUsuarioElementos.screen_Buttons_Users.add_button.click({force:true});
    }

    static click_On_Button_Create_User(){
        ModuloUsuarioElementos.screen_Buttons_Users.save_button.click({force:true});
    }

    static click_On_Button_Cancelled(){
        ModuloUsuarioElementos.screen_Buttons_Users.cancelled_button.click({force:true});
    }

    static verify_Maxlength_Attribute_Name(){
        ModuloUsuarioElementos.inputs_Screen_Create_Users.input_Name.should('have.attr', 'maxlength', '100');
    }
    static verify_Maxlength_Attribute_LastName(){
        ModuloUsuarioElementos.inputs_Screen_Create_Users.input_LastName.should('have.attr', 'maxlength', '100');
    }

    static verify_maximum_length_Input_Name(textLong){
        ModuloUsuarioElementos.inputs_Screen_Create_Users.input_Name
      .type(textLong)
      .invoke('val')
      .should('have.length', 100);
    }
    static verify_maximum_length_Input_LastName(textLong){
        ModuloUsuarioElementos.inputs_Screen_Create_Users.input_LastName
      .type(textLong)
      .invoke('val')
      .should('have.length', 100);
    }

    static verify_that_only_spaces_can_be_entered_name(textovacio){
        ModuloUsuarioElementos.inputs_Screen_Create_Users.input_Name
        .type(textovacio)        // intenta ingresar solo espacios
        .invoke('val')
        .should('eq', '')    // debe quedarse vacío
    }

    static verify_that_extra_spaces_are_removed_name(textovacio){
        ModuloUsuarioElementos.inputs_Screen_Create_Users.input_Name
        .clear()
        .type(textovacio)
        .invoke('val')
        .should('eq', 'usuario')  // espacios al inicio/final eliminados
    }

    static verify_empty_spaces_Name(test1, test2){
        this.verify_that_only_spaces_can_be_entered_name(test1);
        this.verify_that_extra_spaces_are_removed_name(test2);
    }

    static verify_that_only_spaces_can_be_entered_Lastname(textovacio){
        ModuloUsuarioElementos.inputs_Screen_Create_Users.input_LastName
        .type(textovacio)        // intenta ingresar solo espacios
        .invoke('val')
        .should('eq', '')    // debe quedarse vacío
    }

    static verify_that_extra_spaces_are_removed_Lastname(textovacio){
        ModuloUsuarioElementos.inputs_Screen_Create_Users.input_LastName
        .clear()
        .type(textovacio)
        .invoke('val')
        .should('eq', 'usuario')  // espacios al inicio/final eliminados
    }

     static verify_empty_spaces_Lastname(test1, test2){
        this.verify_that_only_spaces_can_be_entered_Lastname(test1);
        this.verify_that_extra_spaces_are_removed_Lastname(test2);
    }

}