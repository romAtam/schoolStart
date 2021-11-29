import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
position: relative;
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index:0;
overflow: hidden;

`;
export const FormWrap=styled.div`
height:100%;
display:flex;
flex-direction: column;
justify-content: center;
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
height: 100%;
display: flex;
flex-direction: column;
justify-content:center;
@media screen and (max-width:480px){
    padding: 10px;
}
`
export const Form=styled.form`
border-top: 1px solid green;
border-left: 1px solid #01bf71;
border-right: 4px solid #01bf71;
background: rgba(0,0,0,0.5);
max-width:400px;
height: auto;
border-bottom: 2px solid green;
width: 100%;
z-index:1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 14px;
box-shadow: 0px 0px 77px 0px #3DB2FF;
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
font-size:16px;
outline: none;
padding: 16px 16px;
margin-bottom: 32px;
border:1px solid #fff;
background: transparent;
border-radius: 34px;
`
export const FormButton=styled.button`
background: transparent;
border:none;
box-shadow: 0px 0px 7px 0px #3DB2FF;
border-bottom: 1px solid #01bf71;
padding: 16px 0;

border-radius: 4px;
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