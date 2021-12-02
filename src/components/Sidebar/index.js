import React from 'react'

import{SidebarContainer,SidebarLink,SideBtnWrap,SidebarRoute,SidebarWrapper,SidebarMenu,Icon,CloseIcon} from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
    return (
        <>
           
          <SidebarContainer isOpen={isOpen} onClick={toggle}>
              
           <Icon onClick={toggle}>
               <CloseIcon/>
            </Icon>
            <SidebarWrapper >
                <SidebarMenu>
                  
                    <SidebarLink to='/game' onClick={toggle}>
                   Game developer
                    </SidebarLink>
                    <SidebarLink to='/web' onClick={toggle}>
                   Web developer
                    </SidebarLink>
                    <SidebarLink to='team' onClick={toggle}>
                    our Team
                    </SidebarLink>  
                    <SidebarLink to='/kids' onClick={toggle}>
              kidsIT
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Кабінет учня</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper> 
       </SidebarContainer>
        </>
     
    )
}

export default Sidebar
