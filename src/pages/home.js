import React, { useState } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Navbar/Sidebar';

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
        </>
    );
};

export default Home;
