import React from "react";
import styled from "styled-components";
import heroImage from "../../image/hero.png";

const Container = styled.div`
  display: flex;
  height: 90%;
`;

const Left = styled.div`
  background-color: ${(props) => props.theme.colors.bgDefault};
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  background-color: white;
  width: 40%;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
  text-align: center;
`;

const Description = styled.p`
  font-size: 20px;
  color: gray;
  width: 70%;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-weight: bold;
  color: white;
  background-color: darkblue;
  margin-left: 5px;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid darkblue;
  border-radius: 10px;
  background: linear-gradient(to right, aliceblue 50%, darkblue 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: darkblue;
    border: 2px solid blue;
    background-position: left bottom;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 500px;
`;

const Hero = () => {
  return (
    <Container>
      <Left>
        <Title>IT-Management - IT Support and IT-Services for everyone!</Title>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id qui
          corporis neque labore, laborum voluptate eos amet eaque vel doloribus
          natus a maiores magni ea voluptatibus exercitationem totam quia alias.
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
