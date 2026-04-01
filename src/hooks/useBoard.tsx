import { useEffect, useState } from "react";
import { Character, CharacterWithNoId } from "../types";

export type UseBoardReturn = {
  characters: Character[];
  nbEmptyCards: number;
  resetBoard: () => void;
  addNewCharacters: (newCharacters: CharacterWithNoId[]) => void;
};

export function useBoard(nbRows: number, nbColumns: number): UseBoardReturn {
  const totalCards : number = nbRows * nbColumns;
  const [nbEmptyCards, setNbEmptyCards] = useState(totalCards);

  //Future characters have an id that is generated here.
  //These id are used for keys when the characters are rendered
  const [characters, setCharacters] = useState<Character[]>(
    Array.from({ length: totalCards }, () => ({
      id: crypto.randomUUID(),
    })),
  );

  //Function to call whenever the board is to be reset : empties the entire board and resets the number of empty cards
  function resetBoard(): void {
    const total = nbRows * nbColumns;
    setNbEmptyCards(total);
    setCharacters(
      Array.from({ length: total }, () => ({
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
          const newCharacter: CharacterWithNoId =
            newCharacters[newCharacters.length - charactersToAdd];

          //Empty strings should not be added to either the name or the imageUrl
          const safeNewCharacter: CharacterWithNoId = {
            name: newCharacter.name != "" ? newCharacter.name : undefined,
            imageUrl:
              newCharacter.imageUrl != "" ? newCharacter.imageUrl : undefined,
          };

          charactersToAdd--;
          //An extra check to make sure an empty character (such as one created by a double click) is never added
          if (
            (!safeNewCharacter.name && !safeNewCharacter.imageUrl) ||
            (safeNewCharacter.name == "" && safeNewCharacter.imageUrl == "")
          ) {
            return previousCharacter;
          } else {
            charactersAdded++;
            return {
              id: previousCharacter.id, //We must keep the same id in order to keep the same key when rerendered
              name: safeNewCharacter.name,
              imageUrl: safeNewCharacter.imageUrl,
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
