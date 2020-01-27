'use strict'

document.querySelector('body').removeAttribute('data-nojs');

var headerBar = document.querySelector('.header');
var menuBtn = document.querySelector('.page-header__btn');
var onMenuButtonClick = function () {
  headerBar.classList.toggle('header--extended');
};

menuBtn.addEventListener('click', onMenuButtonClick);

var LAPTOP_WIDTH = 1024;
if (headerBar.clientWidth === LAPTOP_WIDTH) {
  headerBar.classList.remove('header--extended');
}
