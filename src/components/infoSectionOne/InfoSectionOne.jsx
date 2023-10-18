import styled from "styled-components";
import sectionOneImage from "../../image/section1.png";

const Container = styled.div`
  padding: 10px 20px;
  margin-top: 4%;
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

  //for Mobiles
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 20px;
  }
  @media only screen and (min-width: 600px) {
    text-align: center;
  }
  //for Mobiles
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
  }
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

const InfoSectionOne = () => {
  return (
    <Container>
      <Wrapper>
        {" "}
        <Right>
          <Image src={sectionOneImage} />
        </Right>
        <Left>
          <Title>Why Choose Us?</Title>
          <Header>IT lifecycle management all in one place</Header>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            repudiandae at quo obcaecati, ex blanditiis suscipit ipsa aperiam
            perferendis, modi iste unde numquam! Reprehenderit, non sapiente
            nihil veniam culpa provident?
          </Description>
          <List>
            <ListItem>Global IT sourcing</ListItem>
            <ListItem>Transparent advice</ListItem>
            <ListItem>Software refuelling</ListItem>
            <ListItem>Nationwide service network</ListItem>
            <ListItem>International deliverables</ListItem>
            <ListItem>Volume bundling</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionOne;
