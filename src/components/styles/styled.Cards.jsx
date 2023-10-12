import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  margin: 10px 10px;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  background: linear-gradient(to right, ${(props) => props.theme.colors.bgLight} 50%, ${(props) => props.theme.colors.bgDefault} 50%);
  background-size: 200% 100% ;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.text};
    background-position: left bottom;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  
`;

export const Description = styled.div`
color: ${(props) => props.theme.colors.textDark};
font-size: 15px:
text-align: center;
`;

export const Button = styled.a`
  color: red;
  font-weight: bold;
  margin-top: 30px;
  text-decoration: none;
  cursor: pointer;
`;
