import React from 'react'
import {Button}from '../ButtonElement'

import {InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap, Column2, ImgWrap, Img} from './InfoElements'
const InfoSection = ({primary,dark,dark2,img,alt,lightBg,imgStart,topLine,id,lightText,headline,description,darkText,buttonLabel}) => {
    
    return (
       <>
       <InfoContainer lightBg={lightBg} id={id}>
           <InfoWrapper>
               <InfoRow imgStart={imgStart}>
                   <Column1>
                   <TextWrapper>
                       <TopLine>{topLine}</TopLine>
                       <Heading lightText={lightText}>{headline}</Heading>
                       <Subtitle darkText={darkText}>{description}</Subtitle>
                       <BtnWrap>
                           <Button 
                           dark={dark?1:0}
                           dark2={dark2?1:0}
                           primary={primary?1:0} smooth={true} duration={500} spy={true} exact={true} offset={-80} to='home'>{buttonLabel}</Button>
                       </BtnWrap>
                   </TextWrapper>
                   </Column1>
                   <Column2>
                   <ImgWrap>
                   <Img src={img} alt={alt}/>
                   </ImgWrap>
                   
                   </Column2>
               </InfoRow>
           </InfoWrapper>

       </InfoContainer>
       
       
       </>
    )
}

export default InfoSection
