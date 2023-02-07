let menuButton = document.querySelector('.main-nav__menu-button');
let navList = document.querySelector('.nav-list');
let burgButton = document.querySelector('.burger-button')

menuButton.addEventListener('click', function () {
  if (navList.classList.contains('nav-list--closed')) {
    navList.classList.remove('nav-list--closed');
    navList.classList.add('nav-list--opened');
  }
  else {
  navList.classList.add('nav-list--closed');
  navList.classList.remove('nav-list--opened');
  }
  if (burgButton.classList.contains('burger-button--closed')) {
    burgButton.classList.remove('burger-button--closed');
    burgButton.classList.add('burger-button--opened');
      }
      else {
      burgButton.classList.add('burger-button--closed');
      burgButton.classList.remove('burger-button--opened')
      }
})