import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  * {
    flex: 1;
    padding-top: 5%;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  .Text {
    align-self: center;
    font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
  }

  .Question {
    font-size: 30px;
  }

  .Answer {
    font-size: 15px;
  }
`;

const Photo = styled.img`
  max-width: 50%;
  padding-left: 10px;
  padding-right: 10px;
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
    <div className='Text'>
      <div className='Question'>
        <p>{question}</p>
      </div>
      <div className='Answer'>
        <p>{answerParagraph}</p>
      </div>
    </div>
    <Photo src={image} />
  </Container>
);

export default ResearchQuestion;
