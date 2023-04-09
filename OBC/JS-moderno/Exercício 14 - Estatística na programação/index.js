const somaAritmetica = (...numbers) => numbers.reduce((accum, num) => (accum + num) / numbers.length)

console.log(somaAritmetica(2, 2))

const mediaPonderada = (...numbers) => {
    const som = numbers.reduce((accum, { number, wheigth }) => (number * (wheigth ?? 1)) + accum, 0)
    const wheigthSum = numbers.reduce((accum, entry) => accum + (entry.wheigth ?? 1), 0)
    return som / wheigthSum
}

console.log(mediaPonderada(
    { number: 9, wheigth: 3 },
    { number: 7 },
    { number: 10, wheigth: 1 },
))

const mediaPond = (number, wheigth) => {
    (number * wheigth) 
}

const mediana = (...number) => {
    number.sort((a, b) => a - b)
    if (number.length % 2 === 1) {
        const index = Math.floor(number.length / 2)
        return number[index]
    } else {
        const index1 = number.length / 2
        const index2 = index1 - 1
        return (number[index1] + number[index2]) / 2
    }
}

console.log(mediana(2, 4, 5, 7, 42, 99))

const moda = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}