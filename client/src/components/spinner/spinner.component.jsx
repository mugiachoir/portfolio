import React from 'react';
import './spinner.style.scss';

const Spinner=(props)=>{
    return(
       <div className="spinnerOverlay">
            <div className="spinnerContainer"></div>
            <h2>Worth the Wait</h2>  
        </div>
   
    );
}

export default Spinner;