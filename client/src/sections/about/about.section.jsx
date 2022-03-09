import React from 'react';
import './about.style.scss';

import aboutImage from '../../assets/my-pic.png';

const AboutSection= React.forwardRef((props,ref)=>{
    return(
        <div ref={ref} className='about container'>
            <div className="about-image">
                <img src={aboutImage} alt="Mugia" />
            </div>
            <div className="about-texts">
                <div className="about-name">
                    <h2>hello..!</h2>
                    <h1><span>I'M</span> MUGIA CHOIR</h1>
                </div>
                <h2 className="about-headline">
                    ABOUT ME
                </h2>
                <div className="about-text">
                    <p>
                    I'm a designer based in Subang, Indonesia that focuses on 3D Graphics. My earliest memory of a design-related experience was when I first opened Adobe Photoshop in early Elementary School. Since then I've gained a lot of experience working on a different scale of projects, from individual projects to corporate class projects. Yet I still have great determination in learning new stuff. </p>

                    <p>I also have experience of working with people from different countries and cultures, so I can communicate well with others and capable of working alone or inside a team.  </p>

                    <p>I'm majoring in information systems at university, so I have experience in software development, especially front-end development, because it mixes my love for design, and my education as a developer. </p>
                </div>
            </div>
        </div>
    )
});

export default AboutSection;