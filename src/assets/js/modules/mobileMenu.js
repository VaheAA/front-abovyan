const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

mobileMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('mobile-menu')) {
    mobileMenu.classList.remove('open');
  }
});
