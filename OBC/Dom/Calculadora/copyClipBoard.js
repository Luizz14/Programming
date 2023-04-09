import { btnCopy } from "./variables.js"

export default function (ev) {
    navigator.clipboard.writeText(result.value)
    btnCopy.classList.add('success')
}