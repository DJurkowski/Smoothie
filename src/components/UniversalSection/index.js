import React from 'react';
import { Button } from '../Button/ButtonElements';
import { UniversalContainer, ContentWrapper, ColumnLeft, ContentText, ContentHeader, HeaderSpecial, ContentParagraph, ContentButton, ColumnRight, ContentImage, Img } from './UniversalElements';

const UniversalSection = ({data}) => {
    const { id, headerRow1, headerRow2, headerSpecial, paragraph, button, buttonDirection, image, alternativeName, imageSide } = data;

    return (
        <UniversalContainer id={id}>
                <ContentWrapper imageSide={imageSide}>
                    <ColumnLeft>
                        <ContentText>
                            <ContentHeader>{headerRow1}</ContentHeader>
                            <ContentHeader>{headerRow2} <HeaderSpecial>{headerSpecial}</HeaderSpecial></ContentHeader>
                            <ContentParagraph>{paragraph}</ContentParagraph>
                            <ContentButton>
                                <Button
                                    to={buttonDirection}
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}
                                >{button}</Button>
                            </ContentButton>
                        </ContentText>
                    </ColumnLeft>
                    <ColumnRight>
                        <ContentImage>
                            <Img src={image} alt={alternativeName} />
                        </ContentImage>
                    </ColumnRight>
                </ContentWrapper>
        </UniversalContainer>
    );
};

export default UniversalSection;
