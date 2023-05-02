const numberOne = 22
const numberTwo = 1
const numberThree = 6

// if ( numberOne > numberTwo  && numberOne > numberThree) {
//     console.log(`O maior numero eh o ${numberOne}`)
// } if ( numberTwo > numberOne && numberTwo > numberThree ) {
//     console.log(`O maior numero eh o ${numberTwo}`)
// } if ( numberThree > numberOne && numberThree > numberTwo ) {
//     console.log(`O maior numero eh o ${numberThree}`)
// }

const array = [2, 3, 1, 7]

console.log(array)

// array.sort((a, b) => a + b)

// array.reduce((a, b) => a + b)

// const hightNUmber = array.sort((a, b) => b - a)

// console.log(hightNUmber[0])

const hight = array.map((a, b) => {
    if (a > b) {
        const hightNUmber = a
        return hightNUmber
    } else {
        const hightNUmber = b
        return hightNUmber
    }
})

console.log(hight)