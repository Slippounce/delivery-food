

const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

const openToggle = event => modal.classList.toggle('is-open');
cartButton.addEventListener('click', openToggle);
close.addEventListener('click', openToggle);

new WOW().init();