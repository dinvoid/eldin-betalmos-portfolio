import React from "react";
import "./header.css";
import MyCV from "./MyCV";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/ako.jpg";
const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Eldin Betalmos</h1>
        <h5 className="text-light">Web Developer</h5>
        <MyCV />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a className="scroll" href="#contact">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
