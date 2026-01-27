import { CustomizationElement, Form } from "@/src/components";
import { styled } from "@/styled-system/jsx";

export const CharacterListFormWrapperStyled = styled(CustomizationElement, {
  base: {
    width: "20%",
    height: "100%",
  },
});

export const CharacterListFormTextStyled = styled("p", {
    base: {},
})

export const CharacterListFormStyled = styled(Form, {
  base: {},
});

export const ButtonDivStyled = styled("div", {
  base: {
    display: "flex",
    gap: "5px",
  },
});
