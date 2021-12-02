import Video from '../../videos/earth.mp4'
import{HeroBg,VideoBg} from '../HeroSection/HeroElements'
import {Container,FormWrap,FormContent} from '../Signin/SigninElements'
import  LeaderData  from './leaderTeam'
import UserData from "./UserData"

const index = () => {

    return (
      
            <>
         
              
    
            <div>
                <HeroBg>
                   <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
               </HeroBg>
               <FormWrap>
                
                <FormContent style={{zIndex:"1"}}>
                  
                    <UserData/>
                    {/* <LeaderData/> */}
                    {/* <Form action="#">
                        <FormH1>Sign In to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput autoFocus type='email' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>


                    </Form> */}
                </FormContent>

            </FormWrap>
                  
    
    
            </div>
            
            </>
        )
    }
    

export default index
