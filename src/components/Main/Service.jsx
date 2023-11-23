import React from "react";
import "../../pages/Service/ServicesPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Service = () => (
  <section className="servicios" id="servicios">
    <h2 className="heading">
      <FormattedMessage id="services" defaultMessage="What we do?" />
    </h2>
    <div className="row service_section">
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-laptop"></i>
        <h3>
          <FormattedMessage id="development" defaultMessage="Web development" />
        </h3>
        <p>
          <FormattedMessage
            id="development-info"
            defaultMessage="Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-mobile-alt"></i>
        <h3>
          <FormattedMessage
            id="developments"
            defaultMessage="Mobile App Development"
          />
        </h3>
        <p>
          <FormattedMessage
            id="development-infos"
            defaultMessage="With my expertise in Mobile/Desktop app development, we can build high-performance mobile/desktop applications tailored specifically to Android/iOS and Windows/Linux/MacOS. Your app will leverage the full potential of the operating system, resulting in optimal performance and reliability."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="200">
        <i className="fas fa-drafting-compass"></i>
        <h3>
          <FormattedMessage
            id="design"
            defaultMessage="DESIGN"
          />
        </h3>
        <p>
          <FormattedMessage
            id="design-info"
            defaultMessage="Creating amazing designs that engage users and reflect your brand’s essence. Transforming ideas into visually stunning and user-friendly designs. Let’s bring your online presence to life!"
          />
        </p>
      </div>
    </div>
    <div className="portafolio-btn">
      <Link to="/service">
        <ButtomGet />
      </Link>
    </div>
  </section>
);

export default React.memo(Service);
