import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer=styled.div`
    //background: #fafaf8;
    background: #CACAD4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
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

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    background: #CACAD4;
`

export const VideoBgMobile = styled.video`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    background: #CACAD4;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    //color: transparent;
    color: #4a4b5a;
    font-size: 72px;
    font-stretch: expanded;   
    font-weight: 300;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 60px;
        color: #4a4b5a;
    }
    @media screen and (max-width: 555px) {
        font-size: 48px;
        color: #4a4b5a;
    }
`

export const HeroSpan = styled.span`
    //color: transparent;
    color: #814cff;
    font-stretch: expanded;   
    font-weight: 300;
    @media screen and (max-width: 768px) {
        font-size: 60px;
        color: #814cff;
    }
    @media screen and (max-width: 555px) {
        font-size: 48px;
        color: #814cff;
    }
`

export const HeroP=styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward=styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`