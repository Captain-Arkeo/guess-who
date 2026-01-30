import { styled } from "@/styled-system/jsx";

export const BoardStyled = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    alignItems: "flex-start",

    mdDown: {
      overflow: "scroll",
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

    mdDown: {
      marginInline: "auto", //This is to keep the element centered when it fits, while still allowing it to start on the left if it needs scrolling
    },

    md: {
      maxWidth: "80%",
      gap: "10px",
    },
  },
});
