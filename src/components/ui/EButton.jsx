import React from 'react';
import styled from 'styled-components';

const EButton = () => {
  return (
    <StyledWrapper>
      <button onClick={() => window.open("https://wa.me/9140048553", "_blank")}
>Connect on WhatsApp</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    background: #fbca1f;
    font-family: inherit;
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em;
    cursor: pointer;
  }

  button:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }

  button:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }`;

export default EButton;

