import React from "react";
import "./Footer.scss";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import robot from "../../assets/robot.png"; // rasm manzili

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        
        <div className="footer-col">
          <div className="logo-row">
            <img src={robot} alt="AI Robot" className="robot-img" />
          </div>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and layouts and visual mockups.
          </p>

          <ul className="contact-info">
            <li>
              <FaEnvelope /> Company@gmail.com.com
            </li>
            <li>
              <FaPhoneAlt /> (064) 332-1233
            </li>
            <li>
              <FaMapMarkerAlt /> 450 Wall Street, USA, New York
            </li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4>INFORMATION</h4>
          <ul>
            <li>New Collection</li>
            <li>About Store</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>Our Sitemap</li>
            <li>Orders History</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4>FOOTER MENU</h4>
          <ul>
            <li>Instagram profile</li>
            <li>New Collection</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>Terms & Conditions</li>
            <li>Purchase Theme</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>Instagram profile</li>
            <li>New Collection</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>Terms & Conditions</li>
            <li>Purchase Theme</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4>ABOUT THE STORE</h4>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and layouts and visual mockups.
          </p>
          <a href="#">www.company.com</a>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
          <div className="language-select">
            <IoEarth />
            <span>English</span>
            <span>▼</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
