import { CustomizationElement, Form } from "@/src/components";
import { styled } from "@/styled-system/jsx";

export const CharacterListFormWrapperStyled = styled(CustomizationElement, {
  base: {},
});

export const CharacterListFormTextStyled = styled("p", {
  base: {
    marginLeft: "5px",
    marginRight: "5px",
    textAlign: "center",
  },
});

export const CharacterListFormStyled = styled(Form, {
  base: {},
});

export const ButtonDivStyled = styled("div", {
  base: {
    display: "flex",
    gap: "5px",
  },
});
