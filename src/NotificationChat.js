import React, { useState } from "react";

import { Chat as ChatIcon } from "@mui/icons-material";

const NotificationChat = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle ? null : (
        <div class="p-6 max-w-sm mx-auto bg-lime-500 rounded-xl shadow-lg flex items-center space-x-4 mb-3">
          <div class="shrink-0">
            <ChatIcon size="large" />
          </div>
          <div>
            <div class="text-xl font-medium text-red-600">ChitChat</div>
            <p class="text-slate-500">You have a new message!</p>
          </div>
        </div>
      )}
      <div class="flex justify-center">
        <button
          class="bg-[#6a5acd] rounded-xl p-3 font-semibold hover:bg-[#7d5acd]"
          onClick={() => setToggle(!toggle)}
        >
          Click me!
        </button>
      </div>
    </>
  );
};

export default NotificationChat;
