const initialize = () => {
  const buyButton = document.querySelectorAll('.buyButton');
  const productName = document.querySelectorAll('.productName');

  console.log(buyButton);

  for (let i = 0; i < buyButton.length; i++) {
    console.log(buyButton[i]);
    console.log(productName[i]);
    buyButton[i].addEventListener('click', () => {
      console.log(i);
      console.log(productName[i].innerText);
      const data = {
        name: productName[i].innerText,
        count: 2,
      };
      fetch(
        'http://localhost:3000/basket',
        // {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // },
        {
          method: 'POST',
          body: JSON.stringify(data),
        },
      );
    });
  }
};

setTimeout(initialize, 1500);