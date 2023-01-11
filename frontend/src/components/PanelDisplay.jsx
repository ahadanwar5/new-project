import React, { useState } from 'react';

import '../styles/PanelDisplay.css'

const PanelDisplay = () => {

    return (
        <div className="featured-brands">
            <h2>Featured Brands</h2>
            <div className="logosContainer">
                <img src="images/brands/abott.jpg" className="logo" alt="Logo 1" />
                <img src="images/brands/durex.jpg" className="logo" alt="Logo 2" />
                <img src="images/brands/procter.jpg" className="logo" alt="Logo 3" />
                <img src="images/brands/rekkitBenckiser.jpg" className="logo" alt="Logo 4" />
                <img src="images/brands/naturesBounty.jpg" className="logo" alt="Logo 5" />
                <img src="images/brands/nestle.jpg" className="logo" alt="Logo 6" />
            </div>
        </div>
    )
}

export default PanelDisplay
