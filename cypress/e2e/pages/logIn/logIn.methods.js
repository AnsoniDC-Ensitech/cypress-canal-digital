
import { ModuleUserMethods } from "../module-user/module-user.methods";
import { LogInElements } from "./logIn.elements";

export class LogInMethods{
    //Método Genérico para ingresar valores en los inputs del LogIn
    static enterValuesInputs(selector, values){
        LogInElements.selectorInputLogIn.inputsLogIn(selector)
        .clear()
        .type(values);
    }

    //Método para iniciar sesión
    static logIn(selectorUser,user, selectorPassword, password, selectorBtn){
        this.enterValuesInputs(selectorUser,user);
        this.enterValuesInputs(selectorPassword,password);
        ModuleUserMethods.clickOnButtonBySelector(selectorBtn);
    }
}