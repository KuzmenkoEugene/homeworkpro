const buttonClickLeft = document.getElementById('buttonLeft')
const buttonClickRight = document.getElementById('buttonRight')
const buttonRemove = document.getElementById('removelast')
const buttonOpenFirstSlide = document.getElementById('openFirstSlide')
const buttonOpenLastSlide = document.getElementById('openLastSlide')
const myContent = document.getElementsByClassName('carousel-inner')[0]
const myIndecators = document.getElementsByClassName('carousel-indicators')[0]

const secondaryButton1 = document.getElementById('carouselButtonLeft');
const secondaryButton2 = document.getElementById('carouselButtonRight');
const buttonDeleteNmbrs = document.getElementById('buttonDeleteNumber');
const buttonOpenNmbr = document.getElementById('sliderOpenNumber');


let indexItem = 0
let indexIndecator = 0

const elements = document.querySelectorAll(".carousel-item");

buttonOpenNmbr.addEventListener('click', (e) => {
    e.preventDefault()
    let items = myContent.getElementsByClassName('active');
    let itemsIndecator = myIndecators.getElementsByClassName('active');

    let itemSlide = openSlideNumber.value
    itemSlide--
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    indexItem = elements.length - 1;
    let item = myContent.children[itemSlide];
    item.classList.add('active');

    for (let i = 0; i < itemsIndecator.length; i++) {
        itemsIndecator[i].classList.remove('active');
    }
    indexIndecator = elements.length - 1;
    let myitem = myIndecators.children[itemSlide];
    myitem.classList.add('active');
})

buttonDeleteNmbrs.addEventListener('click', (e) => {
    e.preventDefault()
    let itemSlide = mainNumber.value
    const elements = document.querySelectorAll(".carousel-item");
    itemSlide--
    elements[itemSlide].remove()
})

buttonRemove.addEventListener('click', () => {
    const elements = document.querySelectorAll(".carousel-item");
    const lastElement = elements[elements.length - 1];
    lastElement.remove()
})

console.dir(myContent.children)

buttonClickLeft.addEventListener('click', () => {
    let items = myContent.getElementsByClassName('active');
    let itemsIndecator = myIndecators.getElementsByClassName('active');

    const elements = document.querySelectorAll(".carousel-item");
    const firstElement = elements[0];

    console.dir(myContent.children)

    if (firstElement.classList.contains("active")) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active');
        }
        indexItem = elements.length - 1;
        let item = myContent.children[indexItem];
        item.classList.add('active');

        for (let i = 0; i < itemsIndecator.length; i++) {
            itemsIndecator[i].classList.remove('active');
        }
        indexIndecator = elements.length - 1;
        let myitem = myIndecators.children[indexIndecator];
        myitem.classList.add('active');
    } else {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active');
        }

        for (let i = 0; i < itemsIndecator.length; i++) {
            itemsIndecator[i].classList.remove('active');
        }

        indexIndecator--;
        indexItem--;

        let item = myContent.children[indexItem];
        item.classList.add('active');
        let myitem = myIndecators.children[indexIndecator];
        myitem.classList.add('active');
    }
});


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

buttonOpenLastSlide.addEventListener('click', () => {
    let items = myContent.getElementsByClassName('active');
    let itemsIndecator = myIndecators.getElementsByClassName('active');

    const elements = document.querySelectorAll(".carousel-item");
    const lastElement = elements[elements.length - 1];

    indexItem = myContent.children.length - 1
    indexIndecator = 3;

    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
        }
        lastElement.classList.add('active')

    const elementsIndecator = document.querySelectorAll(".button-carousel");
    const lastElementIndecator = elementsIndecator[elements.length - 1];

    for (let i = 0; i < itemsIndecator.length; i++) {
        itemsIndecator[i].classList.remove('active');
        }
        lastElementIndecator.classList.add('active')
})
