import React, { useState, useEffect, useContext, useMemo } from "react";

import {
  VolumeDown as VolumeDownIcon,
  VolumeUp as VolumeUpIcon,
  VolumeOff as VolumeOffIcon,
} from "@mui/icons-material";

import { SongContext } from "./SongProvider";

const audioIconSize = "large";

const SongPlayer = () => {
  const { mediaPlayer, audioRef, index } = useContext(SongContext);

  const [volumeValue, setVolumeValue] = useState(30);
  const [toggleVolume, setToggleVolume] = useState(false);

  const volumeButton = useMemo(() => {
    if (volumeValue === 0) {
      return <VolumeOffIcon fontSize={audioIconSize} />;
    } else if (volumeValue > 0 && volumeValue < 50) {
      return <VolumeDownIcon fontSize={audioIconSize} />;
    } else if (volumeValue >= 50) {
      return <VolumeUpIcon fontSize={audioIconSize} />;
    }
  }, [volumeValue]);

  useEffect(() => {
    audioRef.current.src = mediaPlayer[index].song;
  }, [index]);

  useEffect(() => {
    audioRef.current.volume = volumeValue / 100;
  }, [volumeValue]);

  useEffect(() => {
    if (toggleVolume) setVolumeValue(0);
    else if (!toggleVolume) setVolumeValue(30);
  }, [toggleVolume]);

  return (
    <div class="bg-slate-700 p-3 rounded-lg mt-[10px] mb-[10px] mx-auto flex items-center justify-center max-w-md space-x-4 border-double border-sky-700 border-2">
      <img src={mediaPlayer[index].cover} class="h-[100%] w-1/2 rounded-lg" />
      <div class="ml-[20px] flex flex-col items-center w-full text-center max-w-md font-custom text-xl min-w-min min-h-min">
        <div class="text-white">
          <p>{mediaPlayer[index].artist}</p>
          <p>{mediaPlayer[index].title}</p>
        </div>
        <div class="flex">
          <input
            type="range"
            class="mt-[10px] w-full mb-[10px]"
            value={volumeValue}
            onChange={(e) => setVolumeValue(Number(e.target.value))}
          />
        </div>
        <button onClick={() => setToggleVolume(!toggleVolume)}>
          {volumeButton}
        </button>
      </div>
    </div>
  );
};

export default SongPlayer;
