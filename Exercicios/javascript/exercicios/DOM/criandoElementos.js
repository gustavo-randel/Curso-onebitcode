function addInput(){
    const ul = document.getElementById('inputs') 
    const li = document.createElement('li')
    li.innerText = 'Novo input: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    li.appendChild(newInput)
    ul.appendChild(li)
}

