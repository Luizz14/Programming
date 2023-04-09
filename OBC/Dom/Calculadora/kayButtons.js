import { calculate } from "./funcCalculate.js"
import { input, allowedKeys } from "./variables.js"

export { handleButtonClear, handleButtonKay, handleDownKay }



function handleDownKay (ev) {
    ev.preventDefault() // esse comando vai impedir que ocorra de digitar qualquer coisa no input, prevenindo que execute o comando normal do input  
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate
    }
}

function handleButtonKay(charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {  
        const value = charKeyBtn.dataset.value
        input.value += value
    })
}

function handleButtonClear() {
    input.value = ''
}