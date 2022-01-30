const menuBtnAffiche = document.querySelectorAll('.js_menu-btnAffiche');
const menuBtnFermer = document.querySelector('.js_menu-btnFermer');
const contenu = document.querySelector('.js_contenu');
const menu = document.querySelector('.js_menu');
const menuBtn = document.querySelectorAll('.js_menu-btn');
const app = document.querySelector('.js_app');



function masqueMenu() {
    if ( document.documentElement.dataset.menuAffiche == 'oui' ){
        menu.classList.remove(':visible');
        document.documentElement.dataset.menuAffiche = '';
    }
}

function afficheMenu() {
    //Active l'interaction du click sur le contenu pour fermer le menu
    document.documentElement.dataset.menuAffiche = 'oui';

    //set position X
    var largeurBouton = this.offsetWidth;
    var positionCurseur = window.event.offsetX;
    if ( positionCurseur <= (largeurBouton / 2) ) {
        document.documentElement.dataset.positionX = 'gauche';
    } else {
        document.documentElement.dataset.positionX = 'droite';
    }

    //set position Y
    document.documentElement.dataset.positionY = this.dataset.positionY;

    //affiche le menu
    menu.classList.add(':visible');
}



// Affiche le menu
for (let i = 0; i < menuBtnAffiche.length; i++) {
    menuBtnAffiche[i].addEventListener('click', afficheMenu, false);
}

// Masque le menu
contenu.addEventListener('click', masqueMenu, false);
menuBtnFermer.addEventListener('click', masqueMenu, false);



// Ajoute un overlay au site au survol du menu
// Désactiver tant que l'on n'affiche pas les intitulés au survol/touch lorsque que le menu est réduit
/*
function overlayContentAdd() {
    app.classList.add(classOverlay);
}
function overlayContentRemove() {
    if (!this.classList.contains(':click')) {
        app.classList.remove(classOverlay);
    }
}
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