import React from 'react'
import {Button,ButtonR}from '../ButtonElement'
import {Link as LinkR,useParams} from 'react-router-dom'
import {InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap, Column2, ImgWrap, Img} from './InfoElements'
const InfoSection = ({primary,dark,dark2,img,alt,lightBg,imgStart,topLine,id,lightText,headline,description,darkText,buttonLabel,page}) => {
    const params=useParams()
    console.log(params);
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
                         
                           <ButtonR  
                           dark={dark?1:0}
                           dark2={dark2?1:0}
                           primary={primary?1:0} smooth="true" duration={500} spy="true" exact="true" offset={-80} to={`/fiber`}>{buttonLabel}</ButtonR>
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
