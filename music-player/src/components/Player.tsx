import { FC } from "react";
import { Track } from "../types";
import TrackDisplay from "./TrackDisplay";
import Controls from "./Controls";

interface PlayerProps {
  track: Track;
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

const Player: FC<PlayerProps> = ({
  track,
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
    <div className="Player">
      <TrackDisplay track={track} />
      <Controls
        isPlaying={isPlaying}
        audio={audio}
        trackTime={trackTime}
        playTrack={playTrack}
        pauseTrack={pauseTrack}
        stopTrack={stopTrack}
        toNextTrack={toNextTrack}
        toPrevTrack={toPrevTrack}
        moveTrack={moveTrack}
        moveTrackEnd={moveTrackEnd}
      />
    </div>
  );
};

export default Player;
