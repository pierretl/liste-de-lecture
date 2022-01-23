const classOverlay = document.documentElement.dataset.classOverlay;
const currentPosition = localStorage.getItem('positionMenu');
const positionMenuBtn = document.querySelector('.js_positionMenu-btn');
const positionMenuBtnGauche = document.querySelector('.js_positionMenu-gauche');
const positionMenuBtnDroite = document.querySelector('.js_positionMenu-droite');

function choixPositionMenu() {
    positionMenuBtn.classList.add(':click');
    displayMenu();
    positionMenuBtnGauche.classList.remove('hide');
    positionMenuBtnDroite.classList.remove('hide');
    app.classList.add(classOverlay);
}

function changePosition(e) {
    positionMenuBtn.classList.remove(':click');
    displayMenu();
    positionMenuBtnGauche.classList.add('hide');
    positionMenuBtnDroite.classList.add('hide');
    app.classList.remove(classOverlay);
    if (e.target.classList.contains('js_positionMenu-gauche')){
        localStorage.setItem('positionMenu', 'gauche');
    } else {
        localStorage.setItem('positionMenu', 'droite');
    }
    document.documentElement.dataset.position = localStorage.getItem('positionMenu');
}

if (currentPosition){
    document.documentElement.dataset.position = currentPosition;
    positionMenuBtnGauche.classList.add('hide');
    positionMenuBtnDroite.classList.add('hide');
} else {
    positionMenuBtnGauche.classList.remove('hide');
    positionMenuBtnDroite.classList.remove('hide');
    app.classList.add(classOverlay);
}

positionMenuBtn.addEventListener('click', choixPositionMenu, false);
positionMenuBtnGauche.addEventListener('click', changePosition, false);
positionMenuBtnDroite.addEventListener('click', changePosition, false);