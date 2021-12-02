import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  NavBtn,
  NavBtnLink,
  NavMenu,
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  NavLinks,
} from "./NavbarElements";

import { animateScroll as scroll } from "react-scroll";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    toggleHome()
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
    
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to="/">
              simplyc<b>IT</b>y
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  offset={-80}
                  exact={true}
                  spy='true'
                  smooth="true"
                  duration={500}
                  to="/kids"
                >
                  {" "}
                  {/* <span style={{color:"red",fontWeight:"bold"}}>K</span>
                  <span style={{color:"orange",fontWeight:"bold"}}>i</span>
                  <span style={{color:"yellow",fontWeight:"bold"}}>d</span>
                  <span style={{color:"white",fontWeight:"bold"}}>s</span>
                <span style={{color:"orange",fontWeight:"bold"}}>IT</span> */}
                kidsIT
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  offset={-80}
                  exact={true}
                  spy='true'
                  smooth="true"
                  duration={500}
                  to="/game"
                >
                  {" "}
               Game
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  offset={-80}
                  exact={true}
                  spy='true'
                  smooth="true"
                  duration={500}
                  to="/web"
                >
                  {" "}
                 Web
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  offset={-80}
                  exact={true}
                  spy='true'
                  smooth="true"
                  duration={500}
                  to="/team"
                >
                  {" "}
                 Team
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Кабінет учня</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
    
    </>
  );
};

export default Navbar;
