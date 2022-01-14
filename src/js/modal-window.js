const modalMenu = document.querySelector('.mobile-menu');
const menuToggler = document.querySelector('[data-action=open-modal]');

const handleMenuButton = () => modalMenu.classList.toggle('is-open');

menuToggler.addEventListener('click', handleMenuButton);
