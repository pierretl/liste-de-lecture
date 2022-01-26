const classOverlay = document.documentElement.dataset.classOverlay;
const currentPosition = localStorage.getItem('positionMenu');
const positionMenuBtn = document.querySelector('.js_positionMenu-btn');
const positionMenuBtnGauche = document.querySelector('.js_positionMenu-gauche');
const positionMenuBtnDroite = document.querySelector('.js_positionMenu-droite');
const texteGauche = document.querySelector('.js_texte-gauche');
const texteDroite = document.querySelector('.js_texte-droite');

function choixPositionMenu() {
    if (localStorage.getItem('positionMenu') == 'droite') {
        localStorage.setItem('positionMenu', 'gauche');
        texteGauche.classList.add('hide');
        texteDroite.classList.remove('hide');
    } else {
        localStorage.setItem('positionMenu', 'droite');
        texteDroite.classList.add('hide');
        texteGauche.classList.remove('hide');
    }
    document.documentElement.dataset.position = localStorage.getItem('positionMenu');
}

function changePosition() {
    positionMenuBtnGauche.classList.add('hide');
    positionMenuBtnDroite.classList.add('hide');
    app.classList.remove(classOverlay);
    if (this.classList.contains('js_positionMenu-gauche')){
        localStorage.setItem('positionMenu', 'gauche');
        texteGauche.classList.add('hide');
        texteDroite.classList.remove('hide');
    } else {
        localStorage.setItem('positionMenu', 'droite');
        texteDroite.classList.add('hide');
        texteGauche.classList.remove('hide');
    }
    document.documentElement.dataset.position = localStorage.getItem('positionMenu');
}

if ( localStorage.getItem('positionMenu') ) {
    document.documentElement.dataset.position = localStorage.getItem('positionMenu');
    if (localStorage.getItem('positionMenu') == 'droite') {
        texteDroite.classList.add('hide');
    } else {
        texteGauche.classList.add('hide');
    }
} else {
    positionMenuBtnGauche.classList.remove('hide');
    positionMenuBtnDroite.classList.remove('hide');
    app.classList.add(classOverlay);
}

positionMenuBtn.addEventListener('click', choixPositionMenu, false);
positionMenuBtnGauche.addEventListener('click', changePosition, false);
positionMenuBtnDroite.addEventListener('click', changePosition, false);