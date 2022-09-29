import React from "react";
//import { ButtonDiaphanous, ButtonDiaphanousInv, ButtonGray } from "../ButtonElements";
import {
  ShopContainer,
  ShopContainerDark,
  ShopWrapper,
  Row,
  Column1,
  Column2,
  TextWrapper,
  TextWrapperSucky,
  Topline,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  SubtitleSpan, ButtonDiaphanous, ButtonGrayR,ButtonGrayS,
  ProdWrapper,
  ProdCard,
  ProdImg,
  ProdName,
  ProdBtn,
  ShopWrapperMaledetto
} from "./ShopElements";
import imgShop from '../../images/shop/shop.jpg'
// import imgShop1 from '../../images/shop/shop1.png'
// import imgShop2 from '../../images/shop/shop2.png'
import prod1 from '../../images/shop/product1.jpg'
import prod2 from '../../images/shop/product2.jpg'
import prod3 from '../../images/shop/product3.jpg'
import prod4 from '../../images/shop/product4.jpg'

const ShopSection = () => {
  return (
    <>
      <ShopContainer id='shop'>
        {/*<CoverWrap>
          <Cover img={img} alt={alt}/>            
        </CoverWrap>*/}
        <ImgWrap>
            <Img src={imgShop}/>
        </ImgWrap>
        <ShopWrapper>
          <Row>
            <Column1>
              <TextWrapper>
                <Heading>Shop</Heading>
                <Topline>gləre</Topline>
                <Subtitle>our smart mirror will help you follow the daily beauty trend</Subtitle>
                <BtnWrap>
                  <ButtonDiaphanous>buy</ButtonDiaphanous>
                  <ButtonGrayR to="/manual" 
                  smooth={'true'}
                  duration={500}
                  spy
                  exact="true"
                  offset={-55}
                  >more info</ButtonGrayR>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              
            </Column2>
          </Row>
        </ShopWrapper>

        {/* <ImgWrap>
            <Img src={imgShop2}/>
        </ImgWrap> */}

        <ShopWrapperMaledetto>
          <Row>
            <Column1>
              <TextWrapperSucky>
                <Topline>beauty products</Topline>
                <Subtitle>buy our latest products to achieve the best look</Subtitle>
                <BtnWrap>
                  <ButtonDiaphanous>buy</ButtonDiaphanous>
                  <ButtonGrayS to="products" 
                  smooth={'true'}
                  duration={500}
                  spy={'true'}
                  exact="true"
                  offset={-45}
                  >discover</ButtonGrayS>
                </BtnWrap>
              </TextWrapperSucky>
            </Column1>
            <Column2>
              
            </Column2>
          </Row>
        </ShopWrapperMaledetto>
      </ShopContainer>

      <ShopContainerDark id="products">
        <ProdWrapper>
          {/* <ProdCard>
            <ProdImg src={prod1} alt={prod1}/>
            <ProdName>beauty mirror</ProdName>
            <ProdBtn>buy</ProdBtn>
          </ProdCard> */}
          <ProdCard>
            <ProdImg src={prod2} alt={prod2}/>
            <ProdName>beauty pearls</ProdName>
            <ProdBtn>buy</ProdBtn>
          </ProdCard>
          <ProdCard>
            <ProdImg src={prod3} alt={prod3}/>
            <ProdName>beauty scissors</ProdName>
            <ProdBtn>buy</ProdBtn>
          </ProdCard>
          <ProdCard>
            <ProdImg src={prod4} alt={prod4}/>
            <ProdName>beauty syringe</ProdName>
            <ProdBtn>buy</ProdBtn>
          </ProdCard>
        </ProdWrapper>
      </ShopContainerDark>
    </>
  );
};

export default ShopSection;