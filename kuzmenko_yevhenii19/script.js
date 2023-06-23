
class MyPersonsList {
    constructor(yourList) {
        this.yourList = yourList;
        this.contentList = document.getElementsByClassName('my_list')[0];
        this.buttonClickPrevious = document.getElementById('buttonPrevious');
        this.buttonClickNext = document.getElementById('buttonNext');
        this.removeCards = document.getElementById('my_list__person')
        this.globalIndex = 1;
        this.emailAdd = document.getElementById('addYourEmail');
        this.passwordAdd = document.getElementById('addYourPassword');
        this.logInButton = document.getElementById('addNewPersonButton')
        this.logInForm = document.getElementById('formForLogIn')
        this.buttons = document.getElementsByClassName('my_list__button')[0]
        this.editForm = document.getElementById("editPerson").innerHTML;
        
    }

    displayNone() {
        this.contentList.style.display = 'none';
        this.buttons.style.display = 'none';
    }

    logIn() {

        this.displayNone()

        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', `https://reqres.in/api/login`, true);
        this.xhr.setRequestHeader('Content-type', 'application/json')

        this.logInButton.addEventListener('click', (e) => {
            e.preventDefault()

            let user = {
                email: `${this.emailAdd.value}`,
                password: `${this.passwordAdd.value}`
            }

            this.xhr.send(JSON.stringify(user))

            this.xhr.onload = (e) => {

                let data = JSON.parse(e.target.response)

                if(data.token) {

                    this.logInForm.remove()
                    this.contentList.style.display = '';
                    this.buttons.style.display = '';
                }
            }

            this.emailAdd.value = '',
            this.passwordAdd.value = ''
        })
    }

    creatCards() {

        this.xhr = new XMLHttpRequest();
        this.xhr.open('GET', `https://reqres.in/api/users?page=${this.globalIndex}`, true);
        this.xhr.send()

        this.xhr.onload = (e) => {
            
            let myList = JSON.parse(e.target.response)

            for (let index = 0; index < myList.data.length; index++) {

                let item = document.createElement('div')
                item.classList.add('my_list__person')
                this.contentList.appendChild(item)
    
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
                    this.fetchDelete(numberId, item)
                })    

                editPerson.addEventListener('click', () => {
                    let editPersonForm = document.createElement('div')
                    editPersonForm.getAttribute('class', 'edit__block')
                    editPersonForm.innerHTML = this.editForm
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

                        this.xhr = new XMLHttpRequest();
                        this.xhr.open('PUT', `https://reqres.in/api/users/${numberId}`, true);
                        this.xhr.setRequestHeader('Content-type', 'application/json')
                        
                        let user = {
                            email: `${editEmailValue.value}`,
                            name: `${editFirstNameValue.value}`,
                            lastName: `${editLastNameValue.value}`,
                            avatar: `${editAvatarValue.value}`
                        }
            
                        this.xhr.send(JSON.stringify(user))
                        this.xhr.onload = (e) => {

                            let data = JSON.parse(e.target.response)

                            if(e.target.status === 200) {
            
                                emailPerson.innerText = "Email: " + data.email
                                firstNamePerson.innerText = "First name: " + data.name
                                lastnNamePerson.innerText = "Last name: " + data.lastName
                                avatarPerson.src = data.avatar

                                editPersonForm.remove()
                                item.appendChild(editPerson)
                                item.appendChild(deletePerson)
                            }
                        }
                    })
                })    
            }        
        }    

        this.fetchDelete = (numberId, item) => {
            this.xhr = new XMLHttpRequest();
            this.xhr.open('DELETE', `https://reqres.in/api/users/${numberId}`, true);
            this.xhr.send()
            this.xhr.onload = (e) => {
                if(e.target.status === 204) {
                    item.remove()
                }
            }
        }
    }

    remove = () => {
        let quantityIndecator = this.contentList.children.length;

        for (let index = 0; index < quantityIndecator; index++) {
            this.contentList.children[0].remove()                
        } 
    }

    click = () => {

        this.clickPrevious = () => {
            this.remove()
            this.globalIndex--;
            this.creatCards()

            if(this.globalIndex === 1) {
                this.buttonClickPrevious.disabled = true;
                this.buttonClickNext.disabled = false;
            }
        }

        this.clickNext = () => {
            this.remove()
            this.globalIndex++;
            this.creatCards()

            if(this.globalIndex === 2) {
                this.buttonClickPrevious.disabled = false;
                this.buttonClickNext.disabled = true;
            }
        }

        this.buttonClickPrevious.addEventListener('click', this.clickPrevious)
        this.buttonClickNext.addEventListener('click', this.clickNext)
    }
}

const listEl = document.getElementById('yourList')
const myPersonsList = new MyPersonsList(listEl)

myPersonsList.creatCards()
myPersonsList.click()
myPersonsList.logIn()
