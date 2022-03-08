import React,{useEffect} from 'react';


import antenaAnimation from '../../assets/antena-animation.mp4';
import logoAnimation from '../../assets/logo-animation.mp4';
import rfidiomBlogOne from '../../assets/rfidiom-blog-one.png';
import rfidiomBlogTwo from '../../assets/rfidiom-blog-two.png';
import rfidiomPost from '../../assets/rfidiom-post.png';
import rfidiomGlossary from '../../assets/rfidiom-glossary.png';
import rfidiomZoom from '../../assets/rfidiom-zoom.png';
import rfidiomHero from '../../assets/rfidiom-hero.png';
import rfidScanner from '../../assets/rfid-scanner.png';
import rfidAntena from '../../assets/rfid-antena.png';

const Rfidiom=({setNavigation,setNav})=>{

    useEffect(() => {
        setNavigation('/rfidiom');
        setNav('projects');
    });
    
    return(
        <div className="rfidiom project-page container">
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>3D MODELING</h1>
                        <p className='project-subtitle rfidiom-subtitle'>For the company itself, I created lots of 3D models. I used Blender to create them all. My 3D models usually being used in graphics design like social media or blog posts. But we also used it as a tool to explain items that we usually use, for example, an RFID reader, an RFID antenna.</p>
                    </div>
                    <div className="grid-container-three">
                        <img src={rfidiomHero} alt="rfidiom logo" />
                        <img src={rfidScanner} alt="rfid reader" />
                        <img src={rfidAntena} alt="rfid antena" />
                    </div>
            </div>
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>3D ANIMATION</h1>
                        <p className='project-subtitle rfidiom-subtitle'>3D animation tasks usually come with 3D modeling tasks because for every animation that I make I have to create it all from scratch. As far as I remember, I was tasked twice to create animations for the company itself without any relations to special events or products. The first is to animate the logo itself so it’s a bit interesting to be displayed on social media, and the second one is to create an animation to show people what’s inside the RFID antenna. All of the animations are simple. I didn’t need to rig anything. I could animate it just by moving the camera and the objects themselves, and I could finish the project relatively fast.</p>
                    </div>
                    <div className="grid-container-halfsies">
                        <video controls playsInline autoPlay muted loop>
                            <source src={antenaAnimation} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <video controls playsInline autoPlay muted loop>
                            <source src={logoAnimation} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
            </div>
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>GRAPHICS DESIGN</h1>
                        <p className='project-subtitle rfidiom-subtitle'>Maybe the most often tasks that I had for RFIDiom was to design stuff like social media posts and blog posts. Two of the special cases in the graphic design job that I got were to create a glossary document containing terminology that is usually being used in RFID business and to create a zoom background design to be used when we do video conferences.</p>
                    </div>
                    <div className="grid-container-halfsies">
                        <img src={rfidiomBlogOne} alt="rfidiom blog one" />
                        <img src={rfidiomZoom} alt="rfidiom zoom bg" />
                    </div>
                    <div className="grid-container-halfsies">
                        <img src={rfidiomBlogTwo} alt="rfidiom blog two" />
                        <div className="grid-container-halfsies">
                            <img src={rfidiomGlossary} alt="rfidiom glossary" />
                            <img src={rfidiomPost} alt="rfidiom post" />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Rfidiom;