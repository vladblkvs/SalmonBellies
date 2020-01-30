'use strict'

document.body.removeAttribute('data-nojs');

var headerBar = document.querySelector('.header');
var menuBtn = document.querySelector('.page-header__btn');
var onMenuButtonClick = function () {
  headerBar.classList.toggle('header--extended');

  if (headerBar.classList.contains('header--extended')) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.removeAttribute('class');
  }
};

menuBtn.addEventListener('click', onMenuButtonClick);
