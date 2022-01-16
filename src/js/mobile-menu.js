(() => {
  const menu = document.querySelector('[data-menu="menu-mobile"');
  const openMenu = document.querySelector('[data-action="button-open-menu"');
  const closeMenu = document.querySelector('[data-action="button-close-menu"');

  openMenu.addEventListener('click', () => menu.classList.add('is-open'));
  closeMenu.addEventListener('click', () => menu.classList.remove('is-open'));
})();