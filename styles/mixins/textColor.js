import styled from "styled-components";
import { css } from "styled-components";

const themes = {
  light: {
    color: "white",
    shadow: "#7b756d",
  },
  dark: {
    color: "black",
    shadow: "#C2C2C1",
  },
};

export const textColor = (theme) => {
  if (!themes[theme])
    throw new Error("Invalid theme argument in textColor mixin");

  return css`
    color: ${themes[theme].color};
    text-shadow: 0 2px ${themes[theme].shadow}, 2px 0 ${themes[theme].shadow};
  `;
};
