import React from "react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© Copyright 2022 COMPANY</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
