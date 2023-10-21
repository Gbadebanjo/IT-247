import React from "react";
import styled from "styled-components";
import { FiMoon } from "react-icons/fi";
import DarkImage from "../../image/darkmode.svg";

const Container = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100%;
  height: 10%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  justify-content: space-between;
  align-items: center;

//for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%
    height: 8%
  }
  //for Tablets
  @media only screen and (min-width: 600px) {
    width: 100%
    height: 5%
  }
  //for laptops
  @media only screen and (min-width: 992px) {
    width: 100%
    height: 5%
`;

const Left = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-tems: center;
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  //for Mobiles

  @media only screen and (max-width: 600px) {
    display: none;
  }
  //for Tablets
  @media only screen and (min-width: 600px) {
   display: flex;
  }
  //for laptops
  @media only screen and (min-width: 992px) {
    display: flex;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-center: center;
  justify-content: space-around;
`;

const Logo = styled.h1`
  font-size: 20px;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  //for mobiles
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 20px;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cussor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  @media only screen and (mix-width: 600px) {
    font-size: 15px;
    margin-right: 15px;
    @media only screen and (min-width: 992px) {
      font-size: 20px;
    margin-right: 30px;


`;

const Button = styled.button`
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  boarder: 2px solid white;
  cursor: pointer;
  color: ${(props) => props.theme.colors.bgDefault};
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverColor};
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid darkblue;
  }
  @media only screen and (max-width: 600px) {
    padding: 8px 15px;
  }
  
  }
`;

const StyledFiMoon = styled(FiMoon)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
`;

export const Navbar = ({ mode, setMode }) => {
  return (
    <>
      <Container>
        <Left>
          <Logo>IT Support</Logo>
        </Left>
        <Center>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About us</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Blog</MenuItem>
          </Menu>
        </Center>
        <Right>
          <Button>Call us Now!</Button>
          <StyledFiMoon onClick={() => setMode(!mode)} />
        </Right>
      </Container>
    </>
  );
};
