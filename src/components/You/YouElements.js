import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";

//
//  NAVBAR SKINNY
//
export const Nav = styled.nav`
  //background: #000;
  background: #cacad4;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid #e1e9ff;

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

export const Container = styled.div`
  background: #cacad4;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  //padding: 0 30px;
  height: 720px;
  position: relative;
  z-index: 1;
  //max-width: 1200px;

  @media screen and (max-width: 480px) {
    height: 750px;
  }
`;

export const FeedWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0px auto 0px auto;
  padding: 32px 24px 0px 48px;
  /* position: absolute;
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
  } */
`;

export const YouHeading = styled.h1`
  font-size: 72px;
  line-height: 0.9;
  font-weight: 300;
  font-stretch: expanded;
  color: #814cff;
  margin-top:64px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
    margin-top: 32px;
  }
`;

export const UIBeautyScore = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BeautyScore = styled.div`
  position: absolute;
  z-index: 2;
  font-size: 36px;
  color: #814cff;
  font-stretch: semi-expanded;
  font-weight: 500;

  //text-align: center;
`;

export const BeautyScoreRing = styled.img`
  //display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  //text-align: center;
`;

export const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  max-width: 1200px;
  margin: 0 auto 0 auto;
`

export const HistoryHeading = styled.h1`
  font-size: 64px;
  line-height: 0.9;
  font-weight: 300;
  padding-top: 32px;
  margin-bottom: 64px;
  margin-left: 48px;
  font-stretch: expanded;
  color: #4a4b5a;

  @media screen and (max-width: 480px) {
    font-size: 32px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const HistorySpan = styled.span`
  font-weight: 300;
  font-stretch: expanded;
  color: #814cff;
`

export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  height: 450px;
  grid-template-areas: 'col1 col2';
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
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

// export const Calendar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   //height: 80px;
//   height: 100px;
//   z-index: 1;
//   width: 100%;
//   padding: 0 24px;
//   max-width: 1248px;
// `

//
// CALENDAR
//
export const CalendarWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto 0 auto;
`

export const Month = styled.h1`
  text-align: center;
  color: #4a4b5a;
  font-stretch: expanded;
  font-weight: 300;
  margin-bottom: 10px;
`

export const MonthSpan = styled.span`
  color: #814CFF;
  font-stretch: expanded;
  font-weight: 300;
`

export const CalendarTable = styled.div`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  //list-style: none;
  margin: 10;
  padding: 0;
  text-align: center;
`

export const DayName = styled.div`
  background: #9292a6;
  color: #4a4b5a;
  padding: 3px;
  font-stretch: expanded;
  font-weight: 300;
`

export const Day = styled.div`
  padding: 6px;
  background: transparent;
  color: #4a4b5a;
  font-stretch: expanded;
  font-weight: 300;
  cursor: pointer;
  border-radius: 50px;

  &:hover {
    background: #e1e9ff;
  }

  /* &.active {
    background: #814cff;
    color: #e1e9ff;
  } */
`

export const DaySpan = styled.span`
  color: #9292a6;
  font-stretch: expanded;
  font-weight: 300;
`

export const SecondaryBeautyScore = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto 0 auto;

  @media screen and (max-width:480px) {
    margin-top: 48px;
  }
`

export const TodaySpan = styled.span`
  background: #814CFF;
  //padding: 14px;
  border-radius: 50px;
  color: #e1e9ff;
`

export const Today = styled.div`
  padding: 6px;
  background: #814CFF;
  color: #e1e9ff;
  font-stretch: expanded;
  font-weight: 300;
  cursor: pointer;
  border-radius: 50px;
`