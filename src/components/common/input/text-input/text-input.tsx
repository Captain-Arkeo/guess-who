import { ChangeEvent, useId } from "react";
import {
  InputStyled,
  LabelStyled,
  TextInputWrapperStyled,
} from "./text-input-style";

export type TextInputProps = {
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

//A fieldset with a label and an input that receives specifically text
export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  className,
}) => {
  const inputId = useId();
  return (
    <TextInputWrapperStyled className={className}>
      <LabelStyled htmlFor={inputId}>{label}</LabelStyled>
      <InputStyled id={inputId} value={value} onChange={onChange}></InputStyled>
    </TextInputWrapperStyled>
  );
};
