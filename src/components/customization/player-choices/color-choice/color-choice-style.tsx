import { styled } from "@/styled-system/jsx";

export const ColorChoiceStyled = styled("div", {
<<<<<<< HEAD

  //In case we add more colors (I'd like purple for example), a grid layout should be thought of. For now, it is unnecessary
=======
>>>>>>> b10661d (feature: component to choose players/colors created (needs to be styled correctly))
  base: {
    transition: "ease-in-out 0.25s",
    bgColor: "var(--bg-color)",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "1px",
    height: "50px",
<<<<<<< HEAD
    aspectRatio: "1 / 1",

    lg: {
      height: "auto",
      width: "20%",
      maxWidth: "50px",
    },
=======
    width: "50px",
>>>>>>> b10661d (feature: component to choose players/colors created (needs to be styled correctly))

    _hover: {
      opacity: "0.5",
      borderColor: "yellow",
    },
  },
  variants: {
    selectedColor: {
      true: {
        opacity: "0.5",
      },
    },
  },
});
