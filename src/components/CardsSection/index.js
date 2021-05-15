import React from 'react';
import { CardsContainer, CardsHeader, CardsWrapper } from './CardsElements';
import { cardsData } from '../../utils/data/cards';
import Card from './Card';

const Cards = () => {
    return (
        <CardsContainer id="health">
            <CardsHeader>Healthy & Delicious</CardsHeader>
            <CardsWrapper>
                {cardsData.map(card => (
                    <Card key={card.id} icon={card.icon} header={card.header} paragraph={card.paragraph} />
                ))}
            </CardsWrapper>
        </CardsContainer>
    );
};

export default Cards;
