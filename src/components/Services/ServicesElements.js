import styled from 'styled-components'

export const ServicesContainer =styled.div`
height: 1100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #000;



@media screen and (max-width:768px){
   min-height:2200px;
  
   
}
@media screen and (max-width:480px){
    height:2200px;
    margin-top: 0;
}
`
export const ServicesWrapper=styled.div`

max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap:16px;
padding:0 50px;
@media screen and (max-width:1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}

`
export const ServicesCard=styled.div`
z-index:4;
background: #000;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
border-bottom: 2px solid #3DB2FF;
box-shadow: 0px 0px 7px 0px #01bf71;
transition: all 0.2s ease-in-out;
&:hover{
   
    border-right: 3px solid #01bf71;;
    border-bottom: 3px solid #01bf71;
box-shadow: 2px 2px 7px 2px #3DB2FF;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
export const ServicesIcon=styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`
export const ServicesH1=styled.h1`

font-size:1.8rem;
color:#fff;
margin-bottom: 34px;
@media screen and (max-width:480px){
    font-size:1.8rem;
}
`
export const ServicesH2=styled.h2`
color:#fff;
font-size:1rem;
margin-bottom: 10px;;
`
export const ServicesP=styled.p`
color:#01bf71;
font-size:1rem;
text-align: center;
`