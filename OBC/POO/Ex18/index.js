class User {
    constructor(fullName, email, password) {
        this.fullName = fullName
        this.email = email
        this.password = password
    }

    login(email, password) {
        if(email === this.email && password === this.password) {
            console.log('Login success!')
        } else {
            console.log('Login failed!')
        }
    }
}

// const robertinho = new User('Robertinho Soares', 'robertinhodelas@gmail.com', '123lindo')

// robertinho.login('robertinhodelas@gmail.com', '123lindo')

class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0 
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        return this.price -= (discount * this.price) / 100
    }
}

const play5 = new Product('Playstation 5', 'Grande vidiogames', 5000)
console.log(play5)
console.log(play5.calculateDiscount(50))
console.log(play5)
