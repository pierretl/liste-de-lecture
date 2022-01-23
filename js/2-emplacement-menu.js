const classOverlay = document.documentElement.dataset.classOverlay;
const currentPosition = localStorage.getItem('positionMenu');
const positionMenuBtn = document.querySelector('.js_positionMenu-btn');
const positionMenuBtnGauche = document.querySelector('.js_positionMenu-gauche');
const positionMenuBtnDroite = document.querySelector('.js_positionMenu-droite');

function choixPositionMenu(menuParDefaut) {
    positionMenuBtn.classList.add(':click');
    menu.classList.remove(':visible');
    positionMenuBtnGauche.classList.remove('hide');
    positionMenuBtnDroite.classList.remove('hide');
    app.classList.add(classOverlay);
}

function changePosition() {
    positionMenuBtn.classList.remove(':click');
    menu.classList.add(':visible');
    positionMenuBtnGauche.classList.add('hide');
    positionMenuBtnDroite.classList.add('hide');
    app.classList.remove(classOverlay);
    if (this.classList.contains('js_positionMenu-gauche')){
        localStorage.setItem('positionMenu', 'gauche');
    } else {
        localStorage.setItem('positionMenu', 'droite');
    }
    document.documentElement.dataset.position = localStorage.getItem('positionMenu');
}

if ( localStorage.getItem('positionMenu') ) {
    document.documentElement.dataset.position = localStorage.getItem('positionMenu');
} else {
    localStorage.setItem('positionMenu', 'gauche');
    choixPositionMenu();
    menu.classList.remove(':visible');
}

positionMenuBtn.addEventListener('click', choixPositionMenu, false);
positionMenuBtnGauche.addEventListener('click', changePosition, false);
positionMenuBtnDroite.addEventListener('click', changePosition, false);