import React from 'react';
import './testimonial.style.scss';

import quote from '../../assets/quote-icon.svg';
import andrea from '../../assets/andrea.jpg';
import danny from '../../assets/danny.png';

const TestimonySection= React.forwardRef((props,ref)=>{
    return(
        <div ref={ref} className='testimoni  container'>
             <div className="grid-container-halfsies">
                <div className="testimoni-texts">
                    <div className="quote-icon">
                        <img src={quote} alt="quote" />
                    </div>
                    <p className="hero-subheadline">"Mugia joined us on the Intern program as part of the marketing team.  His commitment and contribution was outstanding, continually thinking creatively and producing work of a professional standard both independently and as part of the wider team. He easily slotted into the culture of the company and presented his concepts often to senior management with good communication skills.   He understands initial briefs well and uses feedback to translate them into highly workable solutions. We used his work consistently throughout the internship programme and sorely miss him. He was a pleasure to have on the team."
                    </p>
                    <div className="testimoni-subtitle">
                        <div>
                            <p>ANDREA CAMPBELL</p>
                            <p className='position'>Head of Marketing, RFIDiom Ltd</p>
                        </div>
                        <img src={andrea} className='avatar' alt="andrea" />
                    </div>
                </div>
                <div className="testimoni-texts">
                    <div className="quote-icon">
                        <img src={quote} alt="quote" />
                    </div>
                    <p className="hero-subheadline">"During his time on our graphic design internship, Mugia was a fantastic and highly valued asset to our team. He was able to create high quality designs and resources from scratch, using his technical knowledge to contextualise his work, meaning everything he made fit our purposes exactly. Mugia is creatively and technically gifted, with the equivalence in enthusiasm and passion."
                    </p>
                    <div className="testimoni-subtitle">
                        <div>
                            <p>DANIEL DOYLE</p>
                            <p className='position'>Software Engineer, RFIDiom Ltd</p>
                        </div>
                        <img src={danny} className='avatar' alt="danny" />
                    </div>
                </div>
            </div>
        </div>
    )
});

export default TestimonySection;