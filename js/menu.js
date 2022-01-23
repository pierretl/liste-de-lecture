const menuBtnDisplay = document.querySelectorAll('.js_menu-btnDisplay');
const menu = document.querySelector('.js_menu');
const menuBtn = document.querySelectorAll('.js_menu-btn');
const app = document.querySelector('.js_app');

function displayMenu() {
    if (menu.classList.contains(':visible')) {
        menu.classList.remove(':visible');
    } else {
        menu.classList.add(':visible');
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
for (let i = 0; i < menuBtn.length; i++) {
    if (Modernizr.touch) { 
        menuBtn[i].addEventListener('touchstart', overlayContentAdd, false);
        menuBtn[i].addEventListener('touchend', overlayContentRemove, false);
    } else { 
        menuBtn[i].addEventListener('mouseover', overlayContentAdd, false);
        menuBtn[i].addEventListener('mouseout', overlayContentRemove, false);
    }
}