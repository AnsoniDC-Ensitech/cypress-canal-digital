export class LogInData{
    static get validAcceses(){
        return {
            username: 'ansoni@ensitech.com',
            password: 'Ensitech2025$'
        }
    }

    static get selectorLogIn(){
        return{
            inputname:'input[id="Email"]',
            inputPassword: 'input[id="Password"]'
        }
    }

    static get selectorBtnLogIn(){
        return{
            loginButton: 'button[type="submit"].btn.btn-primary.fw-semibold.py-2'
        }
    }
}