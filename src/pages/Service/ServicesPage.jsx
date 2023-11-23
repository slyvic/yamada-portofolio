import React from "react";
import "./ServicesPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Accordion from "./Accordion";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Services = () => {
  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
        <section className="servicios" id="servicios">
          <h2 className="heading">
            <FormattedMessage id="services" defaultMessage="What we do?" />
          </h2>
          <div className="row">
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
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-laptop"></i>
              <h3>
                <FormattedMessage
                  id="development"
                  defaultMessage="WEB DEVELOPEMENT"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="development-info"
                  defaultMessage="Professional web development services tailored to your needs. We create visually stunning and user-friendly websites, optimizing performance and ensuring seamless functionality. "
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-chart-line"></i>
              <h3>
                <FormattedMessage
                  id="marketing"
                  defaultMessage="WEB MARKETING"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="marketing-info"
                  defaultMessage="Unlock the full potential of your online presence with our web marketing services. From strategic SEO and targeted campaigns to engaging content creation, we drive traffic, boost conversions, and elevate your brand’s visibility in the digital landscape."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
              <i className="fas fa-mobile"></i>
              <h3>
                <FormattedMessage
                  id="maintenances"
                  defaultMessage="APP DEVELOPMENT"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="maintenance-infos"
                  defaultMessage="Transform your ideas into innovative mobile applications. Our app development services deliver intuitive and feature-rich solutions across platforms, engaging users and driving business growth."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
              <i className="fas fa-mobile"></i>
              <h3>
                <FormattedMessage
                  id="maintenance"
                  defaultMessage="APP DEVELOPMENT"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="maintenance-info"
                  defaultMessage="Transform your ideas into innovative mobile applications. Our app development services deliver intuitive and feature-rich solutions across platforms, engaging users and driving business growth."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
              <i className="fa fa-search"></i>
              <h3>
                <FormattedMessage
                  id="seo"
                  defaultMessage="SECURITY"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="seo-infodf"
                  defaultMessage="Safeguard your online assets with our robust web security services. We offer comprehensive solutions to identify vulnerabilities, protect against cyber threats, and ensure data privacy. Trust us to fortify your digital presence and provide peace of mind."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
              <i className="fa fa-thumbs-up"></i>
              <h3>
                <FormattedMessage
                  id="seod"
                  defaultMessage="SECURITY"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="seo-infodd"
                  defaultMessage="Safeguard your online assets with our robust web security services. We offer comprehensive solutions to identify vulnerabilities, protect against cyber threats, and ensure data privacy. Trust us to fortify your digital presence and provide peace of mind."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
              <i className="fas fa-wrench"></i>
              <h3>
                <FormattedMessage
                  id="optimizationd"
                  defaultMessage="SUPPORT"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="optimization-infod"
                  defaultMessage="Ensure smooth and hassle-free website operations with our comprehensive web support services. From regular maintenance to timely updates and reliable troubleshooting, we keep your website running flawlessly, allowing you to focus on your core business."
                />
              </p>
            </div>
          </div>
        </section>

        {/* <section className="preguntas">
          <h2 className="heading">
            <FormattedMessage
              id="services-questions"
              defaultMessage="WEB DEVELOPMENT FAQS"
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-2s"
                  defaultMessage="WHAT WILL BE REQUIRED FROM ME DURING THE DEVELOPMENT PROCESS?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p2s"
                  defaultMessage="If you want to create a website, it is important that you or your marketer are involved in the process of coordinating all stages, providing information, and giving prompt feedback."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-3s"
                  defaultMessage="HOW CAN I FIND OUT THE EXACT COST?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p3s"
                  defaultMessage="The sales department manager will give you the cost after communicating with you. Before preparing a commercial offer for you, they will conduct an interview, find out about your needs, and determine the tasks that the project should solve.

                  You will receive the final proposal with the specified cost and website development timeframe within 2-5 business days."
                />
              }
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4s"
                  defaultMessage="ON WHICH CMS DO YOU DEVELOP WEBSITES?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4s"
                  defaultMessage="Work with CMS: WordPress, Magento, Opencart, Bitrix, Joomla, Lavalite, Custom CMS, Frameworks and Builders like Wix, Squarespace and etc."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4s"
                  defaultMessage="HOW MUCH DOES ONGOING SUPPORT COST?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4s"
                  defaultMessage="Web development support 25€ per hour"
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4s"
                  defaultMessage="DO YOU PROVIDE SEO PROMOTION AND ADVERTISING SERVICES?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4s"
                  defaultMessage="Yes, that’s one of our specialties. After development, we can take care of comprehensive website promotion. We can create a marketing strategy and launch lead generation through the most effective channels for your business, such as SEO, contextual advertising, and content marketing."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            
          </div>
        </section> */}
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Services;
