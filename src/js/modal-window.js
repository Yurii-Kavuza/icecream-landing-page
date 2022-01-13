const modalMenu = document.querySelector('.mobile-menu');
const menuToggler = document.querySelector('.menu-toggler');

const handleMenuButton = () => modalMenu.classList.toggle('is-open');

menuToggler.addEventListener('click', handleMenuButton);
