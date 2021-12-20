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
              Mad <b>DeVision</b>
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
