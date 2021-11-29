import React,{useState} from 'react'

import {Button} from '../ButtonElement'
import{HeroContainer,HeroBtnWrapper,ArrowForward,ArrowRight,HeroContent,HeroH1,HeroP,HeroBg,VideoBg} from './HeroElements'
const HeroSection = ({header,descr,video}) => {
    const[hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
  
    return (
       <HeroContainer id='home'>
           <HeroBg>
               <VideoBg playbackRate="0.1" autoPlay loop muted src={video} type='video/mp4'/>
           </HeroBg>
           <HeroContent>
               <HeroH1>{header}</HeroH1>
               <HeroP>{descr}  </HeroP>
               <HeroBtnWrapper>
                   <Button dark='true' primary='true' onMouseLeave={onHover} onMouseEnter={onHover} to='signup'>Запишіться{hover?<ArrowForward/>:<ArrowRight/>}</Button>

               </HeroBtnWrapper>

           </HeroContent>
       </HeroContainer>
    )
}

export default HeroSection
