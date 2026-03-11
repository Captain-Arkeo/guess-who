import { styled } from "@/styled-system/jsx";

export const BoardStyled = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    alignItems: "flex-start",

    mdDown: {
      overflow: "scroll",
      //It is interesting to discover that the scrollbar is customizable

      //scrollbarColor: "blue red",
      scrollbarWidth: "md",
    },

    md: {
      gap: "10px",
      alignItems: "center",
    },
  },
});

export const CardLineStyled = styled("div", {
  base: {
    display: "flex",
    gap: "5px",

    mdDown: {},

    md: {
      maxWidth: "80%",
      gap: "10px",
    },
  },
});
