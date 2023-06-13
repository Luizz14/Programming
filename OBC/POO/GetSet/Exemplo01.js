class Account{
    #password 
    #email

    constructor( name ) {
        this.name = name
    }

    set email(newEmail) {
        this.#email = newEmail
    }

    set password(newPassword) {
        this.#password = newPassword
    }

    get email() {
        return this.#email
    }

    get password() {
        return this.#password
    }
}

const Lulu = new Account('lulu')

Lulu.email = 'gustavo80moura@gmail.com'
Lulu.password = 'Soldado'

console.log(Lulu.password)
console.log(Lulu.email)