
import Video from '../../videos/video.mp4'
import{HeroBg,VideoBg} from '../HeroSection/HeroElements'
import {Container,FormWrap,Icon,FormContent} from '../Signin/SigninElements'
import TeamData from "./TeamData"

const index = () => {
  
    return (
      
            <>
         
              
    
            <Container >
                <HeroBg>
                   <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
               </HeroBg>
               <FormWrap>
                {/* <Icon to='/'>simplyc<span style={{color:"orange"}}>IT</span>y</Icon> */}
                <FormContent style={{zIndex:"1"}}>
                    <TeamData/>
                    {/* <Form action="#">
                        <FormH1>Sign In to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput autoFocus type='email' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>


                    </Form> */}
                </FormContent>
s
            </FormWrap>
                  
    
    
            </Container>
            
            </>
        )
    }
    

export default index
