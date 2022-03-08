import React from 'react';
import './footer.style.scss';

import logo from '../../assets/mugia.svg';
import email from '../../assets/email.svg';
import station from '../../assets/station.svg';
import github from '../../assets/github.svg';
import ig from '../../assets/ig.svg';
import sakura from '../../assets/Sakura.png';
import monster from '../../assets/monster.png';
import ogre from '../../assets/ogre-scene.png';
import plaque from '../../assets/plaque.png';

const Footer=React.forwardRef((props,ref)=>{
    return(
        <div className="footer" ref={ref}>
            <div className="top-footer">
                <div className="contacts">
                    <img src={logo} alt="logo" />
                    <p>Thanks for stopping by. Please get in touch by sending me an email or reach me on social media. If you want more 3D contents, visit me on Artstation or Instagram.</p>
                    <hr />
                    <div className="socials">
                        <a href="mailto:mugia.miftahul@gmail.com"><img src={email} alt="email" /> mugia.miftahul@gmail.com</a>
                        <a href="https://www.artstation.com/mugiamiftahulchoir8" target='_blank' rel='noreferrer'><img src={station} alt="station" />mugiamiftahulchoir8.artstation.com/</a>
                        <a href="https://www.instagram.com/mugiadesign/" target='_blank' rel='noreferrer'><img src={ig} alt="ig" />@mugiadesign</a>
                        <a href="https://github.com/mugiachoir" target='_blank' rel='noreferrer'><img src={github} alt="github" />mugiachoir</a>
                    </div>
                </div>
                <div className="posts">
                    <h2>Latest Posts</h2>
                    <div className="posts-container">
                    <a href="https://mugiamiftahulchoir8.artstation.com/projects/ELllyv" target='_blank' rel='noreferrer' className="post">
                        <img src={sakura} alt="sakura" />
                        <p>Misty sakura tree</p>
                    </a>
                    <a href="https://mugiamiftahulchoir8.artstation.com/projects/ZGAAom" target='_blank' rel='noreferrer' className="post">
                    <img src={monster} alt="monster" />
                        <p>3D Fiend-esque monster</p>
                    </a>
                    <a href="https://mugiamiftahulchoir8.artstation.com/projects/VgwbwP" target='_blank' rel='noreferrer' className="post">
                        <img src={ogre} alt="ogre" />
                        <p>Orc on a sunny day</p>
                    </a>
                    <a href="https://mugiamiftahulchoir8.artstation.com/projects/ELllRA" target='_blank' rel='noreferrer' className="post">
                        <img src={plaque} alt="plaque" />
                        <p>Realistic human statue</p>
                    </a>
                    </div>
                   
                </div>
            </div>
            <div className="bottom-footer">
                <p>&copy; 2022 Copyright <a href="mugia.design">Mugia</a> All rights reserved</p>
            </div>
        </div>
    );
});

export default Footer;