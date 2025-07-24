import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <p className="tagline">NEXT GENERATION PLATFORM</p>
        <h1>
          Artificial intelligence
          <br />
          &amp; Syber security
        </h1>
        <p className="desc">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="buttons">
          <button className="get-started">Get Started</button>
          <button className="watch-video">▶ Watch Video</button>
        </div>
      </div>
      <div className="image">
        <img src="/rocket.png" alt="Rocket" />
      </div>
    </section>
  );
}

export default Hero;
