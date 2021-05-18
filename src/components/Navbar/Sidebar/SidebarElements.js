import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { mainColor, hoverColor, secondFontFamily } from '../../../utils/globalStyles/globalStyles';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    font-family: ${secondFontFamily};
    font-size: 1.5rem;
`;

export const CloseIcon = styled(FaTimes)`
    color: #000;

    &:hover {
        color: ${mainColor};
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &:hover {
        color: ${mainColor};
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarBtnLink = styled(LinkS)`
    border-radius: 50px;
    background: ${mainColor};
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${hoverColor};
        color: #fff;
    }
`;