const buttonClickLeft = document.getElementById('buttonLeft')
const buttonClickRight = document.getElementById('buttonRight')
const buttonRemove = document.getElementById('removelast')
const buttonOpenFirstSlide = document.getElementById('openFirstSlide')
const buttonOpenLastSlide = document.getElementById('openLastSlide')
const myContent = document.getElementsByClassName('carousel-inner')[0]
const myIndecators = document.getElementsByClassName('carousel-indicators')[0]

const secondaryButton1 = document.getElementById('carouselButtonLeft');
const secondaryButton2 = document.getElementById('carouselButtonRight');

let indexItem = 0
let indexIndecator = 0

const elements = document.querySelectorAll(".carousel-item");

buttonRemove.addEventListener('click', () => {
    const elements = document.querySelectorAll(".carousel-item");
    const lastElement = elements[elements.length - 1];
    lastElement.remove()
})

buttonClickLeft.addEventListener('click', () => {
    let item = myContent.children[indexItem]
    item.classList.remove('active')
    indexItem--
    item = myContent.children[indexItem]
    item.classList.add('active')

    let itemIndecators = myIndecators.children[indexIndecator]
    itemIndecators.classList.remove('active')
    indexIndecator--
    itemIndecators = myIndecators.children[indexIndecator]
    itemIndecators.classList.add('active')
})

buttonClickRight.addEventListener('click', () => {
    let items = myContent.getElementsByClassName('active');
    let itemsIndecator = myIndecators.getElementsByClassName('active');

    const elements = document.querySelectorAll(".carousel-item");
    const lastElement = elements[elements.length - 1];

    if (lastElement.classList.contains("active")) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active');
            }
            indexItem = 0
            let item = myContent.children[0]
            item.classList.add('active')
    
        for (let i = 0; i < itemsIndecator.length; i++) {
            itemsIndecator[i].classList.remove('active');
            }
            indexIndecator = 0
            let myitem = myIndecators.children[0]
            myitem.classList.add('active')
    } else {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active');
            }
            indexItem++
            let item = myContent.children[indexItem]
            item.classList.add('active')
    
        for (let i = 0; i < itemsIndecator.length; i++) {
            itemsIndecator[i].classList.remove('active');
            }
            indexIndecator++
            let myitem = myIndecators.children[indexIndecator]
            myitem.classList.add('active')
    }
})


buttonOpenFirstSlide.addEventListener('click', () => {
    let items = myContent.getElementsByClassName('active');
    let itemsIndecator = myIndecators.getElementsByClassName('active');

    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
        }
        let item = myContent.children[indexItem = 0]
        item.classList.add('active')

    for (let i = 0; i < itemsIndecator.length; i++) {
        itemsIndecator[i].classList.remove('active');
        }
        let myitem = myIndecators.children[indexIndecator = 0]
        myitem.classList.add('active')
})



