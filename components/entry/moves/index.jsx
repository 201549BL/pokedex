import React from "react";
import styled from "styled-components";
import { getId } from "../../../utils/getId";

import Capsule from "../capsule";
import TypePill from "../type/TypePill";

const StyledMoves = styled.div`
  line-height: 2;

  p.title {
    margin-left: 3rem;
  }
`;

const renderMoves = (moves = []) => {
  return moves.map((m) => {
    return (
      <Capsule
        key={m.name}
        upperContent={
          <div>
            <div style={{ display: "flex" }}>
              <p key={getId()}>{`${m.name}/`}</p>
              <TypePill key={getId()} type={m.typing} />
            </div>
            <p key={getId()}>{`Power: ${!m.power ? "n/a" : m.power}`}</p>
          </div>
        }
        upperContentSecondary={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            {" "}
            <p key={getId()}>{`class: ${m.dmgClass}`}</p>
            <p key={getId()}>{`Accuracy: ${
              !m.accuracy ? "n/a" : m.accuracy
            }`}</p>{" "}
          </div>
        }
        // ,

        lowerContent={m.effectEntry}
      />
    );
  });
};

const Moves = ({ moves = [] }) => {
  return (
    <StyledMoves>
      <p className="title">Moves</p>
      {renderMoves(moves)}
    </StyledMoves>
  );
};

export default Moves;
