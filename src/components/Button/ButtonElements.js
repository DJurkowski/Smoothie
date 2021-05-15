import styled from 'styled-components';
import { Link } from 'react-scroll';
import { mainColor, hoverColor, secondFontFamily } from '../../utils/globalStyles/globalStyles';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${mainColor};
    color: #fff;
    padding: 5px 32px;
    font-size: 2rem;
    font-weight: bold;
    font-family: ${secondFontFamily};
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${hoverColor};
        color: #fff;
    }
`;