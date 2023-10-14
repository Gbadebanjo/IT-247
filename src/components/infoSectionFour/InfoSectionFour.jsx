import styled from "styled-components";
import sectionImage4 from "../../image/bg2.jpg";
import { Container } from "../infoSectionTwo/InfoSectionTwo";

const Card = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;; 
`;

const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

const Number = styled.div`
  font-weight: bold;
  font-size: 50px;
  color: ${(props) => props.theme.colors.text};
`;

const SubTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

const InfoSectionFour = () => {
  return (
    <Container sectionImage={sectionImage4} Height={"300px"}>
      <Card>
        <CardContent>
          <Number>10,000+</Number>
          <SubTitle>Projects</SubTitle>
        </CardContent>
        <CardContent>
          <Number>9,000+</Number>
          <SubTitle>Number of Subscribers</SubTitle>
        </CardContent>
        <CardContent>
          <Number>6K+</Number>
          <SubTitle>5 Stars rating</SubTitle>
        </CardContent>
      </Card>
    </Container>
  );
};

export default InfoSectionFour;
