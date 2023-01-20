import React, { useState } from "react";

import "./App.css";
import SongPlayer from "./SongPlayer";

import kermit2 from "./assets/kermit2.jpg";
import kermit from "./assets/kermit.jpg";
import doge from "./assets/doge.jpg";

const background = [kermit2, kermit, doge];

function App() {
  const [index, setIndex] = useState(0);

  const handleChangeBackground = () => {
    if (index === background.length - 1) setIndex(0);
    else setIndex((previousIndex) => previousIndex + 1);
  };

  return (
    <div
      class="bg-no-repeat bg-cover w-screen h-screen overflow-y-auto flex justify-center items-center flex-col"
      style={{ backgroundImage: `url(${background[index]})` }}
    >
      <button
        onClick={handleChangeBackground}
        class="p-3 bg-white w-[15%] h-[5%] flex items-center justify-center rounded"
      >
        Change Background
      </button>
      <SongPlayer />
    </div>
  );
}

export default App;
