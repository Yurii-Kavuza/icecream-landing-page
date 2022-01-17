(() => {
  const form = document.querySelector('[data-form="form-feedback"]');
  const buttonSend = document.querySelector('[data-action="submit-form"]');

  const handleFeedbackForm = e => {
    console.log('Hello form!');
  };

  buttonSend.addEventListener('click', e => {
    e.preventDefault();
    console.log('Hello form!');
    // handleFeedbackForm(e);
  });
})();
