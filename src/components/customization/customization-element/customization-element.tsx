import { CustomizationElementStyled, TitleStyled } from "./customization-element-style";

export type CustomizationElementProps = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

//The style of the element used for every form and menu in the page's customization section
export const CustomizationElement: React.FC<CustomizationElementProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <CustomizationElementStyled className={className}>
      {title ? <TitleStyled>{title}</TitleStyled> : <></>}
      {children}
    </CustomizationElementStyled>
  );
};
