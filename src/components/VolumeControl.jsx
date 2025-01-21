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
        className="w-full h-2 bg-lightPink rounded-full appearance-none cursor-pointer"
        style={{
          background: 'linear-gradient(to right, #FF66B2 50%, #FFCCEB 50%)', // Adjust gradient colors
        }}
      />
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          width: 18px;
          height: 18px;
          background-color: #FF66B2; /* fuchsia */
          border-radius: 50%;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
        }
        input[type='range']::-moz-range-thumb {
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
