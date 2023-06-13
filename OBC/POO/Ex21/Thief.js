import { Caracter } from "./Caracter.js";

module.export = class Thief extends Caracter {
    attack(target) {
        let damage = ( this.strength - target.defense ) * 2
        damage <= 0 ? damage = 0 : damage 
        
        target.life -= damage
    }
}