
class MyPersonsList {
    constructor(yourList) {
        this.yourList = yourList;
        this.contentList = document.getElementsByClassName('my_list')[0];
        this.buttonClickPrevious = document.getElementById('buttonPrevious');
        this.buttonClickNext = document.getElementById('buttonNext');
        this.removeCards = document.getElementById('my_list__person')
        this.globalIndex = 1;
        this.quantityIndecator = this.contentList.children.length;
        this.myList
        this.creatCards()
        this.click()
    }

    fetch() {
        this.xhr = new XMLHttpRequest();
        this.xhr.open('GET', `https://reqres.in/api/users?page=${this.globalIndex}`, false);
        this.xhr.send()
        this.myList = JSON.parse(this.xhr.response)
    }

    creatCards() {
            this.fetch()

            for (let index = 0; index < this.myList.data.length; index++) {

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

                let avatarPersonUrl = JSON.stringify(this.myList.data[index].avatar);
                avatarPerson.src = avatarPersonUrl.replace(/"/g, '')

                let emailPersonText = JSON.stringify(this.myList.data[index].email);
                emailPersonText = "Email: " + emailPersonText;
                emailPerson.innerText = emailPersonText.replace(/"/g, '')

                let firstNamePersonText = JSON.stringify(this.myList.data[index].first_name);
                firstNamePersonText = "First name: " + firstNamePersonText;
                firstNamePerson.innerText = firstNamePersonText.replace(/"/g, '')

                let lastnNamePersonText = JSON.stringify(this.myList.data[index].last_name);
                lastnNamePersonText = "Last name: " + lastnNamePersonText;
                lastnNamePerson.innerText = lastnNamePersonText.replace(/"/g, '')


                let idPersonText = JSON.stringify(this.myList.data[index].id);
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
         
        this.clickBack = () => {
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

        this.buttonClickPrevious.addEventListener('click', this.clickBack)
        this.buttonClickNext.addEventListener('click', this.clickNext)
    }
}

const listEl = document.getElementById('yourList')
const myPersonsList = new MyPersonsList(listEl)

class NewPerson {
    constructor(myNewCards) {
        this.myNewCards = myNewCards;
        this.contentList = document.getElementsByClassName('my_newlist')[0];
        this.firstNameInput = document.getElementById('addFirstNamePerson')
        this.lastNameInput = document.getElementById('addLastNamePerson')
        this.emailInput = document.getElementById('addYourEmail')
        this.jobInput = document.getElementById('addYourJob')
        this.myButton = document.getElementById('addNewPersonButton')
        this.dataPerson
        
    }

    fetch() {
        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', `https://reqres.in/api/users`, false);
        this.xhr.setRequestHeader('Content-type', 'application/json')
    }

    creatNewUser() {
        
        this.fetch()

        this.myButton.addEventListener('click', (e) => {
            e.preventDefault()

            let newCard = {
                name: this.firstNameInput.value,
                lastName: this.lastNameInput.value,
                email: this.emailInput.value,
                job: this.jobInput.value
            }
    
            this.xhr.send(JSON.stringify(newCard))
    
            this.dataPerson = JSON.parse(this.xhr.response)

            let item = document.createElement('div')
            item.classList.add('my_list__person')
            this.contentList.appendChild(item)

            let avatarPerson = document.createElement('img')
            avatarPerson.classList.add('person__avatar')
            avatarPerson.src = 'https://www.gateshead.church/dowo/wp-content/uploads/2019/09/person-icon.png'
            item.appendChild(avatarPerson)

            let firstNamePerson = document.createElement('p')
            firstNamePerson.classList.add('person__first_name')
            firstNamePerson.innerText = 'First name: ' + this.dataPerson.name,
            item.appendChild(firstNamePerson)

            let lastnNamePerson = document.createElement('p')
            lastnNamePerson.classList.add('person__lastname')
            lastnNamePerson.innerText = 'Last name: ' + this.dataPerson.lastName,
            item.appendChild(lastnNamePerson)

            let emailPerson = document.createElement('p')
            emailPerson.classList.add('person__email')
            emailPerson.innerText = 'Email: ' + this.dataPerson.email,
            item.appendChild(emailPerson)

            let jobPerson = document.createElement('p')
            jobPerson.classList.add('person__email')
            jobPerson.innerText = 'Job: ' + this.dataPerson.job,
            item.appendChild(jobPerson)

            this.firstNameInput.value = '',
            this.lastNameInput.value = '',
            this.emailInput.value = '',
            this.jobInput.value = ''
        })

        
    }
}

const myNewCardsList = document.getElementById('myNewCards')
const list = new NewPerson (myNewCardsList)

list.creatNewUser()