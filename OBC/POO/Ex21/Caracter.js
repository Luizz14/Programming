class Caracter {
    constructor( name, life, strength, defense ) {
        this.name = name
        this.life = life
        this.strength = strength
        this.defense = defense
    }

    attack(target) {
        target.life -= this.attack - target.defense
    }
}

const lulu = new Caracter('Lulu da pomerania', 100, 40, 20)
const jubileia = new Caracter('Jubileia', 100, 10, 20)

// lulu.attack(jubileia)

// console.log(jubileia)
module.export = Caracter