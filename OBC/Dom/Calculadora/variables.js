import { copyClipBoard } from "./copyClipBoard.js"
import { calculate } from "./funcCalculate.js"
import { handleButtonClear, handleButtonKay, handleDownKay } from "./kayButtons.js"
import { switchTheme } from "./SwitcherTheme.js"

export { main, input, root, result, btnCopy, allowedKeys }

const main = document.querySelector('main')
const input = document.getElementById('input')
const root = document.querySelector(':root')
const result = document.querySelector('#result')
const btnCopy = document.querySelector('#copyToClipboard')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

input.addEventListener('keydown', handleDownKay)
document.querySelectorAll('.charKey').forEach(handleButtonKay)
document.querySelector('#clear').addEventListener('click', handleButtonClear)
btnCopy.addEventListener('click', copyClipBoard)
document.getElementById("themeSwitcher").addEventListener("click", switchTheme)
document.querySelector('#equal').addEventListener('click', calculate)