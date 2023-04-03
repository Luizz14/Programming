function addPlayer() {
    const posicao = document.querySelector('input#inputPosicao').value
    const name = document.querySelector('input#inputNome').value
    const camisa = document.querySelector('input#inputCamisa').value

    const ul = document.getElementById('ul')
    const li = document.createElement('li')

    const confirmar = confirm('Crtz q quer botar ele ai?')

    if(confirmar) {
        ul.appendChild(li)
        li.innerText = `Jogado: ${name}`
        
        document.querySelector('input#inputPosicao').value = ''
        document.querySelector('input#inputNome').value = ''
        document.querySelector('input#inputCamisa').value = ''
    }
}

function removePlayer() {
    const camisa = document.getElementById('inputCamisaDelete').vallue
    const ul = document.getElementById('ul')

    const player = document.getElementsByName(`inputCamisa${camisa}`)

    ul.removeChild(player)
}