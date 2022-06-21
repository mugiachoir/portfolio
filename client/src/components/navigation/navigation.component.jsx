import React,{useState,useEffect} from 'react';
import logo from '../../assets/mugia.svg';
import './navigation.style.scss';
import {Link} from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

const executeScroll = (ref) => ref.current.scrollIntoView();

const Navigation= React.forwardRef( ({ nav,setNav,url }, ref) => {
    const {heroRef,aboutRef,projectRef,contactRef,serviceRef,galleryRef}=ref.current;
    const [burger,setBurger]=useState(false);


    useEffect(() => {
        document.addEventListener('scroll',()=>{
            if(document.getElementById('homeLink')){
                const homeLink=document.getElementById('homeLink');
                homeLink.classList.remove('initial-active');
            }
        })
    },[]);
    
        return (
            <nav>
                <div className="container navigation">
                    {url==='/'?(
                        <>
                            <div className="logo" onClick={()=>{executeScroll(heroRef); setNav('home'); setBurger(false)}}>
                                    <img  src={logo} className="logo" alt="Logo" />
                            </div>
                            <ul className={`${burger===true?'slide':''}`}>
                                <li><ScrollLink activeClass="active" id='homeLink' to="hero" spy={true} smooth={true} offset={-82} duration={500} className='nav-item initial-active' onClick={()=>setBurger(false)}>Home</ScrollLink></li>
                                <li><ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={-82} duration={500} className='nav-item' onClick={()=>setBurger(false)}>About Me</ScrollLink></li>
                                {/* <li><ScrollLink activeClass="active" to="service" spy={true} smooth={true} offset={-82} duration={500} className='nav-item' onClick={()=>setBurger(false)}>Services</ScrollLink></li> */}
                                <li><ScrollLink activeClass="active" to="projects" spy={true} smooth={true} offset={-82} duration={500} className='nav-item' onClick={()=>setBurger(false)}>Projects</ScrollLink></li>
                                <li><ScrollLink activeClass="active" to="gallery" spy={true} smooth={true} offset={-82} duration={500} className='nav-item' onClick={()=>setBurger(false)}>Web Dev</ScrollLink></li>
                                <li><ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-82} duration={500} className='nav-item' onClick={()=>setBurger(false)}>Contact</ScrollLink></li>
                            </ul>
                        </>
                    ):(
                        <>
                            <Link to={'/'} className="logo" onClick={()=>{setTimeout(() => {executeScroll(heroRef); setNav('home');}, 100); setBurger(false)}}>
                            <img src={logo} className="logo" alt="Logo" />
                            </Link>
                            <ul className={`${burger===true?'slide':''}`}>
                                <li><Link to={'/'} className={`${nav === "home" ? "nav-item active" : "nav-item"} `} onClick={()=>{setTimeout(() => {executeScroll(heroRef); setNav('home');}, 100); setBurger(false)}}>Home</Link></li>
                                <li><Link to={'/'} className={`${nav === "about" ? "nav-item active" : "nav-item "} `} onClick={()=>{setTimeout(() => {executeScroll(aboutRef); setNav('about');}, 100); setBurger(false)}}>About Me</Link></li>
                                <li><Link to={'/'} className={`${nav === "service" ? "nav-item active" : "nav-item "} `} onClick={()=>{setTimeout(() => {executeScroll(serviceRef); setNav('service');}, 100); setBurger(false)}}>Services</Link></li>
                                <li><Link to={'/'} className={`${nav === "projects" ? "nav-item active" : "nav-item "} `} onClick={()=>{setTimeout(() => {executeScroll(projectRef); setNav('projects');}, 100); setBurger(false)}}>Projects</Link></li>
                                <li><Link to={'/'} className={`${nav === "gallery" ? "nav-item active" : "nav-item "} `} onClick={()=>{setTimeout(() => {executeScroll(galleryRef); setNav('gallery');}, 100); setBurger(false)}}>3D Gallery</Link></li>
                                <li><Link to={'/'} className={`${nav === "contact" ? "nav-item active" : "nav-item "} `} onClick={()=>{setTimeout(() => {executeScroll(contactRef); setNav('contact');}, 100); setBurger(false)}}>Contact</Link></li>
                            </ul>
                        </>
                    )}
                    <div onClick={()=>setBurger(!burger)} className="menu-toggle">
                        <span className={`${burger===true?'topburger':''}`}></span>
                        <span className={`${burger===true?'midburger':''}`}></span>
                        <span className={`${burger===true?'bottomburger':''}`}></span>
                    </div>
                </div>
            </nav>
        );
    });

export default Navigation;