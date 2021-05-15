import React from 'react';
import { CardContainer, CardIcon, CardHeader, CardParagraph } from './CardElements';

const Card = ({ icon, header, paragraph }) => {
    return (
        <CardContainer>
            <CardIcon src={icon} alt={header} />
            <CardHeader>{header}</CardHeader>
            <CardParagraph>{paragraph}</CardParagraph>
        </CardContainer>
    );
};

export default Card;
