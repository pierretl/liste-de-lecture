const btnAfficheSuivi = document.querySelectorAll(".js--btn-suivi");
const zoneSuivi = document.querySelector(".js--suivi");

function afficheLeSuivi(e) {
    if (zoneSuivi.classList.contains('hide')){
        zoneSuivi.classList.remove('hide');
    } else {
        zoneSuivi.classList.add('hide');
    }
}

for (let index = 0; index < btnAfficheSuivi.length; index++) {
    btnAfficheSuivi[index].addEventListener('click', afficheLeSuivi, false);
}
