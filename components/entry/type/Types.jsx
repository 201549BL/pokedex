import React from "react";
import styled from "styled-components";
import { textColor } from "../../../styles/mixins/textColor";
import Capsule from "../capsule";
import TypePill from "./TypePill";

const StyledTypes = styled.div`
  line-height: 2;

  p.types {
    margin-left: 3rem;

    width: fit-content;
    padding: 0 2rem;

    background: rgb(45, 138, 123);
    background: linear-gradient(
      90deg,
      rgba(45, 138, 123, 1) 0%,
      rgba(100, 161, 223, 1) 10%,
      rgba(100, 161, 223, 1) 90%,
      rgba(45, 138, 123, 1) 100%
    );

    ${textColor("light")};
    text-transform: capitalize;
  }
`;

const getTypePills = (types = []) => {
  return types.map((t) => <TypePill key={t} type={t} />);
};

const Types = ({ types = [] }) => {
  const result = getTypePills(types);

  return (
    <StyledTypes>
      <p className="types">Types</p>
      <Capsule lowerContent={result} prefix={"/"} />
    </StyledTypes>
  );
};

export default Types;
