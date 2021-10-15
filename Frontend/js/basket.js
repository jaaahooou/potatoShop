function showBasketElement() {
  fetch('http://localhost:3000/basket').then((resp) => {
    console.log(resp.json());
  });
}

window.addEventListener('DOMContentLoaded', showBasketElement());
