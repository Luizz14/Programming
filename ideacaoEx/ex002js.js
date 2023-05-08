const value = [ ]

let condition = true

while (condition === true) {
    let entry = parseInt(prompt('Insira o valor: '))

    isNaN(entry) ? condition = false : value.push(entry)
    
}
console.log(value)
console.log(value.reduce((a, b) => a + b))

