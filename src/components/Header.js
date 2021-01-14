import React from "react";
import {Logo} from "./Logo";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Logo/>
        <div className="headerTitle">Partner with konstuct</div>
        <div className="headerSubtitle">An award-winning construction management firm</div>
        <div className="headerFooter">Scroll down</div>
      </div>
    </div>
  )
}

export default Header;
