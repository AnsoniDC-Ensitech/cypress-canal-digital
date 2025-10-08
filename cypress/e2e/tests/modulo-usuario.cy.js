import { LogInData } from "../pages/LogIn/LogIn.data";
import { LogInMetodos } from "../pages/LogIn/LogIn.metodos";
import { ModuloUsuarioMetodos } from "../pages/modulo-usuario/modulo-usuario.metodos";
import { PaginaGeneralData } from "../pages/pagina-general/pagina-general.data";
import { PaginaGeneralMetodos } from "../pages/pagina-general/pagina-general.metodos";



const user =  LogInData.valid_Acceses.username;
const password = LogInData.valid_Acceses.password;
const textLong = 'A'.repeat(120);
const textLargo = PaginaGeneralData.valores_mayores_a_100_caracteres.textoLargo;

describe(PaginaGeneralData.testSuites.usuario, () => {
  it('Verificación de la longitud de campos de tipo texto', () => {
    PaginaGeneralMetodos.navegar_Sitio_Web();
    LogInMetodos.logIn(user,password);
    PaginaGeneralMetodos.click_On_Link_Administrar();
    PaginaGeneralMetodos.click_On_Link_Usuarios();
    ModuloUsuarioMetodos.click_On_Button_Open_Screen_Create_Users();
    ModuloUsuarioMetodos.verify_Maxlength_Attribute_Name();
    ModuloUsuarioMetodos.verify_Maxlength_Attribute_LastName();
    ModuloUsuarioMetodos.verify_maximum_length_Input_Name(textLong);
    ModuloUsuarioMetodos.verify_maximum_length_Input_LastName(textLargo);
    cy.wait(3000);
  })
})
