import React from "react";
import { cart } from "../Data.jsx";

const Cart = () => {
  if (!cart || cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <section className="cart">
      <h1 className="heading">Your Cart</h1>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.img} alt={item.name} />
            <div className="content">
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="order-button-container">
        <button className="place-order-btn">Place Order</button>
      </div>
    </section>
  );
};

export default Cart;