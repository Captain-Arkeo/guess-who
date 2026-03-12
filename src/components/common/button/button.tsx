import { ButtonStyled } from "./button-style";

export type ButtonProps = {
  type: "submit" | "button";
  label: string;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ type, label, className }) => {
  return (
    <ButtonStyled type={type} className={className}>
      {label}
    </ButtonStyled>
  );
};
