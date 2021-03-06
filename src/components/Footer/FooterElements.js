import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { hoverColor, secondFontFamily } from '../../utils/globalStyles/globalStyles';

export const FooterContainer = styled.footer`
    background: ${hoverColor};
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterLinkItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(LinkS)`
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #000;
        transition: 0.3s ease-out;
    }
`;

export const FooterLinkOut = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #000;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 640px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const SocialLogo = styled.h1`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    font-family: ${secondFontFamily};

`;

export const WebsiteRights = styled.small`
    color: #fff;
    text-align: center;
    margin-bottom: 16px;
    margin-left: 20px;

    @media screen and (max-width: 640px) {
        margin-left: 0;
    }
`;

export const SocialIcons= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;

    @media screen and (max-width: 640px) {
        margin-left: 0;
    }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    margin-left: 20px;

    &:hover {
        color: #000;
    }
`;

