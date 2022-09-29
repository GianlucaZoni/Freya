import styled from "styled-components";
import { Link } from "react-router-dom";
//
//  Background
//
export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(146, 146, 166, 1) 0%,
    rgba(129, 76, 255, 1) 100%
  );
`;

export const Bg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 100%;
    //height: 100%;
  }
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #cacad4;

  @media screen and (max-width: 400px) {
    //object-position: 50%;
    object-position: -340px 75px;
  }
`;
//
//  NAVBAR SKINNY
//
export const Nav = styled.nav`
  //background: #000;
  background: ${(scrollNav) => (scrollNav ? "#CACAD4" : "transparent")};
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid white;

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

export const NavLogo = styled(Link)`
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
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinksH = styled(Link)`
  color: #4a4b5a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 50px;
  cursor: pointer;
  font-stretch: semi-expanded;
  font-weight: 500;
  &:hover {
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
//
//  SECTION
//
export const SigninWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 48px;
  justify-content: center;
`;

export const SigninRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  align-items: center;
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1";
  }
`;

export const Column1 = styled.div`
  /* margin-bottom: 15px;
    padding: 0 15px; */
  /* width: 100%;
    max-width: 600px; */
  //width: 600px;
  grid-area: col1;

  @media screen and (max-width:768px) {
    width:500px;
  }
`;

export const Column2 = styled.div`
  /* margin-bottom: 15px;
    padding: 0 15px; */
  grid-area: col2;
`;
export const FormWrap = styled.div`
  max-width: 600px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -75px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    margin-top: 100px;
    padding-bottom: 0px;
  }

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  //display: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 50px;
  }
`;

export const Form = styled.div`
  //background: #010101;
  //max-width: 400px;
  //height: auto;
  //width: 100%;
  z-index: 1;
  display: grid;
  //margin: 0 auto;
  //padding: 80px 32px;
  //border-radius: 4px;
  //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 768) {
    padding: 20px 20px;
  }
  
  @media screen and (max-width: 400px) {
    padding: 35px 35px;
  }
`;

export const FormH1 = styled.h1`
  /* margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center; */
  margin-bottom: 24px;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 300;
  font-stretch: expanded;
  color: #4a4b5a;
  //color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const FormSpan = styled.span`
  color: #814cff;
  font-weight: 300;
  font-stretch: expanded;
`;

export const FormP = styled.p`
  max-width: 600px;
  //margin-bottom: 35px;
  font-size: 24px;
  font-stretch: semi-expanded;
  font-weight: 500;
  line-height: 28px;
  //color: #e1e9ff;
  color: #4a4b5a;

`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 35px;
`;

export const FormLabel = styled.label`
  //margin-bottom: 8px;
  font-size: 24px;
  font-stretch: expanded;
  font-weight: 300;
  //color: #4a4b5a;
  color: #e1e9ff;
  margin-top: 12px;
  margin-right: 28px;
  margin-left: -20px;

  @media screen and (max-width: 1000px) {
    margin-top: 10px;
    margin-right: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    margin-right: 10px;
    margin-left: -35px;
  }
`;

export const FormInput = styled.input`
  //padding: 16px 16px;
  padding: 8px 0px 8px 8px;
  margin-bottom: 32px;
  border: none;
  border-radius: 25px;
  background-color: #e1e9ff;
  color: #4a4b5a;
  font-size: 2rem;
  text-align: center;

  &:focus {
    outline-color: #814cff;
  }

  @media screen and (max-width: 1000px) {
    padding: 14px 14px 14px 14px;
    font-size: 1rem;
  }

  @media screeen and (max-width: 480px) {
    padding: 8px 0px 8px 0px;
  }
`;

export const FormButton = styled.button`
  background: #814cff;
  padding: 16px 0;
  border: none;
  border-radius: 25px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const SignInButton = styled(Link)`
  border-radius: 50px;
  background: #814CFF;
  white-space: nowrap;
  color: #e1e9ff;
  font-size: 24px;
  outline: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-stretch: expanded;
  font-weight: 300;
  padding: 16px 32px 16px 32px;
  margin-left:px;
  margin-right:32px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e1e9ff;
    color: #814cff;
  }

  @media screen and (max-width:768px) {
    padding: 16px 24px 16px 24px;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
