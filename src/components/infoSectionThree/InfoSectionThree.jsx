import React from "react";
import styled from "styled-components";
import sectionThreeImage from "../../image/section3.png";

const Container = styled.div`
  padding: 10px 20px;
  margin-top: 6%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0px 140px;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    margin: 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 0px;
  }
  //for Mobiles
  @media only screen and (min-width: 992px) {
    margin: 0px 140px;
  }
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary};

  //for Mobiles
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 20px;
  }
  @media only screen and (min-width: 600px) {
    text-align: center;
    font-size: 20px;
  }
  //for Mobiles
  @media only screen and (min-width: 992px) {
    text-align: left;
    font-size: 30px;
  }
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  padding-bottom: 10px;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 20px;
  }
  @media only screen and (min-width: 600px) {
    text-align: center;
  }
  @media only screen and (min-width: 992px) {
    text-align: left;
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.textDark};
  //for Mobiles
  @media only screen and (max-width: 600px) {
    font-weight: bold;
    text-align: center;
  }
  @media only screen and (min-width: 600px) {
    font-weight: bold;
    text-align: center;
    padding-right: 5%;
  }
  @media only screen and (min-width: 992px) {
    font-weight: lighter;
    text-align: left;
    font-size: 25px;
    padding-right: 0%;
  }
`;

const Right = styled.div`
  width: 40%;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    width: 50%;
    margin: 0% 5% 0% 0%;
  }
  @media only screen and (min-width: 992px) {
    width: 40%;
`;

const Left = styled.div`
  width: 60%;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 55%;
  }
  //for Mobiles
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const List = styled.div`
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid white;
  border-left: 5px solid ${(props) => props.theme.colors.primary};
  min-width: 200px;
  text-align: left;
  margin: 5px;
  padding: 15px;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    margin: 2px;
    padding: 10px;
  }
  @media only screen and (min-width: 600px) {
    margin: 5px;
    padding: 10px;
  }
  @media only screen and (min-width: 992px) {
    margin: 5px;
    padding: 15px;
  }
`;

const InfoSectionThree = () => {
  return (
    <Container>
      <Wrapper>
        {" "}
        <Left>
          <Title>WHY TRUST US?</Title>
          <Header>
            Sofware Asset Management (SAM) / Software Lifecycle Management
          </Header>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            repudiandae at quo obcaecati, ex blanditiis suscipit ipsa aperiam
            perferendis, modi iste unde numquam! Reprehenderit, non sapiente
            nihil veniam culpa provident?
          </Description>
          <List>
            <ListItem>Connection to shop systems</ListItem>
            <ListItem>Volume bundling</ListItem>
            <ListItem>End-of-life management</ListItem>
            <ListItem>Certified data deletion</ListItem>
            <ListItem>Returns programme</ListItem>
            <ListItem>Guarantee processing</ListItem>
          </List>
        </Left>
        <Right>
          <Image src={sectionThreeImage} />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionThree;
