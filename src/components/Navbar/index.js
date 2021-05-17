import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElmenets';

const Navbar = ({ toggle: sideBarToggle }) => {
    
    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                    Smoothie Delight
                </NavLogo>
                <MobileIcon onClick={sideBarToggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="health" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Health</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="benefits" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Benefits</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Experience</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="newsletter" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign up</NavBtnLink>
                </NavBtn>
            </NavContainer>
            
        </Nav>
    );
};

export default Navbar;
