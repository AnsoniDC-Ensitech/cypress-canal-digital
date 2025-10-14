
import { ModuleUserMethods } from "../module-user/module-user.methods";
import { LogInData } from "./LogIn.data";
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
    //Método Genérico para ingresar valores en los inputs del LogIn
    static enterValuesInputs(selector, values){
        LogInElements.selectorInputLogIn.inputsLogIn(selector)
        .clear()
        .type(values);
    }

    //Método para iniciar sesión
    static logIns(user, password, selectorBtn){
        this.enterValuesInputs(LogInData.selectorLogIn.inputname,user);
        this.enterValuesInputs(LogInData.selectorLogIn.inputPassword,password);
        ModuleUserMethods.clickOnButtonBySelector(selectorBtn);


    }
}