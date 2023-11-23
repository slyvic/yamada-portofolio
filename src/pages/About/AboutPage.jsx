import React from "react";
import "./AboutPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */

const About = () => {
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />

      {/* <ParticleBackground /> */}

      <main>
        <section className="sobre-mi-seccion about_section" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container"></div>
            <div className="sobre-mi-info">
              <p>
                I am a proficient and self-motivated Software Developer with 7
                years of successful experience. My passion for working in this
                field is immense, and I am always eager to learn the latest and
                most updated materials. I consistently strive to improve my
                skills and deliver high-quality work.
              </p>
              <p>
                Apart from my technical expertise, I possess a keen eye for
                design and user experience. This allows me to create intuitive
                and engaging interfaces that keep users coming back for more.
                Whether you need a new website, an overhaul of an existing
                application, or a custom e-commerce platform, I have the
                necessary expertise and experience to deliver exceptional
                results.
              </p>
              <p>
                I strongly believe in the values of hard work and honesty.
                Building long-term professional relationships with my clients is
                of utmost importance to me, as it ensures the success of every
                project.
              </p>
              <div className="btn-info">
                <div className="custom-btn btn-codigo" onClick={readMore}>
                  <span>Read more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="HTML"
                  className="skills-img icon-li"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                  title="HTML5"
                />
                <h2 className="skill-name">HTML</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <img
                  alt="CSS"
                  className="skills-img icon-li"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                  title="CSS3"
                />
                <h2 className="skill-name">CSS</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="Js"
                  className="skills-img icon-li"
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                  title="Java Script"
                />
                <h2 className="skill-name">Javascript</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Sass"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  title="Sass"
                />
                <h2 className="skill-name">Sass</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-down"
                data-aos-delay="300"
              >
                <img
                  alt="Bootstrap"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  title="Bootstrap"
                />
                <h2 className="skill-name">Bootstrap</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="jQuery"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                  title="jQuery"
                />
                <h2 className="skill-name">jQuery</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="react"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  title="jQuery"
                />
                <h2 className="skill-name">ReactJs</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="angular"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
                  title="Angular"
                />
                <h2 className="skill-name">Angular</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <img
                  alt="nodejs"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  title="jQuery"
                />
                <h2 className="skill-name">NodeJs</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="express"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  title="jQuery"
                />
                <h2 className="skill-name">Express</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="php"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3b/PHP_Logo%2C_text_only.svg"
                  title="PHP"
                />
                <h2 className="skill-name">PHP</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="laravel"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/36/Logo.min.svg"
                  title="Laravel"
                />
                <h2 className="skill-name">Laravel</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="python"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                  title="Python"
                />
                <h2 className="skill-name">Python</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Django"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
                  title="Django"
                />
                <h2 className="skill-name">Django</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Flask"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg"
                  title="Flask"
                />
                <h2 className="skill-name">Flask</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="MySQL"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg"
                  title="MySQL"
                />
                <h2 className="skill-name">MySQL</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="MongoDB"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                  title="MongoDB"
                />
                <h2 className="skill-name">MongoDB</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="PostgreSQL"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                  title="PostgreSQL"
                />
                <h2 className="skill-name">PostgreSQL</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="android"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                  title="Android"
                />
                <h2 className="skill-name">Android</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="ios"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/IOS_logo.svg"
                  title="iOS"
                />
                <h2 className="skill-name">iOS</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Flutter"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg"
                  title="Flutter"
                />
                <h2 className="skill-name">Flutter</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="React Native"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  title="React Native"
                />
                <h2 className="skill-name">React Native</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Kotlin"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg"
                  title="Kotlin"
                />
                <h2 className="skill-name">Kotlin</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Swift"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ea/SWIFT_logo.svg"
                  title="Swift"
                />
                <h2 className="skill-name">Swift</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Google Map"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Maps_Logo_2020.svg"
                  title="Google Map"
                />
                <h2 className="skill-name">Google Map</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Firebae"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
                  title="Firebae"
                />
                <h2 className="skill-name">Firebae</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Blockchain"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
                  title="Blockchain"
                />
                <h2 className="skill-name">Blockchain</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Ethereum"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ethereum_Classic_Logo.svg"
                  title="Ethereum"
                />
                <h2 className="skill-name">Ethereum/Smart Contract</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Solidity"
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg"
                  title="Solidity"
                />
                <h2 className="skill-name">Solidity</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="NFT"
                  className="skills-img"
                  src="https://statics.ambcrypto.com/wp-content/uploads/2022/01/non-fungible-token-g3dc51b17f_1920-e1642074485273.jpg"
                  title="NFT"
                />
                <h2 className="skill-name">NFT</h2>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default About;
