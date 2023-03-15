import React from 'react';
import styled from 'styled-components';

const ThesisStatement = styled.span`
  font-family: monospace;
  color: #0000;
  background: linear-gradient(-90deg, #ffffff 5px, #0000 0) 10px 0,
    linear-gradient(#ffffff 0 0) 0 0;
  background-size: calc(29 * 1ch) 200%;
  -webkit-background-clip: padding-box, text;
  background-clip: padding-box, text;
  background-repeat: no-repeat;
  animation: b 0.7s infinite steps(1), t calc(29 * 0.1s) steps(29) forwards;
  font-size: 4em;
  font-weight: 600;

  @keyframes t {
    from {
      background-size: 0 200%;
    }
  }
  @keyframes b {
    50% {
      background-position: 0 -100%, 0 0;
    }
  }
`;
function MainPage() {
  return (
    <div className='Thesis'>
      <ThesisStatement>[Insert Thesis Statemnt Here]</ThesisStatement>
    </div>
  );
}

export default MainPage;
