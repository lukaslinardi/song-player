import React, { useState, useCallback } from "react";

import "./App.css";
import SongPlayer from "./SongPlayer";

import kermit2 from "./assets/kermit2.jpg";
import doge from "./assets/doge.jpg";
import kermit from "./assets/kermit.jpg";

import SongProvider from "./SongProvider";
import MediaDuration from "./MediaDuration";

const background = [doge, kermit2, kermit];

function App() {
  const [index, setIndex] = useState(0);

  const handleChangeBackground = useCallback(() => {
    if (index >= background.length - 1) setIndex(0);
    else setIndex((previousIndex) => previousIndex + 1);
  }, [index]);

  return (
    <SongProvider>
      <div
        class="bg-no-repeat bg-cover w-screen h-screen overflow-y-auto flex justify-center items-center flex-col"
        style={{ backgroundImage: `url(${background[index]})` }}
      >
        <button
          onClick={handleChangeBackground}
          class="p-3 bg-white w-[15%] h-[5%] flex items-center justify-center rounded mb-[10px]"
        >
          Change Background
        </button>
        <div class="bg-slate-500 p-4 rounded ">
          <SongPlayer />
          <MediaDuration />
        </div>
      </div>
    </SongProvider>
  );
}

export default App;
