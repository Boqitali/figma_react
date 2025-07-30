import React from "react";
import "./Awards.scss";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";

const awardsData = [
  {
    title: "Naxly as the Winners in Global Agency Awards",
    text: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
    icon: image1,
  },
  {
    title: "Expert Prespective Agency Awards",
    text: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
    icon: image2,
  },
  {
    title: "Business Prespective Global Agency Awards",
    text: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
    icon: image3,
  },
  {
    title: "Value for Results in Global Agency Awards",
    text: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
    icon: image4,
  },
  {
    title: "Global Experience in Agency Awards",
    text: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
    icon: image5,
  },
];

const Awards = () => {
  return (
    <section className="awards-section">
      <div className="container">
        <div className="awards-wrapper">
          {awardsData.map((award, index) => (
            <div className="award-card" key={index}>
              <img src={award.icon} alt={`Award ${index + 1}`} />
              <h3>{award.title}</h3>
              <p>{award.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
