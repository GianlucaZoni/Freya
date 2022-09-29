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
  NavLinksH,
  NavBtn,
  NavBtnLink,
  NavImg
} from "./NavbarElements";
import Logo from '../../images/logo.png';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState('false');

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav('true');
    } else {
      setScrollNav('false');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, [scrollNav]);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{color: '#4a4b5a'}}> {/* Change icons color globally */}
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
                <NavImg src={Logo} alt={"freyə"}/>
            </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="ourfocus"
              smooth={'true'}
              duration={500}
              spy='true'
              exact='true'
              offset={-55}
              >our focus</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="trend"
              smooth={'true'}
              duration={500}
              spy='true'
              exact='true'
              offset={-55}
              >trend</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="community"
              smooth={'true'}
              duration={500}
              spy='true'
              exact='true'
              offset={-55}
              >community</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="shop"
              smooth={'true'}
              duration={500}
              spy='true'
              exact='true'
              offset={-55}
              >shop</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksH to="/signin"
              smooth={'true'}
              duration={500}
              spy='true'
              exact='true'
              offset={-55}
              >you.</NavLinksH>
            </NavItem>
          </NavMenu>
          {/*<NavBtn>
            <NavBtnLink to="/signin">sign in</NavBtnLink>
          </NavBtn>*/}
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;