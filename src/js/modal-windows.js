(() => {
  const modals = {
    backdrop: document.querySelector('.backdrop'),
    form: document.querySelector('[data-modal="modal-form"]'),
    address: document.querySelector('[data-modal="modal-address"]'),
    franchise: document.querySelector('[data-modal="modal-franchise"]'),
  };

  const togglers = {
    openForm: document.querySelector('[data-action="modal-open-form"]'),
    closeForm: document.querySelector('[data-action="modal-close-form"]'),
    openAddress: document.querySelector('[data-action="modal-open-address"]'),
    closeAddress: document.querySelector('[data-action="modal-close-address"]'),
    openFranchise: document.querySelector('[data-action="modal-open-franchise"]'),
    closeFranchise: document.querySelector('[data-action="modal-close-franchise"]'),
  };

  const handleModal = modal => {
    modals.backdrop.classList.toggle('is-hidden');
    modal.classList.toggle('is-open');
  };

  togglers.openForm.addEventListener('click', () => handleModal(modals.form));
  togglers.closeForm.addEventListener('click', () => handleModal(modals.form));
  togglers.openAddress.addEventListener('click', () => handleModal(modals.address));
  togglers.closeAddress.addEventListener('click', () => handleModal(modals.address));
  togglers.openFranchise.addEventListener('click', () => handleModal(modals.franchise));
  togglers.closeFranchise.addEventListener('click', () => handleModal(modals.franchise));
})();
