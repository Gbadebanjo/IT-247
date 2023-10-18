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
import cardImage3 from "../../image/card3.png";
import { TextBanner } from "../textbanner/TextBanner";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Blogs = () => {
  return (
    <>
    <TextBanner title={"Our Blog"} subtitle={"Recent News"} />
    <Container>
      <Card>
        <CardContent padding={"0.5%"}>
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
      <Card>
        <CardContent padding={"0.5%"}>
          <CardImage src={cardImage2} />
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
      <Card>
        <CardContent padding={"0.5%"}>
          <CardImage src={cardImage3} />
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
    </>
  );
};

export default Blogs;
