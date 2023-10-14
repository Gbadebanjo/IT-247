import styled from "styled-components";
import {
  Button,
  Card,
  CardContent,
  CardImage,
  CardTitle,
  Description,
} from "../styles/styled.Cards";
import cardImage1 from "../../image/card1.jpg";
import cardImage2 from "../../image/card2.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Blogs = () => {
  return (
    <Container>
      <Card>
        <CardContent>
          <CardImage src={cardImage1} />
          <CardTitle>Title</CardTitle>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
            omnis dolor, molestias adipisci consectetur, beatae velit nihil
            earum voluptates quibusdam itaque labore sapiente repellat amet?
            Odit laborum similique nesciunt possimus.
          </Description>
          <Button>Read more...</Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Blogs;
