import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

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
  }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}> {/* Change icons color globally */}
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Freyə</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="ourfocus"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >our focus</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="trend"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >trend</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="community"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >community</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="shop"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >shop</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="you"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >you.</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
