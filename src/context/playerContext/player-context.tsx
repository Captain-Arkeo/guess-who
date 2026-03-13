import { Players } from "@/src/types";
import { createContext } from "react";

type PlayerContextType = {
  player: Players;
  setPlayer: React.Dispatch<React.SetStateAction<Players>>;
};

export const PlayerContext = createContext<PlayerContextType | null>(null);
