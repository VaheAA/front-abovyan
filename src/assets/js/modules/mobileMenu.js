const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const body = document.body;

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  body.classList.add('no-scroll');
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  body.classList.remove('no-scroll');
});

mobileMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('mobile-menu')) {
    mobileMenu.classList.remove('open');
    body.classList.remove('no-scroll');
  }
});
