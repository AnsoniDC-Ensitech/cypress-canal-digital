export class PaginaGeneralData{
    static get url(){
        return "https://appweb-plantillanet9-cgb8cnhydgd3d7c8.southcentralus-01.azurewebsites.net/Authentication/SignIn";
    };
    static get testSuites(){
        return{
            usuario: "Módulo de Usuarios",
            permisos: "Modulo de Permisos",
            Roles: "Módulo de Roles"
        };
    }
}