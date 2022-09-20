import React from 'react';
import './gallery.style.scss';

import sakura from '../../assets/Sakura.png';
import github from '../../assets/githubDark.svg';
import dasmanja from '../../assets/da_smanja.png';
import clothing from '../../assets/clothing.png';
import webalda from '../../assets/webalda.png';
import vamos from '../../assets/vamos.png';
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
            <h2 className="white">WEB DEVELOPMENT</h2>
            {/* <div className="grid-container-four">
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
            </div> */}
            <div className="grid-container-four">
                <div className="personal-project">
                    <div className="personal-image">
                        <img src={vamos} alt="vamostore" />
                    </div>
                    <div className="personal-body">
                        <h3>VamoStore</h3>
                        <p>E-Commerce website to sell football-related clothing such as jersey, training kit and anthem jacket. Made using Laravel 9 and Midtrans payment gateway </p>
                    </div>
                    <div className="personal-actions">
                    <a href="https://github.com/mugiachoir/dagang-app" className='button' target='_blank' rel='noreferrer'><img src={github} alt="github"/>Source Code</a>
                    </div>
                </div>
                <div className="personal-project">
                    <div className="personal-image">
                        <img src={clothing} alt="crown clothing" />
                    </div>
                    <div className="personal-body">
                        <h3>Crown-Clothing</h3>
                        <p>E-Commerce website to sell all kinds of clothing from boy jackets to woman shoes. Made using react.js and firebase</p>
                    </div>
                    <div className="personal-actions">
                    <a href="https://github.com/mugiachoir/crown-clothing" className='button' target='_blank' rel='noreferrer'><img src={github} alt="github"/>Source Code</a>
                    {/* <a href="https://mugia-crown-react.herokuapp.com/" className="button second">
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.36 12C14.44 11.34 14.5 10.68 14.5 10C14.5 9.32 14.44 8.66 14.36 8H17.74C17.9 8.64 18 9.31 18 10C18 10.69 17.9 11.36 17.74 12H14.36ZM12.59 17.56C13.19 16.45 13.65 15.25 13.97 14H16.92C15.9512 15.6683 14.4141 16.932 12.59 17.56ZM12.34 12H7.66C7.56 11.34 7.5 10.68 7.5 10C7.5 9.32 7.56 8.65 7.66 8H12.34C12.43 8.65 12.5 9.32 12.5 10C12.5 10.68 12.43 11.34 12.34 12ZM10 17.96C9.17 16.76 8.5 15.43 8.09 14H11.91C11.5 15.43 10.83 16.76 10 17.96ZM6 6H3.08C4.03886 4.32721 5.5748 3.06149 7.4 2.44C6.8 3.55 6.35 4.75 6 6ZM3.08 14H6C6.35 15.25 6.8 16.45 7.4 17.56C5.57862 16.9317 4.04485 15.6677 3.08 14ZM2.26 12C2.1 11.36 2 10.69 2 10C2 9.31 2.1 8.64 2.26 8H5.64C5.56 8.66 5.5 9.32 5.5 10C5.5 10.68 5.56 11.34 5.64 12H2.26ZM10 2.03C10.83 3.23 11.5 4.57 11.91 6H8.09C8.5 4.57 9.17 3.23 10 2.03ZM16.92 6H13.97C13.657 4.76146 13.1936 3.5659 12.59 2.44C14.43 3.07 15.96 4.34 16.92 6ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z" fill="#72FA19" />
</svg>
                        &nbsp;Visit</a> */}
                    </div>
                </div>
                <div className="personal-project">
                    <div className="personal-image">
                        <img src={webalda} alt="web-alda" />
                    </div>
                    <div className="personal-body">
                        <h3>Web-Alda</h3>
                        <p>A school website that can handle the upload and download of learning materials, make a public announcement, and new student registration. Made using CodeIgniter 4</p>
                    </div>
                    <div className="personal-actions">
                    <a href="https://github.com/mugiachoir/web-alda" className='button' target='_blank' rel='noreferrer'><img src={github} alt="github"/>Source Code</a>
                    </div>
                </div>
                <div className="personal-project">
                    <div className="personal-image">
                        <img src={dasmanja} alt="dasmanja" />
                    </div>
                    <div className="personal-body">
                        <h3>Dasmanja</h3>
                        <p>Organization website that handles member data, documents archiving, and new member registration. Made using Laravel</p>
                    </div>
                    <div className="personal-actions">
                    <a href="https://github.com/mugiachoir/dasmanja" className='button' target='_blank' rel='noreferrer'><img src={github} alt="github"/>Source Code</a>
                    </div>
                </div>
               
            </div>
        </div>
    )
});

export default GallerySection;