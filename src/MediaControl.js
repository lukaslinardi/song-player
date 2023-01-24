import React, { useContext, useEffect } from "react";

import { SongContext } from "./SongProvider";

const MediaControl = () => {
  const { audioRef, setPlayMedia, durationValue, setDurationValue } =
    useContext(SongContext);

  useEffect(() => {
    audioRef.current.onended = () => {
      setPlayMedia(false);
      audioRef.current.currentTime = 0;
      audioRef.setDurationValue(0);
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
  }, [audioRef.current.currentTime, audioRef.durationValue]);

  return (
    <div>
      <input
        type="range"
        class="mt-[10px] w-full bg-blue-500"
        max={audioRef.current.duration.toString()}
        value={durationValue}
        onChange={(e) => (audioRef.current.currentTime = e.target.value)}
      />
    </div>
  );
};

export default MediaControl;
