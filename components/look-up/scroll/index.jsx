import React, { useMemo, useEffect, useCallback, useRe } from "react";
import Scrollbar from "../scrollbar";
import styled from "styled-components";
import useScrollbar from "../../../hooks/useScrollbar";
import Link from "next/link";

const StyledScroller = styled.div`
  flex-basis: 60%;
  flex-shrink: 0;

  height: 80vh;
  background: #ece836;

  padding: 0 1rem;

  align-self: center;

  overflow: hidden;

  border: 6px #49545a solid;
  border-radius: 5px;

  position: relative;
  z-index: 0;

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
    padding-left: 0.5rem;

    :hover {
      cursor: pointer;
    }

    :not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  ::after {
    content: "";
    position: absolute;
    height: 4rem;
    width: 90%;
    top: 50%;
    transform: translateY(-50%);
    background-color: #f9f9f9;
    z-index: -1;
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
            <Link href={`/${p.name}`} key={p.name}>
              <h2 className="entry" style={{ scrollSnapAlign: "center" }}>
                <a>
                  <span>{String(i + 1).padStart(5, "No000")}</span>{" "}
                  {p.name.toUpperCase()}
                </a>
              </h2>
            </Link>
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
