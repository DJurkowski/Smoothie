import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItem, FooterLinkOut, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,  SocialIconLink, SocialLogoImg } from './FooterElements';
import { FaFacebook } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='experience' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Experience</FooterLink>
                            <FooterLink to='benefits' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Benefits</FooterLink>
                            <FooterLink to='health' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Health</FooterLink>
                            <FooterLink to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='newsletter' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Newsletter</FooterLink>
                            <FooterLink to='newsletter' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Business</FooterLinkTitle>
                            <FooterLinkOut href="https://pl-pl.facebook.com/noaignitepoland/" target="_blank" >Facebook</FooterLinkOut>
                            <FooterLinkOut href="https://noaignite.pl/" target="_blank" >Website</FooterLinkOut>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome}>
                            Smoothie Delight
                        </SocialLogo>
                        <WebsiteRights>Smoothie Delight &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://pl-pl.facebook.com/noaignitepoland/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://noaignite.pl/" target="_blank" aria-label="WebSite">
                                <BiWorld />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
