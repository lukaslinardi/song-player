import React, { useContext } from "react";

import { SongContext } from "./SongProvider";

const Table = () => {
  const { mediaPlayer, setIndex, index } = useContext(SongContext);

  return (
    <div class="flex justify-center mt-3 rounded border">
      <table class="px-3 rounded-lg bg-white">
        <thead>
          <tr>
            <th class="border-b-2 px-20">Music</th>
            <th class="border-b-2 px-20">Artist</th>
          </tr>
        </thead>
        <tbody>
          {mediaPlayer.map((data) => (
            <tr
              key={data.id}
              class={`border-t text-center font-semibold ${
                index === data.id - 1 ? "bg-amber-500 " : "bg-white"
              }`}
            >
              <button
                class="w-full"
                onClick={() => setIndex(data.id - 1)}
                type="button"
              >
                <div class="flex justify-center items-center p-3">
                  <td>{data.title}</td>
                </div>
              </button>
              <td>{data.artist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
