import styled from 'styled-components'
import {NavLink as LinkR} from 'react-router-dom'
 import{Link as LinkS} from 'react-scroll'

export const Nav=styled.nav`
background:${({scrollNav})=>scrollNav?'#000':'transparent'};
height:80px;
margin-top:0px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0px;
z-index:10;

@media screen and (max-width:960px){
    transition:0.8s all ease
}
`
export const NavbarContainer=styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index: 1;
width:100%;
padding:0 24px;
padding-left: 7px;
max-width: 1100px;
`
export const NavLogo=styled(LinkR)`

padding: 0 3px;
color:blue;
justify-self: flex-start;
cursor:pointer;
font-size:1.1rem;
display:flex;
align-items:center;
margin-left: 7px;

text-decoration: none;
`
export const MobileIcon=styled.div`
display: none;
@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top:10px;
    color:#fff;
    right: 10px;
    /* transform: translate(-100%,60%); */
    font-size: 1.8rem;
    width: 60px;
    height: 60px;

    cursor: pointer;
}
`
export const NavMenu=styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
@media screen and (max-width:768px){
    display: none;
}
`
export const NavItem=styled.li`
height: 80px;
`
export const NavLinks=styled(LinkR)`
color:wheat;

display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active{
    border-radius: 20px;
    box-shadow: 0px 0px 7px 0px #3DB2FF;
    border-bottom: 1px solid #01bf71;
}

`
export const NavBtn=styled.div`
display: flex;
align-items: center;

@media screen and (max-width:768px){
    display: none;
}

`
export const NavBtnLink=styled(LinkR)`

border-radius: 10px;
background: transparent;
white-space: nowrap;
padding: 10px 22px;
color:blue;
font-size: 16px;
outline: none;
border:none;
cursor: pointer;
transition: all 0.5s ease-in-out;
text-decoration: none;
box-shadow: 0px 0px 7px 0px #3DB2FF;

&:hover{
    
    transition: all 0.2s ease-in-out;
    background: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
    color:#010606;



}

`
