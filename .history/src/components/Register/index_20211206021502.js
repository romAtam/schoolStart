import React from 'react'

import styled from "styled-components"
import {ButtonR} from "../ButtonElement"


const RegisterContainer=styled.div`
color: #fff;
display: grid;
align-items: center;
justify-content: center;
justify-items: center;
grid-gap:10px;
height: 100vh;
position: fixed;
width: 100%;

`
const RegisterWrap=styled.div`
color: #fff;
display: grid;
align-items: center;
justify-content: center;
justify-items: center;
grid-gap:10px;


`
const Register = () => {


    return (
        <RegisterContainer>
            <RegisterWrap>
                  <input type="text" />
            <ButtonR>register</ButtonR>
            <p>Alllready have account?</p>
            <ButtonR style={{color: 'white',textDecoration:"none"}} to="/signin">LOG IN</ButtonR>
            </RegisterWrap>
          
        </RegisterContainer>
    )
}

export default Register