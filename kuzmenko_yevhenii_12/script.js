const button = document.getElementById('buttonId')

const myContent = document.getElementsByClassName('content__list')[0]

const titleInput = document.getElementById('tittleText')

const textInput = document.getElementById('mainText')

const selectPriority = document.getElementById('priority')

button.addEventListener('click', () => {
    const item = document.createElement('li')
    item.classList.add("content__item");

    const checkboxItem = document.createElement('input')
    checkboxItem.setAttribute('type', 'checkbox')
    checkboxItem.addEventListener('change', () => {
        if (checkboxItem.checked === true) {
            myTitle.classList.add('line')
            myText.classList.add('line')
        } else  { 
            myTitle.classList.remove('line')
            myText.classList.remove('line')  
        }

        deleteButton.addEventListener('click', () => {
            if (checkboxItem.checked) {
                item.remove();
            }
        });
    })

    const doneOperation = document.createElement('span')
    doneOperation.innerText = 'cross out?'

    const myTitle = document.createElement('span')
    myTitle.innerText = titleInput.value
    myTitle.classList.add("content__title");

    const myText = document.createElement('span')
    myText.innerText = textInput.value

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'

    item.append(myTitle, myText, deleteButton, doneOperation, checkboxItem)

    if (selectPriority.value === 'Low') {
        item.style.background = 'rgb(142, 241, 142)'
    } else if (selectPriority.value === 'Mid') {
        item.style.background = 'rgb(238, 238, 153)'
    } else if (selectPriority.value === 'High') {
        item.style.background = 'rgb(241, 145, 145)'
    }    

    myContent.appendChild(item);

    titleInput.value = ''
    textInput.value = ''
})
