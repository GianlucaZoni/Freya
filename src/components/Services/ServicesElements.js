import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //background: #4a4b5a;
    //background: #4a4b5a;
    background: #cacad4;
    @media screen and (max-width: 768px) {
        height: 1100px;
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-evenly;
    grid-gap: 16px;
    padding: 0 50px;
    margin-top: 96px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        //padding: 0 20px;
        margin-top: 48px;
    }
`

export const ServicesCard = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 25px;
    max-height: 500px;
    //padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin-left: 64px;
    margin-right: 64px;
    &:hover {
        transform: scale(1.3);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px) {
        margin-left: 24px;
        margin-right: 24px;
    }
    @media screen and (max-width: 880px) {
        
    }
`

export const ServicesIcon = styled.img`
    height: 340px;
    width: 340px;
    border-radius:25px;
    //margin-bottom: 10px;
    @media screen and (max-width: 1000px) {
        height: 200px;
        width: 200px;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        //padding: 0 20px;
    }
`

export const ServicesH1 = styled.h1`
    font-size: 4rem;
    //color: #fff;
    //color: #e1e9ff;
    color: #4a4b5a;
    margin: -32px auto 24px auto;
    /* margin-bottom: 24px;
    margin-top: -32px; */
    //font-size: 72px;
    line-height: 1.1;
    font-weight: 300;
    font-stretch: expanded;
    
    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`

export const ServicesCopy = styled.p`
    //max-width: 440px;
    //margin-bottom: 35px;
    font-size: 24px;
    line-height: 28px;
    font-stretch: semi-expanded;
    font-weight: 500;
    //color: #e1e9ff;
    color: #4a4b5a;
    @media screen and (max-width: 480px) {
        //font-size: 2rem;
        width: 90%;
        text-align: center;
    }
`

export const ServicesH1Span = styled.span`
    color: #814cff;
    font-weight: 300;
    font-stretch: expanded;
`
export const ServicesSpan = styled.span`
    color: #814cff;
    font-stretch: semi-expanded;
    font-weight: 500;
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    //margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`