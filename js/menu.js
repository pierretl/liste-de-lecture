const btnMenuDisplay = document.querySelectorAll('.js--btn-menuDisplay');
const menu = document.querySelector('.js--zoneMenu');
const btnMenu = document.querySelectorAll('.js--btn-menu');

function displayMenu() {
    if (menu.classList.contains('hide')) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}

function overlayContentAdd() {
    zoneMain.classList.add(classOverlay);
    btnGauche.classList.add(classOverlay);
    btnDroite.classList.add(classOverlay);
    for (let i = 0; i < btnMenuDisplay.length; i++) {
        if (!btnMenuDisplay[i].classList.contains('js--btn-menu')){
            btnMenuDisplay[i].classList.add(classOverlay);
        }
    }
}
function overlayContentRemove() {
    if ( !this.classList.contains('js--btn-position')){
        zoneMain.classList.remove(classOverlay);
    }
    btnGauche.classList.remove(classOverlay);
    btnDroite.classList.remove(classOverlay);
    for (let i = 0; i < btnMenuDisplay.length; i++) {
        btnMenuDisplay[i].classList.remove(classOverlay);
    }
}

// affiche/masque le menu
for (let i = 0; i < btnMenuDisplay.length; i++) {
    btnMenuDisplay[i].addEventListener('click', displayMenu, false);
}

// Ajoute un overlay au site au survol des boutons du menu
for (let i = 0; i < btnMenu.length; i++) {
    if (Modernizr.touch) { 
        btnMenu[i].addEventListener('touchstart', overlayContentAdd, false);
        btnMenu[i].addEventListener('touchend', overlayContentRemove, false);
      } else { 
        btnMenu[i].addEventListener('mouseover', overlayContentAdd, false);
        btnMenu[i].addEventListener('mouseout', overlayContentRemove, false);
      }
    
}

