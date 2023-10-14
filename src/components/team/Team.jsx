import styled from "styled-components";
import avatarImage1 from "../../image/staff1.jpg";
import avatarImage2 from "../../image/staff2.jpg";
import avatarImage3 from "../../image/staff3.jpg";
import avatarImage4 from "../../image/staff4.jpg";
import { TextBanner } from "../textbanner/TextBanner";

const Container = styled.div`
  padding: 5%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TeamCard = styled.div`
  height: 350px;
  width: 280px;
  display: flex;
  margin: 1%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
`;

const CardImage = styled.img`
  height: 315px;
  width: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemeberName = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

const TeamPosition = styled.div`
  color: ${(props) => props.theme.colors.textDark};
`;

const Team = () => {
  return (
    <Container>
        <TextBanner title={"O Union"} subtitle={"Our Team"} />
      <Wrapper>
        <TeamCard>
          <CardImage src={avatarImage1} />
          <TextWrapper>
            <MemeberName>Member Name</MemeberName>
            <TeamPosition>Team Position</TeamPosition>
          </TextWrapper>
        </TeamCard>
        <TeamCard>
          <CardImage src={avatarImage2} />
          <TextWrapper>
            <MemeberName>Member Name</MemeberName>
            <TeamPosition>Team Position</TeamPosition>
          </TextWrapper>
        </TeamCard>
        <TeamCard>
          <CardImage src={avatarImage3} />
          <TextWrapper>
            <MemeberName>Member Name</MemeberName>
            <TeamPosition>Team Position</TeamPosition>
          </TextWrapper>
        </TeamCard>
        <TeamCard>
          <CardImage src={avatarImage4} />
          <TextWrapper>
            <MemeberName>Member Name</MemeberName>
            <TeamPosition>Team Position</TeamPosition>
          </TextWrapper>
        </TeamCard>
      </Wrapper>
    </Container>
  );
};

export default Team;
