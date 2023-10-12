import React from "react";
import { TextBanner } from "../textbanner/TextBanner";
import {
  Card,
  CardContent,
  CardTitle,
  Description,
  Button,
} from "../styles/styled.Cards";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const InfoBoxes = () => {
  return (
    <div>
      <TextBanner
        title={"What we provide"}
        subtitle={"our services"}
      ></TextBanner>
      <Container>
        <Card>
          <CardContent>
            <CardTitle>Training Plans</CardTitle>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ipsa quia voluptas facilis ipsum, magni, explicabo ducimus porro laborum quidem maiores officiis repudiandae repellendus deleniti culpa dolorem reprehenderit veritatis non.</Description>
            <Button href="#">Read more...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Data Services</CardTitle>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ipsa quia voluptas facilis ipsum, magni, explicabo ducimus porro laborum quidem maiores officiis repudiandae repellendus deleniti culpa dolorem reprehenderit veritatis non.</Description>
            <Button href="#">Read more...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Call Plans</CardTitle>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ipsa quia voluptas facilis ipsum, magni, explicabo ducimus porro laborum quidem maiores officiis repudiandae repellendus deleniti culpa dolorem reprehenderit veritatis non.</Description>
            <Button href="#">Read more...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Customer Support</CardTitle>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ipsa quia voluptas facilis ipsum, magni, explicabo ducimus porro laborum quidem maiores officiis repudiandae repellendus deleniti culpa dolorem reprehenderit veritatis non.</Description>
            <Button href="#">Read more...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Proactive Services</CardTitle>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ipsa quia voluptas facilis ipsum, magni, explicabo ducimus porro laborum quidem maiores officiis repudiandae repellendus deleniti culpa dolorem reprehenderit veritatis non.</Description>
            <Button href="#">Read more...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>24/7 Services</CardTitle>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ipsa quia voluptas facilis ipsum, magni, explicabo ducimus porro laborum quidem maiores officiis repudiandae repellendus deleniti culpa dolorem reprehenderit veritatis non.</Description>
            <Button href="#">Read more...</Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
