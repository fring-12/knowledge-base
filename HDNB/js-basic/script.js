const product = [
  {
    name: "Laptop",
    price: 1000,
    discount: 10,
    description: "hello laptop",
    stock: 10,
  },
  {
    name: "Iphone",
    price: 500,
    discount: 10,
    description: "hello smartphone",
    stock: 5,
  },
  {
    name: "Headphones",
    price: 100,
    discount: 5,
    description: "hello headphones",
    stock: 1,
  },
];

function renderProduct() {
  const container = document.getElementById("container");

  for (let i = 0; i < product.length; i++) {
    let productValue = product[i];
    if (productValue.stock > 0) {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `<h3>${productValue.name}</h3>
              <p><strong>Price:</strong> ${productValue.price}</p>
              <p><strong>Discounted Price:</strong> $900</p>
              <p><strong>Description:</strong> A high-performance laptop.</p>
              <p><strong>Stock:</strong> 5 units</p>
              <button class="btn">Buy Now</button>`;
      container.appendChild(card);
    }
  }

  //   console.log(container);
}

renderProduct();
