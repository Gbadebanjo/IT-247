import React from "react";
import { TextBanner } from "../textbanner/TextBanner";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const InfoBoxes = () => {
  return (
    <div>
      <TextBanner
        title={"What we provide"}
        subtitle={"our services"}
      ></TextBanner>
      <Container></Container>
    </div>
  );
};
