import React, { useContext } from "react";
import { CartContext } from "../Pages/ShoppingCart";


const Navbar = () => {
  const {totalItems } = useContext(CartContext);
  return (
    <>
      <header>
            <div  className="continue-shopping"  href="/home">
              <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
              <h3>continue shoping</h3>
            </div>
            <div className="cart-icon">
              <img src="./images/cart.png" alt="cart-logo" />
              <p>{totalItems}</p>
            </div>
      </header>
    </>
  );
};

export default Navbar;