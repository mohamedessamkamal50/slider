import React from 'react'

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink,
    SideBtnWrap, SideRoute, SidebarMenu
  } from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                    <SidebarLink to="serveces" onClick={toggle}>Serveces</SidebarLink>
                    <SidebarLink to="signup" >Sign up </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideRoute to='/signin'>Sign In</SideRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
