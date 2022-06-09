const openMenuBtn = document.querySelector(".open-menu");
const menu = document.querySelector(".menu-mobile-cont");

openMenuBtn.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle("closed");
});