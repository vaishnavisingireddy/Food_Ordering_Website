import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "../Data.jsx";

const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          Our <span>Menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => {
            const [quantity, setQuantity] = useState(0); 

            const increment = () => setQuantity(quantity + 1);
            const decrement = () => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            };

            return (
              <div className="box" key={index * Math.random()}>
                <img src={item.img} alt="" />
                <h3>{item.name}</h3> 
                <div className="price">
                  {item.price} <span>{item.originalPrice}</span> 
                </div>
                <div className="quantity-controls">
                  <button onClick={decrement}>-</button>
                  <span>{quantity}</span>
                  <button onClick={increment}>+</button>
                </div>
                <Link to="#" className="btn">
                  Add to Cart
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Menu;