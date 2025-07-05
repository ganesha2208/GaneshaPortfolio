import React from "react";
import "./about.css";
import myImage from "../../assets/me-image2.JPG";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Master's in Computer Science</h5>
              <small>
                MCA (Data Science) <br />
                <i>MIT ADT University Pune.</i>
              </small>
            </article>

            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Bachelor's in Computer Science</h5>
              <small>
                BSC (Computer Science) <br />
                <i>SSPU University Pune.</i>
              </small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Full Stack Development</li>
                  <li>AWS</li>
                  <li>Python</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I am a <b>Full Stack Developer</b> with over 1.5 years of experience
            in React.js, AWS, Python, PostgreSQL, and Deep Learning. With a
            strong academic foundation in Masters in Computer Application and
            hands-on experience in various programming languages, I have worked
            on multiple live products and have experience in e-commerce websites
            with knowledge of Google Ads,SEO,Firebase etc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
