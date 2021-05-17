import styled from 'styled-components';
import { mainColor } from '../../utils/globalStyles/globalStyles';

export const SectionContainer = styled.div`
    height: auto;
    padding: 0 0 120px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SectionHeader = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin: 0 20px 40px 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const HeaderSpecial = styled.span`
    font-family: 'Caveat', cursive;
    font-size: 4rem;
    color: ${mainColor};
`;