import { FC } from "react";
import next from "../assets/icons/next.svg";
import pause from "../assets/icons/pause.svg";
import play from "../assets/icons/play.svg";
import prev from "../assets/icons/prev.svg";
import stop from "../assets/icons/stop.svg";

interface ControlsProps {
  isPlaying: boolean;
  audio: HTMLAudioElement;
  trackTime: number;
  playTrack: () => void;
  pauseTrack: () => void;
  stopTrack: () => void;
  toNextTrack: () => void;
  toPrevTrack: () => void;
  moveTrack: (time: number) => void;
  moveTrackEnd: () => void;
}

const Controls: FC<ControlsProps> = ({
  isPlaying,
  audio,
  trackTime,
  playTrack,
  pauseTrack,
  stopTrack,
  toNextTrack,
  toPrevTrack,
  moveTrack,
  moveTrackEnd,
}) => {
  return (
    <div className="Controls">
      <input
        className="Controls_Slider"
        type="range"
        min={0}
        step={1}
        max={audio.duration ? audio.duration : 0}
        value={trackTime}
        onChange={(e) => moveTrack(parseInt(e.target.value))}
        onKeyUp={moveTrackEnd}
        onMouseUp={moveTrackEnd}
      />
      <div className="Controls_Btns">
        <button onClick={toPrevTrack}>
          <img src={prev} alt="To Previous Track" />
        </button>
        {isPlaying ? (
          <button onClick={pauseTrack}>
            <img src={pause} alt="Pause Track" />
          </button>
        ) : (
          <button onClick={playTrack}>
            <img src={play} alt="Play Track" />
          </button>
        )}
        <button onClick={stopTrack}>
          <img src={stop} alt="Stop Track" />
        </button>
        <button onClick={toNextTrack}>
          <img src={next} alt="To Next Track" />
        </button>
      </div>
    </div>
  );
};

export default Controls;
