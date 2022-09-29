import React from "react";
import ImgCard1 from '../../images/community/community-1.png'
import ImgCard2 from '../../images/community/community-2.png'
import ImgCard3 from '../../images/community/community-3.png'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesCopy,
  ServicesH1Span,
  ServicesSpan
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="community">
      <ServicesH1><ServicesH1Span>Our</ServicesH1Span> Community</ServicesH1>
      <ServicesCopy>be part of our community,</ServicesCopy>
      <ServicesCopy>reach the top of freyə's <ServicesSpan>beauty score</ServicesSpan></ServicesCopy>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={ImgCard1} />
          {/*<ServicesH2>100%</ServicesH2>
          <ServicesP>
            beauty score
          </ServicesP>*/}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={ImgCard2} />
          {/*<ServicesH2>100%</ServicesH2>
          <ServicesP>
            beauty score
          </ServicesP>*/}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={ImgCard3} />
          {/*<ServicesH2>100%</ServicesH2>
          <ServicesP>
            beauty score
          </ServicesP>*/}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;