import React from 'react';
import BrandImages from '../components/BrandImages';
import MyCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PanelDisplay from '../components/PanelDisplay';
import ProductsHome from '../components/ProductsHome';
import Newsletter from '../components/Newsletter';
import PartnersDisplay from '../components/PartnersDisplay';

function Home() {
    return (
        <div>
            <Navbar/>
            <MyCarousel/>
            <ProductsHome/>
            <PanelDisplay/>
            <Newsletter/>
            <PartnersDisplay/>
            <Footer/>
        </div>
    );
}

export default Home;