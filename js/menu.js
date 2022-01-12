const btnMenu = document.querySelectorAll('.js--btn-menu');
const menu = document.querySelector('.js--menu');

function displayMenu() {
    if (menu.classList.contains('hide')) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}

for (let i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click', displayMenu, false);
}