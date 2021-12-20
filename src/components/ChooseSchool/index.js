import React from 'react'
import FiberPage from "../../pages/FiberPage"
import styled from "styled-components"
import{SidebarContainer,SidebarLink,SideBtnWrap,SidebarRoute,SidebarWrapper,SidebarMenu,Icon,CloseIcon} from '../Sidebar/SidebarElements'
const ChooseSchool = ({schoolOpen,toggle}) => {
 
    return (
        <>
           
          <SidebarContainer isOpen={schoolOpen} >
              
           {/* <Icon onClick={toggle}>
               <CloseIcon/>
            </Icon> */}
            <SidebarWrapper >
                <SidebarMenu>
               
                  
                    <SidebarLink to='/chooseschool/subbota' onClick={toggle}>
                subbota
                    </SidebarLink>
                    <SidebarLink to='/chooseschool/voscresenie' onClick={toggle}>
                  voscresenie
                    </SidebarLink>
                    <SidebarLink to='/chooseschool/vivtorok' onClick={toggle}>
                vivtorok(online)
                    </SidebarLink>
                <SidebarLink to='/chooseschool/sereda' onClick={toggle}>
                sereda(online)
                    </SidebarLink>
                   <SidebarLink to='/chooseschool/chetverg' onClick={toggle}>
                chetverg(online)
                    </SidebarLink>
                <SidebarLink to='/chooseschool/friday' onClick={toggle}>
                pyatnitsa(online)
                    </SidebarLink>
             
                </SidebarMenu>
                <SideBtnWrap>
               
                    <h2 style={{color:"lightblue"}}>Виберіть найближчu den</h2>
                   
                </SideBtnWrap>
               

            </SidebarWrapper> 
       </SidebarContainer>
        </>
     
    )
}

export default ChooseSchool