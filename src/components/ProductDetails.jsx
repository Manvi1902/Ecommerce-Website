import React from 'react';
//import Button from 'react-bootstrap/esm/Button';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>Product Details</h2>
      <img src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
      
    </div>
  );
};

export default ProductDetails;
