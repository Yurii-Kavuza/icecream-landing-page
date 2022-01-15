(() => {
  const modals = {
    backdrop: document.querySelector('.backdrop'),
    address: document.querySelector('[data-modal="modal-address"]'),
    form: document.querySelector('[data-modal="modal-form"]'),
    article: document.querySelector('[data-modal="modal-article"]'),
  };

  const togglers = {
    openAddress: document.querySelector('[data-action="modal-open-address"]'),
    closeAddress: document.querySelector('[data-action="modal-close-address"]'),
    openForm: document.querySelector('[data-action="modal-open-form"'),
    closeForm: document.querySelector('[data-action="modal-close-form"'),
    openArticle: document.querySelector('[data-action="modal-open-article"'),
    closeArticle: document.querySelector('[data-action="modal-close-article"'),
  };

  const handleModal = modal => {
    modals.backdrop.classList.toggle('is-hidden');
    modal.classList.toggle('is-open');
  };

  togglers.openAddress.addEventListener('click', () => handleModal(modals.address));
  togglers.closeAddress.addEventListener('click', () => handleModal(modals.address));
  togglers.openForm.addEventListener('click', () => handleModal(form.address));
  togglers.closeForm.addEventListener('click', () => handleModal(form.address));
  togglers.openArticle.addEventListener('click', () => handleModal(article.address));
  togglers.closeArticle.addEventListener('click', () => handleModal(article.address));
})();
