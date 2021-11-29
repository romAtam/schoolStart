import React from 'react'

import{SidebarContainer,SidebarLink,SideBtnWrap,SidebarRoute,SidebarWrapper,SidebarMenu,Icon,CloseIcon} from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
            </Icon>
            <SidebarWrapper >
                <SidebarMenu>
                    <SidebarLink to='Про нас' onClick={toggle}>
                    Про нас
                    </SidebarLink>
                    <SidebarLink to='Франшиза' onClick={toggle}>
                    Франшиза
                    </SidebarLink>
                    <SidebarLink to='курси' onClick={toggle}>
                    курси
                    </SidebarLink>
                    <SidebarLink to='ЗНО' onClick={toggle}>
                    ЗНО
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Кабінет учня</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper> 
       </SidebarContainer>
    )
}

export default Sidebar
