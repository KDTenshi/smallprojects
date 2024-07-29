import { Track } from "./types";

import pres from "./assets/tracks/2tech-audio-presentation.mp3";
import eglair from "./assets/tracks/alex-productions-cinematic-epic-emotional-eglair.mp3";
import pepper from "./assets/tracks/alex-productions-hot-pepper.mp3";
import rise from "./assets/tracks/corporate-music-zone-rise.mp3";
import dawn from "./assets/tracks/ethereal88-rising-dawn.mp3";
import motiv from "./assets/tracks/mixaund-motivate-me.mp3";

import pres_cover from "./assets/covers/2tech-audio-presentation.jpg";
import eglair_cover from "./assets/covers/alex-productions-cinematic-epic-emotional-eglair.jpg";
import pepper_cover from "./assets/covers/alex-productions-hot-pepper.jpg";
import rise_cover from "./assets/covers/corporate-music-zone-rise.jpg";
import dawn_cover from "./assets/covers/ethereal88-rising-dawn.jpg";
import motiv_cover from "./assets/covers/mixaund-motivate-me.jpg";

export const tracks: Track[] = [
  {
    author: "2Tech Audio",
    title: "Presentation",
    trackSrc: pres,
    coverSrc: pres_cover,
  },
  {
    author: "Alex Productions",
    title: "Cinematic Epic Emotional Eglair",
    trackSrc: eglair,
    coverSrc: eglair_cover,
  },
  {
    author: "Alex Productions",
    title: "Hot Pepper",
    trackSrc: pepper,
    coverSrc: pepper_cover,
  },
  {
    author: "Corporate Music Zone",
    title: "Rise",
    trackSrc: rise,
    coverSrc: rise_cover,
  },
  {
    author: "Ethereal88",
    title: "Rising Dawn",
    trackSrc: dawn,
    coverSrc: dawn_cover,
  },
  {
    author: "Mixaund",
    title: "Motivate Me",
    trackSrc: motiv,
    coverSrc: motiv_cover,
  },
];
