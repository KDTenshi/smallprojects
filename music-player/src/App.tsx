import { FC, useEffect, useRef, useState } from "react";
import "./assets/styles/App.css";
import { tracks } from "./tracks";
import TrackList from "./components/TrackList";
import Player from "./components/Player";

const App: FC = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackTime, setTrackTime] = useState(0);

  const track = tracks[trackIndex];

  const audio = useRef(new Audio(track.trackSrc));
  const timer = useRef(0);
  const isReady = useRef(false);
  const userSwitch = useRef(false);

  useEffect(() => {
    audio.current = new Audio(tracks[trackIndex].trackSrc);

    if (userSwitch.current && isReady.current) {
      autoPlay();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  const stopTimer = () => {
    clearInterval(timer.current);
    setTrackTime(0);
  };

  const startTimer = () => {
    stopTimer();

    timer.current = setInterval(() => {
      if (audio.current.ended) {
        toNextTrack();
      } else {
        setTrackTime(audio.current.currentTime);
      }
    }, 1000);
  };

  const toNextTrack = () => {
    stopTrack();

    if (trackIndex + 1 === tracks.length) {
      setTrackIndex(0);
    } else {
      setTrackIndex(trackIndex + 1);
    }

    userSwitch.current = true;
  };

  const toPrevTrack = () => {
    stopTrack();

    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }

    userSwitch.current = true;
  };

  const switchTrack = (id: number) => {
    stopTrack();

    setTrackIndex(id);

    userSwitch.current = true;
  };

  const playTrack = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audio.current.play();
      startTimer();
    }
  };

  const pauseTrack = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audio.current.pause();
    }
  };

  const stopTrack = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audio.current.pause();
      stopTimer();
    }

    audio.current.currentTime = 0;
  };

  const autoPlay = () => {
    setIsPlaying(true);
    audio.current.play();
    startTimer();
  };

  const moveTrack = (time: number) => {
    stopTimer();
    audio.current.currentTime = time;
    setTrackTime(audio.current.currentTime);
  };

  const moveTrackEnd = () => {
    if (!isPlaying) {
      playTrack();
    }

    startTimer();
  };

  return (
    <main className="App">
      <TrackList tracks={tracks} switchTrack={switchTrack} />
      <Player
        track={track}
        isPlaying={isPlaying}
        trackTime={trackTime}
        audio={audio.current}
        playTrack={playTrack}
        pauseTrack={pauseTrack}
        stopTrack={stopTrack}
        toNextTrack={toNextTrack}
        toPrevTrack={toPrevTrack}
        moveTrack={moveTrack}
        moveTrackEnd={moveTrackEnd}
      />
    </main>
  );
};

export default App;
