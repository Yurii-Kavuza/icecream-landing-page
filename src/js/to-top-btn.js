(() => {
  const toTop = document.querySelector('.to-top');

  const handleButton = () => {
    if (window.pageYOffset > 50) toTop.classList.add('active');
    else toTop.classList.remove('active');
  };

  window.addEventListener('scroll', handleButton);
})();