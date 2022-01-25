const filtre = document.querySelector(".js_filtre");
const filtreBtn = document.querySelector(".js_filtre-btnDisplay");

filtreBtn.addEventListener('click', function () {
    if (filtre.classList.contains('hide')){
        filtre.classList.remove('hide');
        displayMenu();
    } else {
        filtre.classList.add('hide');
    }
})