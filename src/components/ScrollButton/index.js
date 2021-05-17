import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Scroll } from './ScrollElements'; 

const ScrollToTop = () => {

    const [ isVisible, setIsVisible ] = useState(false);

    const toggle = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if(window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        isVisible && 
        <Scroll onClick={toggle} />
    );
};

export default ScrollToTop;
