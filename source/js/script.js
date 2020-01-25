'use strict'

document.querySelector('body').removeAttribute('data-nojs');

var navBar = document.querySelector('.header__nav');
var menuBtn = document.querySelector('.page-header__btn');
var onMenuButtonClick = function () {
  navBar.classList.toggle('header__nav--expended');
};

menuBtn.addEventListener('click', onMenuButtonClick);
