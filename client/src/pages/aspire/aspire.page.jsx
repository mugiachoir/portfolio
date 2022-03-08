import React,{useEffect} from 'react';

import wristbandRef from '../../assets/dismantled wristband.mp4';
import wristbandDismantled from '../../assets/wristband-dismantled.png';
import wristbandRig from '../../assets/wristband-rig.png';
import aspireFlyer from '../../assets/flyers mockup aspire new.png';
import aspireLaptop from '../../assets/laptop aspire.png';
import wristbandAnimation from '../../assets/Wristband Animation.mp4';
import aspireIdeas from '../../assets/aspire brand.png';
import aspireLogo from '../../assets/aspire-logo.png';
import aspirePhone from '../../assets/aspire-phone.png';
import assurancePics from '../../assets/aspire-quality.png';

const StokWare=({setNavigation,setNav})=>{

    useEffect(() => {
        setNavigation('/aspire');
        setNav('projects');
    });
    
    return(
        <div className="aspire project-page container">
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>3D MODELING</h1>
                        <p className='project-subtitle aspire-subtitle'>In this particular project, I created lots of 3D assets. My team leader asked me to create as many as possible 3D assets. So everyone on the team can use it in their design. I created stuff that is usually there at events like a microphone, speaker, gift bag, wine glass, etc. But the standout 3D modeling job that I did on this project was when my team leader tasked me with creating an animation to explain the RFID wristband that we utilized for Aspire Eventware. To give me more reference, we dismantled an unused RFID wristband that we already had. The model is pretty straightforward because it consists of the outer layer, RFID tag, and mid-layer. I just need to make their textures feel different from each other.</p>
                    </div>
                    <div className="grid-container-halfsies">
                        <video controls playsInline autoPlay muted loop>
                            <source src={wristbandRef} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <img src={wristbandDismantled} alt="wristband dismantled" />
                    </div>
            </div>
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>3D ANIMATION</h1>
                        <p className='project-subtitle aspire-subtitle'>For the animation itself, I have an idea of making the wristband slowly dismantle itself, and then just become whole again. So the rigging is simple. I just need to give a bone for every loop cut in the wristband. Then I parented all of the layers to the armature; after that, I just needed to weight paint the wristband so it moved exactly what I had in mind. After that, I just animate it as usual.</p>
                    </div>
                    <div className="grid-container-halfsies">
                    <img src={wristbandRig} alt="wristband rigging" />
                    <video controls playsInline autoPlay muted loop>
                        <source src={wristbandAnimation} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>BRANDING</h1>
                        <p className='project-subtitle aspire-subtitle'>When I came to work on Aspire Eventware, it already had established branding. It already has a logo, typeface, and color choices of its own. The problem is, the logo that we have is a bit hard to use and modify because we don’t have the editable file, and we couldn’t find the font that is used. So my team leader asked every member of our team to create and represent our logo for Aspire Eventware. Luckily, in the end, my logo idea was used.
                        The basic idea of the logo is simple; it consists of two letters A and E. I spent a lot of time trying out different ideas for the logo. And after I felt that I had enough. I presented them to the team and they liked the pointy ones, and even after that we still need to test the usability of the logo by making it bigger or smaller and see if it still retains the same look and feel. After we have the shape, the next step is deciding on the color because the ones that I proposed earlier didn’t quite work on the dark screen. In the final form, we used yellow color with a purple gradient on the logo.</p>
                    </div>
                    <div className="grid-container-halfsies">
                        <img src={aspireIdeas} alt="aspire ideas" />
                        <img src={aspireLogo} alt="aspire logo fixed" />
                    </div>
            </div>
            <div className="project-section">
                <div className="grid-container">
                
                    <div className='project-texts'>
                        <h1>GRAPHICS DESIGN</h1>
                        <p className='project-subtitle aspire-subtitle'>In this project, my graphics design jobs include designing social media posts for Instagram and Facebook; designing a flyer for product marketing, and designing blog posts to put on the main company website. For this job, I mainly used Figma to design, but I did use CorelDraw or Photoshop if I needed to do something that Figma just wasn’t suitable for. And because my art direction is 3D graphics. I also used Blender to create all of my 3D assets, and all of those assets can be used by my colleagues because I uploaded them to our shared drive storage.</p>
                    </div>
                    <div className="grid-image small-image">
                        <img src={aspirePhone} alt="aspire phone" />
                    </div>
                </div>
                    <div className="grid-container-halfsies">
                        <img src={aspireLaptop} alt="aspire laptop" />
                        <img src={aspireFlyer} alt="aspire flyer" />
                    </div>
            </div>
            <div className="project-section">
                <div className="grid-container">
                    <div className='project-texts'>
                        <h1>QUALITY ASSURANCE</h1>
                        <p className='project-subtitle aspire-subtitle'>When my team was tasked with doing quality assurance on Aspire Application, the Application itself is almost ready, so we did thorough testing from visual problems, and bugs in the functionality because I have a background in web development I also did low-level security testing like SQL injection and route testing. For this job, we used Trello to make it easier for my team and the programming team to communicate the problems in the application; through this, we can see which problem has already been fixed, identified, or is in the process of fixing.</p>
                    </div>
                    <div className="grid-image">
                        <img src={assurancePics} alt="aspire assurance" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StokWare;