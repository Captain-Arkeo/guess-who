import { DEFAULT_PLAYER } from "@/src/constants";
import { Players } from "@/src/types";
import { createContext } from "react";

type PlayerContextType = {
  player: Players;
  setPlayer: React.Dispatch<React.SetStateAction<Players>>;
};

const defaultPlayerContextValue: PlayerContextType = {
  player: DEFAULT_PLAYER,
  setPlayer: () => {},
};

export const PlayerContext = createContext<PlayerContextType>(
  defaultPlayerContextValue,
);
