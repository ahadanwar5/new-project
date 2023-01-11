import React from 'react';
import MyCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PanelDisplay from '../components/PanelDisplay';
import ProductsHome from '../components/ProductsHome';
import Newsletter from '../components/Newsletter';
import PartnersDisplay from '../components/PartnersDisplay';
import Banner from '../components/Banner';
import Footnotes from '../components/Footnotes';

function Home() {
    return (
        <div>
            <Navbar/>
            <MyCarousel/>
            <ProductsHome/>
            <Banner/>
            <PanelDisplay/>
            <Newsletter/>
            <PartnersDisplay/>
            <Footnotes/>
            <Footer/>
        </div>
    );
}

export default Home;