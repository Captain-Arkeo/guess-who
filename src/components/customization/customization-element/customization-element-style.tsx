import { styled } from "@/styled-system/jsx";

export const CustomizationElementStyled = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderColor: "black",
    borderWidth: "1px",
    borderStyle: "solid",
    textAlign: "center",

    width: "100%",

    paddingTop: "20px",
    paddingBottom: "15px",

    md: {
      width: "20%",
      height: "100%",

      paddingTop: "20px",
      paddingBottom: "30px",
    },
  },

  variants: {
    stackedUnderOtherElement: {
      true: {
        borderTopStyle: "none",

        md: {
          borderTopStyle: "solid",
        },
      },
    },
  },
});

export const TitleStyled = styled("h2", {
  base: {
    all: "unset",
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "10px",

    md: {
      marginBottom: "20px",
    },
  },
});
