const btnLargeurMenu = document.querySelector('.js_largeurMenu-btn');
const currentLargeur = localStorage.getItem('largeurMenu');



if (currentLargeur){
    document.documentElement.dataset.menuLargeur = currentLargeur;
} else {
    document.documentElement.dataset.menuLargeur = 'small';
    localStorage.setItem('largeurMenu', 'small');
}

btnLargeurMenu.addEventListener('click', function name() {
    if (document.documentElement.dataset.menuLargeur == 'small') {
        document.documentElement.dataset.menuLargeur = 'large';
        localStorage.setItem('largeurMenu', 'large');
    } else {
        document.documentElement.dataset.menuLargeur = 'small';
        localStorage.setItem('largeurMenu', 'small');
    }
});