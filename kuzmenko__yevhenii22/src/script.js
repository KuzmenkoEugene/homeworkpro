let contentList = document.getElementsByClassName('my_list')[0];
let buttonClickPrevious = document.getElementById('buttonPrevious');
let buttonClickNext = document.getElementById('buttonNext');
let removeCards = document.getElementById('my_list__person')
let globalIndex = 1;
let emailAdd = document.getElementById('addYourEmail');
let passwordAdd = document.getElementById('addYourPassword');
let logInButton = document.getElementById('logInButton')
let logInForm = document.getElementById('formForLogIn')
let buttons = document.getElementsByClassName('my_list__button')[0]
let editForm = document.getElementById("editPerson").innerHTML;

let newUsersForm = document.getElementById('formForNewPerson')
let newUsersList = document.getElementById('myNewCards')

let contentListNewUsers = document.getElementsByClassName('my_newlist')[0];
let firstNameInput = document.getElementById('addFirstNamePerson')
let lastNameInput = document.getElementById('addLastNamePerson')
let emailInput = document.getElementById('addModifiedEmail')
let jobInput = document.getElementById('addYourJob')
let myButton = document.getElementById('addNewPersonButton')

let logOutbuttonBlock = document.getElementsByClassName('log_out_block')[0]
let logOutButton = document.getElementById('logOutBtn')

function displayNone() {
    contentList.style.display = 'none';
    buttons.style.display = 'none';
    newUsersForm.style.display = 'none';
    newUsersList.style.display = 'none';
    
}

function onSuccess () {
    logInForm.remove()
    authorization()
    logInForm.remove()
    contentList.style.display = '';
    buttons.style.display = '';
    logOutbuttonBlock.style.display = '';
    newUsersForm.style.display = '';
    newUsersList.style.display = '';
  
    creatCards()

    createNewUsers()

    click()

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

    api.cards(globalIndex)
        .then(response => response.json())
        .then(response => {
            let myList = response

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
        })  

        
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

    deleteToken = () => {

        location.reload();
        window.localStorage.removeItem('token')
    }

    buttonClickPrevious.addEventListener('click', clickPrevious)
    buttonClickNext.addEventListener('click', clickNext)
    logOutButton.addEventListener('click', deleteToken)
}

function createNewUsers() {

    myButton.addEventListener('click', (e) => {
        e.preventDefault()

        let newCard = {
            name: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            job: jobInput.value
        }

        if(firstNameInput.value && lastNameInput.value && emailInput.value && jobInput.value) {
            api.createNewCard(newCard)
            .then(response => response.json())
            .then(response => {

            let dataPerson = response

            console.log(response)

            let item = document.createElement('div')
            item.classList.add('my_list__person')
            contentListNewUsers.appendChild(item)

            let avatarPerson = document.createElement('img')
            avatarPerson.classList.add('person__avatar')
            avatarPerson.src = 'https://www.gateshead.church/dowo/wp-content/uploads/2019/09/person-icon.png'
            item.appendChild(avatarPerson)

            let firstNamePerson = document.createElement('p')
            firstNamePerson.classList.add('person__first_name')
            firstNamePerson.innerText = 'First name: ' + dataPerson.name,
            item.appendChild(firstNamePerson)

            let lastnNamePerson = document.createElement('p')
            lastnNamePerson.classList.add('person__lastname')
            lastnNamePerson.innerText = 'Last name: ' + dataPerson.lastName,
            item.appendChild(lastnNamePerson)

            let emailPerson = document.createElement('p')
            emailPerson.classList.add('person__email')
            emailPerson.innerText = 'Email: ' + dataPerson.email,
            item.appendChild(emailPerson)

            let jobPerson = document.createElement('p')
            jobPerson.classList.add('person__email')
            jobPerson.innerText = 'Job: ' + dataPerson.job,
            item.appendChild(jobPerson) 

            let idPerson = document.createElement('p')
            idPerson.classList.add('person__email')
            let numberId = dataPerson.id
            idPerson.innerText = 'ID: ' + dataPerson.id,
            item.appendChild(idPerson) 

            let editPerson = document.createElement('button')
            editPerson.classList.add('person__edit')
            editPerson.innerText = 'Edit user'
            item.appendChild(editPerson)

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

                    editEmailValue.value = (!editEmailValue.value ? dataPerson.email : editEmailValue.value)
                    editFirstNameValue.value = (!editFirstNameValue.value ? dataPerson.name : editFirstNameValue.value)
                    editLastNameValue.value = (!editLastNameValue.value ? dataPerson.lastName : editLastNameValue.value)
                    editAvatarValue.value = (!editAvatarValue.value ? avatarPerson.src : editAvatarValue.value)
    
               
                        api.editUser(numberId, {email: editEmailValue.value, name: editFirstNameValue.value, lastName: editLastNameValue.value, avatar: editAvatarValue.value})
                        .then(response => {
                            if (response.status = 200) {
                                emailPerson.innerText = "Email: " + editEmailValue.value;
                                firstNamePerson.innerText = "First name: " + editFirstNameValue.value;
                                lastnNamePerson.innerText = "Last name: " + editLastNameValue.value;
                                avatarPerson.src = editAvatarValue.value;

                                editPersonForm.remove()
                                item.appendChild(editPerson)
                                item.appendChild(deletePerson)
                            }
                        })
                    
                })
            })    

            

            let deletePerson = document.createElement('button')
            deletePerson.classList.add('person__delete')
            deletePerson.innerText = 'Delete user'
            item.appendChild(deletePerson)

           

            deletePerson.addEventListener('click', () => {
                api.delete(numberId, item)
            })    
        })

        firstNameInput.value = '',
        lastNameInput.value = '',
        emailInput.value = '',
        jobInput.value = ''
        }
    })
}

function authorization() {

    if(localStorage.getItem('token')) {
        logInForm.remove()
        contentList.style.display = '';
        buttons.style.display = '';
        logOutbuttonBlock.style.display = ''; 
        newUsersForm.style.display = '';
        newUsersList.style.display = '';
        creatCards()
        createNewUsers()
    } else if (!localStorage.getItem('token')) {
        logOutbuttonBlock.style.display = 'none';
    }
}

logIn()
click()
authorization()