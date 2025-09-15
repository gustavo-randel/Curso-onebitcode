const input = document.getElementById('input')

document.getElementById('valor').addEventListener('click', function() {
    input.value = 'Ola mundo'
})

document.getElementById('tipo').addEventListener('click', function() {
    input.type = input.type !== 'radio' ? 'radio' : 'text' 
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'texto'
})

document.getElementById('desab').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})
document.getElementById('dados').addEventListener('click', function(){
    
})