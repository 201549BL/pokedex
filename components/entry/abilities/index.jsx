import styled from "styled-components";
import Capsule from "../capsule";
import { textColor } from "../../../styles/mixins/textColor";

const StyledAbilites = styled.div`
  line-height: 2;

  .blue {
    color: blue;
  }

  .red {
    color: red;
  }

  p.abilities {
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

    ${textColor("light")}
  }
`;

const renderAbilities = (abilities = []) => {
  return abilities.map((a) => {
    const hiddenStatus = a.isHidden ? (
      <span className="blue">true</span>
    ) : (
      <span className="red">False</span>
    );
    // const hiddenString = `hidden: ${hiddenStatus}`;
    const hiddenString = <p>Hidden: {hiddenStatus}</p>;

    return (
      <Capsule
        key={a.name}
        upperContent={a.name}
        upperContentSecondary={hiddenString}
        lowerContent={a.description}
        prefix="/"
      />
    );
  });
};

const Abilities = ({ abilities = [] }) => {
  return (
    <StyledAbilites>
      <p className="abilities">Abilities</p>
      {renderAbilities(abilities)}
    </StyledAbilites>
  );
};

export default Abilities;
