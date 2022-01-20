export const backdrop = document.querySelector('.backdrop');
export const menu = document.querySelector('[data-menu="menu-mobile"]');
export const openMenu = document.querySelectorAll('[data-action="button-open-menu"]');
export const closeMenu = document.querySelectorAll('[data-action="button-close-menu"]');
export const burgerLinks = document.querySelectorAll('[data-action="burger-link"]');
export const map = document.querySelector('[data-element="google-maps-contacts"]');

export const modals = {
  form: document.querySelector('[data-modal="modal-form"]'),
  address: document.querySelector('[data-modal="modal-address"]'),
  franchise: document.querySelector('[data-modal="modal-franchise"]'),
  readmore: document.querySelector('[data-modal="modal-readmore"]'),
};

export const togglers = {
  openForm: document.querySelectorAll('[data-action="modal-open-form"]'),
  closeForm: document.querySelectorAll('[data-action="modal-close-form"]'),
  openAddress: document.querySelectorAll('[data-action="modal-open-address"]'),
  closeAddress: document.querySelectorAll('[data-action="modal-close-address"]'),
  openFranchise: document.querySelectorAll('[data-action="modal-open-franchise"]'),
  closeFranchise: document.querySelectorAll('[data-action="modal-close-franchise"]'),
  openReadMore: document.querySelectorAll('[data-action="modal-open-readmore"]'),
  closeReadMore: document.querySelectorAll('[data-action="modal-close-readmore"]'),
  changeCity: document.querySelectorAll('[data-action="change-city"]'),
};

export const forms = {
  feedback: document.querySelector('[data-form="form-feedback"]'),
  franchise: document.querySelector('[data-form="form-franchise"]'),
};
