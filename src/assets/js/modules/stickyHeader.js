window.onscroll = function () {
  myFunction();
};

const header = document.querySelector('.header');
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 200) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
