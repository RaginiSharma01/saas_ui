import React from "react";

const HomeButton = () => {
  return (
    <div className="flex justify-center mt-2">
      <div className="flex gap-4">
        
        <button
          className="
            h-[33px]
            px-6
            border
            border-white/40
            text-white
            text-sm
            rounded-md
            hover:bg-white/10
            transition
          "
        >
          FREE TRIAL
        </button>

       
        <button
          className="
            h-[33px]
            px-6
            bg-violet-600
            text-white
            text-sm
            rounded-md
            hover:bg-violet-500
            transition
          "
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default HomeButton;
