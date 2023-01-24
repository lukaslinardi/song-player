import React, { createContext, useRef, useState } from "react";

import momma from "./assets/andrew1.png";
import magic from "./assets/andrew2.jfif";
import salted from "./assets/andrew3.jpg";
import tove from "./assets/tove.jfif";

import momma_song from "./assets/momma.mp3";
import magic_song from "./assets/magic.mp3";
import salted_song from "./assets/salted.mp3";
import Talking_Body from "./assets/Talking_Body.mp3";

const medias = [
  {
    id: 1,
    cover: momma,
    artist: "Andrew Applepie",
    title: "Momma I've got a feelin'(remix)",
    song: momma_song,
  },
  {
    id: 2,
    cover: magic,
    artist: "Andrew Applepie",
    title: "Magic Lamp",
    song: magic_song,
  },
  {
    id: 3,
    cover: salted,
    artist: "Andrew Applepie",
    title: "Salted Caramel",
    song: salted_song,
  },
  {
    id: 4,
    cover: tove,
    artist: "Tove Lo",
    title: "Talking Body",
    song: Talking_Body,
  },
];

const mediaPlayer = medias.map((media) => media);

export const SongContext = createContext();

const SongProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [durationValue, setDurationValue] = useState(0);
  const [playMedia, setPlayMedia] = useState(false);
  const audioRef = useRef(new Audio(mediaPlayer[index].song));
  return (
      <SongContext.Provider
        value={{
          mediaPlayer,
          audioRef,
          index,
          setIndex,
          durationValue,
          setDurationValue,
          medias,
          playMedia,
          setPlayMedia,
        }}
      >
        {children}
      </SongContext.Provider>
  );
};

export default SongProvider;
