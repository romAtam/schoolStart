import React from 'react'
import Video from '../../videos/game.mp4'
import{HeroBg,VideoBg,HeroContainer} from '../HeroSection/HeroElements'
import {Container, FormInput, FormWrap, Icon,FormContent ,Form,FormH1,FormLabel,FormButton,Text} from './SigninElements'

const Signin = () => {
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
                        <FormH1>password</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput autoFocus type='email' required/>
                        <FormButton to='/cabinet' >Continue</FormButton>
                        <Text>Forgot Password</Text>


                    </Form>
                </FormContent>

            </FormWrap>
         

        </Container>
        
        </>
    )
}

export default Signin
