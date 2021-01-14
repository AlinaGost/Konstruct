import React from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Connection from "./Connection";
import NewsLetter from "./Newsletter";
import Footer from "./Footer";
import Copyright from "./Copyright";

function Content() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Services/>
      <Connection/>
      <NewsLetter/>
      <Footer/>
      <Copyright text="© 2017 Konstruct Inc. Designed by Jane Kathryn Teo"/>
    </div>
  )
}

export default Content;
