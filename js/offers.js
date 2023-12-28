const offers = document.getElementsByClassName('offers__item-title');
let colorToggle = false;
function changeColor() {
    for (let i = 0; i < offers.length; i++) {
        if (colorToggle) {
            offers[i].style.color = '#ffc123';
        } else {
            offers[i].style.color = '#ffffff';
        }
    }
    colorToggle = !colorToggle;
}

setInterval(changeColor, 1000);