import React from "react";
import styled from "styled-components";
import { FiMoon } from "react-icons/fi";

import DarkImage from "../../image/darkmode.svg";
const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${(props) => props.theme.colors.bgTerteriary};
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: darkblue;
  cussor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: gray;
  cussor: pointer;
  &:hover {
    color: darkblue;
  }
`;

const Button = styled.button`
  font-weight: bold;
  background-color: darkblue;
  boarder: 2px solid white;
  cursor: pointer;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: aliceblue;
    color: darkblue;
    border: 2px solid darkblue;
  }
`;

const Image = styled.img`
  width: 30px;
  cursor: pointer;
`;

const DarkMode = styled.button`
DarkImage
`;

const Icons = styled.div`

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
          <Icons>
            <FiMoon />
          </Icons>

          <DarkMode onClick={() => setMode(!mode)}>
            <Image src={DarkImage} />
          </DarkMode>
        </Right>
      </Container>
    </>
  );
};
