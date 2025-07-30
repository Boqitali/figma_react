import React from "react";
import "./Client.scss";
import illustration from "../../assets/about1.png"; 

const Client = () => {
  return (
    <section className="clients-say">
      <div className="container">
        <div className="text-content">
          <h2>
            What our clients say about <br /> our awesome solutions
          </h2>
          <p>
            To take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain some advantage from it who do
            not know.
          </p>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing.
          </p>
          <p>
            Lorem ipsum is placeholder previewing layouts and visual mockups.
          </p>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className="image-content">
          <img src={illustration} alt="Clients Say Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Client;
