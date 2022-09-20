import React,{useEffect} from 'react';

import vietnamFront from '../../assets/vietnam-front.jpg';
import vietnamTop from '../../assets/vietnam-top.jpg';
import recheeseFront from '../../assets/recheese-front.jpg';
import recheeseDetail from '../../assets/recheese-detail.jpg';
import pabrik from '../../assets/pabrik.png';
import nabatiAnimation from '../../assets/gate-animation.mp4';

const Nabati=({setNavigation,setNav})=>{

    useEffect(() => {
        setNavigation('/nabati');
        setNav('projects');
    });
    
    return(
        <div className="nabati project-page container">
            <div className="project-section">
                <div className="grid-container">
                    <div className='project-texts'>
                        <h1>3D ANIMATION</h1>
                        <p className='project-subtitle nabati-subtitle'>I only did one animation job in this project, which was adjusting and fixing the basic animations that my supervisor had created. This animation is a sci-fi gate in the form of a portal. The animation that takes place is in the form of a gate changing shape so that the portal is ready to be opened, and animation of the texture on the portal itself.</p>
                    </div>
                    <video className='hide-controls' playsInline autoPlay muted loop>
                        <source src={nabatiAnimation} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>3D MODELING</h1>
                        <p className='project-subtitle nabati-subtitle'>in this process, we also have to provide a basic texture to help simplify the next process, namely texturing. Texturing is done using Unreal Engine 5. The work I do is 95% in Blender because I'm in charge of creating models and providing basic textures. However, if the texturing team also needs help, sometimes I work with my colleagues to do the texturing. The scenes that we create here are complex and tend to be detailed, sometimes we even have to make a factory complex which is very large and consists of many buildings. In this project, I modeled the Nabati building in Vietnam, some of the buildings in the factory located in Rancaekek, made a sci-fi gate for part of the video and helped to texture the recheese restaurant and the pine plant factory.</p>
                    </div>
                    <div className="grid-container-halfsies">
                        <img src={vietnamFront} alt="Nabati vietnam" />
                        <img src={vietnamTop} alt="Nabati Vietnam" />
                    </div>
                    <div className="spacer"></div>
                    <div className="grid-container-halfsies">
                        <img src={recheeseFront} alt="Restoran recheese" />
                        <img src={recheeseDetail} alt="Restoran recheese" />
                    </div>
                    <div className="spacer"></div>
                    <div>
                        <img src={pabrik} alt="Pabrik Rancaekek" />
                    </div>
                  
            </div>
      
        </div>
    )
}

export default Nabati;