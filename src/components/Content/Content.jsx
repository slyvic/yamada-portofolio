import React from "react";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    {/* <ParticleHeaderBg /> */}
    <section className="inicio" id="inicio">
      <div className="titulo">
        <h1 data-aos="fade-up" data-aos-delay="500">
          <FormattedMessage id="namess" defaultMessage="Web & Mobile Development | Web & App Design" />
        </h1>
        <p className="h_intro">My mission is to continually improve each subsequent project, surpassing the quality of the previous one. This commitment has resulted in a remarkable 70% repeat hire rate, and I have had the privilege of working with certain clients for over a decade. This is more than just a job to me; it is my life's passion.</p>

        <div className="wrapper">
          <a
            className="button"
            href="https://join.skype.com/invite/veNNMueJlE80"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-skype"></i>
            </div>
            <span>Skype</span>
          </a>
          <a
            className="button"
            href="https://github.com/kstar0102/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href="https://discord.gg/npeMySvK2j"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <i className="fab fa-discord"></i>
            </div>
            <span>Discord</span>
          </a>
        </div>

        <Link to="sobre-mi" href="#sobre-mi">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
