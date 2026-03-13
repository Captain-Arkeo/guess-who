import { createContext } from "react";

type SizeContextType = {
  nbRows: number;
  nbColumns: number;
  setNbRows: React.Dispatch<React.SetStateAction<number>>;
  setNbColumns: React.Dispatch<React.SetStateAction<number>>;
};

export const SizeContext = createContext<SizeContextType | null>(null);
