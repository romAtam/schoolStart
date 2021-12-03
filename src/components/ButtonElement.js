import styled from 'styled-components'
import{Link} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const Button=styled(Link)`
border-radius: 3px;
border-bottom: 1px solid #3DB2FF;
background: ${({primary})=>(primary?'transparent':'#010606')};
white-space: nowrap;
padding:${({big})=>(big?'14px 48px':'12px 30px')};
color:${({dark})=>(dark?'#fff':'#fff')};
font-size: ${({fontBig})=>(fontBig?'20px':'16px')};
outline: none;
box-shadow: 0px 0px 7px 0px #01bf71;
cursor: pointer;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.2s ease-in-out;
&:hover{
    box-shadow: 0px 0px 7px 0px #3DB2FF;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    background: ${({primary})=>(primary?'#transparent':'#000')};

}

`
export const ButtonR=styled(LinkR)`
border-radius: 3px;
border-bottom: 1px solid #3DB2FF;
background: ${({primary})=>(primary?'transparent':'#010606')};
white-space: nowrap;
padding:${({big})=>(big?'14px 48px':'12px 30px')};
color:${({dark})=>(dark?'#fff':'#fff')};
font-size: ${({fontBig})=>(fontBig?'20px':'16px')};
outline: none;
box-shadow: 0px 0px 7px 0px #01bf71;
cursor: pointer;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.2s ease-in-out;
background: #3DB2FF;
text-decoration: none;
&:hover{
    
    box-shadow: 0px 0px 7px 0px #3DB2FF;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    background: ${({primary})=>(primary?'#transparent':'#000')};

}

`
