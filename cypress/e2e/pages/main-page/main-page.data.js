export class MainPageData{
    static get url(){
        return {
            urlSite: "https://appweb-plantillanet9-cgb8cnhydgd3d7c8.southcentralus-01.azurewebsites.net/Authentication/SignIn",
            urlCreateUser: "https://appweb-plantillanet9-cgb8cnhydgd3d7c8.southcentralus-01.azurewebsites.net/User/Create"
        }
    };
    static get testSuites(){
        return{
            textValidation: 'Validacion-camposTexto-usuario',
            passwordValidation: 'Validacion-camposPassword-usuarios',
            Roles: 'Módulo de Roles'
        };
    }
    static get valuesGreaterThan100Characters(){
        return{
            longText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu'
        }
    }

    static get valuesForEmptySpaces(){
        return{
            emptyData: '         ',
            dataWithSpacesAtTheBeginnin: '   usuario   '
        }
    }

    static get PermittedDataText(){
        return {
            textWithCharacters: 'Ángel Muñiz _ SUsanñ{_+_+',
            textWithSymbols: 'hol@mundo 125*',
            textWithSimCat: '# 297'
        }
    }
    static get stringsComposedOfSpecialCharacters(){
        return {
            catSign: '#################',
            doubleQuotationMarks: '""""""""""""""""""""""""""""""',
            compoundWithSymbols:'""""####$$%%%%%',
            exclamationMark:'!!!!""""""///%%',
            currencySymbol: '#$#$#$#$#$#$#$#$#$',
            asterisks:'**************',
            bracket:']]]]]]]]]]]]]',
            singleQuotationMarks:'¨¨¨¨¨¨¨¨¨¨¨¨¨¨'

        }
    }
    static get PasswordComposition(){
        return {
            withoutletter:'1234567898',
            withoutnumber:'ASDEDSWS',
            withoutSpecialCharacters:'Ensitech2020',
            correctValue:'Ensitech2025$',
            letterGreek: 'αβγ∪∫∮ΘδΔΞξΡΠπι',
            emojis:'😊As9@🔥🚀😂😘9🤦‍♂️🤦‍♀️🙌',
            circumflex: '◌A@2◌́◌̂◌̂9◌̈◌̄äâ',
            summationsign:'⅙⅗9∀∑s3A√∓∜∦∵∺∷',
            ASCII: '░▒▓¢9A*ÿª',
            null: '',
            binary: '000001101010*sA'
        }
    }

    static get menuOptions(){
        return {
            administrationCollapse:'span[data-lang="Administración"]',
            userMenu:'span[data-lang="Usuarios" ]',
            rolesMenu:'span[data-lang="Roles" ]',
            permissionMenu:'span[data-lang="Permisos" ]'
        }
    }

    static get valuesPassword(){
        return{
            vals4: 'E@s1',
            vals6: 'enS1@S',
            vals7:'Ensite@',
            vals20: 'Ensitech2025@$3sdsg1',
            vals21: 'Ensitech2025@$3sdsgt1',
            vals25: 'Ensitech2025@$3sdsgt1423423423'
        }
    }
}