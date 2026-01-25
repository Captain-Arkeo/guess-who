import { Form } from "@/src/components";
import { styled } from "@/styled-system/jsx";

export const CharacterFormWrapperStyled = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderColor: "black",
    borderWidth: "1px",
    borderStyle: "solid",
    width: "20%",
    height: "100%",
  },
});

export const CharacterFormStyled = styled(Form, {
  base: {
    marginBottom: "20px",
  }
})

export const TitleStyled = styled("h2", {
  base: {
    all: "unset",
    fontWeight: "bold",
    fontSize: "24px",
    marginTop: "20px",
    marginBottom: "30px",
  }
})
