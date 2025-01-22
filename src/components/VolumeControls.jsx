// VolumeControl.js
import React from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid';

const VolumeControl = () => {
  return (
    <div className="w-[300px] flex items-center gap-2">
      <SpeakerWaveIcon className="w-6 h-6 text-black" />
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        className="volume-slider w-full h-2 rounded-full appearance-none cursor-pointer"
      />
      <style jsx>{`
        .volume-slider {
          background: linear-gradient(to right, #FF66B2 50%, #FFCCEB 50%);
        }
        .volume-slider::-webkit-slider-thumb {
          width: 18px;
          height: 18px;
          background-color: #FF66B2;
          border-radius: 50%;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
        }
        .volume-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background-color: #FF66B2;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default VolumeControl;
