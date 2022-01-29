const menuBtnDisplay = document.querySelectorAll('.js_menu-btnDisplay');
const menu = document.querySelector('.js_menu');
const menuPositionY = document.querySelector('.js_menu-positionY');
const menuBtn = document.querySelectorAll('.js_menu-btn');
const app = document.querySelector('.js_app');

function displayMenu() {
    if (menu.classList.contains(':visible')) {
        menu.classList.remove(':visible');
        positionMenuY(this);
    } else {
        menu.classList.add(':visible');
        positionMenuY(this);
    }
}

function positionMenuY(el){
    if (el.dataset.position == 'bas') {
        menuPositionY.classList.add(menuPositionY.dataset.positionBas);
    } else {
        menuPositionY.classList.remove(menuPositionY.dataset.positionBas);
    }
}

function overlayContentAdd() {
    app.classList.add(classOverlay);
}
function overlayContentRemove() {
    if (!this.classList.contains(':click')) {
        app.classList.remove(classOverlay);
    }
}

// affiche/masque le menu
for (let i = 0; i < menuBtnDisplay.length; i++) {
    menuBtnDisplay[i].addEventListener('click', displayMenu, false);
}


// Ajoute un overlay au site au survol du menu
// Désactiver tant que l'on n'affiche pas les intitulés au survol/touch lorsque que le menu est réduit
/*
for (let i = 0; i < menuBtn.length; i++) {
    if (Modernizr.touch) { 
        menuBtn[i].addEventListener('touchstart', overlayContentAdd, false);
        menuBtn[i].addEventListener('touchend', overlayContentRemove, false);
    } else { 
        menuBtn[i].addEventListener('mouseover', overlayContentAdd, false);
        menuBtn[i].addEventListener('mouseout', overlayContentRemove, false);
    }
}
*/