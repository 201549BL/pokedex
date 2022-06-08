import React from "react";
import styled from "styled-components";

const types = {
  normal: {
    backgroundColor: "#AAAA99",
    color: "white",
  },
  fire: {
    backgroundColor: "#FF5030",
    color: "white",
  },
  water: {
    backgroundColor: "#3399FF",
    color: "white",
  },
  electric: {
    backgroundColor: "#FFCC33",
    color: "white",
  },
  grass: {
    backgroundColor: "#77CC55",
    color: "white",
  },
  ice: {
    backgroundColor: "#66CCFF",
    color: "white",
  },
  fighting: {
    backgroundColor: "#BB5544",
    color: "white",
  },
  poison: {
    backgroundColor: "#AA5599",
    color: "white",
  },
  ground: {
    backgroundColor: "#DDBB55",
    color: "white",
  },
  flying: {
    backgroundColor: "#8899FF",
    color: "white",
  },
  psychic: {
    backgroundColor: "#FF5599",
    color: "white",
  },
  bug: {
    backgroundColor: "#AABB22",
    color: "white",
  },
  rock: {
    backgroundColor: "#BBAA66",
    color: "white",
  },
  ghost: {
    backgroundColor: "#6666BB",
    color: "white",
  },
  dragon: {
    backgroundColor: "#7766EE",
    color: "white",
  },
  dark: {
    backgroundColor: "#775544",
    color: "white",
  },
  steel: {
    backgroundColor: "#AAAABB",
    color: "white",
  },
  fairy: {
    backgroundColor: "#EFA2EF",
    color: "white",
  },
};

const StyledType = styled.span`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  border-radius: 5px;

  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.1rem 0.2rem;
`;

const TypePill = ({ type }) => {
  const typing = types[type];

  if (!typing) return <p>ERROR</p>;

  return (
    <StyledType backgroundColor={typing.backgroundColor} color={typing.color}>
      {type}
    </StyledType>
  );
};

export default TypePill;
