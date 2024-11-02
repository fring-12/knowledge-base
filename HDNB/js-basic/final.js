// Array of product objects
const products = [
    {
      name: 'Laptop',
      price: 1000,
      description: 'A high-performance laptop.',
      stock: 5,
      discount: 0.1 // 10% discount
    },
    {
      name: 'Smartphone',
      price: 500,
      description: 'A latest model smartphone.',
      stock: 10,
      discount: 0.15 // 15% discount
    },
    {
      name: 'Headphones',
      price: 100,
      description: 'Noise-cancelling headphones.',
      stock: 8,
      discount: 0.05 // 5% discount
    }
  ];
  
  // Function to calculate the final price after discount
  function calculateDiscount(price, discount) {
    return price - (price * discount);
  }
  
  // Function to generate product cards dynamically
  function generateProductCards() {
    const productContainer = document.getElementById('product-container');
    
    // Clear the container before rendering new cards
    productContainer.innerHTML = '';
  
    // Loop through the products array
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
      // Create a card element
      const card = document.createElement('div');
      card.classList.add('card');
  
      // Use variables to calculate final price
      const finalPrice = calculateDiscount(product.price, product.discount);
  
      // Populate card content
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Discounted Price:</strong> $${finalPrice.toFixed(2)}</p>
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Stock:</strong> ${product.stock} units</p>
        <button class="btn" onclick="buyProduct('${product.name}')">Buy Now</button>
      `;
  
      // Append card to the container
      productContainer.appendChild(card);
    }
  }
  
  // Function to simulate buying a product
  function buyProduct(productName) {
    alert(`You bought a ${productName}!`);
  }
  
  // Call the function to render product cards
  generateProductCards();


  // hello my name is banedict fring now i WILL teach you javscript today 

  
  