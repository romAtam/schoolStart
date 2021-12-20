import React,{useState} from 'react'
import Video from '../../videos/game.mp4'
import{HeroBg,VideoBg,HeroContainer} from '../HeroSection/HeroElements'
import {Container, FormInput, FormWrap, Icon,FormContent ,Form,FormH1,FormLabel,FormButton,Text} from './SigninElements'
import { ButtonR } from '../ButtonElement'
import { useDispatch } from 'react-redux'
import { setStudent } from '../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Signin = () => {
    const auth = getAuth();
const dispatch=useDispatch()
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const handleLogin=()=>{
        if(!email||!pass){
            return
        }
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    return (
        <>
     
          

        <Container >
            <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
           </HeroBg>
         
              
 <FormWrap>
                {/* <Icon to='/'></Icon> */}
                <FormContent>
                    <Form action="#">
                        <FormH1>log in</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput placeholder="Enter email"value={email} onChange={(e)=>setEmail(e.target.value)} autoFocus type='email' required/>
                        <FormLabel htmlFor='for'>password</FormLabel>
                        <FormInput placeholder="password" value={pass} onChange={(e)=>setPass(e.target.value)} autoFocus type='password' required/>
                        <FormButton onClick={handleLogin} to='/cabinet' >Continue</FormButton>
                        <Text>Forgot Password</Text>
                        or <ButtonR to='/register'>Register New Account</ButtonR>

                    </Form>
                </FormContent>

            </FormWrap>
         

        </Container>
        
        </>
    )
}

export default Signin
