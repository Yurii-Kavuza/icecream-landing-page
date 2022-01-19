const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 600) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});
