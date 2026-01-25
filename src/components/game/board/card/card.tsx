import { Players } from "@/src/types";
import { CardImageStyled, CardStyled, NameStyled } from "./card-style";

export type CardProps = {
  player: Players;
  flipped: boolean;
  name?: string;
  imageUrl?: string;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  player,
  flipped,
  name,
  imageUrl,
  className,
  onClick,
}) => {
  return (
    <>
      {/*When upright, the card shows the image and character's name. When
      flipped, we see the back of the card instead, hiding the character*/}

      {flipped ? (
        <CardStyled className={className} player={player} flipped={true} onClick={onClick}>
          <NameStyled flipped={true}>?</NameStyled>
        </CardStyled>
      ) : (
        <CardStyled className={className} onClick={onClick}>
          {name ? <NameStyled player={player}>{name}</NameStyled> : <></>}
          {imageUrl ? (
            <CardImageStyled
              src={imageUrl}
              alt={`Picture of ${name ?? "an unknown character"}`}
            />
          ) : (
            <></>
          )}
        </CardStyled>
      )}
    </>
  );
};
