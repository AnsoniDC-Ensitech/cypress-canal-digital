export class MainPageElements{
      static get menuHome(){
        return{
            get administrationCollapse(){
                return cy.get ('span[data-lang="Administración"]');
            },
            get userMenu(){
                return cy.get('span[data-lang="Usuarios" ]');
            },
             get rolesMenu(){
                return cy.get('span[data-lang="Roles" ]');
            },
             get permissionMenu(){
                return cy.get('span[data-lang="Permisos" ]');
            }
        }

    }
}