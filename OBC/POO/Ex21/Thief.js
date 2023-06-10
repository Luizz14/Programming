import { Caracter } from "./Caracter.js";

class Thief extends Caracter {
    constructor( name, life, strength, defense ) {
        super( name, life, strength, defense )
    }

    attack(target) {
        let damage = ( this.strength - target.defense ) * 2
        damage <= 0 ? damage = 0 : damage 
        
        target.life -= damage
    }
}