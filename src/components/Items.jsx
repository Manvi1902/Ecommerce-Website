import React, { useContext } from "react";
import { CartContext } from "../Pages/ShoppingCart";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
<Button as="input" type="button" value="Input" />


const Items = ({ id, title, category, price, img, quantity }) => {

  const { removeItem, increment, decrement } = useContext(CartContext);
  return (
    <>
    <Stack gap={2}>
       <div className="items-info">
        <div className="product-img">
          <img src={img} alt="tp" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{category}</p>
        </div>
        <div className="add-minus-quantity">

          <Button 
              className="fas fa-plus add"  
              value="+"  
              onClick={() => increment(id)}
          >+</Button>
          <input type="text" placeholder={quantity}  />
          <Button 
              className="fas fa-minus minus" 
              value="+"    
              onClick={() => decrement(id)}
          >-</Button>

        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>
      <hr />
      </Stack>
    </>
  );
};

export default Items;