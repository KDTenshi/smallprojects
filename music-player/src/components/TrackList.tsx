import { FC } from "react";
import { Track } from "../types";
import TrackListItem from "./TrackListItem";

interface TrackListProps {
  tracks: Track[];
  switchTrack: (id: number) => void;
}

const TrackList: FC<TrackListProps> = ({ tracks, switchTrack }) => {
  return (
    <div className="TrackList">
      {tracks.map((track, index) => (
        <TrackListItem track={track} key={track.coverSrc} id={index} switchTrack={switchTrack} />
      ))}
    </div>
  );
};

export default TrackList;
