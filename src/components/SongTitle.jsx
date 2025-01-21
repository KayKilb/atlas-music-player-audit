import React from 'react';

const SongTitle = ({ title, artist }) => {
  return (
    <div className="flex flex-col items-start space-y-1">
      <h1 className="text-3xl font-bold text-black hover:text-fuchsia">{title}</h1>
      <p className="text-lg text-black hover:text-pink">{artist}</p>
    </div>
  );
};

export default SongTitle;
