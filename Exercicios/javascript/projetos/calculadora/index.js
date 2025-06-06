// criar variaveis queryselector;elementById para selecionar os elementos do html: main, root input, resultInput(id)
//criar array para limitar as teclas de uso com o input: ( ) / 7 8 9 * 4 5 6 - 1 2 3 + 0 . mod =
//impedir chamada padrão do pressionar de tecla com eventListener; inserir manualmente o valor da tecla no input; if para funcionamento da tecla backspace e enter
//funcionamento dos botões atribuindo função deles ao teclado
//usar evaluation para calcular o resultado 
const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%", "="]

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = '' 
    input.focus() 
})

input.addEventListener("keydown", function(ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
    calculate()        
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = ('ERROR')
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value) 

    } else {
        button.InnexText = 'Copy'
        button.ClassList.remove('success')
    }
})


document.getElementById('themeSwitcher').addEventListener('click', function(){
    if (main.dataset.theme === "dark") {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529') 
        root.style.setProperty('--primary-color', '#4d8bff') 
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9') 
        root.style.setProperty('--primary-color', '#2c6feb') 
        main.dataset.theme = 'dark'
    }
})