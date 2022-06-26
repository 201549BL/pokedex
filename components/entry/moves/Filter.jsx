import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  line-height: 1.2;

  .btn {
    padding: 0.1rem 0.2rem;
    font-size: 1.2rem;

    text-transform: capitalize;
  }
`;

const Filter = ({
  children = [],
  filterFunction = () => {},
  buttonTitle = "",
  onFilterClick = () => {},
}) => {
  const getFilteredCapsules = () => {
    return children.filter((c) => filterFunction(c));
  };

  console.log(children[0]);
  console.log("filterclick", onFilterClick);
  console.log("filterFunction", filterFunction);

  return (
    <StyledFilter>
      <button
        className="btn"
        style={{
          alignSelf: "end",
          position: "absolute",
          transform: "translateY(-100%)",
          marginRight: "0.5rem",
          zIndex: "0",
        }}
        onClick={onFilterClick}
      >
        {buttonTitle}
      </button>
      {getFilteredCapsules()}
    </StyledFilter>
  );
};

export default Filter;
