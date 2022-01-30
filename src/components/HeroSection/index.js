import React, { useState } from "react";
import Video from "../../videos/herovideo.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroSpan
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1><HeroSpan>(re)</HeroSpan>making humans</HeroH1><HeroH1><HeroSpan>in Our image</HeroSpan></HeroH1>
        {/*<HeroP>freya paragraph</HeroP>*/}
        {/*<HeroBtnWrapper>
          <Button
            to="you"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>*/}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
