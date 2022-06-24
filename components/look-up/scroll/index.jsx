import React, { useMemo, useEffect, useCallback, useRef } from "react";
import Scrollbar from "../scrollbar";
import styled from "styled-components";
import useScrollbar from "../../../hooks/useScrollbar";

const StyledScroller = styled.div`
  flex-basis: 60%;
  flex-shrink: 0;

  height: 80vh;
  background: #ece836;

  align-self: center;

  overflow: hidden;

  border: 6px #49545a solid;
  border-radius: 5px;

  position: relative;

  .padding {
    height: 50%;
  }

  .scroller {
    height: 100%;
    overflow: auto;

    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .entry {
    white-space: nowrap;
  }
`;

// eslint-disable-next-line react/display-name
const Scroller = React.forwardRef(
  ({ children, onScroll, pokemonData }, ref) => {
    const { scrollbarRef, handleScrollbar } = useScrollbar();

    const data = useMemo(
      () =>
        pokemonData.map((p, i) => {
          return (
            <h2
              key={p.name}
              className="entry"
              style={{ scrollSnapAlign: "center" }}
            >
              No{String(i + 1).padStart(3, "0")} {p.name}
            </h2>
          );
        }),
      [pokemonData]
    );

    const handleScroll = (e) => {
      onScroll(e);
      handleScrollbar(e);
    };

    return (
      <StyledScroller>
        <div className="scroller" ref={ref} onScroll={handleScroll}>
          <div className="padding"></div>
          {data}
          <div className="padding"></div>
        </div>
        <Scrollbar ref={scrollbarRef} />
      </StyledScroller>
    );
  }
);

export default Scroller;
