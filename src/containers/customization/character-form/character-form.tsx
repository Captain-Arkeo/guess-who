"use client";
import { Form, TextInput } from "@/src/components";
import { useState } from "react";
import {
  CharacterFormStyled,
  CharacterFormWrapperStyled,
} from "./character-form-style";

export type CharacterFormProps = {
  onFormSubmit?: (arg1: string, arg2: string) => void;
};

export const CharacterForm: React.FC<CharacterFormProps> = ({
  onFormSubmit,
}) => {
  const [charName, setCharName] = useState("");
  const [charImg, setCharImg] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //Don't reload the page
    e.preventDefault();

    //If no character has been inputted, it mustn't cause any change
    const emptyStrings: boolean = charImg == "" && charName == "";

    if (onFormSubmit && !emptyStrings) {
      onFormSubmit(charName, charImg);

      //Reset user input so adding the next one is easier, and to prevent double click mishaps
      setCharImg("");
      setCharName("");
    }
  }

  return (
    <CharacterFormWrapperStyled title="ADD BY HAND">
      <CharacterFormStyled onSubmit={(e) => handleSubmit(e)}>
        <TextInput
          label="Character Name"
          value={charName}
          onChange={(e) => setCharName(e.target.value)}
        />
        <TextInput
          label="Character Image (URL)"
          value={charImg}
          onChange={(e) => setCharImg(e.target.value)}
        />
        <button type="submit">Submit</button>
      </CharacterFormStyled>
    </CharacterFormWrapperStyled>
  );
};
