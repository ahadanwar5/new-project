import React from 'react';
import { Carousel } from 'react-bootstrap';
import MyCarousel from '../components/Carousel';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <MyCarousel/>
        </div>
    );
}

export default Home;