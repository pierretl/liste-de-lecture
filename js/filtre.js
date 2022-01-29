const filtre = document.querySelector(".js_filtre");
const filtreBtn = document.querySelector(".js_filtre-btnDisplay");
const filtreAchat = document.querySelector(".js_fitre-achat");

filtreBtn.addEventListener('click', function () {
    if (filtre.classList.contains('hide')){
        filtre.classList.remove('hide');
        displayMenu();
    } else {
        filtre.classList.add('hide');
    }
});

filtreAchat.addEventListener('click', function () {
    document.getElementById('encours').checked = true;
    document.getElementById('possede').checked = true;
    document.getElementById('btnPreference').click();
});