import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mainColor } from '../../utils/globalStyles/globalStyles';

export const HeroContainer = styled.div`
    height: auto;
    position: relative;
    z-index: 20;

    @media screen and (max-width: 768px) {
        padding: 0 0 100px 0;
    }
`;

export const Circle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${mainColor};
    clip-path: circle(370px at right 400px);

    @media screen and (max-width: 768px) {
        clip-path: circle(300px at right 400px);
    }

    @media screen and (max-width: 726px) {
        display: none;
    }
`;

export const ContentContainer = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 726px) {
        height: auto;
    }
`;

export const ContentColumns = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: flex-start;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 726px) {
        grid-template-areas: 'col1 col1';
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const ColumnLeft = styled(Column)`
    padding-top: 100px;
    padding-left: 6rem;
    align-items: flex-start;
    z-index: 5;
    grid-column: col1;
`;

export const ColumnRight = styled(Column)`
    position: relative;
    grid-column: col2;

    @media screen and (max-width: 726px) {
        display: none;
    }
`;

export const ItemHeader = styled(motion.h2)`
    font-weight: bold;
    font-size: 3rem;
    line-height: 75px;
`;

export const HeaderSpecial = styled.span`
    font-family: 'Caveat', cursive;
    color: ${mainColor};
`;

export const ItemParagraph = styled.p`
    margin: 15px 0;
    padding: 15px 15px 20px 0;
    text-align: left;
`;

export const Image = styled(motion.img)`
    z-index: 10;
    height: 500px;
    left: 8%;
    position: absolute;

    @media screen and (max-width: 726px) {
        display: none;
    }
`;