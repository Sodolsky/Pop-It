const menuButton = document.querySelector('.header__menu--mobile');
const drawer = document.querySelector('.drawer');

menuButton.addEventListener('click', () => {
  drawer.classList.toggle('open');
});

