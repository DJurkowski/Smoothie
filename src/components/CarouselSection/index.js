import React from 'react'
import Carousel from './Carousel';
import { SectionContainer, SectionHeader, HeaderSpecial, SectionWrapper } from './SectionElements';
import { carouselSection as images } from '../../utils/data/sections';

const CarouselSection = () => {
    return (
        <SectionContainer id="experience">
            <SectionWrapper>
                <SectionHeader>Every smoothie is an experience</SectionHeader>
                <SectionHeader><HeaderSpecial>Make it count!</HeaderSpecial></SectionHeader>
                <Carousel images={images} />
            </SectionWrapper>
        </SectionContainer>
    )
}

export default CarouselSection
