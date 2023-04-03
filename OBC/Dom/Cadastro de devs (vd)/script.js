function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text

    return label
}

function createInput(id, value, name, type = 'text', placeholder = ' ') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    
    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function(ev) {
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++

    newRow.id = `inputRow${rowIndex}`
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', `techName-${rowIndex}`)
    const techNameInput = createInput(`techName${rowIndex}`, '', 'techName')

    const id1 = `expRadio-${rowIndex}-1`
    const id2 = `expRadio-${rowIndex}-2`
    const techExperience1 = createInput(id1, '0-2 anos', `techXp${rowIndex}`, 'radio')
    const techNameLabelRadio1 = createLabel('0-2 anos', `techXp${rowIndex}`)
    const techExperience2 = createInput(id2, '3-4 anos', `techXp${rowIndex}`, 'radio')
    const techNameLabelRadio2 = createLabel('3-4 anos', `techXp${rowIndex}`)

    const removeButton = document.createElement('button')
    removeButton.type = 'button'
    removeButton.innerText = 'remover'
    removeButton.addEventListener('click', function() {
        stackInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, techNameInput, techExperience1, techNameLabelRadio1, techExperience2, techNameLabelRadio2, removeButton
    )

    stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function(ev) {
    ev.preventDefault()

    const sectionElement = ev.currentTarget
    const fullName = sectionElement.children.fullname
    const inputRows = document.querySelectorAll('.inputRow')
    console.log(inputRows)
    let techonogies = []

    inputRows.forEach(function (row) {
        const techName = document.querySelector(`#${row.id} input[name="techName"]`)
        const techExprecience = document.querySelector(`#${row.id} input[type="radio"]:checked]`)

        techonogies.push({technologie: techName, experience: techExprecience})
    })

    // console.log(techonogies)

    // const developer = {
    //     name: fullName.value,
    //     tech: {
    //         nameTec: techName,
    //         expTech: expTech
    //     }
    // }
})
