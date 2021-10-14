function getListOfProducts() {
  fetch("http://localhost:3000/potato-shop")
    .then((resp) => {
      return resp.json();
    })
    .then((products) => {
      const productsDiv = document.querySelector(".products");
      console.log(products.length);
      for (let i = 0; i < products.length; i++) {
        console.log(products);
        const product = document.createElement("div");
        const productName = document.createElement("div");
        const productDescription = document.createElement("div");
        const productPrice = document.createElement("div");
        const productBackground = document.createElement("div");
        const buyButton = document.createElement("div");

        product.classList.add("productWrap");
        productName.classList.add("productName");
        productDescription.classList.add("productDescription");
        productPrice.classList.add("productPrice");
        productBackground.classList.add("productBackground");
        buyButton.classList.add("buyButton");

        productsDiv.appendChild(product);
        product.appendChild(productBackground);
        product.appendChild(productName);
        product.appendChild(productDescription);
        product.appendChild(productPrice);
        product.appendChild(buyButton);

        productName.innerText = products[i].name;
        productDescription.innerText = products[i].description;
        productPrice.innerText = products[i].price;
        console.log(products[i].img);
        productBackground.style.backgroundImage = `url("${products[i].img}")`;
        buyButton.innerText = "dodaj do koszyka";
      }
    });
}

window.addEventListener("DOMContentLoaded", getListOfProducts());
