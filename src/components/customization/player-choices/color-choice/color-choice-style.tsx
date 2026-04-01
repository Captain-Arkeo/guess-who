import { styled } from "@/styled-system/jsx";

export const ColorChoiceStyled = styled("div", {
  base: {
    transition: "ease-in-out 0.25s",
    bgColor: "var(--bg-color)",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "1px",
    height: "50px",
    width: "50px",

    _hover: {
      opacity: "0.5",
      borderColor: "yellow",
    },
  },
  variants: {
    selectedColor: {
      true: {
        opacity: "0.5",
      },
    },
  },
});
