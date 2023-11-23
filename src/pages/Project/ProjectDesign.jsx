import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImg = require.context('../../img', true);

const ProjectDesign = () => {

    return (
        <div>

            <HeaderPage />

            <ParticleBackground />

            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading">
                        <FormattedMessage
                            id='projects'
                            defaultMessage='Projects'
                        />
                    </h1>
                    <nav className="navbar nav-proj">
                        <NavLink to="/project/" offset={-150} duration={500}>
                            <FormattedMessage
                                id='site-web'
                                defaultMessage='websites'
                            />
                        </NavLink>
                        <NavLink to="/project/app" offset={-150} duration={500}>
                            Apps
                        </NavLink>
                        <NavLink to="/project/design" offset={-150} duration={500}>
                            <FormattedMessage
                                id='design'
                                defaultMessage='design'
                            />
                        </NavLink>
                        {/* <NavLink to="/project/game" offset={-150} duration={500}>
                            <FormattedMessage
                                id='games'
                                defaultMessage='games'
                            />
                        </NavLink> */}
                    </nav>
                </section>

                <section className="projects__grid design">
                    <div className="projects__item">
                        <img src={proyectsImg(`./pro_design/d_1.png`)} alt="" className="projects__img" />
                    </div>
                    <div className="projects__item">
                        <img src={proyectsImg(`./pro_design/d_2.png`)} alt="" className="projects__img" />
                    </div>
                    <div className="projects__item">
                        <img src={proyectsImg(`./pro_design/d_7.png`)} alt="" className="projects__img" />
                    </div>
                    <div className="projects__item">
                        <img src={proyectsImg(`./pro_design/d_4.png`)} alt="" className="projects__img" />
                    </div>
                    <div className="projects__item">
                        <img src={proyectsImg(`./pro_design/d_6.png`)} alt="" className="projects__img" />
                    </div>
                    <div className="projects__item">
                        <img src={proyectsImg(`./pro_design/d_5.jpg`)} alt="" className="projects__img" />
                    </div>
                    <div className="projects__item">
                        <img src={proyectsImg(`./pro_design/d_7.png`)} alt="" className="projects__img" />
                    </div>
                    <div className="projects__item">
                        <img src={proyectsImg(`./pro_design/d_8.png`)} alt="" className="projects__img" />
                    </div>
                    <div className="projects__item">
                        <img src={proyectsImg(`./pro_design/d_16.png`)} alt="" className="projects__img" />
                    </div>
                    <div className="projects__item">
                        <img src={proyectsImg(`./pro_design/d_12.jpg`)} alt="" className="projects__img" />
                    </div>
                    <div className="projects__item">
                        <img src={proyectsImg(`./pro_design/d_11.jpg`)} alt="" className="projects__img" />
                    </div>
                </section>
            </main>

            <ScrollToTop />

            <Footer />
        </div>
    )
}
export default ProjectDesign;
