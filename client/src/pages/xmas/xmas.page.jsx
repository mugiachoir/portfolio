import React,{useEffect} from 'react';

import icyLogo from '../../assets/xmas-tablet.png';
import xmasHero from '../../assets/xmas-hero.png';
import xmasBlog from '../../assets/xmas-blog.png';
import xmasPost from '../../assets/xmas-post.png';

const Xmas=({setNavigation,setNav})=>{

    useEffect(() => {
        setNavigation('/xmas');
        setNav('projects');
    });
    
    return(
        <div className="xmas project-page container">
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>3D MODELING</h1>
                        <p className='project-subtitle xmas-subtitle'>It was Christmas 2021, a few days before the Christmas holiday I created a blog post and social media post about Christmas and my team leader liked it. She asked me to create anything that I wanted for Christmas.
                        So for the first scene, I wanted to create a Christmas tree with lots of RFIDiom logos for the lighting. I created the scene by using BlenderKit as the base tree model because I didn’t have time to create a detailed tree at that time, so I just tweaked it to accommodate my needs. After I have the tree I just need to add UV spheres and append the 3D version of the RFIDiom logo that I already made. Then I gave the spheres and the logo different colors, and made them emit lights. After that, I created Christmas gifts and put them under the tree, and for the floor itself. I used image texture to make it look like a wooden floor, and that’s completed the scene.
                        For the second scene, this one ended up becoming our company’s Christmas card. I created one big RFIDiom logo with snow on the surface, standing around a snowy ground. To create the scene I used the RFIDiom 3D logo I made earlier and tweaked it to have a snowy surface using a blender addon called ‘real snow’ then I gave the logo itself icy materials utilizing a shader editor. After that, I just need to apply ‘real snow’ to the floor too, and then give the whole scene a snowy HDRI.</p>
                    </div>
                    <div className="grid-container-halfsies">
                        <img src={xmasHero} alt="christmas tree" />
                        <img src={icyLogo} alt="RFIDiom ice logo" />
                    </div>
            </div>     
            <div className="project-section">
                    <div className='project-texts'>
                        <h1>GRAPHICS DESIGN</h1>
                        <p className='project-subtitle xmas-subtitle'>A few days before the Christmas holiday of 2021, my team leader tasked my team to create social media posts using the Christmas theme. What I had in mind for this theme was cool bluish color with a red accent, and then for the fonts, I wanted a curvy font for the headline, and a bit rounded but still readable font for the body. And I think Christmas is a good time to use a glassmorphism style that has been so popular for a few years. In the end, I made two versions of the design; one is for IG and Facebook and the other is for flyers or blog posts.</p>
                    </div>
                    <div className="grid-container-halfsies">
                        <img src={xmasBlog} alt="xmas blog" />
                        <img src={xmasPost} alt="xmas post" />
                    </div>
            </div>
        </div>
    )
}

export default Xmas;