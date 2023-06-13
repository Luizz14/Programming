import { Caracter } from "./Caracter.js";

class Mage extends Caracter{
    constructor( name, life, strength, defense, arcane ) {
        super( name, life, strength, defense )
        this.arcane = arcane
    }
    
    attack(target) {
        let damage = ( this.strength + this.arcane ) - target.defense 
        damage <= 0 ? damage = 0 : damage 
        
        target.life -= damage
    }

    heal() {
        this.life += this.arcane
        this.arcane = 0
    }
}

const Doc = new Mage('Doctor Strange', 80, 5, 15, 50)

Doc.heal()

console.log(Doc)