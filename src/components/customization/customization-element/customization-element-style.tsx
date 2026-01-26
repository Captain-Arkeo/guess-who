import { styled } from "@/styled-system/jsx";

export const CustomizationElementStyled = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderColor: "black",
    borderWidth: "1px",
    borderStyle: "solid",
    paddingTop: "20px",
    paddingBottom: "30px",
  },
});

export const TitleStyled = styled("h2", {
  base: {
    all: "unset",
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "30px",
  },
});
