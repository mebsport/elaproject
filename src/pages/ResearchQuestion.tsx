import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  * {
    flex: 1;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

const ResearchQuestion = ({
  question,
  answerParagraph,
  image,
}: {
  question: string;
  answerParagraph: string;
  image: string;
}) => (
  <Container>
    <p>{question}</p>
    <p>{answerParagraph}</p>
    <img src={image} />
  </Container>
);

export default ResearchQuestion;
