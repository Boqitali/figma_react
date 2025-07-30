import React from "react";
import "./Hero.scss";

import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import image from "../../assets/image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        {/* Chap taraf - matn qismi */}
        <div className="hero__content">
          <p className="hero__tagline">NEXT GENERATION PLATFORM</p>
          <h1>
            Artificial intelligence <br /> & <span>Syber</span> security
          </h1>
          <p className="hero__description">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="hero__buttons">
            <button className="btn btn--primary">Get Started</button>
            <button className="btn btn--secondary">▶ Watch Video</button>
          </div>
        </div>

        {/* O‘ng taraf - rasm qismi */}
        <div className="hero__image">
          <img src={image} alt="Rocket Illustration" />
        </div>
      </div>

      {/* Logolar butun hero qismidan pastda alohida */}
      <div className="hero__logos">
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
      </div>
    </section>
  );
};

export default Hero;
