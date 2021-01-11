import React from 'react';

function About() {
  return (
    <div className="about">
      <div className="container">
        <section className="about__header">Our story</section>

        <section className="about__content">

          <div className="about__content--left">
            <div className="about__title">
              Founded in 2011 by John Mathew Smith, <a href={"#"} className="konstruct">Konstruct</a>  has become the number one construction management firm
            </div>
            <div className="about__text">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
              </p>
            </div>
          </div>

          <div className="about__content--right">

            <div className="about__content--item">
              <div className="about__item--title">We plan</div>
            </div>

            <div className="about__content--item">
              <div className="about__item--title">We manege</div>
            </div>

            <div className="about__content--item">
              <div className="about__item--title">We build</div>
            </div>

          </div>

        </section>
      </div>
    </div>
  )
}


export default About;
