import React from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Connection from "./Connection";
import NewsLetter from "./Newsletter";
import Footer from "./Footer";

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
    </div>
  )
}

export default Content;
