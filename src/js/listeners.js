import { openMenu, closeMenu, burgerLinks, modals, togglers, forms } from './elements';
import {
  handleOpenModal,
  handleCloseModal,
  handleBurgerLink,
  openBurger,
  closeBurger,
  handleFeedbackForm,
  handleFranchiseForm,
} from './actions';

// open burger
openMenu.forEach(item => item.addEventListener('click', openBurger));
// close burger
closeMenu.forEach(item => item.addEventListener('click', closeBurger));
// links to burger
burgerLinks.forEach(item => item.addEventListener('click', handleBurgerLink));
// open forms
togglers.openForm.forEach(item =>
  item.addEventListener('click', () => handleOpenModal(modals.form)),
);
togglers.openAddress.forEach(item =>
  item.addEventListener('click', () => handleOpenModal(modals.address)),
);
togglers.openFranchise.forEach(item =>
  item.addEventListener('click', () => handleOpenModal(modals.franchise)),
);
// close forms
togglers.closeForm.forEach(item =>
  item.addEventListener('click', () => handleCloseModal(modals.form)),
);
togglers.closeAddress.forEach(item =>
  item.addEventListener('click', () => handleCloseModal(modals.address)),
);
togglers.closeFranchise.forEach(item =>
  item.addEventListener('click', () => handleCloseModal(modals.franchise)),
);
// handle forms submit
forms.feedback.addEventListener('submit', e => handleFeedbackForm(e, modals.form));
forms.franchise.addEventListener('submit', e => handleFranchiseForm(e, modals.franchise));
