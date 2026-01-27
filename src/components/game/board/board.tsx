"use client";
import { Character, Players } from "@/src/types";
import { BoardStyled, CardLineStyled } from "./board-style";
import { useState } from "react";
import { splitIntoRows } from "@/src/utils";
import { Card } from "./card";

export type BoardProps = {
  characters: Character[];
  player: Players;
  nbRows: number;
  nbColumns: number;
};

export const Board: React.FC<BoardProps> = ({
  characters,
  player,
  nbRows,
  nbColumns,
}) => {
  const [flippedCards, setFlippedCards] = useState(
    Array(nbRows * nbColumns).fill(false),
  );

  const characterRows: Character[][] = splitIntoRows(characters, nbRows);

  function handleCardClick(flipIndex: number) {
    const updatedFlippedCards: boolean[] = flippedCards.slice();
    updatedFlippedCards.map((isFlipped, index) => {
      if (flipIndex === index) {
        updatedFlippedCards[index] = !isFlipped;
      }
    });
    console.log(flipIndex + " was touched");
    setFlippedCards(updatedFlippedCards);
  }

  return (
    <BoardStyled>
      {characterRows.map((row, rowIndex) => {
        return (
          //The key here for rows might be changed later, but right now it works as it doesn't seem to create issues with the current layout
          <CardLineStyled key={"row" + rowIndex}>
            {row.map((character, characterIndex) => {
              const flipIndex: number = rowIndex * nbColumns + characterIndex;
              return (
                <Card
                  key={character.id}
                  player={player}
                  flipped={flippedCards[flipIndex]}
                  name={character.name}
                  imageUrl={character.imageUrl}
                  onClick={() => handleCardClick(flipIndex)}
                />
              );
            })}
          </CardLineStyled>
        );
      })}
    </BoardStyled>
  );
};
