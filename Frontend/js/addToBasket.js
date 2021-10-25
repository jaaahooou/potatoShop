const initialize = () => {
  const buyButton = document.querySelectorAll('.buyButton');
  const productName = document.querySelectorAll('.productName');
  const productPrice = document.querySelectorAll('.productPrice');
  const productBackground = document.querySelectorAll('.productBackground');
  const productDescription = document.querySelectorAll('.productDescription');

  for (let i = 0; i < buyButton.length; i++) {
    buyButton[i].addEventListener('click', () => {
      const data = {
        name: productName[i].innerText,
        description: productDescription[i].innerText,
        price: Number(productPrice[i].innerText),
        img: productBackground[i].style.backgroundImage,
        count: 2,
      };
      fetch(
        'http://localhost:3000/basket',

        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        },
      );
    });
  }
};

setTimeout(initialize, 1500);
