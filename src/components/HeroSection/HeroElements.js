import styled from 'styled-components'
import{MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'
export const HeroContainer=styled.div`
background: #000;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px; 
height:820px;
position: relative;
z-index:1;
:before{
    content:'';
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    background:  
     linear-gradient(180deg, rgba(0,0,0,0)0%,rgba(0,0,0,0.9)100%);
    z-index:2;

}

`
export const HeroBg=styled.div`
position: absolute;
top: -80px;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;

`
export const VideoBg=styled.video`
width: 100%;
height: 100%;
-o-object-fit:cover;
object-fit:cover;
background: #000;

`
export const HeroContent=styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;

flex-direction: column;
align-items: center;
`
export const HeroH1=styled.h1`
color:#fff;
font-size:48px ;
text-align: center;
@media screen and (max-width:768px){
    font-size: 40px;
}
@media screen and (max-width:480px){
    font-size:32px;
}
`
export const HeroP=styled.p`
background: rgba(0,0,0,0.5);
box-shadow: 5px 5px 15px 5px #000000;

margin: 24px;
line-height: 2.5rem; 
color:#3DB2FF;
font-size:24px;
text-align: center;
max-width:600px;
@media screen and (max-width:768px){
    font-size:22px;
}
@media screen and (max-width:480px){
    font-size:18px;
}
`
export const HeroBtnWrapper=styled.div`
margin-top:32px;

display:flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 0px 27px 0px #3DB2FF;
`
export const ArrowForward=styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`
export const ArrowRight=styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px;
`