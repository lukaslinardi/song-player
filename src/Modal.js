import React, { useContext } from "react";
import { SongContext } from "./SongProvider";
import { Close as CloseIcon } from "@mui/icons-material";
import Table from "./Table";

const Modal = () => {
  const { openModal, setOpenModal, setPlayMedia, audioRef, index } =
    useContext(SongContext);

  return (
    <>
      <div class="flex justify-center">
        <button
          class="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 px-7 py-1 rounded font-semibold text-lg mt-[10px]"
          onClick={() => setOpenModal(true)}
        >
          Music List
        </button>
      </div>
      {openModal ? (
        <>
          <div class="fixed inset-0 overflow-y-auto flex items-center">
            <div
              class="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setOpenModal(false)}
            ></div>
            <div class="relative bg-white rounded-xl shadow-lg space-x-4 p-5 mx-auto my-auto">
              <div class="flex justify-center flex-col">
                <div class="text-xl font-medium font-bold flex items-center justify-between">
                  <p>Music List</p>
                  <button onClick={() => setOpenModal(false)}>
                    <CloseIcon /> 
                  </button>
                </div>
                <Table />
                <div class="flex justify-center">
                  <button
                    class="text-lg text-center text-white bg-green-700 rounded px-7 py-1 font-semibold shadow-lg mt-[20px]"
                    onClick={() => {
                      audioRef.current.play();
                      setPlayMedia(true);
                      setOpenModal(false);
                    }}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
