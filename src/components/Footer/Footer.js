import React from "react";
import {
  FaFacebookF,
  FaTelegram,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container text-center">
      <p>Follow us on Social Media</p>
      <span>
        <FaFacebookF className="icon" />
      </span>
      <span>
        <FaTelegram className="icon" />
      </span>
      <span>
        <FaGooglePlusG className="icon" />
      </span>
      <span>
        <FaInstagram className="icon" />
      </span>
    </div>
  );
};

export default Footer;
