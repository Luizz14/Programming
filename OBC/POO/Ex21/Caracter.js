export class Caracter {
    constructor( name, life, strength, defense ) {
        this.name = name
        this.life = life
        this.strength = strength
        this.defense = defense
    }

    attack(target) {
        let damage = this.strength - target.defense
        damage <= 0 ? damage = 0 : damage 
        
        target.life -= damage
    }
}

const lulu = new Caracter('Lulu da pomerania', 100, 40, 20)
const jubileia = new Caracter('Jubileia', 100, 10, 20)

// lulu.attack(jubileia)

// console.log(jubileia)
