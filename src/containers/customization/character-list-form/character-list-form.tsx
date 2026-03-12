"use client";
import { useEffect, useState } from "react";
import {
    ButtonDivStyled,
  CharacterListFormStyled,
  CharacterListFormTextStyled,
  CharacterListFormWrapperStyled,
} from "./character-list-form-style";
import { Button, TextInput } from "@/src/components";
import { copyToClipboard, generateCharacterPreset, isCharacterWithNoIdArray } from "@/src/utils";
import { Character, CharacterWithNoId } from "@/src/types";

export type CharacterListFormProps = {
    characters: Character[];
    onFormSubmit: (characters: CharacterWithNoId[]) => void;
}

//The form used to upload and download character presets
export const CharacterListForm: React.FC<CharacterListFormProps> = ({ characters, onFormSubmit }) => {
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

    let parsedValue : any;
    
    try {
      parsedValue = JSON.parse(characterPreset);
      if(!isCharacterWithNoIdArray(parsedValue)){
        window.alert("This value does not contain a character preset.")
      } else {
        onFormSubmit(parsedValue);
      }
    } catch {
      window.alert("This value is not a valid element.")
    }

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
            <Button type="submit" label="Submit" />
            <Button type="button" label="Generate List" onClick={() => handleGenerate(characters)} />
            <Button type="button" label="Copy List" onClick={handleCopy} />
        </ButtonDivStyled>
      </CharacterListFormStyled>
    </CharacterListFormWrapperStyled>
  );
};
