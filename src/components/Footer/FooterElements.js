import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer=styled.footer`
    //background-color: #101522;
    //background-color: #9292a6;
    background-color: #CACAD4;
    //border-top: 2px solid #e1e9ff;
    //border-top: 2px solid #4a4b5a;
    border-top: 2px solid #9292a6;
`

export const FooterWrap = styled.div`
    //padding: 48px 24px;
    //padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1248px;
    margin: 0 auto;
`

// export const FooterLinksContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     @media screen and (max-width: 820px) {
//         padding-top: 32px;
//     }
// `

// export const FooterLinksWrapper = styled.div`
//     display: flex;
//     @media screen and (max-width: 820px) {
//         flex-direction: column;
//     }
// `

// export const FooterLinksItems = styled.div`
//     display: flex;
//     flex-direction: column;
//     //align-items: flex-start;
//     align-items: center;
//     margin: 16px;
//     text-align: left;
//     width: 160px;
//     box-sizing: border-box;
//     color: #fff;
//     @media screen and (max-width: 420px) {
//         margin: 0;
//         padding: 10px;
//         width: 100%;
//     }
// `

// export const FooterLinkTitle = styled.h1`
//     font-size: 14px;
//     margin-bottom: 16px;
// `

// export const FooterLink = styled(Link)`
//     color: #fff;
//     text-decoration: none;
//     margin-bottom: 0.5rem;
//     font-size: 14px;
//     &:hover {
//         color: #814CFF;
//         transition: 0.3s ease-out;
//     }
// `

export const SocialMedia = styled.section`
    max-width: 1200px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    //margin: 100px auto 0 auto;
    margin: 15px auto 10px auto;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #4a4b5a;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-stretch: semi-expanded;
  font-weight: 500;

  @media screen and (max-width: 768px) {
      margin-bottom: 10px;
  }
`

export const WebsiteRights = styled.p`
    color: #4a4b5a;
    margin-bottom: 8px;
    font-size:1rem;
    font-stretch: expanded;
  font-weight: 100;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    //width: 240px;
`

export const SocialIconLink = styled.a`
    color: #4a4b5a;
    font-size: 24px;
    padding-left: 12px;
`