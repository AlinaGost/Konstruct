import React from 'react';
import {LogoFooter} from "./Logo";
import Social from "./Social";

function Footer() {
  return (
    <div className="footer">

      <div className="container">
        <div className="footer__inner">

          <div className="footer__company">
            <div className="footer__header">Company</div>
            <LogoFooter/>
            <div className="company__text">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat.
              </p>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__header">Links</div>
            <div className="links__list">

              <div className="link__item--column-big">
                <ul>
                  <li><a className="link__item" href="#">Home</a></li>
                  <li><a className="link__item" href="#">About</a></li>
                  <li><a className="link__item" href="#">Services</a></li>
                  <li><a className="link__item" href="#">Projects</a></li>
                  <li><a className="link__item" href="#">Contact us</a></li>
                </ul>
              </div>

              <div className="link__item--column-sm">
                <ul>
                  <li><a className="link__item" href="#">FAQ</a></li>
                  <li><a className="link__item" href="#">Terms</a></li>
                  <li><a className="link__item" href="#">Careers</a></li>
                </ul>
                <ul>
                  <li><a className="link__item" href="#">Blog</a></li>
                  <li><a className="link__item" href="#">Partners</a></li>
                  <li><a className="link__item" href="#">News</a></li>
                </ul>

              </div>
            </div>
          </div>

          <div className="footer__contacts">
            <div className="footer__header">Contact us</div>

            <div className="contacts__inner">
              <div className="contacts__address">213 Baker Street Oriel City Kounty 7000 KNW, Kountry Name</div>
              <div className="contacts__phone"> +23 994 233 4022</div>
              <div className="contacts__email"> info@konstruct.com</div>
            </div>

          </div>

          <Social/>

        </div>
      </div>
    </div>
  )
}

export default Footer;
