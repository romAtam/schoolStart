import React from 'react'
import {FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa'

import {SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink,FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink} from './FooterElements'
const Footer = () => {
    return (
        <>
        







         <FooterContainer>
        
             
 <FooterWrap>
              <FooterLinksContainer>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>About us </FooterLinkTitle>
                          <FooterLink to='/signin'>How it works</FooterLink>
                          <FooterLink to='/signin'>Testimonials</FooterLink>
                          <FooterLink to='/signin'>Careers</FooterLink>
                          <FooterLink to='/signin'>Investors</FooterLink>
                          <FooterLink to='/signin'>Terms of Service</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                          <FooterLinkTitle>Contact Us </FooterLinkTitle>
                          <FooterLink to='/signin'>Contact</FooterLink>
                          <FooterLink to='/signin'>Support</FooterLink>
                          <FooterLink to='/signin'>Address</FooterLink>
                          <FooterLink to='/signin'>Our Chat</FooterLink>
                          <FooterLink to='/signin'>Send Email</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>Social Media </FooterLinkTitle>
                          <FooterLink to='/signin'>Instagram</FooterLink>
                          <FooterLink to='/signin'>facebook</FooterLink>
                          <FooterLink to='/signin'>Youtube</FooterLink>
                          <FooterLink to='/signin'>Twitter</FooterLink>
                          <FooterLink to='/signin'>Tiktok</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                          <FooterLinkTitle>Our team </FooterLinkTitle>
                          <FooterLink to='/signin'>Teachers</FooterLink>
                          <FooterLink to='/signin'>developers</FooterLink>
                          <FooterLink to='/signin'>Mentors</FooterLink>
                          <FooterLink to='/signin'>TeamLeads</FooterLink>
                          <FooterLink to='/signin'>Administrator</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
              </FooterLinksContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to='/'>Mad<span style={{color:"white"}}>De</span>Vision</SocialLogo>
                       <WebsiteRights>Mad<span style={{color:"orange"}}>De</span>Vision {new Date().getFullYear()}</WebsiteRights>
                       <SocialIcons>
                       <SocialIconLink href="/" target="_blank" ><FaFacebook  /></SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
          </FooterWrap>
          

         

      </FooterContainer>
        </>
     




    )
}

export default Footer


