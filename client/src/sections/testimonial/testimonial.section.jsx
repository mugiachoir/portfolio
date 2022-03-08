import React from 'react';
import './testimonial.style.scss';

import sakuraAnimation from '../../assets/sakura-animation.mp4';
import quote from '../../assets/quote-icon.svg';
import andrea from '../../assets/andrea.jpg';

const TestimonySection= React.forwardRef((props,ref)=>{
    return(
        <div ref={ref} className='testimoni  container'>
             <div className="grid-container-halfsies">
                <div className="testimoni-video">
                        <video className='hide-controls' playsInline autoPlay muted loop>
                            <source src={sakuraAnimation} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                </div>
                <div className="testimoni-texts">
                    <div className="quote-icon">
                        <img src={quote} alt="quote" />
                    </div>
                    <p className="hero-subheadline">"Mugia is very flexible as to how he works, working well within a team but also individually. He can take suggestions or ideas well and transform them into both initial ideas and then developed through to a final desired concept or product via staged feedback."
                    </p>
                    <div className="testimoni-subtitle">
                        <div>
                            <p>ANDREA CAMPBELL</p>
                            <p className='position'>Graphics Team Leader of RFIDiom Ltd</p>
                        </div>
                        <img src={andrea} className='avatar' alt="andrea" />
                    </div>
                </div>
            </div>
        </div>
    )
});

export default TestimonySection;