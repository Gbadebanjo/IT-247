import styled from "styled-components";
import sectionImage1 from "../../image/laptopDark.jpg";

export const Container = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: ${({ Height }) => Height};
  background-image: url(${({ sectionImage }) => sectionImage});
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  background-attachment: fixed;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.bgDefault};
  font-size: 30px;
  font-weight: bold;
  padding-top: 20px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.bgDefault};
  width: 40%;
  font-size: 25px;
  font-weight: lighter;
`;

const InfoSectionTwo = () => {
  return (
    <Container sectionImage={sectionImage1}>
      <Wrapper>
        <Title>Anywhere Workspace!</Title>
        <Description>
          Enable any employee to work from anywhere, on any device, with a
          digital workspace.
        </Description>
        <Description>
          Provide a great experience that increases employee engagement and
          productivity.
        </Description>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionTwo;
