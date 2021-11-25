function getListOfProducts() {
  fetch('http://localhost:3000/potato-shop/1')
    .then((resp) => {
      console.log(resp.json);
      return resp.json();
    })
    .then((products) => {
      const productsDiv = document.querySelector('.products');

      for (let i = 0; i < products.length; i++) {
        const productWrap = document.createElement('div');
        const productName = document.createElement('div');
        const productDescription = document.createElement('div');
        const productPrice = document.createElement('div');
        const productBackground = document.createElement('div');
        const buyButton = document.createElement('div');
        const countWrapper = document.createElement(`div`);
        const increaseProductQuantity = document.createElement(`div`);
        const productQuantity = document.createElement('div');
        const reduceProductQuantity = document.createElement('div');

        productWrap.classList.add('productWrap');
        productName.classList.add('productName');
        productDescription.classList.add('productDescription');
        productPrice.classList.add('productPrice');
        productBackground.classList.add('productBackground');
        buyButton.classList.add('buyButton');
        countWrapper.classList.add('count-wrapper');
        reduceProductQuantity.classList.add('reduce-product-quantity');
        productQuantity.classList.add('product-quantity');
        increaseProductQuantity.classList.add('increase-product-quantity');

        productsDiv.appendChild(productWrap);
        productWrap.appendChild(productBackground);
        productWrap.appendChild(productName);
        productWrap.appendChild(productDescription);
        productWrap.appendChild(productPrice);
        productWrap.appendChild(countWrapper);
        countWrapper.appendChild(reduceProductQuantity);
        countWrapper.appendChild(productQuantity);
        countWrapper.appendChild(increaseProductQuantity);

        productWrap.appendChild(buyButton);

        productName.innerText = products[i].name;
        productDescription.innerText = products[i].description;
        productPrice.innerText = products[i].price;

        productBackground.style.backgroundImage = `url("${products[i].img}")`;
        buyButton.innerText = 'dodaj do koszyka';
      }
    });
}

window.addEventListener('DOMContentLoaded', getListOfProducts());
