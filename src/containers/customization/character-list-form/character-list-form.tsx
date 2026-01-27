"use client";
import { useEffect, useState } from "react";
import {
    ButtonDivStyled,
  CharacterListFormStyled,
  CharacterListFormTextStyled,
  CharacterListFormWrapperStyled,
} from "./character-list-form-style";
import { TextInput } from "@/src/components";
import { copyToClipboard, generateCharacterPreset } from "@/src/utils";
import { Character, CharacterWithNoId } from "@/src/types";

export type CharacterListFormProps = {
    characters: Character[];
    onFormSubmit?: (characters: CharacterWithNoId[]) => void;
}

//The form used to upload and download character presets
export const CharacterListForm: React.FC<CharacterListFormProps> = ({ characters }) => {
  const [characterPreset, setCharacterPreset] = useState<string>("");

  async function handleCopy() : Promise<void> {
    await copyToClipboard(characterPreset);
    setCharacterPreset("");
  }

  function handleGenerate(charactersToGenerate : Character[]) : void {
    setCharacterPreset(generateCharacterPreset(charactersToGenerate));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) : void {
    //Don't reload the page
    e.preventDefault();
    
    //Add JSON.parse() logic here, while checking the type of the parsed value, before having onFormSubmit on that value
    //const parsedCharacterPreset : CharacterWithNoId[] | any = JSON.parse(characterPreset);
    setCharacterPreset("");
  }

  return (
    <CharacterListFormWrapperStyled title={"ADD WITH A LIST"}>
      <CharacterListFormTextStyled>
        {
          "When you fill a board with any amount of characters, you can generate a reusable list of those characters. You can paste said list below for a quick character generation."
        }
      </CharacterListFormTextStyled>
      <CharacterListFormStyled onSubmit={(e) => handleSubmit(e)}>
        <TextInput
          label="Copy the list or paste your list here"
          isTextArea={true}
          value={characterPreset}
          onChange={(e) => setCharacterPreset(e.target.value)}
        />
        <ButtonDivStyled>
            {/*<button type="submit">Submit</button>*/}
            <button type="button" onClick={() => handleGenerate(characters)}>Generate List</button>
            <button type="button" onClick={handleCopy}>Copy List</button>
        </ButtonDivStyled>
      </CharacterListFormStyled>
    </CharacterListFormWrapperStyled>
  );
};
