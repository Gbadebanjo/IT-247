import React from "react";
import styled from "styled-components";
import heroImage from "../../image/hero.png";

const Container = styled.div`
  display: flex;
  height: 90%;

  @media only screen and (max-width: 600px) {
    height: 60%;
  }
  @media only screen and (min-width: 600px) {
    height: 60%;
  }
  @media only screen and (min-width: 992px) {
    height: 80%;
  }
`;

const Left = styled.div`
  background-color: ${(props) => props.theme.colors.bgDefault};
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;

const Right = styled.div`
  background-color: ${(props) => props.theme.colors.bgDefault};
  width: 40%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

  //for mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 28px;
    padding-bottom: 2%;
  }
  @media only screen and (min-width: 600px) {
    width: 85%;
    font-size: 30px;
  }
  @media only screen and (min-width: 992px) {
    width: 85%;
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.textDark};
  margin-buttom: 2%;
  width: 70%;
  //for mobiles
  @media only screen and (max-width: 600px) {
    width: 80%
    text-align: center;
  }
  @media only screen and (min-width: 600px) {
    width: 70%
    margin-top: 2%;
  }
  @media only screen and (min-width: 992px) {
    width: 70%;
    margin-top: 2%;
  } 
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-weight: bold;
  color: ${(props) => props.theme.colors.bgDefault};
  background-color: ${(props) => props.theme.colors.primary};
  margin-left: 5px;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.hoverColor} 50%,
    ${(props) => props.theme.colors.primary} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.hoverColor};
    background-position: left bottom;
    cursor: pointer;
  }
  //for mobiles
  @media only screen and (max-width: 600px) {
    padding: 10px 25px;
  }
  @media only screen and (min-width: 600px) {
    padding: 10px 30px;
  }
  @media only screen and (min-width: 992px) {
    padding: 15px 30px;
  }
`;

const Image = styled.img`
  width: 500px;
  @media only screen and (min-width: 600px) {
    width: 400px;
  }
  @media only screen and (min-width: 992px) {
    width: 500px;
    padding-top: 5%;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Left>
        <Title>IT-Management - IT Support and IT-Services for everyone!</Title>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id qui
          corporis neque labore, laborum voluptate eos amet eaque vel doloribus
          natus a maiores magni ea.
        </Description>
        <ButtonsContainer>
          <Button>About Us</Button>
          <Button>Contact Us</Button>
        </ButtonsContainer>
      </Left>

      <Right>
        <Image src={heroImage} />
      </Right>
    </Container>
  );
};

export default Hero;
