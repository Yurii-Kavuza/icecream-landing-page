import { openMenu, closeMenu, burgerLinks, modals, togglers, forms, map } from './elements';
import {
  handleOpenModal,
  handleCloseModal,
  handleBurgerLink,
  openBurger,
  closeBurger,
  handleFeedbackForm,
  handleFranchiseForm,
} from './actions';
import { handeMapChange } from './changeMap';

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
togglers.openReadMore.forEach(item =>
  item.addEventListener('click', () => handleOpenModal(modals.readmore)),
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
togglers.closeReadMore.forEach(item =>
  item.addEventListener('click', () => handleCloseModal(modals.readmore)),
);
// handle map
togglers.changeCity.forEach(item =>
  item.addEventListener('click', () => handeMapChange(item, togglers.changeCity, map)),
);

// handle forms submit
forms.feedback.addEventListener('submit', e => handleFeedbackForm(e, modals.form));
forms.franchise.addEventListener('submit', e => handleFranchiseForm(e, modals.franchise));
