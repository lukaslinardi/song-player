import React, { useState, useEffect, useContext } from "react";

import { SongContext } from "./SongProvider";

const SongPlayer = () => {
  const { mediaPlayer, audioRef, index } = useContext(SongContext);

  const [volumeValue, setVolumeValue] = useState(30);

  useEffect(() => {
    audioRef.current.src = mediaPlayer[index].song;
  }, [index]);

  useEffect(() => {
    audioRef.current.volume = volumeValue / 100;
  }, [volumeValue]);

  return (
    <div class="bg-slate-700 p-3 rounded-lg mt-[10px] mb-[10px] mx-auto flex items-center justify-center max-w-md space-x-4 border-double border-sky-700 border-2">
      <img src={mediaPlayer[index].cover} class="h-[100%] w-1/2 rounded-lg" />
      <div class="ml-[20px] flex flex-col items-center w-full text-center max-w-md font-custom text-xl min-w-min min-h-min">
        <div class="text-white">
          <p>{mediaPlayer[index].artist}</p>
          <p>{mediaPlayer[index].title}</p>
        </div>
        <input
          type="range"
          class="mt-[10px] w-full"
          value={volumeValue}
          onChange={(e) => setVolumeValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SongPlayer;
