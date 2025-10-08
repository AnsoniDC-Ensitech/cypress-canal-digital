import { LogInData } from "../pages/LogIn/LogIn.data";
import { LogInMetodos } from "../pages/LogIn/LogIn.metodos";
import { ModuloUsuarioMetodos } from "../pages/modulo-usuario/modulo-usuario.metodos";
import { PaginaGeneralData } from "../pages/pagina-general/pagina-general.data";
import { PaginaGeneralMetodos } from "../pages/pagina-general/pagina-general.metodos";



const user =  LogInData.valid_Acceses.username;
const password = LogInData.valid_Acceses.password;
const textLong = 'A'.repeat(120);
const textLargo = PaginaGeneralData.valores_mayores_a_100_caracteres.textoLargo;
const textovacio = PaginaGeneralData.valores_para_espacios_vacios.datosVacios;
const texoconespaciosalinicio = PaginaGeneralData.valores_para_espacios_vacios.datosConEspaciosalPrincipio;
const textoConCaracteresEsp = PaginaGeneralData.datos_permitidos_texto.textoconcaracteres;
const textConSimbolos = PaginaGeneralData.datos_permitidos_texto.textoconsimbolos;
const textConSimGato = PaginaGeneralData.datos_permitidos_texto.textoConSimGato;

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

  it('Verificación que no se admiten espacios en blanco', () => {
    PaginaGeneralMetodos.navegar_Sitio_Web();
    LogInMetodos.logIn(user,password);
    PaginaGeneralMetodos.click_On_Link_Administrar();
    PaginaGeneralMetodos.click_On_Link_Usuarios();
    ModuloUsuarioMetodos.click_On_Button_Open_Screen_Create_Users();
    ModuloUsuarioMetodos.verify_that_only_spaces_can_be_entered_name(textovacio,texoconespaciosalinicio);
    ModuloUsuarioMetodos.verify_that_extra_spaces_are_removed_name(textovacio,texoconespaciosalinicio);
    ModuloUsuarioMetodos.verify_that_only_spaces_can_be_entered_Lastname(textovacio,texoconespaciosalinicio);
    ModuloUsuarioMetodos.verify_that_extra_spaces_are_removed_Lastname(textovacio,texoconespaciosalinicio);
    cy.wait(3000);
  })

   it('Verificación que valores admitidos sean los correctos', () => {
    PaginaGeneralMetodos.navegar_Sitio_Web();
    LogInMetodos.logIn(user,password);
    PaginaGeneralMetodos.click_On_Link_Administrar();
    PaginaGeneralMetodos.click_On_Link_Usuarios();
    ModuloUsuarioMetodos.click_On_Button_Open_Screen_Create_Users();
    ModuloUsuarioMetodos.verify_permitted_values_Name(textoConCaracteresEsp);
    ModuloUsuarioMetodos.verify_permitted_values_LastName(textoConCaracteresEsp);
    ModuloUsuarioMetodos.click_On_Button_Create_User();
    ModuloUsuarioMetodos.verify_permitted_values_Name(textConSimbolos);
    ModuloUsuarioMetodos.verify_permitted_values_LastName(textConSimbolos);
    ModuloUsuarioMetodos.click_On_Button_Create_User();
    ModuloUsuarioMetodos.verify_permitted_values_Name(textConSimGato);
    ModuloUsuarioMetodos.verify_permitted_values_LastName(textConSimGato);
    ModuloUsuarioMetodos.click_On_Button_Create_User();
  })
})
