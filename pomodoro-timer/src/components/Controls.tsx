import { FC } from "react";
import pause from "/pause.svg";
import play from "/play.svg";
import restart from "/restart.svg";

interface ControlsProps {
  isTimer: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
}

const Controls: FC<ControlsProps> = ({ isTimer, startTimer, stopTimer, resetTimer }) => {
  return (
    <div className="Controls">
      {isTimer ? (
        <button onClick={stopTimer}>
          <img src={pause} alt="Pause" />
        </button>
      ) : (
        <button onClick={startTimer}>
          <img src={play} alt="Play" />
        </button>
      )}
      <button onClick={resetTimer}>
        <img src={restart} alt="Restart" />
      </button>
    </div>
  );
};

export default Controls;
