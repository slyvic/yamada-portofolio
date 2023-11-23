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

const Project = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
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

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <img src={proyectsImg(`./pro_web/pro_1.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <img src={proyectsImg(`./pro_web/pro_2.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal15(!estadoModal15)}>
              <img src={proyectsImg(`./pro_web/pro_3.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal16(!estadoModal16)}>
              <img src={proyectsImg(`./pro_web/pro_4.png`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal13(!estadoModal13)}>
              <img src={proyectsImg(`./pro_web/pro_5.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal12(!estadoModal12)}>
              <img src={proyectsImg(`./pro_web/pro_6.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal11(!estadoModal11)}>
              <img src={proyectsImg(`./pro_web/pro_7.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal10(!estadoModal10)}>
              <img src={proyectsImg(`./pro_web/pro_8.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal9(!estadoModal9)}>
              <img src={proyectsImg(`./pro_web/pro_9.jpg`)} alt="" className="projects__img" />
            </a>
          </div>

          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal8(!estadoModal8)}>
              <img src={proyectsImg(`./pro_web/pro_10.png`)} alt="" className="projects__img" />
            </a>
          </div>

          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal7(!estadoModal7)}>
              <img src={proyectsImg(`./pro_web/pro_11.png`)} alt="" className="projects__img" />
            </a>
          </div>
          
        </section>
      </main>

      <Modal
        estado={estadoModal17}
        cambiarEstado={cambiarEstadoModal17}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pro_web/pro_1.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <h1>
                <FormattedMessage
                  id='projects-info-17-p1c'
                  defaultMessage='Veggie Craft Farms / WordPress'
                />
              </h1>
              <p>
                <FormattedMessage
                  id='projects-info-17-p2c'
                  defaultMessage='UI/UX Design
                  Custom WordPress Development
                  Shopify checkout Integreation'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://veggiecraftfarms.com/" target="_blank">https://veggiecraftfarms.com</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal14}
        cambiarEstado={cambiarEstadoModal14}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pro_web/pro_2.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <h1>
                <FormattedMessage
                  id='projects-info-14-p1c'
                  defaultMessage='Coinzix Cryptocurrency Exchange'
                />
              </h1>
              <p>
                <FormattedMessage
                  id='projects-info-14-p2c'
                  defaultMessage='Buy and sell bitcoins and altcoins on one of the most convenient and reliable crypto platforms.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://zix.coinzix.com/" target="_blank">https://zix.coinzix.com/</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal15}
        cambiarEstado={cambiarEstadoModal15}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pro_web/pro_3.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <h1>
                <FormattedMessage
                  id='projects-info-15-p1c'
                  defaultMessage='Tesla Giveaway'
                />
              </h1>
              <p>
                <FormattedMessage
                  id='projects-info-15-p2c'
                  defaultMessage='As a thank you and to ramp up excitement for the Presale Round, COINZIX will reward all participants with the opportunity to win a brand new Tesla Model 3 and $100,000 in $ZIX tokens. There will be one lucky winner for the Tesla with a further 99 winners of the $100,000 $ZIX pool of tokens.
                  The giveaway for both prizes will follow a lottery format.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://tesla.coinzix.com/" target="_blank">https://tesla.coinzix.com/</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal16}
        cambiarEstado={cambiarEstadoModal16}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pro_web/pro_4.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <h1>
                <FormattedMessage
                  id='projects-info-16-p1c'
                  defaultMessage='Custom wordpress theme development and optimization'
                />
              </h1>
              <p>
                <FormattedMessage
                  id='projects-info-16-p2c'
                  defaultMessage='Upgrade custom Wordpress theme with new design. Optimize google page speed on mobile and desktop for more almost 100% for high speed website load.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://www.founderjar.com" target="_blank">https://www.founderjar.com</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal13}
        cambiarEstado={cambiarEstadoModal13}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pro_web/pro_5.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <h1>
                <FormattedMessage
                  id='projects-info-13-p1c'
                  defaultMessage='Custom Wordpress project from designs'
                />
              </h1>
              <p>
                <FormattedMessage
                  id='projects-info-13-p2c'
                  defaultMessage='Create custom Wordpress theme from provided design mockups. Integrate google maps. Search locations by postal code within radius.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://eatleftys.com/" target="_blank">https://eatleftys.com/</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal12}
        cambiarEstado={cambiarEstadoModal12}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pro_web/pro_6.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <h1>
                <FormattedMessage
                  id='projects-info-12-p1c'
                  defaultMessage='Rate my signing'
                />
              </h1>
              <p>
                <FormattedMessage
                  id='projects-info-12-p2c'
                  defaultMessage='Build web application to allow users share their signing videos and allow to rate by other users.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="http://ratemysinging.com/" target="_blank">http://ratemysinging.com/</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal11}
        cambiarEstado={cambiarEstadoModal11}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pro_web/pro_7.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <h1>
                <FormattedMessage
                  id='projects-info-11-p1c'
                  defaultMessage='Simpson Housing'
                />
              </h1>
              <p>
                <FormattedMessage
                  id='projects-info-11-p2c'
                  defaultMessage='It has a wide variety of Anime, both recent releases and community favorites, it also boasts movies of the genre in question.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://www.simpsonpropertygroup.com/" target="_blank">https://www.simpsonpropertygroup.com/</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal10}
        cambiarEstado={cambiarEstadoModal10}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pro_web/pro_8.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <h1>
                <FormattedMessage
                  id='projects-info-10-p1c'
                  defaultMessage='Everyday Inclusion Dashboard'
                />
              </h1>
              <p>
                <FormattedMessage
                  id='projects-info-10-p2c'
                  defaultMessage='Utilized Chart.js for visualizations of data with different kinds of charts. Rebuilt backend for more scalable and efficient solutions.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://www.db.eiadministrator.com/" target="_blank">https://www.db.eiadministrator.com/</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal9}
        cambiarEstado={cambiarEstadoModal9}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pro_web/pro_9.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <h1>
                <FormattedMessage
                  id='projects-info-9-p1c'
                  defaultMessage='TimeTile Store Website'
                />
              </h1>
              <p>
                <FormattedMessage
                  id='projects-info-9-p2c'
                  defaultMessage='TimeTile is a new product of the client company, Chronotek. We were requested to help with the website designs.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://timetile.store/" target="_blank">https://timetile.store/</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal8}
        cambiarEstado={cambiarEstadoModal8}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pro_web/pro_10.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <h1>
                <FormattedMessage
                  id='projects-info-9-p1c'
                  defaultMessage='SedonaTires.com(Laravel, Vue.js, Bootstrap)'
                />
              </h1>
              <p>
                <FormattedMessage
                  id='projects-info-9-p2c'
                  defaultMessage='Sedona Tire & Wheel builds products for today’s modern ATVs, UTVs/Side-by-Sides, and Offroad motorcycles that offer high-quality, cutting edge technology and real world performance. Built using Laravel 5 and an RESTful JSON API backend coupled with Vue.js and Bootstrap on the front end.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://www.sedonatires.com" target="_blank">https://www.sedonatires.com</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal7}
        cambiarEstado={cambiarEstadoModal7}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./pro_web/pro_11.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <h1>
                <FormattedMessage
                  id='projects-info-9-p1c'
                  defaultMessage='Practithink: Online educational platform for studies and test prep.'
                />
              </h1>
              <p>
                <FormattedMessage
                  id='projects-info-9-p2c'
                  defaultMessage='Online tests and practices for school students.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://practithink.com/" target="_blank">https://practithink.com/</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;