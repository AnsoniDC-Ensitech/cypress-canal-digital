import { PaginaGeneralData } from "./pagina-general.data";
import { PaginaGeneralElementos } from "./pagina-general.elementos";

export class PaginaGeneralMetodos{
      static navegar_Sitio_Web(){
         cy.clearCookies();
         cy.clearLocalStorage();
         cy.visit(PaginaGeneralData.url);
    }

    static click_On_Link_Administrar(){
        PaginaGeneralElementos.menu_Home.collapse_Administracion.click({force:true});
    }
    static click_On_Link_Usuarios(){
        PaginaGeneralElementos.menu_Home.menu_Usuarios.click({force:true});
    }
    static click_On_Link_Permisos(){
        PaginaGeneralElementos.menu_Home.menu_Permisos.click({force:true});
    }
    static click_On_Link_Roles(){
        PaginaGeneralElementos.menu_Home.menu_Roles.click({force:true});
    }

}