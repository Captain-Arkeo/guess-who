import { styled } from "@/styled-system/jsx";

export const RangeInputWrapperStyled = styled("fieldset", {
  base: {
    all: "unset",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    paddingTop: "5px",

    md: {
      paddingTop: "10px",
    },
  },
});

export const LegendStyled = styled("legend", {
  base: {
    marginLeft: "auto",
    marginRight: "auto",  //These margins are to make the legend centered
    fontSize: "24px",

    lg: {
      fontSize: "20px",
    },
  },
});

export const NumberInputStyled = styled("input", {
  base: {
    width: "100%",
    maxWidth: "50px",
    fontSize: "16px",

    lg: {
      fontSize: "14px",
    },
  },
});

export const RangeInputStyled = styled("input", {
  base: {
    width: "80%",
    maxWidth: "200px",
  },
});
