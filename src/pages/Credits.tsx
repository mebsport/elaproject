import React from 'react';
import styled from 'styled-components';

const Sources = styled.div`
  * {
    font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia,
      serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 23px;
  }
`;

const SourcesCited = styled.p`
  text-align: center;
`;

const SourcesCitedBody = styled.p`
  text-align: left;
`;

function Credits() {
  return (
    <Sources>
      <div className='SourcesCited'>
        <SourcesCited>Sources Cited</SourcesCited>
        <SourcesCitedBody></SourcesCitedBody>
      </div>
      <div className='ImagesCited'></div>
    </Sources>
  );
}

export default Credits;
