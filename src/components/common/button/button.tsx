import { ButtonStyled } from "./button-style";

export type ButtonProps = {
  type: "submit" | "button";
  label?: string;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ type, label, onClick, className }) => {
  return (
    <ButtonStyled type={type} className={className} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};
