const pageWrapper = document.querySelector('.page-wrapper');
const menuWrapper = document.querySelector('.menuWrapper');
const allProductsInBasketWrapper = document.querySelector(
  '.all-products-in-basket-wrapper',
);

function showBasketElement() {
  fetch('http://localhost:3000/basket')
    .then((resp) => {
      return resp.json();
    })
    .then((productsInBasket) => {
      console.log(productsInBasket);
      for (let i = 0; i < productsInBasket.length; i++) {
        console.log(productsInBasket[i]);
        console.log(i);
        const basketWrapper = document.createElement('div');
        allProductsInBasketWrapper.appendChild(basketWrapper);

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

        const removeProductFromBasket = document.createElement(`div`);
        const removeProductFromBasketIcon = document.createElement(`i`);
        removeProductFromBasketIcon.classList.add('fa-trash-alt');
        removeProductFromBasketIcon.classList.add('fas');
        removeProductFromBasket.classList.add('remove-product-from-basket');
        removeProductFromBasket.classList.add(
          'product-in-basket-count-wrapper-element',
        );

        productInBasketCountWrapper.appendChild(removeProductFromBasket);
        removeProductFromBasket.appendChild(removeProductFromBasketIcon);

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
        productCountInput.value = productsInBasket[i].count;
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
        productInBasketPrice.innerText = `500z??`;
        productCountPriceWrapper.appendChild(productInBasketPrice);
      }
    });
}

window.addEventListener('DOMContentLoaded', showBasketElement());
