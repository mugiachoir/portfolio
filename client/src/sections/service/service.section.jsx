import React from 'react';
import './service.style.scss';

import icon1 from '../../assets/service1.png';
import icon2 from '../../assets/service2.png';
import icon3 from '../../assets/service3.png';
import icon4 from '../../assets/service4.png';
import icon5 from '../../assets/service5.png';
import icon6 from '../../assets/service6.png';


const ServiceSection= React.forwardRef((props,ref)=>{
    return(
        <div ref={ref} className='services-section container'>
                  <h2 className="white">WHAT DO I DO?</h2>
        <div className="container services">
            <div className="service">
                <div className="service-header">
                    <div className="service-image">
                        <img src={icon1} alt="service1" />
                    </div>
                    <div className="service-title">
                        <h3>3D Modeling</h3>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="service-desc">
                    <p>I can build a seamless representation of objects in three dimensions that usually called 3D models. Video games, movies, architecture, product development all use 3D models to visualize and simulate graphic designs
                    </p>
                </div>
            </div>
            <div className="service">
                <div className="service-header">
                    <div className="service-image">
                        <img src={icon2} alt="service2" />
                    </div>
                    <div className="service-title">
                        <h3>3D Animation</h3>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="service-desc">
                    <p>I help people utilize motion to bring specific characters or objects to life using
                        specialized
                        software. Mostly 3D animations are used in the video game and movie industries, and also for
                        marketing purposes</p>
                </div>
            </div>
            <div className="service">
                <div className="service-header">
                    <div className="service-image">
                        <img src={icon3} alt="service3" />
                    </div>
                    <div className="service-title">
                        <h3>Graphics Design</h3>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="service-desc">
                    <p>I assist people to project their ideas and messages through visual content. By applying
                        design
                        techniques to meet their consumers’ specific needs and focusing on conveying the message of the
                        project, event, campaign, or product</p>
                </div>
            </div>
            <div className="service">
                <div className="service-header">
                    <div className="service-image">
                        <img src={icon4} alt="service4" />
                    </div>
                    <div className="service-title">
                        <h3>Branding</h3>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="service-desc">
                    <p>I help companies, organizations, and individuals to develop a brand that makes people
                        aware of
                        them and bring their products to light</p>
                </div>
            </div>
            <div className="service">
                <div className="service-header">
                    <div className="service-image">
                        <img src={icon5} alt="service5" />
                    </div>
                    <div className="service-title">
                        <h3>UI/UX</h3>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="service-desc">
                    <p>I can build easy to use and pleasurable interfaces for web and mobile software that help users to use the particular software easier and with the best usage experience
                    </p>
                </div>
            </div>
            <div className="service">
                <div className="service-header">
                    <div className="service-image">
                        <img src={icon6} alt="service6" />
                    </div>
                    <div className="service-title">
                        <h3>Front-end Web Dev</h3>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="service-desc">
                    <p>I can develop easy to use and mobile-friendly front-end web applications using HTML5,
                            JavaScript ES6,
                            React Js, Bootstrap, and SCSS, that help users use the applications</p>
                </div>
            </div>
        </div>
        </div>
    )
});

export default ServiceSection;