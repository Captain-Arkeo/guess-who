"use client";
import { Board } from "@/src/components";
import { Character, Players } from "@/src/types";
import { useState } from "react";
import { CharacterForm } from "../../customization";
import { CustomizationSectionStyled, MainPageStyled } from "./main-page-style";

export const MainPage: React.FC = () => {
  const [nbRows, setNbRows] = useState<number>(4);
  const [nbColumns, setNbColumns] = useState<number>(7);

  const [nbEmptyCards, setNbEmptyCards] = useState<number>(nbRows * nbColumns);

  const [characters, setCharacters] = useState<Character[]>(
    Array.from({ length: nbRows * nbColumns }, () => ({
      id: crypto.randomUUID(),
    })),
  );

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
        player={Players.P2}
        nbRows={nbRows}
        nbColumns={nbColumns}
      />
    </MainPageStyled>
  );
};
