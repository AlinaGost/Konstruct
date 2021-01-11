import React from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";

function Content() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Services/>
    </div>
  )
}

export default Content;
