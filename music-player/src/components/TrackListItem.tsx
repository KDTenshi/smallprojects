import { FC } from "react";
import { Track } from "../types";

interface TrackListItemProps {
  track: Track;
  id: number;
  switchTrack: (id: number) => void;
}

const TrackListItem: FC<TrackListItemProps> = ({ track, switchTrack, id }) => {
  return (
    <div className="TrackList_Item" onClick={() => switchTrack(id)}>
      <img src={track.coverSrc} alt={`${track.author} - ${track.title}`} className="TrackList_Item_Cover" />
      <h2 className="TrackList_Item_Title">
        {track.author} - {track.title}
      </h2>
    </div>
  );
};

export default TrackListItem;
