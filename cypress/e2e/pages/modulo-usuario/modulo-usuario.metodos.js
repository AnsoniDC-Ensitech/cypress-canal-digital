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

}