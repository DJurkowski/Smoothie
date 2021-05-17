import styled from 'styled-components';
import { mainColor, secondFontFamily } from '../../../utils/globalStyles/globalStyles';

export const CardContainer = styled.div`
    margin-left: 1.5rem;
    margin-bottom: 0.7rem;
    padding: 20px 15px;
    box-shadow: 0px 0px 7px 10px rgba(246, 83, 83, 0.25);
    border-radius: 20px;
    max-width: 250px;
    min-height: 350px;
    height: auto;
    text-align: center;
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const CardIcon = styled.img`
    height: 100px;
`;

export const CardHeader = styled.h2`
    margin: 40px;
    font-family: ${secondFontFamily};
    font-size: 2rem;
    color: ${mainColor};
`;

export const CardParagraph = styled.p`
    padding: 0 15px;
`;