const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const errorMessageEmail = document.getElementById('errorEmail')
const errorMessagePassword = document.getElementById('errorPassword')
const errorMessageText = document.getElementById('errorText')
const button = document.getElementById('btn')

const person = {
    email: 'admin@gmail.com',
    password: '12345678'
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    if(person.email === emailInput.value && person.password === passwordInput.value) {
        window.location.replace('https://www.google.com')
    } else {
        passwordInput.value = ''
        errorMessageText.textContent = 'No user'
    }
})

function disabledButton() {
    if (emailInput.value === '') {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

emailInput.addEventListener('input', disabledButton);

disabledButton()

//

document.getElementById('email').addEventListener('blur', () => {
    checkEmail()
})

document.getElementById('password').addEventListener('blur', () => {
    checkPassword()
})

function checkEmail() {
    let myValue = emailInput.value

    if (myValue[0] === '@' || myValue[1] === '@' || myValue[2] === '@' || !myValue.includes("@") || !myValue.includes(".") || myValue[myValue.length - 1] === '.' || myValue[myValue.length - 2] === '.') {
        errorMessageEmail.textContent = 'Wrong email!'
        emailInput.style.color = 'red'
    } else {
        errorMessageEmail.textContent = ''
        emailInput.style.color = 'black'
    }
    
}

function checkPassword() {
    if(passwordInput.value.length < 6) {
        errorMessagePassword.textContent = 'Password has less than 6 characters'
        passwordInput.style.color = 'red'
    } else {
        errorMessagePassword.textContent = ''
        passwordInput.style.color = 'black'
    }
}



