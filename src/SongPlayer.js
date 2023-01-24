import React, { useState, useCallback, useEffect, useContext } from "react";

import {
  FastForward as FastForwardIcon,
  FastRewind as FastRewindIcon,
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon,
} from "@mui/icons-material";

import { SongContext } from "./SongProvider";

const SongPlayer = () => {
  const { mediaPlayer, audioRef, index, setIndex, playMedia, setPlayMedia } =
    useContext(SongContext);

  const [volumeValue, setVolumeValue] = useState(30);

  const previousMedia = useCallback(() => {
    if (index === 0) return;
    else if (index !== 0) {
      setIndex((previousIndex) => previousIndex - 1);
      setPlayMedia(false);
      audioRef.current.currentTime = 0;
    }
  }, [index]);

  const nextMedia = useCallback(() => {
    if (index === mediaPlayer.length - 1) return;
    else if (index <= mediaPlayer.length - 1) {
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
        {/* <input
          type="range"
          class="mt-[10px] w-full bg-blue-500"
          max={audioRef.current.duration.toString()}
          value={durationValue}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
        /> */}
      </div>
    </div>
  );
};

export default SongPlayer;
