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
    static get valores_mayores_a_100_caracteres(){
        return{
            textoLargo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu'
        }
    }

    static get valores_para_espacios_vacios(){
        return{
            datosVacios: '    ',
            datosConEspaciosalPrincipio: '   usuario   '
        }
    }
}