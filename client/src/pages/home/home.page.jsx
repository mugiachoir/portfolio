import React,{useEffect} from 'react';
import './home.style.scss';

import HeroSection from '../../sections/hero/hero.section';
import AboutSection from '../../sections/about/about.section';
import ExperienceSection from '../../sections/experience/experience.section';
import TestimonySection from '../../sections/testimonial/testimonial.section';
import ServiceSection from '../../sections/service/service.section';
import ProjectSection from '../../sections/project/project.section';
import GallerySection from '../../sections/gallery/gallery.section';
import Footer from '../../components/footer/footer.component'

import projects from '../../projects';

const Home=React.forwardRef( (props, ref)=>
    {
        const {heroRef,aboutRef,projectRef,contactRef,serviceRef,galleryRef}=ref.current;
        const setNavigation=props.setNavigation;

        useEffect(() => {
            setNavigation('/');
        });
        
        

        return(
            <div className="home">
                <HeroSection ref={heroRef} id='hero' />
                <div id="about">
                    <AboutSection ref={aboutRef}  />
                    <TestimonySection />
                    <ExperienceSection />
                </div>
                <div id="service">
                    <ServiceSection ref={serviceRef} />
                </div>
                
                <div id="projects">
                    <ProjectSection id="projects" ref={projectRef} name={projects.project1.name} title={projects.project1.title} desc={projects.project1.desc} jobs={projects.project1.jobs} img={projects.project1.img} iconColor={projects.project1.iconColor} url={projects.project1.url} link={projects.project1.link}/>
                    <ProjectSection name={projects.project2.name} title={projects.project2.title} desc={projects.project2.desc} jobs={projects.project2.jobs} img={projects.project2.img} iconColor={projects.project2.iconColor}  url={projects.project2.url} link={projects.project2.link}/>
                    <ProjectSection name={projects.project3.name} title={projects.project3.title} desc={projects.project3.desc} jobs={projects.project3.jobs} img={projects.project3.img} iconColor={projects.project3.iconColor}  url={projects.project3.url} link={projects.project3.link}/>
                    <ProjectSection name={projects.project4.name} title={projects.project4.title} desc={projects.project4.desc} jobs={projects.project4.jobs} img={projects.project4.img} iconColor={projects.project4.iconColor}  url={projects.project4.url} link={projects.project4.link}/>
                    <ProjectSection name={projects.project6.name} title={projects.project6.title} desc={projects.project6.desc} jobs={projects.project6.jobs} img={projects.project6.img} iconColor={projects.project6.iconColor}  url={projects.project6.url} link={projects.project6.link}/>
                </div>
                <div id="gallery">
                    <GallerySection ref={galleryRef} />
                </div>
                <div id="contact">
                    <Footer ref={contactRef} id='contact'/>
                </div>
            </div>
        );
        }
);

export default Home;