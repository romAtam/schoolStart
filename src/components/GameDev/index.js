import React,{useEffect} from 'react';
import Icon1 from '../../images/start1.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/blog.svg'
import Icon5 from '../../images/robot.svg'
import Icon4 from '../../images/unity.svg'
import Icon6 from '../../images/anim.svg'
import {HeroBg,VideoBg} from "../HeroSection/HeroElements"
import { animateScroll as scroll } from "react-scroll";
import video from "../../videos/signin.mp4"
import{ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesH2,ServicesP,ServicesIcon} from './GameDevElements'
const GameDev = () => {
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
           <ServicesH1 style={{color:"#3DB2FF",zIndex:"888"}}>Game DEV</ServicesH1>
           <ServicesWrapper>
               <ServicesCard>
                   <ServicesIcon src={Icon1}/>
                   <ServicesH2>Game DESIGN</ServicesH2>
                   <ServicesP>UNITY</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon2}/>
                   <ServicesH2>UNITY PROGRAMMER</ServicesH2>
                   <ServicesP> C#,UNITY</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon3}/>
                   <ServicesH2> C# PROGRAMMER </ServicesH2>
                   <ServicesP>C#,Алгоритмы и структуры данных </ServicesP>
               </ServicesCard>
              
               <ServicesCard>
                   <ServicesIcon src={Icon4}/>
                   <ServicesH2>UNREAL  PROGRAMMER</ServicesH2>
                   <ServicesP>C++,UNREAL Engine</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon5}/>
                   <ServicesH2>Программист C++</ServicesH2>
                   <ServicesP>C++,Алгоритмы и структуры данных </ServicesP>
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

export default GameDev