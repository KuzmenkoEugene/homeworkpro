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
    }

    creatCards() {
        this.xhr.open('GET', `https://reqres.in/api/users?page=${this.globalIndex}`, false);
            this.xhr.send()

            let myList = JSON.parse(this.xhr.response)

            for (let index = 0; index < myList.data.length; index++) {

                let item = document.createElement('div')
                item.classList.add('my_list__person')
                this.contentList.appendChild(item)

                let avatarPerson = document.createElement('p')
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

                avatarPerson.innerText = JSON.stringify(myList.data[index].avatar);
                emailPerson.innerText = JSON.stringify(myList.data[index].email);
                firstNamePerson.innerText = JSON.stringify(myList.data[index].first_name);
                lastnNamePerson.innerText  = JSON.stringify(myList.data[index].last_name);
                idPerson.innerText = JSON.stringify(myList.data[index].id);
            }
    }

    click = () => {
        let quantityIndecator = this.contentList.children.length;

        this.buttonClickPrevious.addEventListener('click', () => {
            for (let index = 0; index < quantityIndecator; index++) {
                this.contentList.children[0].remove()                
            }

            this.globalIndex--;

            this.creatCards()
        })

        this.buttonClickNext.addEventListener('click', () => {
            for (let index = 0; index < quantityIndecator; index++) {
                this.contentList.children[0].remove()                
            }

            this.globalIndex++;

            this.creatCards()
        })
    }
}

const listEl = document.getElementById('yourList')
const myPersonsList = new MyPersonsList(listEl)

myPersonsList.creatCards()
myPersonsList.click()



