import { Players } from "@/src/types";
import { ColorChoice } from "./color-choice/color-choice";
import { PlayerChoicesStyled } from "./player-choices-style";

export type PlayerChoicesProps = {
  currentPlayer: Players;
  onChoice: (player: Players) => void;
};

export const PlayerChoices: React.FC<PlayerChoicesProps> = ({
  currentPlayer,
  onChoice,
}) => {
  const allPlayers: [string, Players][] = Object.entries(Players);
  return (
    <PlayerChoicesStyled>
      {allPlayers.map(([key, value]) => (
        <ColorChoice
          key={key}
          color={value}
          selectedColor={currentPlayer === value}
          onClick={() => onChoice(value)}
        />
      ))}
    </PlayerChoicesStyled>
  );
};
