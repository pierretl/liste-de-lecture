const toggleSwitch = document.querySelector(".js--switch");
const labelClair = document.querySelector(".js--switch-clair");
const labelSombre = document.querySelector(".js--switch-sombre");
const currentMode = localStorage.getItem('mode');

if (currentMode){
    document.documentElement.setAttribute('data-mode', currentMode);
    if (currentMode === 'light') {
        toggleSwitch.checked = true;
        labelClair.classList.add('hide');
        labelSombre.classList.remove('hide');
    } else {
        labelClair.classList.remove('hide');
        labelSombre.classList.add('hide');
    }
}

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-mode', 'light');
        localStorage.setItem('mode', 'light');
        labelClair.classList.add('hide');
        labelSombre.classList.remove('hide');
    }else{
        document.documentElement.setAttribute('data-mode', 'dark');
        localStorage.setItem('mode', 'dark');
        labelClair.classList.remove('hide');
        labelSombre.classList.add('hide');
    }
}

toggleSwitch.addEventListener('change', switchMode, false);