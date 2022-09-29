import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    //background: ${({lightBg}) => (lightBg ? '#9292a6' : '#e1e9ff')};
    background: ${({lightBg}) => (lightBg ? '#cacad4' : '#e1e9ff')};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
display: flex;
z-index: 1;
height: 800px;
width: 100%;
max-width: 1200px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0;
    max-width: 600px;
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
    margin-bottom: 24px;
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 300;
    font-stretch: expanded;
    color: ${({lightText})=>(lightText ? '#e1e9ff' : '#4a4b5a')};
    //color: ${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};
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
    color: ${({darkText}) => (darkText ? '#4a4b5a' : "#e1e9ff")};
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