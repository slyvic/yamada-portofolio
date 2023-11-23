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
const proyectsImgApp = require.context('../../img', true);

function ProjectApp() {
    const [estadoModal18, cambiarEstadoModal18] = useState(false);
    const [estadoModal17, cambiarEstadoModal17] = useState(false);
    const [estadoModal16, cambiarEstadoModal16] = useState(false);
    const [estadoModal15, cambiarEstadoModal15] = useState(false);
    const [estadoModal14, cambiarEstadoModal14] = useState(false);
    const [estadoModal13, cambiarEstadoModal13] = useState(false);
    const [estadoModal12, cambiarEstadoModal12] = useState(false);

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
                <section className="projects__grid apps">
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal18(!estadoModal18)}>
                            <img src={proyectsImgApp(`./proyecto-app-18.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
                            <img src={proyectsImgApp(`./proyecto-app-17.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal16(!estadoModal16)}>
                            <img src={proyectsImgApp(`./pro_app/a_1.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal15(!estadoModal15)}>
                            <img src={proyectsImgApp(`./pro_app/a_2.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
                            <img src={proyectsImgApp(`./pro_app/a_3.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal13(!estadoModal13)}>
                            <img src={proyectsImgApp(`./pro_app/a_4.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal12(!estadoModal12)}>
                            <img src={proyectsImgApp(`./pro_app/a_5.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                </section>
            </main>

            <Modal
                estado={estadoModal18}
                cambiarEstado={cambiarEstadoModal18}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-18-com.png`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                CoinPlus
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-18-p1'
                                    defaultMessage='An app that offers exchange services for all the cryptocurrencies of the Ethereum network. You can convert dollars into cryptocurrencies, change to others and sell them to be cashed in dollars.'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-18-p2'
                                    defaultMessage='The application has an authentication system, so that the user can access their account and carry out the operations they want, it also has a section where you can see the evolution of the different cryptocurrencies.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://coin-plus.vercel.app/" target="_blank">https://coin-plus.vercel.app/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal17}
                cambiarEstado={cambiarEstadoModal17}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-17-com.png`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                PI Dogs
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage='This project consisted of the development of a SPA (Single Page Application) which is developed with the neumorphism style, makes use of a data API (The Dog API), and then part of the information is extracted and stored in a Database. of Data, (PostgreSQL) so that it can be used later at convenience.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://pi-dogs-main-ashy.vercel.app/" target="_blank">https://pi-dogs-main-ashy.vercel.app/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="" />

                                </div>
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
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_1.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_1_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>Everfm: The Ultimate Podcast Universe</h1>
                            <h1>Role</h1>
                            <p>Flutter Project Development and Maintenance for Ever.fm</p>
                            <h1>Project Goal</h1>
                            <p>Our team was tasked with developing an all-encompassing podcast application, Ever.fm, that would offer users the convenience of listening to a vast range of podcasts while providing an engaging community platform for discussions.</p>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage='To design a user-friendly application that caters to the needs of podcast enthusiasts in an already saturated market, our team conducted a thorough market analysis. We identified a set of features that would satisfy users and set our app apart from the competition.
                                    Upon signing in, users are prompted to select their favorite podcast authors, allowing our smart recommendation system to suggest similar content creators based on their preferences. The most popular and talked-about podcasts are showcased in a dedicated section, making it easy for users to discover trending content.
                                    In cases where users cannot find a specific podcast within the app, we provide the option to import content from other platforms, with Spotify integration currently in progress. Our application allows users to create a queue for their podcasts, offering seamless management of their listening experience.
                                    We have implemented a download functionality, enabling users to save their favorite episodes for offline listening and share them on popular social media platforms. During playback, users can engage in discussions about specific podcast segments and express their reactions using a variety of emoticons. Speech recognition technology has been incorporated, giving users the option to read podcast transcripts in addition to listening.
                                    To further enhance the user experience, it is possible to control the audio player directly from the smartphone’s main screen or notification tray, making Ever.fm a comprehensive and engaging podcast platform.'
                                />
                            </p>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    React Native, Fire CMS, Firebase, bitrise, fastlane, App Center, AppsFlyer, Google cloud
                                </div>
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
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_2.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_2_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>H-Surveys: Contribute to Science & Get Insights</h1>
                            <h1>Role</h1>
                            <p>Flutter Project Development and Maintenance for Ever.</p>
                            <h1>Project Goal</h1>
                            <p>The main goal of the H-Surveys project was to develop a mobile application that can be used to conduct anonymous surveys for the validation and research of health products. The team aimed to create a platform that would provide higher data reliability for customers, and at the same time, be comfortable for the respondents. The H-surveys app was expected to address the limitations of web-based surveys and provide an easy-to-use platform for both researchers and respondents. The H-Surveys project aimed to offer a solution that would enable health researchers to collect more reliable data by leveraging the increasing penetration of mobile devices globally. H-Surveys is built using a cross-platform framework Flutter, so it runs on both iOS and Android devices.</p>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage='The project team prioritized data security and implemented several features to ensure it. The application can only be accessed with a pin code or fingerprint, and the app is designed to prevent screenshots and lock the screen after prolonged inactivity.
                                    To ensure a positive user experience, the survey interface was designed with great care. A progress line was included to indicate where respondents are in the survey and how many questions are left. The UX/UI design of the survey pages was meticulously crafted to ensure ease of use and small details were verified to ensure users can easily navigate the pages without having to remap to take the next action, whether it be selecting an answer or moving to the next question.
                                    Overall, H-Surveys is an innovative project that provides a unique platform for conducting anonymous surveys to validate and research health products. The app’s secure data management, easy-to-use survey interface, and fast speed make it a valuable tool for both researchers and respondents.'
                                />
                            </p>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    Kotlin, Swift, NodeJS, Firebase, codemagic, fastlane, branch, Google cloud
                                </div>
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
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_3.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_3_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>Practice Manager: Client Portal for Paperless Medical Practice</h1>
                            <h1>Role</h1>
                            <p>Flutter Project Development and Maintenance for a Seamless Mobile App Experience</p>
                            <h1>Project Goal</h1>
                            <p>Our primary objective was to design and develop an innovative, user-friendly application that would revolutionize the way medical practices operate by transitioning them to a paperless environment. This comprehensive, all-in-one solution would serve as a doctor’s main assistant, streamlining various administrative tasks and improving overall practice efficiency. The application would facilitate efficient patient payment management, billing, debt tracking, appointment scheduling, and secure storage of electronic health records, among other features.To achieve this ambitious goal, we set out to tackle several key challenges, including seamless integration of payment systems, the capability to generate detailed superbills, ensuring secure and long-term storage of payment history, and creating an intuitive user interface for both medical professionals and patients. Ultimately, the project’s success would be measured not only by the app’s ability to efficiently manage administrative tasks but also by the satisfaction and positive feedback from its end-users: the medical professionals and their patients. By offering a secure, user-friendly, and easily accessible platform, our mission was to empower medical practitioners to provide better care and enhance the overall patient experience.</p>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage='We developed a cutting-edge mobile app that not only met but exceeded our client’s expectations within the first month of its deployment. The Autopay module eliminated the need for manually reminding patients about payments or monitoring outstanding debts, as these processes were now automated. We also implemented an advanced security system to enable the secure integration of various payment systems, including bank card processing. Consequently, making payments became hassle-free and swift.
                                    The app allows family members or even third parties to pay for a patient’s medical services, providing added convenience. Invoices, statements, and forms can be accessed and downloaded in a matter of seconds, with comprehensive payment history available for review at any time from the user’s smartphone.        
                                    To further promote the app, we offered a one-month trial period, during which medical practitioners could test its functionality. The feedback was overwhelmingly positive, with 80% of specialists giving the highest rating to the app’s debt management capabilities. Moreover, one in four doctors expressed their readiness to replace paper invoices with electronic ones within a month. Patients also greatly appreciated the app, as about 90% of them were able to pay their bills within two minutes of setting up the app, without requiring any additional assistance.'
                                />
                            </p>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    Flutter, Python, Firebase, bitrise, fastlane, Codecov, Appsflyer, branch, Google cloud, Amplitude
                                </div>
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
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_4.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_4_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>R-Easy: Neo Worldwide Banking Solution for Freelancers</h1>
                            <h1>Role</h1>
                            <p>Flutter Mobile App Development, Delivery, and Maintenance</p>
                            <h1>Project Goal</h1>
                            <p>Our objective was to develop a user-friendly and efficient mobile app for processing payments in the B2B market, with a focus on the unique needs of freelancers and the companies they serve. The app needed to cater to both parties – the specialist who wants a quick and secure method of receiving payments, and the company representative who wants to ensure the safe and efficient payment for services rendered.</p>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage='After conducting an in-depth market analysis and obtaining brief approval, the development process spanned 5.5 months. Regular communication with the client during the project implementation allowed us to deliver an MVP that exceeded all expectations.
                                    The application was specifically designed for freelancers. Focus group results demonstrated that 94% of users were able to register and create an invoice for payment within 10 minutes without external assistance. In contrast, business representatives in the survey praised the service’s speed and efficiency.
                                    To begin receiving payments, adult users must create and activate an account. They then need to complete an application form specifying the amount, currency, and type of services provided. Freelancers can choose from over 15 currencies, in addition to dollars and euros. And clients can quickly and securely pay the invoice using debit or credit cards, or bank transfers with just a few clicks.To facilitate quick fund withdrawals for freelancers, the app allows them to order a Visa or Mastercard card, or link an existing one, for faster transfers. Payment security is ensured through mandatory verification of all users.'
                                />
                            </p>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    Flutter, Flamelink, Firebase, codemagic, fastlane, Codecov, App Center, mixpanel, Google cloud, Amplitude
                                </div>
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
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_5.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_5_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>Servisus: Simplifying Local Help for Everyday Tasks</h1>
                            <h1>Introduction</h1>
                            <p>Servisus is a mobile app designed to make everyday tasks easier for people in cities. The app allows customers to quickly connect with service providers to perform a variety of tasks, from general cleaning to math classes to even replacing a windshield. The project was undertaken with the goal of simplifying the process of finding local help for everyday tasks. With its intuitive UI/UX, fast checkout system, and categorized and localized system of services, Servisus makes it easy and efficient for both customers and service providers to connect and get things done.</p>
                            <h1>Challenges</h1>
                            <p>The development team faced several challenges during the development process of Servisus, such as creating a user-friendly UI/UX that works quickly and efficiently and implementing a fast and simple checkout system for both customers and service providers. In addition, the team needed to design a structured system of services that would make it easy for customers to post tasks and for service providers to create a portfolio of their skills and expertise.</p>
                            <h1>Key Features</h1>
                            <p>The fast and simple checkout system implemented by the development team is another key feature of Servisus. Customers can easily create an ad in the correct category and receive responses from potential service providers on the same day. After selecting a service provider, customers can easily pay for their services through the app. Additionally, customers can rate their service provider after the task is completed, which helps future customers make informed decisions when selecting a service provider. Overall, these features make Servisus an ideal solution for anyone looking to simplify their everyday tasks and find local help quickly and easily.</p>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage='To meet the specific needs of customers and service providers, we decided to create two separate apps. The system has been optimized to deliver a personalized and streamlined experience, so users see only the relevant features, resulting in faster and easier connections between customers and service providers. To further enhance the experience of both customers and service providers, the development team implemented a structured system of services that divides the available tasks into categories and localizes them based on the user’s location.'
                                />
                            </p>
                            <h1>Conclusion</h1>
                            <p>Overall, the development team successfully created a mobile app that simplifies the process of finding local help for everyday tasks. Through the development of two separate applications, the team produced a user-friendly interface that performs with remarkable speed and efficacy tailored to the unique requirements of both clients and vendors. The structured system of services, categorized and localized, makes it easy for customers to post tasks and for service providers to create a portfolio of their skills and expertise. If you’re looking for a reliable and efficient way to find local help for everyday tasks, give Servisus a try.</p>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    Flutter, NodeJS, Firebase, bitrise, fastlane, Codecov, mixpanel, Google cloud
                                </div>
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

export default ProjectApp
