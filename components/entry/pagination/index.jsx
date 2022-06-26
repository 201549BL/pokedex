import React, { useState, useMemo } from "react";

import styled from "styled-components";
import { textColor } from "../../../styles/mixins/textColor";
import FlexDiv from "../../../styles/utils/FlexDiv";

const backgroundColors = ["#348C80", "#7F6FE0", "#6115FF"];

const StyledPagination = styled.header`
  ${textColor("light")}

  font-size: 1.2rem;

  .background {
    position: fixed;
    z-index: -1;

    height: 100vh;
    width: 100vw;

    background: ${({ bgColor }) => backgroundColors[bgColor]};
  }

  .pagination {
    display: flex;

    z-index: 1;

    text-transform: uppercase;

    position: sticky;
    top: 0;

    height: 30px;
    background: #ffeafe;

    .header {
      flex-basis: 30%;
      background-color: #ca84dc;
    }
  }

  .content {
    .image {
      flex-basis: 40%;
      padding: 0.5rem 0;

      height: 100%;

      position: sticky;
      top: 30px;
    }

    .info-page {
      flex-basis: 60%;
      flex-shrink: 1;
      overflow: auto;
    }
  }
`;

const StyledPageinatedButton = styled.button`
  position: relative;
  padding: 0 2rem;
  background: #e0a8fb;

  border: none;

  z-index: 0;

  ::after {
    position: absolute;
    top: 0;
    left: 0;

    content: "";
    background: #ca84dc;
    width: 100%;
    height: 100%;

    z-index: -1;

    transition: all 500ms ease;
    transform: scaleX(${({ active }) => (active ? 1 : 0)});
    transform-origin: left;
  }
`;

const headerTexts = ["abilities", "moves"];

const Pagination = ({ image, infoPages = [], children }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const PaginatedButtons = useMemo(
    () =>
      headerTexts.map((t, i) => {
        return (
          <StyledPageinatedButton
            onClick={() => setCurrentPage(i)}
            key={i}
            active={i <= currentPage ? true : false}
          >
            O
          </StyledPageinatedButton>
        );
      }),
    [currentPage]
  );

  return (
    <StyledPagination bgColor={currentPage}>
      <div className="background"></div>
      <div className="pagination">
        <p className="header">{headerTexts[currentPage]}</p>
        <FlexDiv row>
          {PaginatedButtons}
          <p>{currentPage}</p>
        </FlexDiv>
      </div>
      <FlexDiv row className="content">
        <div className="image">{image}</div>
        <div className="info-page">{children[currentPage]}</div>
      </FlexDiv>
    </StyledPagination>
  );
};

export default Pagination;
