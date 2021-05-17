import styled from 'styled-components';
import { mainColor } from '../../utils/globalStyles/globalStyles';

export const UniversalContainer = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: auto;
        padding-bottom: 120px;
    }
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imageSide}) => (imageSide ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imageSide}) => (imageSide ? `'col1'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const ColumnLeft = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const ColumnRight = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ContentText = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const ContentHeader = styled.h1`
    margin-bottom: 24px;
    font-size: 3rem;
    text-align: left;
    line-height: 1.1;
    font-weight: 600;
    color: #000;
`;

export const HeaderSpecial = styled.span`
    font-family: 'Caveat', cursive;
    font-size: 4rem;
    color: ${mainColor};
`;

export const ContentParagraph = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    text-align: left;
    font-size: 18px;
    line-height: 24px;
    color: #000;
`;

export const ContentButton = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ContentImage = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    height: 450px;
    text-align: left;
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;