import React,{useEffect} from 'react';


import eric from '../../assets/char-idea.png';
import ericRigged from '../../assets/eric-rigged.png';
import warehouse from '../../assets/warehouse.png';
import stokAnimOne from '../../assets/stok-anim-1.mp4';
import stokAnimTwo from '../../assets/stok-anim-2.mp4';
import logoStokware from '../../assets/logo stokware.png';
import socialGraphics from '../../assets/socialGraphic-stokware.png';
import flyer from '../../assets/flyer-stokware.png';
import assurancePics from '../../assets/stokware-assurance.png';
import stokwareScreen from '../../assets/stokware-screen.png';
import stokwareMap from '../../assets/stokware-map.png';


const StokWare=({setNavigation,setNav})=>{

    useEffect(() => {
        setNavigation('/stokware');
        setNav('projects');
    });
    
    return(
        <div className="stokware project-page container">
            <div className="project-section">
                <div className="grid-container">
                    <div className='project-texts'>
                        <h1>3D MODELING</h1>
                        <p className='project-subtitle stokware-subtitle'>After my team leader tasked me with creating short 3D animation videos, the first thing that I did was collect as much information as possible about what she had in mind. After that, I started doing my research regarding warehouses and their workers. I only had about two weeks tops to finish the whole project, and my team leader had a strange request to model the character, to look like our Managing Director for an inside joke, of course, we showed it to him first after I finished the modeling process, and it turned out our whole team and Managing Director liked the character.
                        For the character itself, I made it as simple as possible because of the short amount of time that I had to finish the whole project. I did some hard surface modeling and gave each of the objects its own material to colorize it, finally, after the character looks like what I had in mind I joined all the objects, so the character now is one joined blender object.
                        After I finished the characters for the videos, I started creating the environment. The base idea for the environment is a standard warehouse with lots of boxes and shelves, and also typical warehouse tools like ladders and dollies. I finished the whole modeling process in roughly 3 days.</p>
                    </div>
                    <div className="grid-image">
                        <img src={eric} alt="eric" />
                    </div>
                </div>
                <img className='project-page-full-img' src={warehouse} alt="warehouse" />
            </div>
            <div className="project-section">
                <div className="grid-container">
                    <div className='project-texts'>
                        <h1>3D ANIMATION</h1>
                        <p className='project-subtitle stokware-subtitle'>After I had all of the assets to create the animation, the next thing that I did was rig the character so I could easily animate it. For this process, I used a Blender addon called rigify. Rigify is a powerful addon. I used it to create my custom rigging because the character is in a semi-complex humanoid form, so the rigify itself doesn’t have a matching template for it. After the rigging process was complete, I created a base blender file for backup so I could work on different files for each scene. Mainly the tools that I used in this part are the dope sheet editor, nonlinear animation, and the timeline editor in Blender.
                        My workflow in this process is basically to identify all the actions that the character will do in the scenario for every scene. I created every action so I can use it as a building block for every scene. After that, I can just arrange and tweak all those actions to become complete scenes. Because I work in different files for each scene, if there are actions that I don’t have in the base file, I can just create it, then append it to the other files. After I have a complete animation, I render it in the workbench engine to get a preview of the whole animation so I can ask for feedback from my team. if we like it, I render it again using the eevee engine to get the ready-to-use animation. I didn’t render the animation using cycles engine because I wanted the animation to be less realistic and have a bit more cartoonish feels to it. In the end, I finished the whole project in about a week.</p>
                    </div>
                    <div className="grid-image">
                        <img src={ericRigged} alt="eric-rigged" />
                    </div>
                </div>
                <div className="grid-container-halfsies">
                    <video controls playsInline autoPlay muted loop>
                        <source src={stokAnimOne} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video controls playsInline autoPlay muted loop>
                        <source src={stokAnimTwo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>UI/UX</h1>
                        <p className='project-subtitle stokware-subtitle'>Because StokWare is a new product, we also needed to create a landing page and the main application for the core of the product. To kick-start the whole website project we needed to create a sitemap for the whole application, and fortunately, I was the one who was tasked to make it. I did a lot of research to create the sitemap mainly analyzed ERP system from other vendors because StokWare itself is just a part of the whole ERP system that RFIDiom is about to develop, so I think it would be beneficial to have a rather complete sitemap of the whole system from the start. After I presented it to the team and we all agreed with it, we continued to the next step.
                        From that point onward, we used Trello to manage jobs; my team leader posted every task that we had to finish, and I and the other took every job that we could. The first week we focus on components research for the website like buttons, footer, navbar, scrollbar, etc. Then we discuss all those components and choose the one that we feel is suitable for this project. At this point in the project, we mainly used Figma as our tool.
                        After we had the components to use, my team leader tasked all of us to design our landing page and login page to get all of our ideas out. After that, we collaborated on designing the final design for the login page and landing page.</p>
                    </div>
                    <div className="grid-container-halfsies">
                        <img src={stokwareScreen} alt="stokware screen" />
                        <img src={stokwareMap} alt="stokware map" />
                    </div>
            </div>
            <div className="project-section">
                <div className="grid-container">
                    <div className='project-texts'>
                        <h1>Branding</h1>
                        <p className='project-subtitle stokware-subtitle'>StokWare is a new product. So it didn’t have any brand guidelines to follow yet. Each member of my team was tasked to do our branding ideas of StokWare before we collaborated on the final branding. The whole branding process includes creating a logo, deciding on the typeface, choosing the colors, and deciding the vibe and feel of the product itself.</p>
                    </div>
                    <div className="grid-image">
                        <img src={logoStokware} alt="logo stokware" />
                    </div>
                </div>    
            </div>
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>GRAPHICS DESIGN</h1>
                        <p className='project-subtitle stokware-subtitle'>In this particular project, my graphics design jobs include designing social media posts for Instagram and Facebook and designing a flyer for product marketing. For this job, I mainly used Figma to design, but I did use CorelDraw or Photoshop if I needed to do something that Figma just wasn’t suitable for. And because my art direction is 3D graphics. I also used Blender to create all of my 3D assets, and all of those assets can be used by my colleagues because I uploaded them to our shared drive storage.</p>
                    </div>
                    <div className="grid-container">
                        <img src={flyer} alt="stokware flyer" />
                        <img src={socialGraphics} alt="stoware socials" />
                    </div>
            </div>
            <div className="project-section">
                <div className="grid-container">
                    <div className='project-texts'>
                        <h1>QUALITY ASSURANCE</h1>
                        <p className='project-subtitle stokware-subtitle'>After we run a running website, my team leader asks me and my team to do some quality assurance on the website. Because at that time the website still only consisted of the login page and landing page, so we focused on the quality of the UI/UX itself and tried out the login form and contact form. Mainly what I did was look for inconsistency in the UI that does not match with the design that we already did; usually, the problems came from inconsistent font size, margin, or padding, and the alignment of the elements.</p>
                    </div>
                    <div className="grid-image">
                        <img src={assurancePics} alt="stokware assurance" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StokWare;