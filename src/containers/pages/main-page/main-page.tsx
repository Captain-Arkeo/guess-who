"use client";
import { Board } from "@/src/components";
import { Character, Players } from "@/src/types";
import { useEffect, useState } from "react";
import { CharacterForm } from "../../customization";
import { CustomizationSectionStyled, MainPageStyled } from "./main-page-style";

export const MainPage: React.FC = () => {
  const [nbRows, setNbRows] = useState<number>(4);
  const [nbColumns, setNbColumns] = useState<number>(7);

  const [nbEmptyCards, setNbEmptyCards] = useState(nbRows * nbColumns);

  const [player, setPlayer] = useState<Players>(Players.P1);

  const [characters, setCharacters] = useState<Character[]>(
    Array.from({ length: nbEmptyCards }, () => ({
      id: crypto.randomUUID(),
    })),
  );

  //Function to call whenever the board is to be reset : empties the entire board and resets the number of empty cards
  function resetBoard(): void {
    setNbEmptyCards(nbRows * nbColumns);
    setCharacters(
      Array.from({ length: nbEmptyCards }, () => ({
        id: crypto.randomUUID(),
      })),
    );
  }

  //Whenever the number of rows or columns changes, reset the board
  useEffect(() => {
    resetBoard();
  }, [nbRows, nbColumns]);

  //Adds a new character to the characters array
  function addNewCharacter(newName: string, newImageUrl: string): void {
    if (nbEmptyCards == 0) {
      return;
    }

    const updatedCharacters = characters.slice();

    updatedCharacters.map((previousCharacter, index) => {
      if (updatedCharacters.length - nbEmptyCards == index) {
        updatedCharacters[index] = {
          //Keep the generated id but add the new character
          id: previousCharacter.id,
          name: newName != "" ? newName : undefined,
          imageUrl: newImageUrl != "" ? newImageUrl : undefined,
        };
      }
    });

    setNbEmptyCards(nbEmptyCards - 1);
    setCharacters(updatedCharacters);
  }

  return (
    <MainPageStyled>
      <CustomizationSectionStyled>
        <CharacterForm onFormSubmit={addNewCharacter} />
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
