import React from 'react';
import styled from 'styled-components';

const ThesisStatement = styled.span`
  font-family: 'Nunito', sans-serif;
  color: #0000;
  background: linear-gradient(-90deg, #ffffff 5px, #0000 0) 10px 0,
    linear-gradient(#ffffff 0 0) 0 0;
  background-size: calc(443 * 1ch) 200%;
  -webkit-background-clip: padding-box, text;
  background-clip: padding-box, text;
  background-repeat: no-repeat;
  animation: b 0.4s infinite steps(1), t calc(443 * 0.05s) steps(443) forwards;
  font-size: 2.5em;
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
      <ThesisStatement>
        Police brutality results from multiple factors such as inadequate
        training, job stress, and insufficient regulations. Incidents of police
        brutality have led to a loss of trust in the police among the youth.
        Recent events like the killing of George Floyd have made the public
        uprise and rally for a change, this prompted government action,
        resulting in the implementation of new laws and regulations to end
        excessive use of force by the police.
      </ThesisStatement>
    </div>
  );
}

export default MainPage;
