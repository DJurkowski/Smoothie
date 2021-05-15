import styled from 'styled-components';

export const CardsContainer = styled.div`
    height: auto;
    padding: 0 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CardsHeader = styled.h2`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;
`;

export const CardsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;