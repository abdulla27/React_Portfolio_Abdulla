import React from "react";
import "./header.css";
import CTA from "./CTA"
import ME from "../../asset/h5.png"
// import albert from "../../asset/albert.jpg"
import HeaderSocial from "./HeaderSocial"

const Header=()=> {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Mr. Abdulla</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} />
          {/* <img src={albert} /> */}
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
