import React from "react";
import styled from "styled-components";

import { textColor } from "../../../styles/mixins/textColor";

export const StyledCapsule = styled.div`
  line-height: 2;

  background-color: #9fd4a8;

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  margin: 0 0.5rem;
  border-radius: 5px;

  :not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .info-container__content__upper {
    display: flex;
    justify-content: space-between;
    margin: 0 0.5rem;

    ${textColor("light")}

    text-transform: uppercase;
  }

  .info-container__content__lower {
    background: #eaf8ea;
    padding: 0.5rem 0.5rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    display: flex;
    gap: 0.5rem;

    *:first-letter {
      text-transform: capitalize;
    }

    ${textColor("dark")}

    &::before {
      content: "${({ prefix }) => prefix}";
      display: ${({ prefix }) => (prefix ? "inherit" : "none")};
    }
  }
`;

const Capsule = ({
  upperContent = "Upper",
  upperContentSecondary = "",
  lowerContent = "lower",
  prefix = undefined,
}) => {
  return (
    <StyledCapsule prefix={prefix} className="info-container">
      <div className="info-container__content__upper">
        {upperContent}
        {upperContentSecondary}
      </div>
      <div className="info-container__content__lower">{lowerContent}</div>
    </StyledCapsule>
  );
};

export default Capsule;
