import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const ShopContainer = styled.div`
    background: #cacad4;
    z-index: 1;
    position: relative;
    height: 800px;

    display: flex;
    flex-direction:column;
    justify-content:center;
   

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const ShopWrapper = styled.div`
display: flex;
z-index: 999;
//height: 860px;
height: 400px;
width: 100%;
max-width: 1200px;
margin-right: auto;
margin-left: auto;
justify-content: center;

@media screen and (max-width: 768px) {
    margin: -25px 30px 25px 120px;
    width: 350px;
}

@media screen and (max-width: 480px) {
    margin: -25px 30px 25px 30px;
    width: 350px;
}
`

export const ShopWrapperMaledetto = styled.div`
    display: flex;
z-index: 999;
//height: 860px;
height: 400px;
width: 100%;
max-width: 1200px;
margin-right: auto;
margin-left: auto;
justify-content: center;

@media screen and (max-width: 768px) {
    margin: 150px 30px 25px 120px;
    width: 350px;
}

@media screen and (max-width: 480px) {
    margin: 150px 30px 0px 30px;
    width: 350px;
}
`

export const Row = styled.div`
    display: grid;
    //grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1';
    }
`

export const Column1 = styled.div`
    //margin-bottom: 15px;
    //padding: 0px 15px;
    grid-area: col1;
    //margin-left: 24px;
    max-width: 600px;

    @media screen and (max-width: 1100px) {
        width: 400px;
    }

    @media screen and (max-width: 888px) {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        //height: 400px;
    }
`

export const Column2 = styled.div`
    //margin-bottom: 15px;
    //padding: 0 15px;
    grid-area: col2;
    //height:100%;
    width: 600px;
    //width:100%;
    @media screen and (max-width: 1100px) {
        width: 400px;
    }

    @media screen and (max-width: 888px) {
        width: 100%;
    }
`

export const TextWrapper = styled.div`
    max-width: 700px;
    padding-top: 0;
    //padding-bottom: 60px;
    @media screen and (max-width:768) {
        //margin-top: 32px;
        max-width: 375px;
        margin-top: -250px;
    }
`

export const TextWrapperSucky = styled.div`
    max-width: 700px;
    padding-top: 0;
    margin-top: -64px;
    //padding-bottom: 60px;
    @media screen and (max-width:768) {
        
    }
`

export const Topline = styled.p`
    color: #e1e9ff;
    font-size: 24px;
    line-height: 28px;
    font-weight: 100;
    font-stretch: expanded;
    letter-spacing: 1px;

    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 48px;
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 300;
    font-stretch: expanded;
    //color: #cacad4;
    color: #e1e9ff;
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
    color: #e1e9ff;
`

export const SubtitleSpan=styled.span`
    color: #814cff;
`

export const BtnWrap=styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 48px;
`
export const ImgWrap = styled.div`
    //max-width: 555px;
    /* width: 100%;
    height: 100%;
    overflow: hidden; */
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

export const Img = styled.img`
    width: 100%;
    height: 100%;
    boreder-radius: none;
    --o-object-fit: cover;
    object-fit: cover;
    margin: 0 auto;
    background: #CACAD4;
    z-index: 2;

    @media screen and (min-width: 1728px) {
        --o-object-fit: contain;
        object-fit: contain;
    }

    @media screen and (max-width: 768px) {
        object-position: -300px 0px;
    }

    @media screen and (max-width: 390px) {
        //object-position: -25px 0px;
        object-position: -300px 0px;
    }
`

export const InfoSpan=styled.span`
    color: #814cff;
`

//
//  BUTTONS
//
export const ButtonDiaphanous = styled(LinkS)`
    border-radius: 50px;
    background: #814cff;
    white-space: nowrap;
    color: #e1e9ff;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-stretch: expanded;
    font-weight: 300;
    font-size: 18px;
    padding-left: 84px;
    padding-right: 84px;
    margin-right: 32px;
    /* border-style: solid;
    border-color: #e1e9ff;
    border-width: 1px; */
    &:hover {
        transition: all 0.2s ease-in-out;
        /* background: #e1e9ff;
        color: #814cff; */
        background: #9292a6;
        color:#e1e9ff;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        //border-color: #814cff;
    }

    @media screen and (max-width: 650px){
        padding-left: 48px;
        padding-right: 48px;
        margin-right: 30px;       
    }
