
import Video from '../../videos/signin.mp4'
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
            
                <FormContent style={{zIndex:"1"}}>
                    <TeamData/>
                 
                </FormContent>
s
            </FormWrap>
                  
    
    
            </Container>
            
    
       
            
            </>
        )
    }
    

export default index
