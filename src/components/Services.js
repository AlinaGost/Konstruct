import React from "react";
import {Button} from "./Button";

function Services() {
  return (
    <div className="services">
      <div className="container">

        <div className="services__header">
          <div className="services__title">Our capabilities</div>
          <div className="services__text">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </div>
          <Button name="All services"/>
        </div>

        <div className="services__content">

          <div className="services__content--item">
            <div className="services__item--img"></div>
            <div className="services__item--title">Project and construction management</div>
            <div className="services__item--text">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
              </p>
            </div>
          </div>

          <div className="services__content--item">
            <div className="services__item--img"></div>
            <div className="services__item--title">Structure audit and maintenance</div>
            <div className="services__item--text">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
              </p>
            </div>
          </div>

          <div className="services__content--item">
            <div className="services__item--img">Здесь должна быть картинка вместо  div</div>
            <div className="services__item--title">Factory construction and modeling</div>
            <div className="services__item--text">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Services;
