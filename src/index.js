import './scss/style.scss';

const menuBtn = document.querySelector('.header__menu-bar');
const menu = document.querySelector('.header__burger');

document.addEventListener('DOMContentLoaded', (event) => {
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
  }
})
