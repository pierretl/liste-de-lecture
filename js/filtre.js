const filtre = document.querySelector(".js_filtre");
const filtreBtn = document.querySelector(".js_filtre-btnDisplay");
const filtreAchat = document.querySelector(".js_fitre-achat");
const filtreChanger = document.querySelector(".js_filtre-changer");

filtreBtn.addEventListener('click', function () {
    if (filtre.classList.contains('hide')){
        filtre.classList.remove('hide');
        contenu.classList.add('hide');
        masqueMenu();
    }
});

filtreAchat.addEventListener('click', function () {
    document.getElementById('encours').checked = true;
    document.getElementById('possede').checked = true;
    document.getElementById('btnPreference').click();
    masqueMenu();
});

function changerFiltre(){
    filtre.classList.remove('hide');
    contenu.classList.add('hide');
}