import styled from 'styled-components'

export const ShopContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#814cff' : '#010606')};
    z-index: 1;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const ShopWrapper = styled.div`
display: flex;
z-index: 3;
//height: 860px;
height: 430px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 0;
justify-content: center;
`

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    //margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    //margin-bottom: 15px;
    //padding: 0 15px;
    grid-area: col2;
    height:100%;
    //width:100%;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    //padding-bottom: 60px;
`

export const Topline = styled.p`
    //color: #814CFF;
    color: #fff;
    font-size: 24px;
    line-height: 28px;
    font-weight: 100;
    font-stretch: expanded;
    letter-spacing: 1px;
    //text-transform: uppercase;
    text-transform: lowercase;
    margin-bottom: 16px;
`
export const HeadingViolet = styled.h1`
    //margin-bottom: 24px;
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 300;
    font-stretch: expanded;
    color: ${({lightText})=>(lightText ? '#814cff' : '#814cff')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Heading = styled.h1`
    margin-bottom: 64px;
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 300;
    font-stretch: expanded;
    color: ${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    //margin-bottom: 35px;
    font-size: 24px;
    font-stretch: semi-expanded;
    font-weight: 500;    
    line-height: 28px;
    color: ${({darkText}) => (darkText ? '#010606' : "#fff")};
`

export const SubtitleSpan=styled.span`
    color: #814cff;
`

export const BtnWrap=styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 48px;
`

export const CoverWrap = styled.div`
    
`

export const Cover=styled.img`
    
`

export const ImgWrap = styled.div`
    //max-width: 555px;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    //background: #232a34;
`

export const InfoSpan=styled.span`
    color: #814cff;
`