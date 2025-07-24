import React from "react";
import "./Header.scss";
import logo from "../../assets/loga.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <img src={logo} alt="AI Logo" />
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
        <button className="sign-in">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
