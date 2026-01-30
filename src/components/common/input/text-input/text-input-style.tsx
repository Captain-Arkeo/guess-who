import { styled } from "@/styled-system/jsx";

export const TextInputWrapperStyled = styled("fieldset", {
  base: {
    all: "unset",
    display: "flex",
    flexDirection: "column",
    gap: "5px",

    md: {
      gap: "10px",
    },
  },
});

export const LabelStyled = styled("label", {
  base: {},
});

export const InputStyled = styled("input", {
  base: {
    width: "100%",
  },
});

export const TextAreaInputStyled = styled("textarea", {
  base: {
    width: "100%",
  },
});
