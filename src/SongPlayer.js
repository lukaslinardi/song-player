import React, { useState, useCallback, useRef, useEffect } from "react";

import momma from "./assets/andrew1.png";
import magic from "./assets/andrew2.jfif";
import salted from "./assets/andrew3.jpg";

import momma_song from "./assets/momma.mp3";
import magic_song from "./assets/magic.mp3";
import salted_song from "./assets/salted.mp3";

import {
  FastForward as FastForwardIcon,
  FastRewind as FastRewindIcon,
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon,
} from "@mui/icons-material";

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
];

const SongPlayer = () => {
  const [playMedia, setPlayMedia] = useState(false);
  const [index, setIndex] = useState(0);
  const [volumeValue, setVolumeValue] = useState(30);

  const mediaPlayer = medias.map((media) => media);
  const audioRef = useRef(new Audio(mediaPlayer[index].song));

  const previousMedia = useCallback(() => {
    if (index === 0) return;
    else if (index !== 0) {
      setIndex((previousIndex) => previousIndex - 1);
      setPlayMedia(false);
    }
  }, [index]);

  const nextMedia = useCallback(() => {
    if (index === medias.length - 1) return;
    else if (index <= medias.length - 1) {
      setIndex((previousIndex) => previousIndex + 1);
      setPlayMedia(false);
    }
  }, [index]);

  const play = useCallback(() => {
    setPlayMedia(true);
    audioRef.current.play();
  }, [playMedia]);

  const pause = useCallback(() => {
    setPlayMedia(false);
    audioRef.current.pause();
  }, [playMedia]);

  useEffect(() => {
    audioRef.current.src = mediaPlayer[index].song;
  }, [index]);

  useEffect(() => {
    audioRef.current.volume = volumeValue / 100;
  }, [volumeValue]);

  return (
    <div class="flex justify-center items-center">
      <div class="bg-[#93B4A8] p-3 mx-auto rounded-lg mt-[10px] flex items-center justify-center max-w-md space-x-4 border-double border-sky-500 border-2">
        <img src={mediaPlayer[index].cover} class="h-1/2 w-1/2 rounded-lg" />
        <div class="ml-[20px] flex flex-col items-center w-2/4 text-center max-w-prose font-custom text-xl">
          <div>
            <p>{mediaPlayer[index].artist}</p>
            <p>{mediaPlayer[index].title}</p>
          </div>
          <div
            class="flex justify-center flex-row mt-[50px] bg-[#001E3C] p-2 rounded-lg"
            style={{ color: "#ffffff" }}
          >
            <button onClick={previousMedia}>
              <FastRewindIcon />
            </button>
            <button onClick={playMedia ? pause : play}>
              {playMedia ? <PauseIcon /> : <PlayArrowIcon />}
            </button>
            <button onClick={nextMedia}>
              <FastForwardIcon />
            </button>
          </div>
          <input
            type="range"
            class="mt-[10px]"
            value={volumeValue}
            onChange={(e) => setVolumeValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
