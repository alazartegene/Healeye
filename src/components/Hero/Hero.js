import React from "react";
import DocSvg from "../svg/DocSvg";
import heroImage from "../../Image/doctor.png";
import "./hero.css";
import Kume from "../svg/Kume";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>We Care About Your Health</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nam, laboriosam!
          </p>
          <a className="hero-btn" href="#">
            Get our Service now
          </a>
        </div>
        <div className="hero-image">
          <Kume />
        </div>
      </section>
    </>
  );
};

export default Hero;
