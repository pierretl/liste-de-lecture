const currentPosition = localStorage.getItem('positionMenu');
const btnGauche = document.querySelector(".js--gauche");
const btnDroite = document.querySelector(".js--droite");
const btnPosition = document.querySelector(".js--btn-position");

if (currentPosition){
    document.documentElement.dataset.position = currentPosition;
    btnGauche.classList.add('hide');
    btnDroite.classList.add('hide');
} else {
    btnGauche.classList.remove('hide');
    btnDroite.classList.remove('hide');
}

function changePosition(e) {
    if (e.target.classList.contains('js--gauche')){
        localStorage.setItem('positionMenu', 'gauche');
    } else {
        localStorage.setItem('positionMenu', 'droite');
    }
    document.documentElement.dataset.position = localStorage.getItem('positionMenu');
    btnGauche.classList.add('hide');
    btnDroite.classList.add('hide');
    if (menu.classList.contains('js--reste-afficher')) {
        menu.classList.remove('hide');
    }
}

function choixPosition() {
    btnGauche.classList.remove('hide');
    btnDroite.classList.remove('hide');
    menu.classList.add('hide');
    menu.classList.add('js--reste-afficher');
}

btnGauche.addEventListener('click', changePosition, false);
btnDroite.addEventListener('click', changePosition, false);
btnPosition.addEventListener('click', choixPosition, false);