import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PButton = () => {
    const navigate = useNavigate();
  return (
    <StyledWrapper>
      <button onClick={() => navigate('/vault')}>
        <span className="text">Project</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    align-items: center;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-size: 18px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
  }

  button:active,
  button:hover {
    outline: 0;
  }

  button span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  button:hover span {
    background: none;
  }

  button:active {
    transform: scale(0.9);
  }`;

export default PButton;
