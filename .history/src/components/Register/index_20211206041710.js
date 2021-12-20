import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import styled from "styled-components"
import {ButtonR} from "../ButtonElement"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import{setStudent} from "../../store/slices/userSlice"
import {useHistory} from "react-router-dom"
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
const[email,setEmail]=useState("")

const[pass,setPass]=useState("")
const dispatch=useDispatch();
const handleNewUser=(email,pass)=>{
    if(!email||!pass){
        return
    }

    const auth=getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
 dispatch(setStudent({email:user.email,id:user.uid,token:user.accesstoken}))
  useHistory
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


}
    return (
        <RegisterContainer>
            <RegisterWrap>
                  <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="email"/>
                  <input onChange={(e)=>setPass(e.target.value)} value={pass} type="password" placeholder="password"/>
            <ButtonR onClick={()=>handleNewUser(email,pass)} to="/cabinet">register</ButtonR>
            <p>Alllready have account?</p>
            <ButtonR style={{color: 'white',textDecoration:"none"}} to="/signin">LOG IN</ButtonR>
            </RegisterWrap>
          
        </RegisterContainer>
    )
}

export default Register