import React from 'react';

import '../styles/PartnersDisplay.css'

const PartnersDisplay = () => {

    return (
        <div className="xfeatured-brands">
            <h2>Our Partners</h2>
            <div className="xlogosContainer">
                <img src="images/brands/tcs.jpg" className="xlogo" alt="Logo 1" />
                <img src="images/brands/m&p.jpg" className="xlogo" alt="Logo 2" />
                <img src="images/brands/easypaisa.jpg" className="xlogo" alt="Logo 3" />
                <img src="images/brands/jazzcash.jpg" className="xlogo" alt="Logo 4" />
                <img src="images/brands/chugtai.jpg" className="xlogo" alt="Logo 5" />
                <img src="images/brands/hbl.jpg" className="xlogo" alt="Logo 6" />
            </div>
        </div>
    )
}

export default PartnersDisplay
