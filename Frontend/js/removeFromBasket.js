function initialize() {
  const removeProductFromBasket = document.querySelectorAll(
    '.remove-product-from-basket',
  );
  console.log(removeProductFromBasket);

  for (let i = 0; i < removeProductFromBasket.length; i++) {
    removeProductFromBasket[i].addEventListener('click', () => {
      console.log(i);

      fetch(`http://localhost:3000/basket/1`, {
        method: `DELETE`,
      });
    });
  }
}

setTimeout(initialize, 1000);
