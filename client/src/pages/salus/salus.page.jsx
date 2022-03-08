import React,{useEffect} from 'react';

import reader from '../../assets/reader.png';
import virus from '../../assets/virus.png';
import tag from '../../assets/tag2.png';
import salusAnimation from '../../assets/salus-card.mp4';
import salusPhone from '../../assets/Salus Phone.png';
import salusHero from '../../assets/salus-hero.png';
import monitor from '../../assets/monitor.png';

const Salus=({setNavigation,setNav})=>{

    useEffect(() => {
        setNavigation('/salus');
        setNav('projects');
    });
    
    return(
        <div className="salus project-page container">
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>3D MODELING</h1>
                        <p className='project-subtitle salus-subtitle'>I modeled lots of 3D objects of stuff that related to this product like RFID scanner, virus, and id card. Most of the 3D models are for graphics design use like social media posts, and flyers. I made most of the 3D models to only have two materials at most, following Salus brand guidelines, so it can be easier for the user. I also modeled all of those things to have the most general shape possible so they didn’t represent a specific brand.</p>
                    </div>
                    <div className="grid-container-four">
                        <img src={monitor} alt="monitor" />
                        <img src={reader} alt="rfid reader" />
                        <img src={tag} alt="rfid card" />
                        <img src={virus} alt="virus" />
                    </div>
            </div>
            <div className="project-section">
                <div className="grid-container">
                    <div className='project-texts'>
                        <h1>3D ANIMATION</h1>
                        <p className='project-subtitle salus-subtitle'>Salus is a Covid Tracking System that utilizes RFID tags. One of the main forms of the tags is in a card form like employee ID cards. So I decided to create an animation that showed people how exactly the cards were formed. It consists of outer layers and an RFID tag inside it. The animation itself is very simple. I didn’t even need to rig any of the objects. I just made it so the camera follows a path and circles around the card.</p>
                    </div>
                    <video className='hide-controls' playsInline autoPlay muted loop>
                        <source src={salusAnimation} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>GRAPHICS DESIGN</h1>
                        <p className='project-subtitle salus-subtitle'>In this project, my graphics design jobs include designing social media posts for Instagram and Facebook and designing a flyer for product marketing. For this job, I mainly used Figma to design, but I did use CorelDraw or Photoshop if I needed to do something that Figma just wasn’t suitable for.</p>
                    </div>
                    <div className="grid-container-halfsies">
                        <img src={salusPhone} alt="salus phone" />
                        <img src={salusHero} alt="salus flyer" />
                    </div>
            </div>
        </div>
    )
}

export default Salus;