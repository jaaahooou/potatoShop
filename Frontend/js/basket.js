const pageWrapper = document.querySelector('.page-wrapper');
const menuWrapper = document.querySelector('.menuWrapper');

function showBasketElement() {
  fetch('http://localhost:3000/basket')
    .then((resp) => {
      return resp.json();
    })
    .then((productsInBasket) => {
      console.log(productsInBasket);

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
        productInBasketImg.style.backgroundImage = productsInBasket[i].img;

        const productInBasketName = document.createElement('div');
        productInBasketName.classList.add('product-in-basket-name');
        productInBasketName.innerText = `${productsInBasket[i].name}`;
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

        const productInBasketCount = document.createElement('div');
        productInBasketCount.classList.add('product-in-basket-count');
        productInBasketCount.classList.add(
          'product-in-basket-count-wrapper-element',
        );

        productInBasketCountWrapper.appendChild(productInBasketCount);

        const productCountForm = document.createElement('form');
        productCountForm.action = `text`;
        productInBasketCount.appendChild(productCountForm);

        const productCountInput = document.createElement('input');
        productCountInput.classList.add('product-count-input');
        productCountInput.type = 'text';
        productCountForm.appendChild(productCountInput);

        const productInBasketAdd = document.createElement('div');
        productInBasketAdd.classList.add('product-in-basket-add');
        productInBasketAdd.classList.add(
          'product-in-basket-count-wrapper-element',
        );
        productInBasketAdd.innerText = `+`;
        productInBasketCountWrapper.appendChild(productInBasketAdd);

        const productInBasketPrice = document.createElement('div');
        productInBasketPrice.classList.add('product-in-basket-price');
        productInBasketPrice.innerText = `500zł`;
        productCountPriceWrapper.appendChild(productInBasketPrice);

        console.log(basketWrapper);
      }
    })
    .then(fetch(``));
}

window.addEventListener('DOMContentLoaded', showBasketElement());
