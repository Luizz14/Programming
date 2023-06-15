const priceHouse = 300000
const adressHouse = 'Rua sao joao albertir'
const yearsInstallment = 15
const salaryBuyer = 3000

class House {
    #price

    constructor( price, adress ) {
        this.#price = price
        this.adress = adress
    }

    get price() {
        return this.#price
    }


}

class Buyer {
    #salary

    constructor( salary, years ) {
        this.#salary = salary
        this.years = years
    }

    get salary() {
        return this.#salary
    }

    getMonths() {
        return this.years * 12
    }

    checkFunding(house) {
        const installment = Math.round(house.price / this.getMonths())
        const percent = Math.round((installment /  this.salary) * 100)

        if(percent <= 30) {
            return console.log(`O salario do comprador é: R$${this.salary}, o financiamento foi aprovado, com prestações de R$${installment}.`)
        } else {
            return console.log(`As prestações ficaram acima de 30% do sálario do comprador.`)
        }
    }
}

const Luizao = new Buyer(7000, 15)
const CasaFlorita = new House(300000, 'Rua ali')

Luizao.checkFunding(CasaFlorita)





// function verifyBuyer( house, buyer ) {
//     const months = buyer.years * 12
//     const installment = Math.round(house.price / months)
//     const percent = Math.round((installment /  buyer.salary) * 100)
// }








// function installment( priceHouse, years ) {
//     const months = years * 12
//     const installment = Math.round(priceHouse / months)

//     return installment
// }

// function percentSalary( salary ) {
//     const prestacao = installment( priceHouse, years )

//     return Math.round((prestacao / salary) * 100 )
// }

// function userAproved() {
//     if( percentSalary( salary ) <= 30 ) {
//         return console.log(`O salario do comprador eh: R$${salary}, o financiamento foi aprovado, com prestações de ${installment( priceHouse, years )}.`)
//     } else {
//         return console.log(`As prestações ficaram acima de 30% do sálario do comprador.`)
//     }
// }

// userAproved()