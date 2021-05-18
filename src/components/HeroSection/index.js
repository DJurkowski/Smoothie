import React from 'react';
import { HeroContainer, Circle, ContentContainer, ContentColumns, ColumnLeft, ColumnRight, ItemHeader, HeaderSpecial, Image, ItemParagraph } from './HeroElements';
import Cup from '../../utils/images/Cup.svg';
import { Button } from '../Button/ButtonElements';


const Hero = () => {

    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <HeroContainer id="home">
            <Circle />
            <ContentContainer>
                <ContentColumns>
                <ColumnLeft>
                    <ItemHeader
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >
                        It's not just Smoothie
                    </ItemHeader>
                    <ItemHeader
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 2 }}
                    >It's <HeaderSpecial>Smoothie Delight</HeaderSpecial></ItemHeader>
                    <ItemParagraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                    </ItemParagraph>
                    <Button to="newsletter"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                    >Sign up</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={Cup} alt="smoothie" 
                        drag={true}
                        dragConstraints={{ left: 20, right: 50, top: 20, bottom: 50 }}
                    />
                </ColumnRight>
                </ContentColumns>
            </ContentContainer>
        </HeroContainer>
    );
};

export default Hero;
