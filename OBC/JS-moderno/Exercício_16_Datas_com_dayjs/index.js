const dayJs = require("dayjs")

var now = dayJs()

function calculateBirthday(date) {
    const dateNasc = dayJs(date)
    const dateNow = dayJs()
    
    const yearsOld = dateNow.diff(dateNasc, 'year')
    
    const nextBirthday = dateNasc.add(yearsOld + 1, 'year')
    
    const daysToBirthday = nextBirthday.diff(dateNow, 'day') + 1
    
    console.log(`Data de nascimento: ${dateNasc.format('DD-MM-YYYY')}, Idade atual: ${yearsOld} anos, proximo aniversario: ${nextBirthday.format('DD-MM-YYYY')}, dias para o aniversario: ${daysToBirthday}`)
}

calculateBirthday("2004-10-14")