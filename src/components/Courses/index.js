import React,{useEffect} from 'react';
import Icon1 from '../../images/start1.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/blog.svg'
import Icon5 from '../../images/robot.svg'
import Icon4 from '../../images/unity.svg'
import Icon6 from '../../images/anim.svg'
import {HeroBg,VideoBg} from "../HeroSection/HeroElements"
import { animateScroll as scroll } from "react-scroll";
import video from "../../videos/web.mp4"
import{ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesH2,ServicesP,ServicesIcon} from './CoursesElements'
const Courses = () => {
    useEffect(() => {
        toggleHome()
       }, []);
       const toggleHome = () => {
         scroll.scrollToTop();
       };
    return (
        <>
          <HeroBg style={{position: 'fixed'}}>
               <VideoBg playbackRate="0.1" autoPlay loop muted src={video} type='video/mp4'/>
           </HeroBg>
         <ServicesContainer id='курси'>
           <ServicesH1 style={{color:"yellow",zIndex:"888"}}>WEB DEV</ServicesH1>
           <ServicesWrapper>
               <ServicesCard>
                   <ServicesIcon src={Icon1}/>
                   <ServicesH2>WEB DESIGN</ServicesH2>
                   <ServicesP>FIGMA,PHOTOSHOP</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon2}/>
                   <ServicesH2>WEB верстальщик </ServicesH2>
                   <ServicesP>  HTML CSS </ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon3}/>
                   <ServicesH2> Программист REACT JS </ServicesH2>
                   <ServicesP>REACT JS</ServicesP>
               </ServicesCard>
              
               <ServicesCard>
                   <ServicesIcon src={Icon4}/>
                   <ServicesH2>Программист NODE.JS </ServicesH2>
                   <ServicesP>EXPRESS,MONGO DB,js</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon5}/>
                   <ServicesH2>Программист js</ServicesH2>
                   <ServicesP>javascript,Алгоритмы и структуры данных </ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon5}/>
                   <ServicesH2>English IT</ServicesH2>
                   <ServicesP>Learning IT English </ServicesP>
               </ServicesCard>
               
            </ServicesWrapper>
         

       </ServicesContainer>

        </>
       
        
      
      



    )
}

export default Courses