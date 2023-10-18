import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  background-color: black;
  width: 100%;
  margin-top: 5%;
  height: 40%;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 2%;
`;

const Description = styled.div`
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  width: 30%;
`;

const Menu = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li`
margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cussor: pointer;
  &:hover {
    color: white;
  }
`;

const CopyRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10%;
background-color: grey;
color: white;
font-size: 20px;`

const MenuItems = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  flex-direction: column;
`;
const Footer = () => {
  return (
    <>
    <Container>
      <Description>
        <Title>About Us </Title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        magnam reprehenderit perferendis esse, placeat tempore rerum officiis id
        voluptatum magni perspiciatis, aliquam nostrum voluptatibus explicabo
        facilis recusandae, eum voluptates itaque?
      </Description>
      <MenuItems>
        <Title>Our Services</Title>
        <Menu>
          <MenuItem href="#">Training Courses</MenuItem>
          <MenuItem href="#">Service Desk</MenuItem>
          <MenuItem href="#">Proactive Services</MenuItem>
          <MenuItem href="#">User Support</MenuItem>
        </Menu>
      </MenuItems>
      <MenuItems>
        <Title>Our Policies</Title>
        <Menu>
          <MenuItem href="#">Privacy Policy</MenuItem>
          <MenuItem href="#">Data Policy</MenuItem>
        </Menu>
      </MenuItems>
    </Container>
    <CopyRight>
      &copy; 2023 IT 24/7 - All Rights Reserved.
    </CopyRight>
    </>
  );
};

export default Footer;