`

export const ButtonGrayR = styled(LinkR)`
    border-radius: 50px;
    background: #e1e9ff;
    white-space: nowrap;
    color: #814cff;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-stretch: expanded;
    font-weight: 300;
    font-sixe: 18px;
    padding: 8px 64px 8px 64px;
    /* border-style: solid;
    border-color: ${({dark})=>(dark ? '#e1e9ff':'#814cff')};
    border-width: 1px; */
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #9292a6;
        color:#e1e9ff;
        /* border-color: ${({dark})=>(dark ? '#4a4b5a':'#e1e9ff')}; */
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    @media screen and (max-width: 650px){
        padding-left: 32px;
        padding-right: 32px;
        margin-right: 15px;        
    }
`

export const ButtonGrayS = styled(LinkS)`
    border-radius: 50px;
    background: #e1e9ff;
    white-space: nowrap;
    color: #814cff;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-stretch: expanded;
    font-weight: 300;
    font-sixe: 18px;
    padding: 8px 64px 8px 64px;
    /* border-style: solid;
    border-color: ${({dark})=>(dark ? '#e1e9ff':'#814cff')};
    border-width: 1px; */
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #9292a6;
        color:#e1e9ff;
        /* border-color: ${({dark})=>(dark ? '#4a4b5a':'#e1e9ff')}; */
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    @media screen and (max-width: 650px){
        padding-left: 32px;
        padding-right: 32px;
        margin-right: 15px;       
    }
`

export const ShopContainerDark = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //background: #4a4b5a;
    background: #cacad4;
    @media screen and (max-width: 768px) {
        height: 1600px;
    }
    @media screen and (max-width: 480px) {
        height: 1600px;
    }
`

export const ProdWrapper = styled.div`
    max-width: 1200px;
    //margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    //grid-gap: -400px;
    //padding: 0;
    //margin: 0px -64px;
    width: 100%
    
    @media screen and (max-width: 1000px) {
        //grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        //padding: 0 20px;
        //margin-top: 48px;
        //width: 100%
    }
`

export const ProdCard = styled.div`
    //background: #cacad4;
    background: #e1e9ff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius:25px;
    height: 500px;
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
        height: 350px;
        /* margin-left: 24px;
        margin-right: 24px; */
    }
    @media screen and (max-width: 768px) {
        margin: 50px;
    }
`

export const ProdImg = styled.img`
    height: 300px;
    width: 300px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    //margin-bottom: 10px;
    @media screen and (max-width: 1000px) {
        height: 200px;
        width: 200px;
    }
    @media screen and (max-width: 880px) {
        grid-template-columns: 1fr;
        //padding: 0 20px;
    }
`

export const ProdName = styled.h2`
    font-stretch: semi-expanded;
    font-weight: 500;
    color: #4a4b5a;
    font-size: 24px;

    @media screen and (max-width: 1000px) {
        font-size: 20px
    }
`

export const ProdBtn = styled(LinkS)`
    border-radius: 50px;
    background: #814cff;
    white-space: nowrap;
    color: #e1e9ff;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    font-stretch: expanded;
    font-weight: 300;
    font-size: 18px;
    padding: 10px 96px;
    margin-bottom: 24px;
    /* border-style: solid;
    border-color: #e1e9ff;
    border-width: 1px; */
    &:hover {
        transition: all 0.5s ease-in-out;
        background: #9292a6;
        color:#e1e9ff;
        /* background: #9292a6;
        color:#e1e9ff; */
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        //border-color: #814cff;
    }

    @media screen and (max-width: 1000px) {
        padding: 10px 64px;
    }

    @media screen and (max-width: 400px){
        padding-left: 64px;
        padding-right: 64px;     
    }
`