const suivi = document.querySelector(".js_suivi");
const suiviBtn = document.querySelector(".js_suivi-btnDisplay");

suiviBtn.addEventListener('click', function () {
    if (suivi.classList.contains('hide')){
        suivi.classList.remove('hide');
        displayMenu();
    } else {
        suivi.classList.add('hide');
    }
})