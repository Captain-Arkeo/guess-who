export type Character = {
  id: string;
  name?: string;
  imageUrl?: string;
};

//Since user inputs (either from a list or a character added by hand) don't contain a generated id, this type is gonna used for those
export type CharacterWithNoId = Omit<Character, "id">;
