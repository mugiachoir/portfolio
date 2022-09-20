import React,{useEffect} from 'react';

import cave from '../../assets/gua.png';
import gajah from '../../assets/gajah.png';
import storeelHero from '../../assets/storeel-hero.png';

const Storeel=({setNavigation,setNav})=>{

    useEffect(() => {
        setNavigation('/storeel');
        setNav('projects');
    });
    
    return(
        <div className="storeel project-page container">
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>3D MODELING & TEXTURING</h1>
                        <p className='project-subtitle storeel-subtitle'>I created some of the assets for Storeel whether it's for their company in general, or for their application to be used as a tool to teach the kids about the Islamic world. I had a lot of fun creating those things because some of them came from our history, and the rest have a modern and abstract design. I worked in a team, so usually, I need to get approval from my supervisor regarding what I created, their style, and the vibes that they bring to our brand. Some of the things that I made included a floating island, a cave, and an elephant clock. For the island, I got the base from my supervisor, and I build the buildings there to represent some family edutainments. For the cave, I made it from scratch and apply a texture to it, and for the elephant, I got it from sketchfab and I created all the clock ornaments on top of it, then I apply some textures to it</p>
                    </div>
                    <div>
                        <img src={storeelHero} alt="monitor" />
                    </div>
                    <div className="grid-container-halfsies">
                        <img src={cave} alt="Gua hira" />
                        <img src={gajah} alt="Jam gajah" />
                    </div>
            </div>
        </div>
    )
}

export default Storeel;