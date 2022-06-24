import React, { useRef, useEffect, useMemo } from "react";
import styled from "styled-components";

const StyledViewport = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;

  background: #f9f9f9;

  align-self: center;
  height: 80vh;

  flex-basis: 30%;

  position: relative;

  border-radius: 5px;
  border: 5px #cfe0dc solid;

  .inner {
    height: inherit;
    overflow: hidden;

    border: 3px #49545a solid;

    img {
      width: 100%;
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
    }

    .padding {
      height: 50%;
    }
  }

  .indicator {
    background: inherit;
    height: 2rem;
    width: 2rem;

    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%) translateX(90%);
    clip-path: polygon(0 0, 50% 50%, 0 100%);
  }
`;
// eslint-disable-next-line react/display-name
const Viewport = React.forwardRef((props, ref) => {
  return (
    <StyledViewport>
      <div className="inner" ref={ref}>
        <div className="padding"></div>
        {props.children}
        <div className="padding"></div>
      </div>
      <div className="indicator"></div>
    </StyledViewport>
  );
});

export default Viewport;
