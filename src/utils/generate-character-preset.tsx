import { Character, CharacterWithNoId } from "../types";

export function generateCharacterPreset(characters: Character[]): string {
  const characterPresetArray: CharacterWithNoId[] = [];

  characters.map((character, index) => {
    if (character.name || character.imageUrl) {
      const characterWithoutId: CharacterWithNoId = {
        name: character.name,
        imageUrl: character.imageUrl,
      };
      characterPresetArray.push(characterWithoutId);
    }
  });

  return JSON.stringify(characterPresetArray);
}
