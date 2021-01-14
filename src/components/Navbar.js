import React from "react";
import {LogoSmall} from "./Logo";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <div className="navbar__left">
            <LogoSmall/>
          </div>

          <div className="navbar__right">
            <a href={"#"} className="navbar__item">Home</a>
            <a href={"#"} className="navbar__item">About</a>
            <a href={"#"} className="navbar__item">Services</a>
            <a href={"#"} className="navbar__item">Work</a>
            <a href={"#"} className="navbar__item">Contact</a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Navbar;
