import { backdrop, menu } from './elements';

export const handleOpenModal = modal => {
  backdrop.classList.remove('is-hidden');
  modal.classList.add('is-open');
  menu.classList.remove('is-expanded');
};

export const handleCloseModal = modal => {
  backdrop.classList.add('is-hidden');
  modal.classList.remove('is-open');
};

export const handleBurgerLink = () => {
  backdrop.classList.add('is-hidden');
  menu.classList.remove('is-expanded');
};

export const openBurger = () => {
  backdrop.classList.remove('is-hidden');
  menu.classList.add('is-expanded');
};

export const closeBurger = () => {
  backdrop.classList.add('is-hidden');
  menu.classList.remove('is-expanded');
};

export const handleFeedbackForm = (e, modal) => {
  e.preventDefault();
  // form action
  handleCloseModal(modal);
};

export const handleFranchiseForm = (e, modal) => {
  e.preventDefault();
  // form action
  handleCloseModal(modal);
};