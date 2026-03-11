import { styled } from "@/styled-system/jsx";

export const BoardStyled = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    alignItems: "flex-start",

    xlDown: {
      overflow: "scroll",
      //It is interesting to discover that the scrollbar is customizable

      //scrollbarColor: "blue red",
      scrollbarWidth: "md",
    },

    xl: {
      gap: "10px",
      alignItems: "center",
    },
  },
});

export const CardLineStyled = styled("div", {
  base: {
    display: "flex",
    gap: "5px",

    xlDown: {
      marginInline: "auto",  //If there is enough space to not need a scroll, the element is centered instead.
    },

    xl: {
      maxWidth: "92%",
      gap: "10px",
    },
  },
});
