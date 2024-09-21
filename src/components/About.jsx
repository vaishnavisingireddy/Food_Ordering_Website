import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../assets/images/about.jpeg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>
        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>
          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            Our mission is to serve delicious, high-quality meals that showcase the rich flavors and diverse culinary traditions. We are committed to using fresh, locally-sourced ingredients to create dishes that not only taste great but are also good for you.
            </p>
            <p> 
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
