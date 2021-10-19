const logo = document.querySelector('.logo');
const basketButton = document.querySelector('.basket-button');

logo.addEventListener('click', () => {
  location.href = 'index.html';
});

basketButton.addEventListener('click', () => {
  location.href = 'basket.html';
});
