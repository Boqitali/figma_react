import React from "react";
import "./About.scss";

import brainImage from "../../assets/about.png"; // siz yuborgan rasm

const About = () => {
  return (
    <section className="brain-hero">
      <div className="brain-hero__wrapper">
        {/* Chapdagi rasm */}
        <div className="brain-hero__image">
          <img src={brainImage} alt="AI Brain Illustration" />
        </div>

        {/* O‘ngdagi matn */}
        <div className="brain-hero__content">
          <h1>
            Apply AI, Deep Learning <br /> and Data <span>Sciece</span> to solve
          </h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
