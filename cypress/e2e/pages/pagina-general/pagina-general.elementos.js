export class PaginaGeneralElementos{
      static get menu_Home(){
        return{
            get collapse_Administracion(){
                return cy.get ('span[data-lang="Administración"]');
            },
            get menu_Usuarios(){
                return cy.get('span[data-lang="Usuarios" ]');
            },
             get menu_Roles(){
                return cy.get('span[data-lang="Roles" ]');
            },
             get menu_Permisos(){
                return cy.get('span[data-lang="Permisos" ]');
            }
        }

    }
}