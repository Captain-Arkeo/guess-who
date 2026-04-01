import { Players } from "@/src/types";
import { ColorChoiceStyled } from "./color-choice-style";

export type ColorChoiceProps = {
  color: Players | string;
  selectedColor: boolean;
  className?: string;
  onClick?: () => void;
};

export const ColorChoice: React.FC<ColorChoiceProps> = ({
  color,
  selectedColor,
  className,
  onClick,
}) => {
  return (
    <ColorChoiceStyled
      className={className}
      style={{ "--bg-color": color } as React.CSSProperties}
      selectedColor={selectedColor}
      onClick={onClick}
    />
  );
};
