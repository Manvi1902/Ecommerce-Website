import React, { useContext } from "react";
import Items from "../Components/Items";
import Navbar from "../Components/Navbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "../Pages/ShoppingCart";
import Button from "react-bootstrap/esm/Button";

const ContextCart = () => {
  
  const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);

  {
    if (item.length === 0) {
      return (
        <>
          <Navbar/>
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <div className="cart-items-container">
                  <h1>Empty Cart</h1>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars>
                  {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
                   })}
               
                </Scrollbars>
              </div>
            </div>
            <div className="card-total">
              <h3>
                card total: <span> Rs.{totalAmount} </span>
              </h3>
              <Button>CheckOut</Button>
              <Button onClick={clearCart}>Clear Cart</Button>
            </div>
          </section>
        </>
      );
    }
  }
};

export default ContextCart;