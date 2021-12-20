import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer=styled.footer`
background: #000;

padding-bottom:5px;


`
export const FooterWrap=styled.div`

padding:0px 24px 0 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width:1100px;
margin:0 auto;
`
export const FooterLinksContainer=styled.div`
z-index:10;
display: flex;
justify-content: center;
@media screen and (max-width:820px){
    padding-top: 32px;
}
`
export const FooterLinksWrapper=styled.div`

display: flex;
@media screen and (max-width:820px){
    flex-direction: column;
}
`
export const FooterLinkItems=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color:#fff;
@media screen and (max-width:420px){
margin:0;
padding: 10px;
width: 100%;
}
`
export const FooterLinkTitle=styled.h1`
color:#01bf71;

padding: 3px;
border-radius: 10px;;
font-size: 14px;
margin-bottom:16px ;
box-shadow: 2px 2px 7px 2px #3DB2FF;
&:hover{
    color:#3DB2FF;
    font-weight: bold;

}
`
export const FooterLink=styled(Link)`
color:#fff;

text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
&:hover{
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0px 0px 7px 0px #3DB2FF;
    color:#fff;
    transition: 0.3s ease-out;
}
`
export const SocialMedia=styled.section`
max-width:1000px;
width:100%;
`
export const SocialMediaWrap=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width:1100px;
margin:40px auto 0 auto;
@media screen and (max-width:820px){
    flex-direction: column;
}
`
export const SocialLogo=styled(Link)`
color:#fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.2rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: 100;

`
export const WebsiteRights=styled.small`
color:#fff;
margin-bottom: 16px;
`
export const SocialIcons=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`
export const SocialIconLink=styled.a`
color: #fff;
font-size:24px;

`