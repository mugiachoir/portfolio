import React from 'react';
import './gallery.style.scss';

import sakura from '../../assets/Sakura.png';
import monster from '../../assets/monster.png';
import pyramid from '../../assets/pyramid.png';
import house from '../../assets/house-layout.png';
import ogre from '../../assets/ogre-scene.png';
import lamp from '../../assets/lamp-scene.png';
import bigMan from '../../assets/big-man.png';
import plaque from '../../assets/plaque.png';
import bear from '../../assets/bear.png';
import mech from '../../assets/mech.png';
import tanks from '../../assets/tanks.png';
import chess from '../../assets/chess.png';



const GallerySection= React.forwardRef((props,ref)=>{
    return(
        <div ref={ref} className='gallery-section container'>
            <h2 className="white">MY 3D GALLERY</h2>
            <div className="grid-container-four">
                <img src={sakura} alt="sakura" />
                <img src={pyramid} alt="pyramid" />
                <img src={monster} alt="monster" />
                <img src={house} alt="house" />
                <img src={ogre} alt="ogre" />
                <img src={lamp} alt="lamp" />
                <img src={plaque} alt="plaque" />
                <img src={bigMan} alt="big man" />
                <img src={tanks} alt="tanks" />
                <img src={chess} alt="chess" />
                <img src={bear} alt="bear" />
                <img src={mech} alt="mech" />
            </div>
        </div>
    )
});

export default GallerySection;