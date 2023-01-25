import React, { useContext, useCallback } from "react";

import { SongContext } from "./SongProvider";

import {
  FastForward as FastForwardIcon,
  FastRewind as FastRewindIcon,
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon,
} from "@mui/icons-material";

const MediaControl = () => {
  const { setIndex, setPlayMedia, playMedia, index, audioRef, mediaPlayer } =
    useContext(SongContext);

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

  return (
    <div class="flex justify-center mt-[30px] p-2" style={{ color: "#000000" }}>
      <button
        onClick={previousMedia}
        class="bg-black p-1 rounded-full m-auto bg-slate-700 "
      >
        <FastRewindIcon />
      </button>
      <button
        onClick={playMedia ? pause : play}
        class="bg-black p-2 rounded-full m-auto bg-slate-700"
      >
        {playMedia ? (
          <PauseIcon fontSize="large" />
        ) : (
          <PlayArrowIcon fontSize="large" />
        )}
      </button>
      <button
        onClick={nextMedia}
        class="bg-black p-1 rounded-full m-auto bg-slate-700"
      >
        <FastForwardIcon />
      </button>
    </div>
  );
};

export default MediaControl;
