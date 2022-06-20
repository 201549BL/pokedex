import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const StyledViewport = styled.div`
  position: absolute;
  right: 0;
  margin: 0 1rem;

  background: pink;

  align-self: center;

  height: 90%;
  width: 60%;

  overflow: auto;
  scroll-behavior: smooth;

  scroll-snap-type: y mandatory;
  scroll-snap-align: center;

  .padding {
    padding: 50% 0;
  }
`;

const Viewport = ({ scrollFactor, children }) => {
  const scrollRef = useRef(undefined);

  useEffect(() => {
    let timer;

    timer = setTimeout(
      () =>
        scrollRef.current.scrollTo(
          0,
          (scrollFactor / 100) * scrollRef.current.scrollHeight
        ),
      100
    );

    console.log((scrollFactor / 100) * scrollRef.current.scrollHeight);

    return () => clearTimeout(timer);
  }, [scrollFactor]);

  return (
    <StyledViewport ref={scrollRef}>
      <div className="padding"></div>
      {children}
      <div className="padding"></div>
    </StyledViewport>
  );
};

export default Viewport;
