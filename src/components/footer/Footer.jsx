import React from "react";
import "./footer.css";
import {AiFillFacebook} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {GrPaypal} from "react-icons/gr";
import {FaGithubSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
        <h1>THANK YOU!</h1>
        <h4><q>The only real mistake is the one from which we learn nothing.</q></h4>

        <div className="social-media">
        <a href="https://www.facebook.com/eldin.betalmos.aydol"><AiFillFacebook/></a>
        <a href="https://www.linkedin.com/in/eldin-betalmos-ab048a240"><BsLinkedin/></a>
        <a href="https://www.paypal.me/eldin143"><GrPaypal/></a>
        <a href="https://github.com/dinvoid/"><FaGithubSquare/></a>
        </div>
    </div>
</footer>
  );
};

export default Footer;
