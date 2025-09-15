const button = document.getElementById('register-button')

function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value 
    const password = sectionElement.children.password.value 
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value 
}

button.addEventListener('click', register)