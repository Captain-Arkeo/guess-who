import { FormStyled } from "./form-style";

export type FormProps = {
  children?: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
};

export const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  className,
}) => {
  return (
    <FormStyled onSubmit={onSubmit} className={className}>
      {children}
    </FormStyled>
  );
};
