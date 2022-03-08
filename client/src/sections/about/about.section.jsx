import React from 'react';
import './about.style.scss';

import aboutImage from '../../assets/my-pic.png';

const AboutSection= React.forwardRef((props,ref)=>{
    return(
        <div ref={ref} className='about container'>
            <div className="about-image">
                <img src={aboutImage} alt="Mugia" />
            </div>
            <div className="about-texts">
                <div className="about-name">
                    <h2>hello..!</h2>
                    <h1><span>I'M</span> MUGIA CHOIR</h1>
                </div>
                <h2 className="about-headline">
                    ABOUT ME
                </h2>
                <p>
                I am a designer who specializes in 3D graphics. I am based in Subang, Indonesia. I have been
                messing around with graphics assets my entire life. My earliest memory of a design-related
                experience was when I first opened Adobe Photoshop in early Elementary School. In my spare time, I usually play volleyball. I also enjoy reading a variety of books, from novels to science books.
                </p>
            </div>
        </div>
    )
});

export default AboutSection;