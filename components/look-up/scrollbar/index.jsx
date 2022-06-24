import React, { useRef, useCallback, forwardRef } from "react";
import styled from "styled-components";

const StyledScrollbar = styled.div`
  height: 100%;
  width: 50px;
  position: absolute;
  right: 0;
  top: 0;

  padding: 1rem 0;

  .container {
    position: relative;

    display: flex;

    height: 100%;
    width: 100%;

    justify-content: center;
  }

  .thumb {
    position: absolute;

    height: 50px;
    width: 30px;

    background-color: #010000;

    border: 5px solid #bfa442;
  }

  .line {
    height: 100%;
    width: 10px;
    background: #bfa442;
    margin: 0 auto;
  }
`;

// eslint-disable-next-line react/display-name
const Scrollbar = forwardRef((props, ref) => {
  return (
    <StyledScrollbar>
      <div className="container">
        <div className="thumb" ref={ref}></div>
        <div className="line"></div>
      </div>
    </StyledScrollbar>
  );
});

export default Scrollbar;
