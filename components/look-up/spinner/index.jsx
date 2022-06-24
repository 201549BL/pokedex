import React from "react";

import styled from "styled-components";

const StyledSpinner = styled.img`
  width: 100%;
  max-height: 80vmin;

  position: fixed;

  object-fit: contain;

  align-self: center;

  margin-left: -50%;

  transition: all 0.2s ease-out;

  overflow: hidden;
  z-index: -1;

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
