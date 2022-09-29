import React from 'react';
import {Container, Nav, NavbarContainer, NavLogo, NavImg, NavMenu, NavItem, NavLinksH, GuideBg, VideoGuide, BannerContainer,BannerWrap,InfoContainer,
  InfoWrapper,
  InfoRow1,
  InfoRow2,
  Column1,
  Column2,
  TextWrapper,
  Topline,
  Heading,
  Subtitle,
  SubtitleMargin,
  BtnWrap,
  ImgWrap,
  Img,
  SubtitleSpan,
  HeadingViolet,
  BtnContainer,
  BtnWrapper,
  ManualButton
} from './ManualElements';
import Logo from '../../images/logo.png';
import manual1 from '../../images/manual/manual1.png'
import manual2 from '../../images/manual/manual2.png'
import manual3 from '../../images/manual/manual3-ui-darktext.png'
import manual4 from '../../images/manual/manual4.png'

import Footer from '../Footer';


const Manual = () => {
  return (
      <>
          {/* SKINNY NAVBAR */}
          <Nav>
            <NavbarContainer>
              <NavLogo to="/">
                <NavImg src={Logo} alt={"freyə"} />
              </NavLogo>
              <NavMenu>
                <NavItem>
                  <NavLinksH
                    to="/you"
                    smooth={"true"}
                    duration={500}
                    spy={"true"}
                    exact="true"
                    offset={-55}
                  >
                    skip {">>"}
                  </NavLinksH>
                </NavItem>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        
        {/* MAIN VIDEO */}
        {/* <Container>
          <GuideBg>
              <VideoGuide autoPlay muted loop src={VideoManual} type="video/mp4"/>
          </GuideBg>
        </Container> */}

        {/* <BannerContainer>
          <BannerWrap>

          </BannerWrap>
        </BannerContainer> */}

        {/* CONTENT */}
        {/* INFOGRAPHICS */}
        <InfoContainer>
          <InfoWrapper>
            <InfoRow1>
              <Column1>
                <TextWrapper>
                  <Heading>How to use</Heading>
                  <HeadingViolet>gləre</HeadingViolet>
                  <SubtitleMargin>instructions for your beauty device</SubtitleMargin>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={manual1} />
                </ImgWrap>
              </Column2>
            </InfoRow1>
          </InfoWrapper>
        </InfoContainer>

        {/* RING LIGHT */}
        <InfoContainer>
          <InfoWrapper>
            <InfoRow2>
              <Column1>
                <TextWrapper>
                  <HeadingViolet>Shine</HeadingViolet>
                  <Heading>empower your image</Heading>
                  <SubtitleMargin>let our <SubtitleSpan>ring light</SubtitleSpan> shine on you,</SubtitleMargin>
                  <Subtitle>while our <SubtitleSpan>camera</SubtitleSpan> analyzes your facial features and provides a beauty score</Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={manual2} />
                </ImgWrap>
              </Column2>
            </InfoRow2>
          </InfoWrapper>
        </InfoContainer>

        {/* UI */}
        <InfoContainer>
          <InfoWrapper>
            <InfoRow1>
              <Column1>
                <TextWrapper>
                  <HeadingViolet>Data</HeadingViolet>
                  <Heading></Heading>
                  <SubtitleMargin>at the top you'll find your <SubtitleSpan>beauty score</SubtitleSpan>, visualizing how well you're adjusting to the daily trend,</SubtitleMargin>
                  <Subtitle>while at the bottom you'll find a <SubtitleSpan>timer</SubtitleSpan> showing you how much time is left before the trend expires<SubtitleSpan></SubtitleSpan></Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={manual3} />
                </ImgWrap>
              </Column2>
            </InfoRow1>
          </InfoWrapper>
        </InfoContainer>

        {/* MIRROR */}
        <InfoContainer>
          <InfoWrapper>
            <InfoRow2>
              <Column1>
                <TextWrapper>
                  <HeadingViolet>Enhance</HeadingViolet>
                  <Heading>yourself</Heading>
                  <SubtitleMargin><SubtitleSpan>admire</SubtitleSpan> yourself joining the trend,</SubtitleMargin>
                  <Subtitle><SubtitleSpan>modify</SubtitleSpan> yourself to improve your score</Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={manual4} />
                </ImgWrap>
              </Column2>
            </InfoRow2>
          </InfoWrapper>
        </InfoContainer>

        <BtnContainer>
          <BtnWrapper>
            <ManualButton to="/you" spy={"true"} exact="true">
              continue to You.
            </ManualButton>
          </BtnWrapper>
        </BtnContainer>

        <Footer />

      </>
  );
};

export default Manual;
