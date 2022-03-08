import React from 'react';
import './hero.style.scss';

import heroImage from '../../assets/hero-image-green.png';
import downloadIcon from '../../assets/download.svg';
import emailIcon from '../../assets/mail.svg';

const HeroSection = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='hero container'>
            <div className="hero-texts">
                <h1 className="hero-headline">I HELP <span>COMMUNICATE</span> MESSAGES THROUGH <span>BEAUTIFUL</span> AND <span>IMPACTFUL</span> VISUAL SOLUTIONS
                </h1>
                <p className="hero-subheadline">I create visual solutions to solve problems. The solutions can range from 3D
modeling, 3D animation, graphics design, branding, user interface design, and front-end web
development. Throughout my work, I specialize in 3D graphics.
                </p>
                <div className="flex-container-row">
                    <a href="../../assets/mugias-portfolio.pdf" className="button second" download="mugia's portfolio"><img src={downloadIcon} alt="download" className="icon" />
                        Download CV</a>
                    <a href="mailto:mugia.miftahul@gmail.com" className="button"><img src={emailIcon} alt="email" className="icon" /> Send me an email</a>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="mugia 3d avatar" />
            </div>
        </div>
    )
});

export default HeroSection;