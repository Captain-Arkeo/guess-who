import { DEFAULT_COLUMNS, DEFAULT_ROWS } from "@/src/constants";
import { createContext } from "react";

type SizeContextType = {
  nbRows: number;
  nbColumns: number;
  setNbRows: React.Dispatch<React.SetStateAction<number>>;
  setNbColumns: React.Dispatch<React.SetStateAction<number>>;
};

const defaultSizeContextValue: SizeContextType = {
  nbRows: DEFAULT_ROWS,
  setNbRows: () => {},
  nbColumns: DEFAULT_COLUMNS,
  setNbColumns: () => {},
};

export const SizeContext = createContext<SizeContextType>(
  defaultSizeContextValue,
);
