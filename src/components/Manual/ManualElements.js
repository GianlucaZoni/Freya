import styled from "styled-components";
import { Link } from "react-router-dom";

//
//  NAVBAR SKINNY
//
export const Nav = styled.nav`
  //background: #000;
  background: #CACAD4;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid white;

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
  @media screen and (max-width: 768px) {
    //display: none;
  }
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
//  VIDEO INIZIALE
//
export const Container = styled.div`
  background: #CACAD4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 720px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 400px) {
      height: 250px;
    }
`;

export const GuideBg = styled.div`
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
`

export const VideoGuide = styled.video`
    //position: relative;
    //top: 0;
    width: 100%;
    height: 100%;
    --o-object-fit: contain;
    object-fit: contain;
    background: #CACAD4;

    @media screen and (max-width: 400px) {
      height:100%;
    }
`
//
//  MANUAL SECTION
//
export const BannerContainer = styled.div`
  background-color: #CACAD4;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
`

export const BannerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

export const BannerItem = styled.div`

`
//
//  CONTENT
//
export const InfoContainer = styled.div`
    //color: #fff;
    background: #cacad4;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
display: flex;
z-index: 1;
height: 720px;
width: 100%;
max-width: 1200px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

export const InfoRow1 = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const InfoRow2 = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas:'col2 col1';
    @media screen and (max-width: 768px) {
        grid-template-areas:'col1' 'col2';
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    //max-width: 500px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Topline = styled.p`
    color: #814CFF;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const HeadingViolet = styled.h1`
    //margin-bottom: 24px;
    font-size: 72px;
    line-height: 0.9;
    font-weight: 300;
    font-stretch: expanded;
    color: #814cff;
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Heading = styled.h1`
    //margin-bottom: 24px;
    font-size: 72px;
    line-height: 1.1;
    font-weight: 300;
    font-stretch: expanded;
    color: #4a4b5a;
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 600px;
    //margin-bottom: 35px;
    font-size: 24px;
    font-stretch: semi-expanded;
    font-weight: 500;    
    line-height: 28px;
    color: #4a4b5a;

    @media screen and (max-width:480px) {
      padding-left: 0;
      padding-right: 25px;
    }
`

export const SubtitleMargin = styled.p`
    max-width: 600px;
    margin-top: 32px;
    //margin-bottom: 35px;
    font-size: 24px;
    font-stretch: semi-expanded;
    font-weight: 500;    
    line-height: 28px;
    color: #4a4b5a;

    @media screen and (max-width:480px) {
      padding-left: 0;
      padding-right: 60px;
    }
`

export const SubtitleSpan=styled.span`
    color: #814cff;
    font-stretch: semi-expanded;
    font-weight: 500;
`

export const BtnWrap=styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 35px;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const InfoSpan=styled.span`
    color: #814cff;
`

export const BtnContainer = styled.div`
    //color: #fff;
    background: #cacad4;
    margin-top: -75px;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const BtnWrapper = styled.div`
display: flex;
z-index: 1;
height: 200px;
width: 100%;
max-width: 1200px;
margin-right: auto;
margin-left: auto;
//padding: 0 24px;
justify-content: center;
`

export const ManualButton = styled(Link)`
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
  padding: 0 64px 0 64px;
  margin: 25px auto 100px auto;
  //margin-left: 0px;
  //margin-right:32px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e1e9ff;
    color: #814cff;
  }

  @media screen and (max-width: 480px) {
    padding: 0 32px 0 32px;
  }
`;