import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mainColor, hoverColor } from '../../utils/globalStyles/globalStyles';

// const mainColor = '#F65353';

export const HeroContainer = styled.div`
    height: 800px;
    position: relative;
    z-index: 20;
`;

export const Circle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${mainColor};
    clip-path: circle(370px at right 400px);
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    height: 700px;
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
`;

export const ColumnRight = styled(Column)`
    position: relative;
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
    position: absolute;
    max-height: 500px;
    max-width: 315px;
`;