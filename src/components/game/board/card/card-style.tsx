import { styled } from "@/styled-system/jsx";

export const CardStyled = styled("div", {
  base: {
    display: "flex",
    position: "relative",
    overflow: "hidden",

    borderColor: "black",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "15px",

    height: "152px",
    width: "120px",

    alignItems: "flex-end",

    xl: {
      borderRadius: "20px",
      height: "190px",
      width: "150px",
    },
  },
  variants: {
    flipped: {
      true: {
        alignItems: "center",
        justifyContent: "center",
      },
    },

    //Only there to prepare the compound variants
    player: {
      1: {},
      2: {},
      3: {},
      4: {},
    },
  },

  /*Making sure colors are consistent with player choice*/
  compoundVariants: [
    {
      flipped: true,
      player: 1,
      css: {
        bgColor: "player1",
      },
    },
    {
      flipped: true,
      player: 2,
      css: {
        bgColor: "player2",
      },
    },
    {
      flipped: true,
      player: 3,
      css: {
        bgColor: "player3",
      },
    },
    {
      flipped: true,
      player: 4,
      css: {
        bgColor: "player4",
      },
    },
  ],
});

export const NameStyled = styled("span", {
  base: {
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    color: "white",
    zIndex: "1",

    fontSize: "18px",
    marginBottom: "12px",

    xl: {
      marginBottom: "23px",
    },
  },
  variants: {
    player: {
      1: {
        bgColor: "player1",
      },
      2: {
        bgColor: "player2",
      },
      3: {
        bgColor: "player3",
      },
      4: {
        bgColor: "player4",
      },
    },

    //When flipped, the text becomes "?"
    flipped: {
      true: {
        fontSize: "128px",
        marginBottom: "0px",

        xl: {
          marginBottom: "0px",
        },
      },
    },
  },
});

export const CardImageStyled = styled("img", {
  base: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
});
