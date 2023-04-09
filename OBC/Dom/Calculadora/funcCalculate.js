export { calculate }

import { result, btnCopy, input } from "./variables.js"

function calculate() {
    result.classList.add('error')
    result.value = 'ERROR'
    const cauntResult = eval(input.value)
    result.classList.remove('error')
    btnCopy.classList.remove('success')
    return result.value = cauntResult
}