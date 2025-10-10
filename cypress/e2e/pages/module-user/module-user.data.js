export class ModuleUsersData{
    static get selectorsName(){
        return{
            inputName: 'input[id="FirstName"]',
            inputLastname: 'input[id="LastName"]',
            inputEmail: 'input[id="Email"]',
            inputPassword: 'input[id="password"]',
            inputConfirmdPassword: 'input[name="ConfirmPassword"]',
            inputRole: 'input[id="RoleId"]'
        };
    }
}