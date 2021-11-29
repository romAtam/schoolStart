import React from 'react'
import Video from '../../videos/video.mp4'
import{HeroBg,VideoBg} from '../HeroSection/HeroElements'
import {Container, FormInput, FormWrap, Icon,FormContent ,Form,FormH1,FormLabel,FormButton,Text} from './SigninElements'

const Signin = () => {
    return (
        <>
     
          

        <Container >
            <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
           </HeroBg>
         
              
 <FormWrap>
                <Icon to='/'>ITsmile</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign In to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput autoFocus type='email' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>


                    </Form>
                </FormContent>

            </FormWrap>
         

        </Container>
        
        </>
    )
}

export default Signin
