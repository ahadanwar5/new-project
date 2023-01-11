import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/banner.css'

const Banner = () => {

    return (
        <Link to="/shop">
        <div className="banner">
                <img src="images/other/banner.jpg" className='bannerImage'/>
        </div>
        </Link>
    )
}

export default Banner
