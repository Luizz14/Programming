const name = prompt('Insira o nome do aluno: ')

const entry = [ ]

let condition = true

while (condition === true) {
    entry.push(prompt('Insira uma nota para o aluno: '))
    prompt('Deseja parar o programa? sim ou nao') === 'sim' ? condition = false : condition = true 
}

const lowerEntry = entry.slice().sort((a, b) => a - b)
const highestEntry = entry.slice().sort((a, b) => b - a)

console.log(`Nota mais baixa do aluno ${name}: ${lowerEntry[0]}, nota mais alta do aluno: ${highestEntry[0]}`)