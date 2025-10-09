import { LogInData } from "../pages/LogIn/LogIn.data";
import { LogInMetodos } from "../pages/LogIn/LogIn.metodos";
import { ModuloUsuarioMetodos } from "../pages/modulo-usuario/modulo-usuario.metodos";
import { PaginaGeneralData } from "../pages/pagina-general/pagina-general.data";
import { PaginaGeneralMetodos } from "../pages/pagina-general/pagina-general.metodos";

const user =  LogInData.valid_Acceses.username;
const password = LogInData.valid_Acceses.password;

describe(PaginaGeneralData.testSuites.validacionPassword, () => {

        it ('Validación de campo de tipo password', ()=>{
                PaginaGeneralMetodos.navegar_Sitio_Web();
                LogInMetodos.logIn(user,password);
                PaginaGeneralMetodos.click_On_Link_Administrar();
                PaginaGeneralMetodos.click_On_Link_Usuarios();
                ModuloUsuarioMetodos.click_On_Button_Open_Screen_Create_Users();
                ModuloUsuarioMetodos.verify_input_type_password();
                cy.wait(3000)
        })
})