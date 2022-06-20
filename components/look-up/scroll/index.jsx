import React from "react";

import styled from "styled-components";

const StyledScroller = styled.div`
  height: inherit;
`;

const Scroller = ({ children }) => {
  return <StyledScroller>{children}</StyledScroller>;
};

export default Scroller;
