(() => {
  const menu = document.querySelector('[data-menu="menu-mobile"]');
  const openMenu = document.querySelector('[data-action="button-open-menu"]');
  const closeMenu = document.querySelector('[data-action="button-close-menu"]');
  const backdrop = document.querySelector('.backdrop');

  openMenu.addEventListener('click', () => {
    backdrop.classList.remove('is-hidden');
    menu.classList.add('is-expanded');
  });
  closeMenu.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');
    menu.classList.remove('is-expanded');
  });
})();
