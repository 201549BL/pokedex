import React, { useState } from "react";

import styled from "styled-components";
import { textColor } from "../../../styles/mixins/textColor";
import FlexDiv from "../../../styles/utils/FlexDiv";

const backgroundColors = ["#348C80", "#7F6FE0", "#6115FF"];

const StyledPagination = styled.header`
  line-height: 2;
  ${textColor("light")}

  .pagination {
    display: flex;

    text-transform: uppercase;

    position: sticky;
    top: 0;

    height: 30px;
    background: #ca84dc;
  }

  .content {
    background: ${({ bgColor }) => backgroundColors[bgColor]};

    .image {
      flex-basis: 40%;
      padding: 0.5rem 0;

      height: fit-content;

      position: sticky;
      top: 30px;
    }

    .info-page {
      flex-basis: 60%;
      flex-shrink: 1;
    }
  }
`;

const headerTexts = ["abilities", "stats", "moves", "not implemented yet"];

const Pagination = ({ image, infoPages = [], children }) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <StyledPagination bgColor={currentPage}>
      <div className="pagination">
        <p>{headerTexts[currentPage]}</p>
        <FlexDiv row>
          <button onClick={() => setCurrentPage(0)}>1</button>
          <button onClick={() => setCurrentPage(1)}>2</button>
          <button onClick={() => setCurrentPage(2)}>3</button>
          <button onClick={() => setCurrentPage(3)}>4</button>
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
