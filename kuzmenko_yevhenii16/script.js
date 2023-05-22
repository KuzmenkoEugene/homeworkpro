class Slider {
    constructor(yourSlider) {
        this.yourSlider = yourSlider;
        this.indexItem = 0;
        this.indexIndecator = 0;
        this.buttonClickLeft = document.getElementById('buttonLeft');
        this.buttonClickRight = document.getElementById('buttonRight');
        this.buttonOpenFirstSlide = document.getElementById('openFirstSlide');
        this.buttonOpenLastSlide = document.getElementById('openLastSlide')
        this.myContent = document.getElementsByClassName('carousel-inner')[0];
        this.myIndecators = document.getElementsByClassName('carousel-indicators')[0];
        this.buttonOpenNmbr = document.getElementById('sliderOpenNumber');
        this.buttonDeleteNmbrs = document.getElementById('buttonDeleteNumber');
        this.buttonRemove = document.getElementById('removelast')
    }

    nextSlide() {
        this.buttonClickRight.addEventListener('click', () => {

            if (this.indexItem === this.myContent.children.length - 1) {
                for (let i = 0; i < this.myContent.children.length; i++) {
                    this.myContent.children[i].classList.remove('active');
                }
                for (let i = 0; i < this.myIndecators.children.length; i++) {
                    this.myIndecators.children[i].classList.remove('active');
                }    

                this.myContent.children[this.indexItem = 0].classList.add('active')
                this.myIndecators.children[this.indexIndecator = 0].classList.add('active')
            } else {
                for (let i = 0; i < this.myContent.children.length; i++) {
                    this.myContent.children[i].classList.remove('active');
                }
                for (let i = 0; i < this.myIndecators.children.length; i++) {
                    this.myIndecators.children[i].classList.remove('active');
                }    
    
                this.indexItem++
                this.indexIndecator++
                
                this.myContent.children[this.indexItem].classList.add('active')
                this.myIndecators.children[this.indexIndecator].classList.add('active')
            }
        })
    }

    prevSlide() {
        this.buttonClickLeft.addEventListener('click', () => {

            if (this.indexItem === 0) {
                for (let i = 0; i < this.myContent.children.length; i++) {
                    this.myContent.children[i].classList.remove('active');
                }
                for (let i = 0; i < this.myIndecators.children.length; i++) {
                    this.myIndecators.children[i].classList.remove('active');
                }    

                this.indexItem = this.myIndecators.children.length - 1
                this.indexIndecator = this.myIndecators.children.length - 1
                
                this.myContent.children[this.indexItem].classList.add('active')
                this.myIndecators.children[this.indexIndecator].classList.add('active')
            } else {
                for (let i = 0; i < this.myContent.children.length; i++) {
                    this.myContent.children[i].classList.remove('active');
                }
                for (let i = 0; i < this.myIndecators.children.length; i++) {
                    this.myIndecators.children[i].classList.remove('active');
                }    
    
                this.indexItem--
                this.indexIndecator--

                this.myContent.children[this.indexItem].classList.add('active')
                this.myIndecators.children[this.indexIndecator].classList.add('active')
            } 
        })
    }

    lastSlide() {
        this.buttonOpenLastSlide.addEventListener('click', () => {
            
            for (let i = 0; i < this.myContent.children.length; i++) {
                this.myContent.children[i].classList.remove('active');
            }
            for (let i = 0; i < this.myIndecators.children.length; i++) {
                this.myIndecators.children[i].classList.remove('active');
            }    
            
            this.myContent.children[this.indexItem = this.myContent.children.length - 1].classList.add('active')
            this.myIndecators.children[this.indexIndecator = this.myIndecators.children.length - 1].classList.add('active')
        })
    }

    firstSlide() {
        this.buttonOpenFirstSlide.addEventListener('click', () => {
            
            for (let i = 0; i < this.myContent.children.length; i++) {
                this.myContent.children[i].classList.remove('active');
            }
            for (let i = 0; i < this.myIndecators.children.length; i++) {
                this.myIndecators.children[i].classList.remove('active');
            }    
            
            this.myContent.children[this.indexItem = 0].classList.add('active')
            this.myIndecators.children[this.indexIndecator = 0].classList.add('active')
        })
    }

    openSlideByIndex() {
        this.buttonOpenNmbr.addEventListener('click', (e) => {
            e.preventDefault()
            for (let i = 0; i < this.myContent.children.length; i++) {
                this.myContent.children[i].classList.remove('active');
            }
            for (let i = 0; i < this.myIndecators.children.length; i++) {
                this.myIndecators.children[i].classList.remove('active');
            }    

            let number = openSlideNumber.value;
            number--
            this.myContent.children[number].classList.add('active')
            this.myIndecators.children[number].classList.add('active')
        })
    }

    addSlide(title, description) {

    }

    insertSlide(number, title, description) {

    }

    removeLastSlide() {
        this.buttonRemove.addEventListener('click', () => {

            let endContent = this.myContent.children.length - 1;
            let endIndecator = this.myIndecators.children.length - 1;

            this.myContent.children[endContent].remove()
            this.myIndecators.children[endIndecator].remove()
        })
    }

    removeSlide() {
        this.buttonDeleteNmbrs.addEventListener('click', (e) => {
            e.preventDefault()

            let number = mainNumber.value;
            number--
            this.myContent.children[number].remove()
            this.myIndecators.children[number].remove()
        })
    }
}

const sliderEl = document.getElementById('mySlider')

const slider = new Slider(sliderEl);

slider.nextSlide();
slider.prevSlide();
slider.lastSlide()
slider.firstSlide();
slider.openSlideByIndex()


slider.removeLastSlide() 
slider.removeSlide()
