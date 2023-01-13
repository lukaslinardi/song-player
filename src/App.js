import React, { useState } from "react";

import "./App.css";
import SongPlayer from "./SongPlayer";

import kermit2 from "./assets/kermit2.jpg";
import kermit from "./assets/kermit.jpg";

const background = [kermit2, kermit];

function App() {
  const [index, setIndex] = useState(0);

  const changeBackground = () => {
    if (background.length - 1 <= index) setIndex(0);
    else setIndex((previousIndex) => previousIndex + 1);
  };

  console.log("array size: ", background.length);
  console.log("index: ", index);

  return (
    <div
      class="justify-center bg-no-repeat bg-cover h-screen w-screen overflow-y-auto"
      style={{ backgroundImage: `url(${background[index]})` }}
    >
      <button class="p-2 bg-white rounded" onClick={changeBackground}>
        Change background
      </button>
      <SongPlayer />
    </div>
  );
}

export default App;
