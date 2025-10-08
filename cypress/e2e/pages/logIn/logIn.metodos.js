//import { Logger } from "../../utileria/logger";
import { LogInElementos } from "./LogIn.Elementos";

export class LogInMetodos{
    
    static enterEmail(username){
        LogInElementos.inputs_Display_LogIn.username.invoke('val', username);
    }

    static enterPassword(password){
        LogInElementos.inputs_Display_LogIn.password.invoke('val', password);
    }

    static click_On_Button_LogIn(){
        LogInElementos.login_Screen_Buttons.login_Button.click({force:true});
    }

    static logIn (username, password){

        //Logger.subPaso('Ingresar Usuario')
        this.enterEmail(username);
        //Logger.subPaso('Ingresar Contraseña')
        this.enterPassword(password);
        //Logger.subPaso('Click al botón "Iniciar Sesión"')
        this.click_On_Button_LogIn();
    }
}