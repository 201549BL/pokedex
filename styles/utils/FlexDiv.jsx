import styled from "styled-components";

export const StyledFlexDiv = styled.div`
  display: flex;
  flex-direction: ${({ row, column }) => {
    console.log(column);
    if (row && column)
      throw new Error("Enter either 'row' or 'column' in 'FlexDiv' component");

    if (row) return "row";
    if (column) return "column";

    return "unset";
  }};

  gap: ${({ gap }) => (gap ? gap : 0)};
`;

const FlexDiv = ({ children, ...rest }) => {
  console.log(rest);
  return <StyledFlexDiv {...rest}>{children}</StyledFlexDiv>;
};

export default FlexDiv;
