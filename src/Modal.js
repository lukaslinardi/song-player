import React, { useState } from "react";

import noice from "./assets/noice.png";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div class="flex justify-center">
        <button
          class="animate-pulse bg-gradient-to-r from-red-500 via-green-500 to-blue-500 px-7 py-1 rounded font-semibold text-lg mt-[10px]"
          onClick={() => setOpen(true)}
        >
          Click me 4 surprise
        </button>
      </div>
      {open ? (
        <div class="fixed inset-0 overflow-y-auto flex items-center">
          <div
            class="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setOpen(false)}
          ></div>
          <div class="relative bg-white rounded-xl shadow-lg space-x-4 p-5 mx-auto my-auto">
            <div class="flex justify-center flex-col">
              <div class="text-xl font-medium font-bold">This is Noice!</div>
              <img
                src={noice}
                class="w-[300px] h-[200px] mt-[10px]"
                alt="it's a kermit what fucking else?"
              />
              <div class="flex justify-center">
                <button
                  class="text-lg text-center text-white bg-green-700 rounded px-7 py-1 font-semibold shadow-lg mt-[20px]"
                  onClick={() => setOpen(false)}
                >
                  Yes
                </button>
                <button
                  class="text-lg text-center text-white bg-red-700 rounded px-7 py-1 font-semibold shadow-lg mt-[20px] ml-[10px]"
                  onClick={() => setOpen(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
