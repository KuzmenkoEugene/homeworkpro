
this.yourList = yourList;
let contentList = document.getElementsByClassName('my_list')[0];
let buttonClickPrevious = document.getElementById('buttonPrevious');
let buttonClickNext = document.getElementById('buttonNext');
let removeCards = document.getElementById('my_list__person')
let globalIndex = 1;
let emailAdd = document.getElementById('addYourEmail');
let passwordAdd = document.getElementById('addYourPassword');
let logInButton = document.getElementById('addNewPersonButton')
let logInForm = document.getElementById('formForLogIn')
let buttons = document.getElementsByClassName('my_list__button')[0]
let logOutbuttonBlock = document.getElementsByClassName('log_out_block')[0]
let editForm = document.getElementById("editPerson").innerHTML;
let xhr = new XMLHttpRequest();
let logOutButton = document.getElementById('logOutBtn')

function displayNone() {
    contentList.style.display = 'none';
    buttons.style.display = 'none';
    logOutbuttonBlock.style.display = 'none';
}

function onSuccess () {
    logInForm.remove()
    contentList.style.display = '';
    buttons.style.display = '';
    logOutbuttonBlock.style.display = '';
    creatCards()
}

function logIn() {
    displayNone()

    logInButton.addEventListener('click', (e) => {
        e.preventDefault()

        let email = emailAdd.value
        let password = passwordAdd.value

        if (email && password) {

            api.loginApi({email, password})
                .then(response => {
                    if (response.status === 200) {
                    onSuccess()
                    api.loginApi({email, password})
                        .then(response => response.json())
                        .then(response => {
                        window.localStorage.setItem('token', response.token)
                })
                    } 
                })
        }

        emailAdd.value = '',
        passwordAdd.value = ''
    })
}

function creatCards() {

    xhr.open('GET', `https://reqres.in/api/users?page=${globalIndex}`, true);
    xhr.send()

    xhr.onload = (e) => {
        
        let myList = JSON.parse(e.target.response)

        for (let index = 0; index < myList.data.length; index++) {

            let item = document.createElement('div')
            item.classList.add('my_list__person')
            contentList.appendChild(item)

            let avatarPerson = document.createElement('img')
            avatarPerson.classList.add('person__avatar')
            item.appendChild(avatarPerson)

            let emailPerson = document.createElement('p')
            emailPerson.classList.add('person__email')
            item.appendChild(emailPerson)

            let firstNamePerson = document.createElement('p')
            firstNamePerson.classList.add('person__first_name')
            item.appendChild(firstNamePerson)

            let lastnNamePerson = document.createElement('p')
            lastnNamePerson.classList.add('person__lastname')
            item.appendChild(lastnNamePerson)

            let idPerson = document.createElement('p')
            idPerson.classList.add('person__id')
            item.appendChild(idPerson)

            let editPerson = document.createElement('button')
            editPerson.classList.add('person__edit')
            editPerson.innerText = 'Edit user'
            item.appendChild(editPerson)

            let deletePerson = document.createElement('button')
            deletePerson.classList.add('person__delete')
            deletePerson.innerText = 'Delete user'
            item.appendChild(deletePerson)

            let avatarPersonUrl = JSON.stringify(myList.data[index].avatar);
            avatarPerson.src = avatarPersonUrl.replace(/"/g, '')

            let emailPersonText = JSON.stringify(myList.data[index].email);
            emailPersonText = "Email: " + emailPersonText;
            emailPerson.innerText = emailPersonText.replace(/"/g, '')

            let firstNamePersonText = JSON.stringify(myList.data[index].first_name);
            firstNamePersonText = "First name: " + firstNamePersonText;
            firstNamePerson.innerText = firstNamePersonText.replace(/"/g, '')

            let lastnNamePersonText = JSON.stringify(myList.data[index].last_name);
            lastnNamePersonText = "Last name: " + lastnNamePersonText;
            lastnNamePerson.innerText = lastnNamePersonText.replace(/"/g, '')

            let idPersonText = JSON.stringify(myList.data[index].id);
            let numberId = idPersonText;
            idPersonText = "ID: " + idPersonText;
            idPerson.innerText = idPersonText

            deletePerson.addEventListener('click', () => {
                api.delete(numberId, item)
            })    

            editPerson.addEventListener('click', () => {
                let editPersonForm = document.createElement('div')
                editPersonForm.getAttribute('class', 'edit__block')
                editPersonForm.innerHTML = editForm
                item.appendChild(editPersonForm)

                editPerson.remove()
                deletePerson.remove()

                let editCancelButton = document.getElementsByClassName('edit__cancel')[0]
                let editPersonButton = document.getElementsByClassName('edit__save')[0]

                editCancelButton.addEventListener('click', () => {
                    editPersonForm.remove()
                    item.appendChild(editPerson)
                    item.appendChild(deletePerson)
                })

                editPersonButton.addEventListener('click', (e) => {
                    e.preventDefault()
                    let editEmailValue = document.getElementById('emailEdit');
                    let editFirstNameValue = document.getElementById('firstNameEdit');
                    let editLastNameValue = document.getElementById('lastNameEdit');
                    let editAvatarValue = document.getElementById('avatarEdit');

                    api.editUser(numberId, {email: editEmailValue.value, name: editFirstNameValue.value, lastName: editLastNameValue.value, avatar: editAvatarValue.value})
                        .then(response => {
                            if (response.status = 200) {
                                emailPerson.innerText = "Email: " + editEmailValue.value
                                firstNamePerson.innerText = "First name: " + editFirstNameValue.value,
                                lastnNamePerson.innerText = "Last name: " + editLastNameValue.value
                                avatarPerson.src = editAvatarValue.value

                                editPersonForm.remove()
                                item.appendChild(editPerson)
                                item.appendChild(deletePerson)
                            }
                        })
                })
            })    
        }        
    }    
}

function remove() {
    let quantityIndecator = contentList.children.length;

    for (let index = 0; index < quantityIndecator; index++) {
        contentList.children[0].remove()                
    } 
}

function click() {

    clickPrevious = () => {
        remove()
        globalIndex--;
        creatCards()

        if(globalIndex === 1) {
            buttonClickPrevious.disabled = true;
            buttonClickNext.disabled = false;
        }
    }

    clickNext = () => {
        remove()
        globalIndex++;
        creatCards()

        if(globalIndex === 2) {
            buttonClickPrevious.disabled = false;
            buttonClickNext.disabled = true;
        }
    }

    buttonClickPrevious.addEventListener('click', clickPrevious)
    buttonClickNext.addEventListener('click', clickNext)
    logOutButton.addEventListener('click', deleteToken)
}

function authorization() {

    if(localStorage.getItem('token')) {
        logInForm.remove()
        contentList.style.display = '';
        buttons.style.display = '';
        creatCards()
    }
}

function deleteToken() {

    location.reload();
    window.localStorage.removeItem('token')
}

logIn()
click()
authorization()