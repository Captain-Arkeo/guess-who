import { styled } from "@/styled-system/jsx";

export const MainPageStyled = styled("div", {
  base: {},
});

export const CustomizationSectionStyled = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",

    md: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: "50px",
    },
  },
});
