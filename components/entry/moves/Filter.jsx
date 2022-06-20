import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledFilter = styled.div`
  line-height: 2;

  display: flex;
  flex-direction: column;
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
      <button style={{ alignSelf: "end" }} onClick={onFilterClick}>
        {buttonTitle}
      </button>
      {getFilteredCapsules()}
    </StyledFilter>
  );
};

export default Filter;
