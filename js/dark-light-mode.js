const toggleSwitch = document.querySelector(".js_switch");
const labelClair = document.querySelectorAll(".js_switch-clair");
const labelSombre = document.querySelectorAll(".js_switch-sombre");
const currentMode = localStorage.getItem('mode');

if (currentMode){
    document.documentElement.setAttribute('data-mode', currentMode);
    if (currentMode === 'light') {
        toggleSwitch.checked = true;
        for (let i = 0; i < labelClair.length; i++) {
            labelClair[i].classList.add('hide');
        }
        for (let j = 0; j < labelSombre.length; j++) {
            labelSombre[j].classList.remove('hide');
        }
    } else {
        for (let i = 0; i < labelClair.length; i++) {
            labelClair[i].classList.remove('hide');
        }
        for (let j = 0; j < labelSombre.length; j++) {
            labelSombre[j].classList.add('hide');
        }
    }
}

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-mode', 'light');
        localStorage.setItem('mode', 'light');
        for (let i = 0; i < labelClair.length; i++) {
            labelClair[i].classList.add('hide');
        }
        for (let j = 0; j < labelSombre.length; j++) {
            labelSombre[j].classList.remove('hide');
        }
    }else{
        document.documentElement.setAttribute('data-mode', 'dark');
        localStorage.setItem('mode', 'dark');
        for (let i = 0; i < labelClair.length; i++) {
            labelClair[i].classList.remove('hide');
        }
        for (let j = 0; j < labelSombre.length; j++) {
            labelSombre[j].classList.add('hide');
        }
    }
}

toggleSwitch.addEventListener('change', switchMode, false);