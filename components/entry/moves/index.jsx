import React from "react";
import styled from "styled-components";
import FlexDiv from "../../../styles/utils/FlexDiv";
import { getId } from "../../../utils/getId";

import Capsule from "../capsule";
import TypePill from "../type/TypePill";
import Filter from "./Filter";

import useCapsuleFilter from "../../../hooks/useCapsuleFilter";

const StyledMoves = styled.div`
  padding-top: 0.5rem;

  p.title {
    margin-left: 3rem;
  }
`;

const filterOptions = ["level-up", "machine", "egg", "tutor"];

const renderMoves = (moves = []) => {
  return moves.map((m) => {
    return (
      <Capsule
        key={m.name}
        upperContent={
          <FlexDiv column>
            <div style={{ display: "flex" }}>
              <p key={getId()}>{`${m.name}/`}</p>
              <TypePill key={getId()} type={m.typing} />
            </div>
            <p key={getId()}>{`Power: ${!m.power ? "n/a" : m.power}`}</p>
          </FlexDiv>
        }
        upperContentSecondary={
          <FlexDiv column>
            <p key={getId()}>{`class: ${m.dmgClass}`}</p>
            <p key={getId()}>{`Accuracy: ${
              !m.accuracy ? "n/a" : m.accuracy
            }`}</p>
          </FlexDiv>
        }
        lowerContent={`${m.effectEntry}\nLearn method: ${m.learnMethod}`}
        learnMethod={m.learnMethod}
      />
    );
  });
};

const Moves = ({ moves = [] }) => {
  const { term, onFilterClick } = useCapsuleFilter([
    "all",
    "level-up",
    "machine",
    "egg",
    "tutor",
  ]);

  console.log(term);

  return (
    <StyledMoves>
      <p className="title">Moves</p>
      <Filter
        onFilterClick={() => onFilterClick()}
        filterFunction={(c) => {
          if (term === "all") return true;
          return c.props.learnMethod === term;
        }}
        buttonTitle={term}
      >
        {renderMoves(moves)}
      </Filter>
    </StyledMoves>
  );
};

export default Moves;
