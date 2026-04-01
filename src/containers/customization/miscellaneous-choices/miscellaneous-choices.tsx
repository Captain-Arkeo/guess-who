import { PlayerChoices, RangeInput } from "@/src/components";
import { MiscellaneousChoicesWrapperStyled } from "./miscellaneous-choices-style";
import { useContext } from "react";
import { PlayerContext, SizeContext } from "@/src/context";
import { DEFAULT_COLUMNS, DEFAULT_ROWS, MAX_COLUMNS, MAX_ROWS, MIN_COLUMNS, MIN_ROWS } from "@/src/constants";

export type MiscellaneousChoicesProps = {};

export const MiscellaneousChoices: React.FC<
  MiscellaneousChoicesProps
> = ({}) => {
    const sizeContext = useContext(SizeContext);
    const playerContext = useContext(PlayerContext);
  return (
    <MiscellaneousChoicesWrapperStyled title="Others">
      <PlayerChoices currentPlayer={playerContext.player} onChoice={playerContext.setPlayer}/>
      <RangeInput
        min={MIN_ROWS}
        max={MAX_ROWS}
        defaultValue={sizeContext.nbRows}
        withNumberInput={true}
        label="Rows"
        onChange={sizeContext.setNbRows}
      />
      <RangeInput
        min={MIN_COLUMNS}
        max={MAX_COLUMNS}
        defaultValue={sizeContext.nbColumns}
        withNumberInput={true}
        label="Columns"
        onChange={sizeContext.setNbColumns}
      />
    </MiscellaneousChoicesWrapperStyled>
  );
};
