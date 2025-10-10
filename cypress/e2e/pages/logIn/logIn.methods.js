
import { LogInElements } from "./logIn.elements";

export class LogInMethods{
    
    static enterEmail(username){
        LogInElements.inputsDisplayLogIn.username.invoke('val', username);
    }

    static enterPassword(password){
        LogInElements.inputsDisplayLogIn.password.invoke('val', password);
    }

    static clickOnButtonLogIn(){
        LogInElements.loginScreenButtons.loginButton.click({force:true});
    }

    static logIn (username, password){

        //Logger.subPaso('Ingresar Usuario')
        this.enterEmail(username);
       // Logger.subPaso('Ingresar Contraseña')
        this.enterPassword(password);
        //Logger.subPaso('Click al botón "Iniciar Sesión"')
        this.clickOnButtonLogIn();
    }
}