const btnLargeurMenu = document.querySelector('.js_largeurMenu-btn');
const ZoneLargeurMenu = document.querySelector('.js_largeurMenu-zone');

btnLargeurMenu.addEventListener('click', function name() {
    if (btnLargeurMenu.classList.contains(':actif')) {
        btnLargeurMenu.classList.remove(':actif');
        ZoneLargeurMenu.classList.remove(':large');
    } else {
        btnLargeurMenu.classList.add(':actif');
        ZoneLargeurMenu.classList.add(':large');
    }
})