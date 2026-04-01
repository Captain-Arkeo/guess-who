import {
  CustomizationElementStyled,
  TitleStyled,
} from "./customization-element-style";

export type CustomizationElementProps = {
  title?: string;
  stackedUnderOtherElement?: boolean;
  children?: React.ReactNode;
  className?: string;
};

//The style of the element used for every form and menu in the page's customization section
export const CustomizationElement: React.FC<CustomizationElementProps> = ({
  title,
  stackedUnderOtherElement,
  className,
  children,
}) => {
  return (
    <CustomizationElementStyled
      className={className}
      stackedUnderOtherElement={stackedUnderOtherElement}
    >
      {title ? <TitleStyled>{title}</TitleStyled> : <></>}
      {children}
    </CustomizationElementStyled>
  );
};
