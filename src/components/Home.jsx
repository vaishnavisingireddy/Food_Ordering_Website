import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            Are you  <span> Hungry ?</span>
          </h3>
          <h1>Don't Wait!!!</h1>
          <h1>Let's start to order now!</h1>
          <Link to="/menu" className="btn"> 
            Order Now
          </Link>
        </div>
      </section>
      <Products/>
      <About/>
      <Footer/>
    </>
  );
};

export default Home;

