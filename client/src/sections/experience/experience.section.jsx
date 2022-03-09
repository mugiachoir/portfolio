import React from 'react';
import './experience.style.scss';

import sakuraAnimation from '../../assets/sakura-animation.mp4';

const ExperienceSection= ()=>{
    return(
        <div className='exp container'>
            <div className="work-exp">
                <h2>WORK EXPERIENCE</h2>
                <div className="vtl">
                    <div className="event">
                        <strong className="edate">Freelance Graphics Designer</strong>
                        <p className="etxt">2015 - Ongoing</p>
                    </div>
                    <div className="event">
                        <strong className="edate">Freelance Web Developer</strong>
                        <p className="etxt">2020 - Ongoing</p>
                    </div>
                    <div className="event">
                        <strong className="edate">Intern in Marketing team at RFIDiom Ltd, Liverpool</strong>
                        <p className="etxt">2021 - 2022</p>
                    </div>
                </div>
            </div>
              <div className="testimoni-video">
                        <video className='hide-controls' playsInline autoPlay muted loop>
                            <source src={sakuraAnimation} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                </div>
        </div>
    )
};

export default ExperienceSection;