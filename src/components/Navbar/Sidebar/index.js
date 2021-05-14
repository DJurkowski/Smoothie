import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarBtnLink } from './SidebarElements';

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="health" onClick={toggle}>Health</SidebarLink>
                    <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarBtnLink to="newsletter" onClick={toggle}>Sign up</SidebarBtnLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
