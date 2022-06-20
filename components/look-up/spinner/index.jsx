import React from "react";

import styled, { keyframes } from "styled-components";

const StyledSpinner = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;

  align-self: center;

  margin-left: -50%;

  transition: all 0.2s ease-out;

  /* position: absolute; */

  filter: brightness(0.9) invert(0.1) hue-rotate(200deg) saturate(200%);

  padding: 1rem 0;
`;

const Spinner = ({ rotation }) => {
  return (
    <StyledSpinner
      src={"/ball.png"}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

export default Spinner;
