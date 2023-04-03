function darkTheme() {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#252525'
}

function lighTheme() {
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.querySelector('#switchBtn').addEventListener('click', switchTheme)
document.querySelector('#darkBtn').addEventListener('click', darkTheme)
document.querySelector('#lightBtn').addEventListener('click', lighTheme)