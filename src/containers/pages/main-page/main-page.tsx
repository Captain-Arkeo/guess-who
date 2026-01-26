"use client";
import { Board } from "@/src/components";
import { Character, Players } from "@/src/types";
import { useEffect, useState } from "react";
import { CharacterForm } from "../../customization";
import { CustomizationSectionStyled, MainPageStyled } from "./main-page-style";
import { useBoard } from "@/src/hooks";

export const MainPage: React.FC = () => {
  const [nbRows, setNbRows] = useState<number>(4);
  const [nbColumns, setNbColumns] = useState<number>(7);
  const [player, setPlayer] = useState<Players>(Players.P1);

  const { characters, nbEmptyCards, resetBoard, addNewCharacters } = useBoard(nbRows, nbColumns);


  //Whenever the number of rows or columns changes, reset the board
  useEffect(() => {
    resetBoard();
  }, [nbRows, nbColumns]);

  return (
    <MainPageStyled>
      <CustomizationSectionStyled>
        <CharacterForm onFormSubmit={addNewCharacters} />
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
