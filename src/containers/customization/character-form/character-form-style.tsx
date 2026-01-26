import { CustomizationElement, Form } from "@/src/components";
import { styled } from "@/styled-system/jsx";

export const CharacterFormWrapperStyled = styled(CustomizationElement, {
  base: {
    width: "20%",
    height: "100%",
  },
});

export const CharacterFormStyled = styled(Form, {
  base: {},
});
