const form = document.getElementById('form')
const button = document.getElementById('button')

const devs = []


function addTec(tag) {
    const newInput = document.createElement('input')
    newInput.innerText = 'Nova tec:'
    newInput.name = 'tec'

    const newRadio2anos = document.createElement('input')
    newRadio2anos.type = 'radio'
    newRadio2anos.name = 'date'
    newRadio2anos.value = '2 anos'

    const newRadio3anos = document.createElement('input')
    newRadio3anos.type = 'radio'
    newRadio3anos.name = 'date'
    newRadio3anos.value = '3 anos'

    const newRadio4anos = document.createElement('input')
    newRadio4anos.type = 'radio'
    newRadio4anos.name = 'date'
    newRadio4anos.value = '4 anos'

    tag.appendChild(newInput)
    tag.appendChild(newRadio2anos)
    tag.appendChild(newRadio3anos)
    tag.appendChild(newRadio4anos)

    const removeButton = document.createElement('button')
    removeButton.type = 'button'
    removeButton.innerText = 'Remover Tec'

    tag.appendChild(removeButton)

    removeButton.addEventListener('click', function() {
        tag.removeChild(newRadio2anos[newRadio2anos.length - 1])
    })
}

form.addEventListener('submit', function(ev) {
    ev.preventDefault()
    
    const sectionElement = ev.currentTarget.parentNode
    const name = sectionElement.children.inputName
    const nameTec = document.querySelectorAll("input[name=tec]").value
    const tec = document.querySelectorAll("input[name='date']").checked
    
    const dev = {
        name, 
        nameTec,
        tec
    }

    devs.push(dev)

    console.log({devs, dev})
})