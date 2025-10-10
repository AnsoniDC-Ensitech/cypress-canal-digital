export class ModuleUsersData{
    static get selectorsName(){
        return{
            inptName: 'input[id="FirstName"]',
            inptLastname: 'input[id="LastName"]',
            inptEmail: 'input[id="Email"]',
            inptPassword: 'input[id="password"]',
            inptConfirmdPassword: 'input[name="ConfirmPassword"]',
            inptRole: 'input[id="RoleId"]'
        };
    }

    static get screenButtonsUsers(){
        return{
            addButton: 'a[class="btn btn-primary"][type="button"]',
            saveButton:'button[class="btn btn-primary"][type="submit"]',
            cancelledButton:{ selector: 'a.btn.btn-default', text: 'Cancelar' }
            //"'a.btn.btn-default', 'Cancelar'"
        }
    }

    static get errorMessagesInputs(){
        return{
            inputErrorName: 'span[id="FirstName-error"]',
            inputErrorLastname:'span[id="LastName-error"]',
            inputErrorEmail: 'span[id="Email-error"]',
            inputErrorPassword: 'span[id="password-error"]',
            inputErrorConfirmdPassword: 'span[id="ConfirmPassword"]',
            inputErrorRole: 'span[id="RoleId-error"]'
        }
    }

    static get messagesErrorPassword(){
        return{
            mErrorPassword: 'span[class="text-danger field-validation-error"][data-valmsg-for="Password"]',
            mErrorConfirmdPassword: 'span[class="text-danger field-validation-error"][data-valmsg-for="ConfirmPassword"]'
        }
    }
}