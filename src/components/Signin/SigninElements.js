import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`


position: relative;
min-height: 692px;

position: fixed;
bottom: 0%;
left: 0px;
right: 0px;
top: 0%;
z-index:0;
overflow: visible;


`;
export const FormWrap=styled.div`
border:none;
margin-top: 30px;
height: auto;
height:auto;
display:flex;
flex-direction: column;
justify-content: center;
z-index:999;
@media screen and (max-width:400px){
    height:80% ;
}
`
export const FormH1=styled.h1`
margin-bottom:40px;
color:#3DB2FF;
font-size:20px;
font-weight:400;
text-align: center;
`
export const Icon=styled(Link)`

margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color:#A0937D;
font-weight: 700;
z-index:999;
font-size:1.5rem;
@media screen and (max-width:480px){
    margin-left:16px;
    margin-top: 8px;
}
`
export const FormContent=styled.div`
         
display: flex;
flex-direction: column;
justify-content:center;
@media screen and (max-width:480px){
    padding: 10px;
}
`
export const Form=styled.form`
text-align: center;

background: rgba(0,0,0,0.2);
max-width:400px;
height: auto;

width: 100%;
z-index:1;
display: grid;
margin: 0 auto;
padding: 80px 32px;


@media screen and (max-width:400px){
    padding:32px 32px;
}
`
export const FormLabel=styled.label`
margin-bottom: 8px;
font-size:14px;
color:#fff;
`
export const FormInput=styled.input`

color:#fff;
width:50%;   
margin: 0 auto;
font-size:16px;
outline: none;
padding: 16px 16px;
margin-bottom: 32px;
border:1px solid #fff;
background:black;
border-radius: 14px;
`
export const FormButton=styled(Link)`
width:50%;   
margin: 0 auto;
background: rgba(0,0,0,0.9);
border:none;
box-shadow: 0px 0px 7px 0px #3DB2FF;
border-bottom: 1px solid #01bf71;
padding: 16px 0;
text-align: center;
border-radius: 12px;
color:#fff;
font-size: 16px;
cursor: pointer;
`
export const Text=styled.span`
text-align: center;
margin-top:24px;
color:#fff;
font-size:14px ;
`