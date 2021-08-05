const BG_WHITE = 'rgb(255 255 255 / 50%)';
const BG_BLACK = 'rgb(0 0 0 / 50%)';
const FA_SUN = 'fa-sun';
const FA_MOON = 'fa-moon';
const DARK = 'dark';
const LIGHT = 'light';

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const toggleIconText = toggleIcon.children[0];
const toggleIconFas = toggleIcon.children[1];
const img1 = document.getElementById('image1');
const img2 = document.getElementById('image2');
const img3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const root = document.documentElement;

// Dark or Light Images
function changeImg(mode) {
    img1.src = `img/undraw_proud_coder_${mode}.svg`;
    img2.src = `img/undraw_feeling_proud_${mode}.svg`;
    img3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}
function toggleDarkLight(isDark) {
    nav.style.backgroundColor = isDark ? BG_BLACK : BG_WHITE;
    textBox.style.backgroundColor = isDark ? BG_WHITE : BG_BLACK;
    toggleIconText.textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIconFas.classList.replace(FA_SUN, FA_MOON) : toggleIconFas.classList.replace(FA_MOON, FA_SUN);
    isDark ? changeImg(DARK) : changeImg(LIGHT);
}

// Switch theme dynamically
function switchTheme(event) {
    const mode = event.target.checked ? DARK : LIGHT;
    root.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    toggleDarkLight(toggleSwitch.checked);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);

if (currentTheme) {
    root.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK) {
        toggleSwitch.checked = true;
        //darkMode();
        toggleDarkLight(true);
    }
}