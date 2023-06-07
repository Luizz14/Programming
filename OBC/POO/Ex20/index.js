import { Component } from "./Component.js"
import { Label } from "./Label.js"
import { Input } from "./Input.js"

const btn = document.getElementById('btn')
const li = document.getElementById('chi')

const oo = new Label('label', '1', 'PORRA PINTO CARALHO', 'OLL')

const bolo = new Input()

btn.addEventListener('click', () => {
    alert('iae')
    oo.renderComponent(li)
})


