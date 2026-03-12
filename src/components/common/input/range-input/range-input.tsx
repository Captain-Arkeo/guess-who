"use client";

import { ChangeEvent, useState } from "react";
import { LegendStyled, NumberInputStyled, RangeInputStyled, RangeInputWrapperStyled } from "./range-input-style";

export type RangeInputProps = {
  min: number;
  max: number;
  defaultValue?: number;
  label: string;
  withNumberInput: boolean; //Adds a number input to both show the number of the range and allow the user another way to change the input
  onChange?: (value: number) => void; //Compared to other onChange functions of this project, this one doesn't need the event, since the RangeInput has a built-in handleChange to make sure the number is correct
  className?: string;
};

export const RangeInput: React.FC<RangeInputProps> = ({
  min,
  max,
  defaultValue = min,
  label,
  withNumberInput,
  onChange,
  className,
}) => {
  //This is to make the value shared between all inputs, in case withNumberInput is true.
  const [inputValue, setInputValue] = useState(Math.min(Math.max(min, defaultValue), max));

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    //Make sure the element only changes if the value used as the input is actually a number
    if (!Number.isNaN(e.target.valueAsNumber)) {
      const value: number = e.target.valueAsNumber;
      const valueInRange: number = Math.min(Math.max(min, value), max); //Make sure the value is never outside the range
      setInputValue(valueInRange);
      if (onChange) {
        onChange(valueInRange);
      }
    }
  }

  return (
    <RangeInputWrapperStyled className={className}>
      <LegendStyled>{label}</LegendStyled>

      {withNumberInput ? (
        <NumberInputStyled
          type="number"
          min={min}
          max={max}
          value={inputValue}
          onChange={handleChange}
          aria-label={label + " value"}
        />
      ) : (
        <></>
      )}

      <RangeInputStyled
        type="range"
        min={min}
        max={max}
        value={inputValue}
        onChange={handleChange}
      />
    </RangeInputWrapperStyled>
  );
};
