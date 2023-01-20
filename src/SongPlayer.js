import React, { useState, useCallback, useRef, useEffect } from "react";

import momma from "./assets/andrew1.png";
import magic from "./assets/andrew2.jfif";
import salted from "./assets/andrew3.jpg";
import tove from "./assets/tove.jfif";

import momma_song from "./assets/momma.mp3";
import magic_song from "./assets/magic.mp3";
import salted_song from "./assets/salted.mp3";
import Talking_Body from "./assets/Talking_Body.mp3";

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
  {
    id: 4,
    cover: tove,
    artist: "Tove Lo",
    title: "Talking Body",
    song: Talking_Body,
  },
];

const SongPlayer = () => {
  const [playMedia, setPlayMedia] = useState(false);
  const [index, setIndex] = useState(0);
  const [volumeValue, setVolumeValue] = useState(30);
  const [durationValue, setDurationValue] = useState(0);

  const mediaPlayer = medias.map((media) => media);
  const audioRef = useRef(new Audio(mediaPlayer[index].song));

  const previousMedia = useCallback(() => {
    if (index === 0) return;
    else if (index !== 0) {
      setIndex((previousIndex) => previousIndex - 1);
      setPlayMedia(false);
      audioRef.current.currentTime = 0;
    }
  }, [index]);

  const nextMedia = useCallback(() => {
    if (index === medias.length - 1) return;
    else if (index <= medias.length - 1) {
      setIndex((previousIndex) => previousIndex + 1);
      setPlayMedia(false);
      audioRef.current.currentTime = 0;
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

  useEffect(() => {
    audioRef.current.addEventListener(
      "timeupdate",
      (_) => {
        setDurationValue(audioRef.current.currentTime);
      },
      false
    );
  }, [audioRef.current.currentTime, durationValue]);

  useEffect(() => {
    audioRef.current.onended = () => {
      setPlayMedia(false);
      audioRef.current.currentTime = 0;
      setDurationValue(0);
    };
  }, [audioRef.current.onended]);

  return (
    <div class="bg-[#93B4A8] p-3 rounded-lg mt-[10px] mb-[10px] mx-auto flex items-center justify-center max-w-md space-x-4 border-double border-sky-500 border-2">
      <img src={mediaPlayer[index].cover} class="h-[100%] w-1/2 rounded-lg" />
      <div class="ml-[20px] flex flex-col items-center w-full text-center max-w-md font-custom text-xl min-w-min min-h-min">
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
          class="mt-[10px] w-full"
          value={volumeValue}
          onChange={(e) => setVolumeValue(e.target.value)}
        />
        <input
          type="range"
          class="mt-[10px] w-full bg-blue-500"
          max={audioRef.current.duration.toString()}
          value={durationValue}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
        />
      </div>
    </div>
  );
};

export default SongPlayer;
