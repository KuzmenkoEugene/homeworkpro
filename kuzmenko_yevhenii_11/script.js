const paragraph = document.getElementById('paragraphId')
const buttonHidden = document.getElementById('showhiddenId')
const buttonDecrease = document.getElementById('id_decrease')
const buttonIncrease = document.getElementById('id_increase')

buttonHidden.onclick = function() {
    paragraph.classList.toggle('hidden_paragraph');
    buttonHidden.classList.toggle('showP_buttom');
    buttonHidden.classList.toggle('showhidden');
    buttonDecrease.classList.toggle('hidden_buttom');
    buttonIncrease.classList.toggle('hidden_buttom');
}

i = `32`

buttonDecrease.onclick = function() {
    paragraph.style.fontSize = `${--i}px`
}

buttonIncrease.onclick = function() {
    paragraph.style.fontSize = `${++i}px`
} 


