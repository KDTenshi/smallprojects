import { FC } from "react";
import { Track } from "../types";

interface TrackDisplayProps {
  track: Track;
}

const TrackDisplay: FC<TrackDisplayProps> = ({ track }) => {
  return (
    <div className="TrackDisplay">
      <img src={track.coverSrc} alt={`${track.author} - ${track.title}`} className="TrackDisplay_Cover" />
      <div className="TrackDisplay_Info">
        <h2 className="TrackDisplay_Title">{track.title}</h2>
        <h2 className="TrackDisplay_Author">{track.author}</h2>
      </div>
    </div>
  );
};

export default TrackDisplay;
