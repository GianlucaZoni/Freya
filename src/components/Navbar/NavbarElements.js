import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  //background: #000;
  background: ${(scrollNav) => (scrollNav ? '#CACAD4' : '#CACAD4')};
  //background: #cacad4;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: 1rem;
  position: sticky;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -o-sticky;
  position: -ms-sticky;

  top: 0;
  z-index: 69;
  //border-bottom: 2px solid #e1e9ff;
  //border-bottom: 2px solid #4a4b5a;
  border-bottom: 2px solid #9292a6;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  //height: 80px;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1248px;
`;

export const NavLogo = styled(LinkR)`
  //color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  //font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-top: -25px;
  //padding: 5px;
  //font-stretch: semi-expanded;
  //font-weight: 500;
  //text-decoration: none;
`;

export const NavImg = styled.img`
  height: 50px;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #4a4b5a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  //height: 100%;
  height: 50px;
  //height: 25px;
  //margin: 10px;
  cursor: pointer;
  font-stretch: semi-expanded;
  font-weight: 500;
  &:hover {
    //border-top: 3px solid #814CFF;
    border-bottom: 5px solid transparent;
  }
  &.active {
    //border-top: 3px solid #814CFF;
    //border-bottom: 3px solid #814CFF;
    //border-bottom: 5px solid transparent;
    color: #814cff;
  }
`;

export const NavLinksH = styled(LinkR)`
  color: #4a4b5a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 50px;
  cursor: pointer;
  font-stretch: semi-expanded;
  font-weight: 500;
  &:hover{
    //border-bottom: 5px solid transparent;
    transition: all 0.2s ease-in-out;
    //background: #e1e9ff;
    background: #e1e9ff;
    color: #814cff;
    border-radius: 50px;
    margin-top: -2.5px;
    //padding: 1px -10px 1px -10px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
      display:none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #814CFF;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-stretch: expanded;
  font-weight: 300;
  border-style: solid;
  border-color: #814CFF;
  border-width: 1px;
  &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #814cff;
  }
`;