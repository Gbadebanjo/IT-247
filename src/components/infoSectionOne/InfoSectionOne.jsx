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
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary};
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.textDark};
`;

const Right = styled.div`
  width: 40%;
`;

const Left = styled.div`
  width: 60%;
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
  padding: 20px;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
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
