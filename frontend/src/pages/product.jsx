import React from 'react';

const Product = ({ product }) => {
  const addToCart = (productId) => {
    fetch('/api/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ product_id: productId }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Product added to cart') {
          alert('Product added to cart!');
        }
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
      });
  };

  return (
    <div className="product">
      <h3>{product.title}</h3>
      <img src={product.image_url} alt={product.title} />
      <p>{product.price}</p>
      <button onClick={() => addToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
