import styled from "styled-components";
import sectionImage4 from "../../image/bg2.jpg";
import { Container } from "../infoSectionTwo/InfoSectionTwo";

const Card = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 992px) {
    flex-direction: row;
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
    <Container id="about" sectionImage={sectionImage4} Height={"300px"}>
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
