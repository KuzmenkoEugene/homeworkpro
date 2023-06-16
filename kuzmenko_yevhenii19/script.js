
class MyPersonsList {
    constructor(yourList) {
        this.yourList = yourList;
        this.contentList = document.getElementsByClassName('my_list')[0];
        this.buttonClickPrevious = document.getElementById('buttonPrevious');
        this.buttonClickNext = document.getElementById('buttonNext');
        this.removeCards = document.getElementById('my_list__person')
        this.xhr = new XMLHttpRequest();
        this.globalIndex = 1;
        this.quantityIndecator = this.contentList.children.length;
        this.emailAdd = document.getElementById('addYourEmail');
        this.passwordAdd = document.getElementById('addYourPassword');
        this.logInButton = document.getElementById('addNewPersonButton')
        this.logInForm = document.getElementById('formForLogIn')
        this.buttons = document.getElementsByClassName('my_list__button')[0]
    }

    logIn() {
        this.contentList.style.display = 'none';
        this.buttons.style.display = 'none';

        this.logInButton.addEventListener('click', (e) => {
            e.preventDefault()
            
            let xhr = new XMLHttpRequest();

            xhr.open('POST', `https://reqres.in/api/login`, false);

            let user = {
                email: `${this.emailAdd.value}`,
                password: `${this.passwordAdd.value}`
            }

            xhr.setRequestHeader('Content-type', 'application/json')

            xhr.send(JSON.stringify(user))

            let data = JSON.parse(xhr.response)

            if(data.token) {
                this.logInForm.remove()

                this.contentList.style.display = '';
                this.buttons.style.display = '';
            }

            this.emailAdd.value = '',
            this.passwordAdd.value = ''
        })
    }

    creatCards() {
            this.xhr.open('GET', `https://reqres.in/api/users?page=${this.globalIndex}`, false);
            this.xhr.send()

            let myList = JSON.parse(this.xhr.response)

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
                idPersonText = "ID: " + idPersonText;
                idPerson.innerText = idPersonText
                
            }
    }

    remove = () => {
        let quantityIndecator = this.contentList.children.length;

        for (let index = 0; index < quantityIndecator; index++) {
            this.contentList.children[0].remove()                
        } 
    }

    click = () => {

        this.buttonClickPrevious.addEventListener('click', () => {
            this.remove()

            this.globalIndex--;

            this.creatCards()

            if(this.globalIndex === 1) {
                this.buttonClickPrevious.disabled = true;
                this.buttonClickNext.disabled = false;
            }
        })

        this.buttonClickNext.addEventListener('click', () => {
            this.remove()

            this.globalIndex++;

            this.creatCards()

            if(this.globalIndex === 2) {
                this.buttonClickPrevious.disabled = false;
                this.buttonClickNext.disabled = true;
            }
        })
    }
}

const listEl = document.getElementById('yourList')
const myPersonsList = new MyPersonsList(listEl)

myPersonsList.creatCards()
myPersonsList.click()
myPersonsList.logIn()
