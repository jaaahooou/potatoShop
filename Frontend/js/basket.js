function showBasketElement() {
  fetch('http://localhost:3000/basket')
    .then((resp) => {
      return resp.json();
    })
    .then((productsInBasket) => {
      const productInBasketImg = document.querySelector(
        '.product-in-basket-img',
      );
    });
}

window.addEventListener('DOMContentLoaded', showBasketElement());
