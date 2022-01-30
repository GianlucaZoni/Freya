import React from "react";
import { ButtonDiaphanous, ButtonDiaphanousInv, ButtonGray } from "../ButtonElements";
import {
  ShopContainer,
  ShopWrapper,
  Row,
  Column1,
  Column2,
  TextWrapper,
  Topline,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  SubtitleSpan,
  HeadingViolet,
  CoverWrap,
  Cover
} from "./ShopElements";

const ShopSection = ({
  lightBg,
  id,
  imgStart,
  topline,
  lightText,
  headlineviolet,
  headline,
  darkText,
  description,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  buttonLabel,
  buttonLabel2,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <ShopContainer lightBg={lightBg} id={id}>
        {/*<CoverWrap>
          <Cover img={img} alt={alt}/>            
        </CoverWrap>*/}
        <ShopWrapper>
          <Row imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <HeadingViolet lightText={lightText}>{headlineviolet}</HeadingViolet>
                <Heading lightText={lightText}>{headline}</Heading>
                <Topline>{topline}</Topline>
                <Subtitle darkText={darkText}>{description1}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
                <Subtitle darkText={darkText}>{description4}<SubtitleSpan>{description5}</SubtitleSpan>{description6}</Subtitle>
                <BtnWrap>
                  <ButtonDiaphanous to="home" 
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel}</ButtonDiaphanous>
                  <ButtonDiaphanousInv to="home" 
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel2}</ButtonDiaphanousInv>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} type="png"/>
              </ImgWrap>
            </Column2>
          </Row>
        </ShopWrapper>
      </ShopContainer>
    </>
  );
};

export default ShopSection;
