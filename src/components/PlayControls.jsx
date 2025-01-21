import React from 'react';
import { PlayIcon, ForwardIcon, BackwardIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';

const PlayControls = () => {
  return (
    <div className="flex items-center justify-between w-full h-[63px] bg-lightPink p-4 rounded-lg">
      <button className="text-fuchsia hover:text-pink">
        1x
      </button>
      <button className="p-2 rounded-full bg-pink hover:bg-lightPink">
        <BackwardIcon className="h-5 w-5 text-black" />
      </button>
      <button className="p-3 rounded-full bg-fuchsia hover:bg-pink">
        <PlayIcon className="h-6 w-6 text-white" />
      </button>
      <button className="p-2 rounded-full bg-pink hover:bg-lightPink">
        <ForwardIcon className="h-5 w-5 text-black" />
      </button>
      <button className="p-2 rounded-full bg-pink hover:bg-lightPink">
        <ArrowPathRoundedSquareIcon className="h-5 w-5 text-black" />
      </button>
    </div>
  );
};

export default PlayControls;
