import { ChangeEvent, useId } from "react";
import {
  InputStyled,
  LabelStyled,
  TextAreaInputStyled,
  TextInputWrapperStyled,
} from "./text-input-style";

export type TextInputProps = {
  label: string;
  value?: string;
  isTextArea: boolean;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  className?: string;
};

//A fieldset with a label and an input that receives specifically text
export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  isTextArea,
  onChange,
  className,
}) => {
  const inputId = useId();
  return (
    <TextInputWrapperStyled className={className}>
      <LabelStyled htmlFor={inputId}>{label}</LabelStyled>
      {isTextArea ? (
        <TextAreaInputStyled id={inputId} value={value} onChange={onChange} />
      ) : (
        <InputStyled id={inputId} value={value} onChange={onChange} />
      )}
    </TextInputWrapperStyled>
  );
};
