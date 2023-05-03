const button = document.getElementById('buttonId')

const myContent = document.getElementsByClassName('content')[0]

const titleInput = document.getElementById('tittleText')

const textInput = document.getElementById('mainText')

const selectPriority = document.getElementById('priority')

let i = 0
function createElement() {
    
    i++
    if (selectPriority.value === 'Low') {
        newDiv = `<div class="content__item content__item-low"> 
        <p class="item__title"> ${titleInput.value} № ${i} </p>
        <span class="item__text"> ${textInput.value} </span>
        </div>`;
    } else if (selectPriority.value === 'Mid') {
        newDiv = `<div class="content__item content__item-mid"> 
        <p class="item__title"> ${titleInput.value} № ${i}  </p>
        <span class="item__text"> ${textInput.value} </span>
        </div>`;
    } else if (selectPriority.value === 'High') {
        newDiv = `<div class="content__item content__item-high"> 
        <p class="item__title"> ${titleInput.value} № ${i}  </p>
        <span class="item__text"> ${textInput.value} </span>
        </div>`;
    }    

    const deleteItem = document.createElement('button')
    deleteItem.innerText = 'Delete'

    myContent.innerHTML = myContent.innerHTML + newDiv;

    const myContentList = document.getElementsByClassName('content')

    myContentList[0].append(deleteItem)
    
    const liElement = document.getElementsByClassName('content__item')
    deleteItem.addEventListener('click', () => {
        liElement[0].remove()
    })
}

button.onclick = () => {

    createElement()

    titleInput.value = ''
    textInput.value = ''
}






