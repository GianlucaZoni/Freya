import React from "react";
import {
  Container,
  Nav,
  NavbarContainer,
  NavLogo,
  NavImg,
  NavMenu,
  NavItem,
  NavLinksH,
  Bg,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormSpan,
  FormP,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  ImgBg,
  SigninWrapper,
  SigninRow,
  Column1,
  Column2,
  FormDiv,
  SignInButton,
} from "./SigninElements";
import SignInBg from "../../images/signinbg.jpg";
import Logo from "../../images/logo.png";

const SignIn = () => {
  return (
    <>
      <Container>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavImg src={Logo} alt={"freyə"} />
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinksH
                  to="/signin"
                  smooth={"true"}
                  duration={500}
                  spy={"true"}
                  exact="true"
                  offset={-55}
                >
                  you.
                </NavLinksH>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>

        <Bg>
          <ImgBg src={SignInBg} />
        </Bg>

        <SigninWrapper>
          <SigninRow>
            <Column1>
              <FormWrap>
                <FormContent>
                  <Form>
                    <FormH1>
                      Sign<FormSpan>In</FormSpan>
                    </FormH1>
                    <FormP>
                      link your gləre by entering the code from the instructions
                      card inside the box
                    </FormP>
                    {/* <FormLabel htmlFor='for'>Email</FormLabel>
                                    <FormInput type='email' required /> */}
                    <FormDiv>
                      <FormLabel htmlFor="for">link code:</FormLabel>
                      <FormInput type="password" required />
                    </FormDiv>
                    {/* <FormButton type='submit'>Continue</FormButton> */}
                    {/* <Text>Forgot password</Text> */}
                    <SignInButton
                      to="/manual"
                      spy={"true"}
                      exact="true"
                    >
                      sign in
                    </SignInButton>
                  </Form>
                  
                </FormContent>
                
              </FormWrap>
            </Column1>
            <Column2></Column2>
          </SigninRow>
        </SigninWrapper>
      </Container>
    </>
  );
};

export default SignIn;
