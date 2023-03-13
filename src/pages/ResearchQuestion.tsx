import React from "react";

var isEven = false;

const ResearchQuestion = ({
  question,
  answerParagraph,
  image,
}: {
  question: string;
  answerParagraph: string;
  image: string;
}) => (
  <div>
    <p>{question}</p>
    <img src={image} />
    {answerParagraph}
  </div>
);

export default ResearchQuestion;
