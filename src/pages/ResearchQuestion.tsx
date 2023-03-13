import React from 'react';

var isEven = false;

const ResearchQuestion = ({
  question,
  answerParagraph,
  image,
  even,
}: {
  question: string;
  answerParagraph: string;
  image: File;
  even: boolean;
}) => (
    if(even){
        return(<div></div>)
    }
    else{
        return(<div></div>)
    }
);

export default ResearchQuestion;
