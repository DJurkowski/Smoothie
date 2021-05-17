import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { mainColor } from '../../../utils/globalStyles/globalStyles';

export const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
`;

export const ImageWrapper = styled.div`
    padding: 20px 15px;
    border-radius: 20px;
    width: 100%;
    min-height: 350px;
    height: auto;

    &:hover {
        cursor: pointer;
    }
`;

export const Image = styled(motion.img)`
    height: 400px;
`;

export const CarouselPrevArrow = styled(FaArrowAltCircleLeft)`
    position: absolute;
    color: #000;
    top: 50%;
    left: 6%;
    font-size: 2.5rem;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${mainColor};
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 365px) {
        left: 10px;
    }
`;

export const CarouselNextArrow = styled(FaArrowAltCircleRight)`
    position: absolute;
    color: #000;
    top: 50%;
    right: 6%;
    font-size: 2.5rem;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${mainColor};
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 365px) {
        right: 10px;
    }
`;