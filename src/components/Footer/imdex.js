import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkWrapper, FooterLinkItems,
FooterLinkTitel, SocialIcons, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, } from './FooterElements';
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer >
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitel>About Us</FooterLinkTitel>
                                <FooterLink to="/">How It Works</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitel>Contact Us</FooterLinkTitel>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                                <FooterLink to="/">Description</FooterLink>
                        </FooterLinkItems>
                        
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitel>Video</FooterLinkTitel>
                                <FooterLink to="/">Submit Video</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitel>Social meddia</FooterLinkTitel>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                             dolla
                         </SocialLogo>
                         <WebsiteRights > dolla © {new Date().getFullYear()} All rights reserved
                          </WebsiteRights>
                          <SocialIcons>
                          <SocialIconLink href="/" target="_blank" aria-label="facebook">
                              <FaFacebook />
                          </SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                              <FaInstagram />
                          </SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                              <FaYoutube />
                          </SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                              <FaTwitter />
                          </SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                              <FaLinkedin />
                          </SocialIconLink>
                          </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
