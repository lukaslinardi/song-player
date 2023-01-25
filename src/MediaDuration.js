import React, { useContext, useEffect } from "react";

import { SongContext } from "./SongProvider";

const MediaDuration = () => {
  const { audioRef, setPlayMedia, durationValue, setDurationValue } =
    useContext(SongContext);

  const songTime = new Date(Math.ceil(audioRef.current.currentTime) * 1000);

  const minutes = songTime.getUTCMinutes().toString().padStart(2, "0");
  const seconds = songTime.getSeconds().toString().padStart(2, "0");

  useEffect(() => {
    audioRef.current.onended = () => {
      setPlayMedia(false);
      audioRef.current.currentTime = 0;
      setDurationValue(0);
    };
  }, [audioRef.current.onended]);

  useEffect(() => {
    audioRef.current.addEventListener(
      "timeupdate",
      (_) => {
        setDurationValue(audioRef.current.currentTime);
      },
      false
    );
  }, [audioRef.current.currentTime, durationValue]);

  return (
    <div class="w-full flex justify-center items-center flex-col">
      <input
        type="range"
        class="mt-[10px] w-[80%] h-1"
        max={audioRef.current.duration.toString()}
        value={durationValue}
        onChange={(e) => (audioRef.current.currentTime = e.target.value)}
      />
      <p class="font-semibold mt-[10px]">
        {minutes} : {seconds}
      </p>
    </div>
  );
};

export default MediaDuration;
