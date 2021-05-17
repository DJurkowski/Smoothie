import React, { useState } from 'react';
import Cards from '../components/CardsSection';
import CarouselSection from '../components/CarouselSection';
import Footer from '../components/Footer';
import Hero from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Navbar/Sidebar';
import Newsletter from '../components/Newsletter';
import ScrollToTop from '../components/ScrollButton';
import UniversalSection from '../components/UniversalSection';

import { muscleSection } from '../utils/data/sections';

const Home = () => {
    
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={setIsOpen} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Hero />
            <Cards />
            <UniversalSection data={muscleSection}/>
            <CarouselSection />
            <Newsletter />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Home;
