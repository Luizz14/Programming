const buttons = document.querySelectorAll('.square')
let currentPlayer  = 'X'
let cells = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

document.querySelector('#buttonDone').addEventListener('click', function() {
    document.querySelectorAll('.form').forEach((formChose) => (
        formChose.style.display = 'none'
    ))
    document.querySelector('.startGame').style.display = 'flex'
    
    const namePlayerOne = document.querySelector('#inputPlayerOne').value
    const namePlayerTwo = document.querySelector('#inputPlayerTwo').value
    
    document.querySelector('#namePlayerOne').innerText = namePlayerOne
    document.querySelector('#namePlayerTwo').innerText = namePlayerTwo
})

buttons.forEach(function(buttonPress) {
    buttonPress.addEventListener('click', function() {
        buttonPress.innerText === '' ? buttonPress.innerText = currentPlayer  : alert('Botao ja selecionado')
        buttonPress.classList.add('blockButton') // Adicionar a classe block ao button que ja foi acionado
        
        const [row, col] = buttonPress.id.split('-')
        cells[row][col] = currentPlayer
        checkResult()
        currentPlayer  === 'X' ? currentPlayer  = 'O' : currentPlayer  = 'X'
    })
})

function checkResult() {
    for (let index = 0; index < 9; index++) {
        for (let rows = 0; rows < 3; rows++) {
            if (cells[rows][0] !== '' && cells[rows][0] === cells[rows][1] && cells[rows][1] === cells[rows][2]) {
                document.getElementById(`${rows}-0`).classList.add('winButton')
                document.getElementById(`${rows}-1`).classList.add('winButton')
                document.getElementById(`${rows}-2`).classList.add('winButton')
                disableAllButtons()
                return
            }
        }
        for (let column = 0; column < 3; column++) {
            if (cells[0][column] !== '' && cells[0][column] === cells[1][column] && cells[1][column] === cells[2][column]) {
                document.getElementById(`0-${column}`).classList.add('winButton')
                document.getElementById(`1-${column}`).classList.add('winButton')
                document.getElementById(`2-${column}`).classList.add('winButton')
                disableAllButtons()
                return
            }
        }
        for (let diagonals = 0; diagonals < 3; diagonals++) {
            if (cells[0][0] !== '' && cells[0][0] === cells[1][1] && cells[1][1] === cells[2][2]) {
                document.getElementById(`0-0`).classList.add('winButton')
                document.getElementById(`1-1`).classList.add('winButton')
                document.getElementById(`2-2`).classList.add('winButton')
                disableAllButtons()
                return
            }
            if (cells[0][2] !== '' && cells[0][2] === cells[1][1] && cells[1][1] === cells[2][0]) {
                document.getElementById(`0-2`).classList.add('winButton')
                document.getElementById(`1-1`).classList.add('winButton')
                document.getElementById(`2-0`).classList.add('winButton')
                disableAllButtons()
                return
            }
        }
    }
}

function disableAllButtons() {
    buttons.forEach(function(button) {
        button.disabled = true 
    })
}

document.querySelector('#btnReiniciar').addEventListener('click', () => {
    for (let index = 0; index < cells.length; index++) {
        for (let ro = 0; ro < cells[index].length; ro++) {
            cells[index][ro] = ''
        }
    }
    buttons.forEach((buttonEdit) => {
        buttonEdit.innerText = ''
        buttonEdit.disabled = false
        buttonEdit.classList.remove('blockButton', 'block', 'winButton')
    })
})