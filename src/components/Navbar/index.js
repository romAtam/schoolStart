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
              ITsmile
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  offset={-80}
                  exact="true"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="Про нас"
                >
                  {" "}
                  Про нас
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  offset={-80}
                  exact="true"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="Франшиза"
                >
                  {" "}
                  Франшиза
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  offset={-80}
                  exact="true"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="курси"
                >
                  {" "}
                  курси
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  offset={-80}
                  exact="true"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="ЗНО"
                >
                  {" "}
                  ЗНО
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/cabinet">Кабінет учня</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
    
    </>
  );
};

export default Navbar;
