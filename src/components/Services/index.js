import React from 'react';
import Icon1 from '../../images/start1.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/blog.svg'
import Icon5 from '../../images/robot.svg'
import Icon4 from '../../images/unity.svg'
import Icon6 from '../../images/anim.svg'
import{ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesH2,ServicesP,ServicesIcon} from './ServicesElements'
const Services = () => {
    return (
       <ServicesContainer id='курси'>
           <ServicesH1>Курси для дітей</ServicesH1>
           <ServicesWrapper>
               <ServicesCard>
                   <ServicesIcon src={Icon1}/>
                   <ServicesH2>IT-Start</ServicesH2>
                   <ServicesP>Комп'ютерна підготовка для дітей 1-3 класів</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon2}/>
                   <ServicesH2>Minecraft: Програмування на Python </ServicesH2>
                   <ServicesP>  інструмент творчості для дітей .</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon3}/>
                   <ServicesH2>Відеоблогінг</ServicesH2>
                   <ServicesP>курс розрахований на підлітків від 12 років</ServicesP>
               </ServicesCard>
              
               <ServicesCard>
                   <ServicesIcon src={Icon4}/>
                   <ServicesH2>Unity </ServicesH2>
                   <ServicesP>Розробка комп'ютерних ігор (від 12 років)</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon5}/>
                   <ServicesH2>  «Робототехніка Lego» </ServicesH2>
                   <ServicesP>збирати робомоделі зможе дитина(від 6-8 років) </ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon6}/>
                   <ServicesH2>2D анимация </ServicesH2>
                   <ServicesP>Нашим учнем зможе стати будь-яка дитина від 12 років</ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon3}/>
                   <ServicesH2>  «Робототехніка Lego» </ServicesH2>
                   <ServicesP>збирати робомоделі (від 6-8 років) </ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src={Icon3}/>
                   <ServicesH2>Unity </ServicesH2>
                   <ServicesP>Розробка комп'ютерних ігор (від 12 років)</ServicesP>
               </ServicesCard>
            
           </ServicesWrapper>

       </ServicesContainer>
    )
}

export default Services
