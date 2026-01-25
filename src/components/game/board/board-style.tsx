import { styled } from "@/styled-system/jsx";

export const BoardStyled = styled("div", {
    base: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
    }
})

export const CardLineStyled = styled("div", {
  base: {
    display: "flex",
    maxWidth: "80%",
    gap: "10px",
  },
});