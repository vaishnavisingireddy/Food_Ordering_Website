import React from "react";
import { Link } from "react-router-dom";
import { product } from "../Data.jsx"; 

const Products = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          Our Top <span>Dishes</span>
        </h1>
        <div className="box-container">
          {product.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <div className="image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="content">
                <h3>{item.name}</h3>
                <Link to="/menu" className="btn"> 
                Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;