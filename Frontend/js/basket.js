const pageWrapper = document.querySelector('.page-wrapper');
const menuWrapper = document.querySelector('.menuWrapper');

function showBasketElement() {
  fetch('http://localhost:3000/basket')
    .then((resp) => {
      return resp.json();
    })
    .then((productsInBasket) => {
      console.log(productsInBasket.length);

      for (let i = 0; i < productsInBasket.length; i++) {
        const basketWrapper = document.createElement('div');
        menuWrapper.parentNode.insertBefore(
          basketWrapper,
          menuWrapper.nextSibling,
        );
        basketWrapper.classList.add('basket-wrapper');

        const productInBasketImgNameWrapper = document.createElement('div');
        productInBasketImgNameWrapper.classList.add(
          'product-in-basket-img-name-wrapper',
        );
        basketWrapper.appendChild(productInBasketImgNameWrapper);

        const productInBasketImg = document.createElement('div');
        productInBasketImg.classList.add('product-in-basket-img');
        productInBasketImgNameWrapper.appendChild(productInBasketImg);

        const productInBasketName = document.createElement('div');
        productInBasketName.classList.add('product-in-basket-name');
        productInBasketName.innerText = `dupa`;
        productInBasketImgNameWrapper.appendChild(productInBasketName);

        const productCountPriceWrapper = document.createElement('div');
        productCountPriceWrapper.classList.add('product-count-price-wrapper');
        basketWrapper.appendChild(productCountPriceWrapper);

        const productInBasketCountWrapper = document.createElement('div');
        productInBasketCountWrapper.classList.add(
          'product-in-basket-count-wrapper',
        );
        productCountPriceWrapper.appendChild(productInBasketCountWrapper);

        const productInBasketSubtrack = document.createElement('div');
        productInBasketSubtrack.classList.add('product-in-basket-subtract');
        productInBasketSubtrack.classList.add(
          'product-in-basket-count-wrapper-element',
        );
        productInBasketSubtrack.innerText = `-`;
        productInBasketCountWrapper.appendChild(productInBasketSubtrack);

        console.log(basketWrapper);
      }
    });
}

window.addEventListener('DOMContentLoaded', showBasketElement());
