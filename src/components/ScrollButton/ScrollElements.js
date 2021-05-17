import styled from 'styled-components';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export const Scroll = styled(FaArrowAltCircleUp)`
    position: fixed;
    font-size: 40px;
    bottom: 0.5rem;
    right: 0.5rem;
    color: #000;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;