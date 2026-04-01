"use client";
import { Board, RangeInput } from "@/src/components";
import { Character, Players } from "@/src/types";
import { useEffect, useState } from "react";
import { CharacterForm, CharacterListForm } from "../../customization";
import { CustomizationSectionStyled, MainPageStyled } from "./main-page-style";
import { useBoard } from "@/src/hooks";
import { PlayerContext, SizeContext } from "@/src/context";
import { DEFAULT_COLUMNS, DEFAULT_PLAYER, DEFAULT_ROWS } from "@/src/constants";
import { MiscellaneousChoices } from "../../customization/miscellaneous-choices";

export const MainPage: React.FC = () => {
  const [nbRows, setNbRows] = useState<number>(DEFAULT_ROWS);
  const [nbColumns, setNbColumns] = useState<number>(DEFAULT_COLUMNS);
  const [player, setPlayer] = useState<Players>(DEFAULT_PLAYER);

  const { characters, nbEmptyCards, resetBoard, addNewCharacters } = useBoard(
    nbRows,
    nbColumns,
  );

  //Whenever the number of rows or columns changes, reset the board
  useEffect(() => {
    resetBoard();
  }, [nbRows, nbColumns]);

  return (
    <MainPageStyled>
      <CustomizationSectionStyled>
        <CharacterListForm
          characters={characters}
          onFormSubmit={addNewCharacters}
        />
        <CharacterForm onFormSubmit={addNewCharacters} />
        {/*While I can put the values immediately since they share the same name, I believe it is easier to track in this way */}
        <SizeContext value={{ nbRows: nbRows, setNbRows: setNbRows, nbColumns: nbColumns, setNbColumns: setNbColumns }}>
          <PlayerContext value={{ player: player, setPlayer: setPlayer }}>
            <MiscellaneousChoices></MiscellaneousChoices>
          </PlayerContext>
        </SizeContext>
      </CustomizationSectionStyled>

      <Board
        characters={characters}
        player={player}
        nbRows={nbRows}
        nbColumns={nbColumns}
      />
    </MainPageStyled>
  );
};
