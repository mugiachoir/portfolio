import React from 'react';
import './experience.style.scss';

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
                        <strong className="edate">Intern Graphics Designer at RFIDiom Ltd Liverpool</strong>
                        <p className="etxt">2021 - 2022</p>
                    </div>
                </div>
            </div>
            <div className="exp-desc">
                <h2>WHY WORK WITH ME?</h2>
                <p>I am a young man with a lot of experience and a great determination in learning new stuff. I am capable of working alone or inside a team because I can stay calm and collected in difficult situations. I have experience of working with people from different countries and cultures, so I can communicate well with others using English or Bahasa. I am used to many different scale projects, from individual projects, small business projects, to corporate class projects.</p>
            </div>
        </div>
    )
};

export default ExperienceSection;