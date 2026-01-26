import { useEffect, useState } from "react";
import { Character, CharacterWithNoId } from "../types";

export type UseBoardReturn = {
  characters: Character[];
  nbEmptyCards: number;
  resetBoard: () => void;
  addNewCharacters: (newCharacters: CharacterWithNoId[]) => void;
};

export function useBoard(nbRows: number, nbColumns: number): UseBoardReturn {
  const [nbEmptyCards, setNbEmptyCards] = useState(nbRows * nbColumns);

  //Future characters have an id that is generated here.
  //These id are used for keys when the characters are rendered
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

  function addNewCharacters(newCharacters: CharacterWithNoId[]): void {
    if (nbEmptyCards == 0) {
      return;
    }

    let charactersToAdd = newCharacters.length;
    let charactersAdded = 0;

    const updatedCharacters: Character[] = characters.map(
      (previousCharacter) => {
        //If the character already has a name or image, then they already exist so they mustn't be replaced
        //Otherwise, if the character doesn't exist and more characters can be added, we add the next one
        if (
          previousCharacter.name ||
          previousCharacter.imageUrl ||
          charactersToAdd <= 0
        ) {
          return previousCharacter;
        } else {
          const newCharacter = newCharacters[newCharacters.length - charactersToAdd];
          charactersToAdd--;
          //An extra check to make sure an empty character (such as one created by a double click) is never added
          if (
            (!newCharacter.name && !newCharacter.imageUrl) ||
            (newCharacter.name == "" && newCharacter.imageUrl == "")
          ) {
            return previousCharacter;
          } else {
            charactersAdded++;
            return {
              id: previousCharacter.id, //We must keep the same id in order to keep the same key when rerendered
              name: newCharacter.name,
              imageUrl: newCharacter.imageUrl,
            };
          }
        }
      },
    );
    setNbEmptyCards(nbEmptyCards - charactersAdded);
    setCharacters(updatedCharacters);
  }

  return { characters, nbEmptyCards, resetBoard, addNewCharacters };
}
